import { Token } from '@lumino/coreutils';
import { JupyterFrontEnd, JupyterFrontEndPlugin, ILayoutRestorer } from '@jupyterlab/application';
import { MainAreaWidget, ICommandPalette, WidgetTracker } from '@jupyterlab/apputils';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { ILauncher } from '@jupyterlab/launcher';
import { IRunningSessionManagers } from '@jupyterlab/running';
import icon from '@datalayer/icons-react/data2/PartyPopperIconJupyterLab';
import { JupyterLabHotReloadWidget } from './widget';

import '../../style/index.css';

export type IJupyterLabHotReload = {};

export const IJupyterLabHotReload = new Token<IJupyterLabHotReload>(
  '@datalayer/jupyterlab-hot-reload:plugin'
);

/**
 * The command IDs used by the plugin.
 */
namespace CommandIDs {
  export const create = 'create-jupyterlab-hot-reload-widget';
}

/**
 * Initialization data for the @datalayer/jupyterlab-hot-reload extension.
 */
const plugin: JupyterFrontEndPlugin<IJupyterLabHotReload> = {
  id: '@datalayer/jupyterlab-hot-reload:plugin',
  autoStart: true,
  requires: [ICommandPalette, IRunningSessionManagers],
  optional: [ISettingRegistry, ILauncher, ILayoutRestorer],
  provides: IJupyterLabHotReload,
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    runningSessionManagers: IRunningSessionManagers,
    settingRegistry?: ISettingRegistry,
    launcher?: ILauncher,
    restorer?: ILayoutRestorer,
  ): IJupyterLabHotReload => {
    const { commands } = app;
    const command = CommandIDs.create;
    const tracker = new WidgetTracker<MainAreaWidget<JupyterLabHotReloadWidget>>({
      namespace: 'jupyterlab-hot-reload',
    });
    if (restorer) {
      void restorer.restore(tracker, {
        command,
        name: () => 'jupyterlab-hot-reload',
      });
    }
    commands.addCommand(command, {
      caption: 'Show Hot Reload',
      label: 'Hot Reload',
      icon,
      execute: () => {
        const content = new JupyterLabHotReloadWidget({ runningSessionManagers });
        const widget = new MainAreaWidget<JupyterLabHotReloadWidget>({ content });
        widget.title.label = 'Hot Reload';
        widget.title.icon = icon;
        app.shell.add(widget, 'main');
        tracker.add(widget);
      }
    });
    const category = 'Datalayer Examples';
    palette.addItem({ command, category });
    if (launcher) {
      launcher.add({
        command,
        category,
        rank: 1.1,
      });
    }
    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('@datalayer/jupyterlab-hot-reload settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for @datalayer/jupyterlab-hot-reload.', reason);
        });
    }
    return {};
  }
};

export default plugin;
