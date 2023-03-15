const  {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const dockerPart = [
  {
    type: Type.DOC,
    id: "工具/Docker/docker",
    label: "简介"
  },
  {
    type: Type.CAT,
    label: "Docker CLI",
    items: [
      "工具/Docker/Reference/command-line/docker-cli/docker-build",
      "工具/Docker/Reference/command-line/daemon-cli"
    ],
    collapsed: true,
    link: {
      type: "generated-index",
      // description: 'description'
    }
  },
  {
    type: Type.CAT,
    label: "Docker入门",
    items: [
      "工具/Docker/Docker入门/Docker基础",
      "工具/Docker/Docker入门/Docker镜像命令",
      "工具/Docker/Docker入门/Docker容器命令",
      "工具/Docker/Docker入门/Docker数据持久化",
      "工具/Docker/Docker入门/DockerFile",
      "工具/Docker/Docker入门/Docker通用命令"
    ],
    collapsed: true,
    link: {
      type: "generated-index"
    }
  }
]



module.exports = dockerPart;