/// <reference types="webpack-env" />

import { createRoot } from 'react-dom/client';
import HotReloadJupyterLab from './HotReloadJupyterLab';

import "./../style/index.css";

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

if (module.hot) {
  module.hot.accept('./HotReloadJupyterLab', () => {
    const HotReloadJupyterLab = require('./HotReloadJupyterLab').default;
    root.render(<HotReloadJupyterLab/>);
  })
}

root.render(<HotReloadJupyterLab />);
