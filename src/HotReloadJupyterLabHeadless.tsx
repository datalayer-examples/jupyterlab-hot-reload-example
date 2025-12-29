import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Box, Label, Text, Link } from '@primer/react';
import { PageHeader } from '@primer/react';
import { GitPullRequestIcon } from '@primer/octicons-react';
import { IRunningSessionManagers } from '@jupyterlab/running';
import { Jupyter, JupyterLabApp } from '@datalayer/jupyter-react';
import HotReload from './HotReload';

import * as lightThemeExtension from '@jupyterlab/theme-light-extension';
import * as runningExtension from '@jupyterlab/running-extension';
import * as collaborationExtension from '@jupyter/collaboration-extension';
import * as datalayerRunningSessions from './jupyterlab/index';

const ThemeGlobalStyle = createGlobalStyle<any>`
  body {
    background-color: white !important;
    overflow: auto;
  }
`

const Header = () => (
  <PageHeader>
    <PageHeader.TitleArea>
      <PageHeader.LeadingVisual>
        <GitPullRequestIcon />
      </PageHeader.LeadingVisual>
      <PageHeader.Title>JupyterLab Hot Reload</PageHeader.Title>
      <PageHeader.TrailingVisual>
        <Label>Beta</Label>
      </PageHeader.TrailingVisual>
    </PageHeader.TitleArea>
    <PageHeader.Description>
      <Text sx={{fontSize: 1, color: 'fg.muted'}}>
        <Link href="#" muted sx={{fontWeight: 'bold'}}>
          echarles
        </Link>{' '}
        created this project ... days ago · ... commits · updated ...
      </Text>
    </PageHeader.Description>
  </PageHeader>
)

const JupyterLabHeadless = () => {
  const [plugin, setPlugin] = useState<IRunningSessionManagers>();
  const onPlugin = (plugin: IRunningSessionManagers) => {
    setPlugin(plugin);
  }
  return (
    <>
      <Box m={3}>
        <Header/>
      </Box>
      { plugin && <HotReload runningSessionManagers={plugin}/> }
      <JupyterLabApp
        plugins={[
          lightThemeExtension,
          runningExtension,
          collaborationExtension,
          datalayerRunningSessions,
        ]}
        headless={true}
        mimeRenderers={[]}
        pluginId="@jupyterlab/running-extension:plugin"
        PluginType={IRunningSessionManagers}
        onPlugin={onPlugin}
      />
    </>
  )
}

export const RunningSessionsJupyterLabHeadless = () => (
  <Jupyter startDefaultKernel={false} disableCssLoading={true} collaborative={true}>
    <ThemeGlobalStyle />
    <JupyterLabHeadless/>
  </Jupyter>
)

export default RunningSessionsJupyterLabHeadless;
