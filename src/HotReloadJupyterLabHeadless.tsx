import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Box, Label, Text, Link } from '@primer/react';
import { PageHeader } from '@primer/react/experimental';
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
      <PageHeader.Title>Title</PageHeader.Title>
      <PageHeader.TrailingVisual>
        <Label>Beta</Label>
      </PageHeader.TrailingVisual>
    </PageHeader.TitleArea>
    <PageHeader.Description>
      <Text sx={{fontSize: 1, color: 'fg.muted'}}>
        <Link href="#" muted sx={{fontWeight: 'bold'}}>
          echarles
        </Link>{' '}
        created this branch 4 days ago · 13 commits · updated today
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
        extensions={[
          lightThemeExtension,
          runningExtension,
          collaborationExtension,
          datalayerRunningSessions,
        ]}
        headless={true}
        mimeExtensions={[]}
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
