import { ReactWidget } from '@jupyterlab/apputils';
import { IRunningSessionManagers } from '@jupyterlab/running';
import HotReloadComponent from '../HotReload';
import { HotReloadProps } from "../HotReload";

export class JupyterLabHotReloadWidget extends ReactWidget {
  private _runningSessionManagers: IRunningSessionManagers;
  constructor(props: HotReloadProps) {
    super();
    this._runningSessionManagers = props.runningSessionManagers;
    this.addClass('dla-Container');
  }

  render(): JSX.Element {
    return (
      <>
        <HotReloadComponent runningSessionManagers={this._runningSessionManagers}/>
      </>
    )
  }
}
