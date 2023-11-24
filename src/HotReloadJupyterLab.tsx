import { Jupyter, JupyterLabApp, JupyterLabAppAdapter } from '@datalayer/jupyter-react';

import * as lightThemeExtension from '@jupyterlab/theme-light-extension';
import * as runningExtension from '@jupyterlab/running-extension';
import * as collaborationExtension from '@jupyter/collaboration-extension';
import * as datalayerRunningSessions from './jupyterlab/index';

const JupyterLabComponent = () => {
  const onJupyterLab = async (jupyterLabAdapter: JupyterLabAppAdapter) => {
    const jupyterLab = jupyterLabAdapter.jupyterLab;
    console.log('JupyterLab is ready', jupyterLab);
  }
  return (
    <JupyterLabApp
      extensions={[
        lightThemeExtension,
        collaborationExtension,
        runningExtension,
        datalayerRunningSessions,
      ]}
      mimeExtensions={[]}
      onJupyterLab={onJupyterLab}
      position="absolute"
      height="100vh"
    />
  )
}

export const RunningSessionsJupyterLab = () => (
  <Jupyter startDefaultKernel={false} disableCssLoading={true} collaborative={true}>
    <JupyterLabComponent/>
  </Jupyter>
)

export default RunningSessionsJupyterLab;
