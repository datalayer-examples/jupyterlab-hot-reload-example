# Copyright (c) Datalayer, Inc. https://datalayer.io
# Distributed under the terms of the MIT License.

FROM python:3.11

RUN mkdir /opt/jupyterlab-hot-reload

WORKDIR /opt/jupyterlab-hot-reload

RUN pip install kazoo

COPY jupyterlab_hot_reload /opt/jupyterlab_hot_reload
RUN pip install -e ./jupyterlab_hot_reload

# COPY frontplane/dist.html /opt/jupyterlab-hot-reload/index.html

WORKDIR /opt/jupyterlab-hot-reload/editor

EXPOSE 9300

CMD ["python", "-m", "jupyterlab_hot_reload"]
