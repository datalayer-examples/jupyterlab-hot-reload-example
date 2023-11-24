[![Datalayer](https://assets.datalayer.tech/datalayer-25.svg)](https://datalayer.io)

[![Become a Sponsor](https://img.shields.io/static/v1?label=Become%20a%20Sponsor&message=%E2%9D%A4&logo=GitHub&style=flat&color=1ABC9C)](https://github.com/sponsors/datalayer)

# 🪐 JupyterLab Hot Reload Example

> JupyterLab Hot Reload Example.

## Hot Reload with JupyterLab

```bash
yarn start
```

<div align="center" style="text-align: center">
  <img alt="JupyterLab Hot Reload" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-hot-reload.gif" />
</div>

## Hot Reload and HMR (Hot Module Replacement) with JupyterLab Headless

```bash
yarn start:hmr
```

<div align="center" style="text-align: center">
  <img alt="JupyterLab Hot Reload with HMR" src="https://datalayer-jupyter-examples.s3.amazonaws.com/jupyterlab-hot-reload-hmr.gif" />
</div>

## Develop

```bash
yarn && yarn build
pip install -e .[test]
jupyter labextension develop . --overwrite
jupyter labextension list
jupyter server extension list
yarn jupyterlab
```
