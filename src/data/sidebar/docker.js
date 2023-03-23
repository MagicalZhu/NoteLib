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
    type: Type.CATEGORY,
    label: "Docker 手册",
    items: [
      {
        type: Type.CATEGORY,
        label: "构建",
        items: [
          "工具/Docker/Manuals/docker-build/build-cache"
        ],
        collapsed: true,
        link: {
          type: "generated-index"
        }
      }
    ],
    collapsed: true,
    link: {
      type: "generated-index"
    }
  },
  {
    type: Type.CATEGORY,
    label: "Docker 指南",
    items: [
      {
        type: Type.CATEGORY,
        label: "Docker Cli",
        items: [
          "工具/Docker/Reference/command-line/docker-cli/docker-build"
        ],
        collapsed: true,
        link: {
          type: "generated-index"
        }
      },
      "工具/Docker/Reference/command-line/daemon-cli"
    ],
    collapsed: true,
    link: {
      type: "generated-index"
    }
  },
  {
    type: Type.CATEGORY,
    label: "Docker入门",
    items: [
      "工具/Docker/Docker入门/Docker基础",
      "工具/Docker/Docker入门/Docker镜像命令",
      "工具/Docker/Docker入门/Docker容器命令",
      "工具/Docker/Docker入门/Docker数据持久化",
      "工具/Docker/Docker入门/Dockerfile",
      "工具/Docker/Docker入门/Docker工具",
      "工具/Docker/Docker入门/Docker通用命令"
    ],
    collapsed: true,
    link: {
      type: "generated-index"
    }
  }
]


module.exports = dockerPart;