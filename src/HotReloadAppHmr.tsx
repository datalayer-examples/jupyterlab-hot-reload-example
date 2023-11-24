/// <reference types="webpack-env" />

import { createRoot } from 'react-dom/client';
import HotReloadJupyterLabHeadless from './HotReloadJupyterLabHeadless';

import "./../style/index.css";

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

if (module.hot) {
  module.hot.accept('./HotReloadJupyterLabHeadless', () => {
    const HotReloadJupyterLabHeadless = require('./HotReloadJupyterLabHeadless').default;
    root.render(<HotReloadJupyterLabHeadless/>);
  })
}

root.render(<HotReloadJupyterLabHeadless />);
