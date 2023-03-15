const {
  Type
} = require('../../utils/dirUtil')

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */


const mysqlSideBar = [
  {
      type: Type.DOC,
      id: "Mysql/mysql",
      label: "简介"
  },
  {
      type: Type.CAT,
      label: "MySQL基础与高级",
      items: [
          {
              type: Type.CAT,
              label: "基础知识",
              items: [
                  "Mysql/基础/MySQL基础查询",
                  "Mysql/基础/MySQL函数与聚合",
                  "Mysql/基础/MySQL子查询",
                  "Mysql/基础/MySQL库对象"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "数据库管理",
              items: [
                  "Mysql/高级特性/MySQL 部署",
                  "Mysql/高级特性/用户权限管理"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "架构与引擎",
              items: [
                  "Mysql/高级特性/MySQL逻辑架构",
                  "Mysql/高级特性/缓冲池"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "存储结构与索引",
              items: [
                  "Mysql/高级特性/索引",
                  "Mysql/高级特性/索引的应用",
                  "Mysql/高级特性/设计索引",
                  "Mysql/高级特性/InnoDB数据页结构",
                  "Mysql/高级特性/InnoDB表空间"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "性能优化",
              items: [
                  {
                      type: Type.CAT,
                      label: "性能分析工具",
                      items: [
                          "Mysql/高级特性/基本分析工具",
                          "Mysql/高级特性/Explain"
                      ],
                      collapsed: true,
                      link: {
                          type: "generated-index"
                      }
                  },
                  "Mysql/高级特性/性能监控工具",
                  "Mysql/高级特性/索引与查询优化",
                  "Mysql/高级特性/数据库设计规范",
                  "Mysql/高级特性/数据库其他调优策略"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "事务与锁",
              items: [
                  "Mysql/高级特性/事务基础",
                  "Mysql/高级特性/Redo日志",
                  "Mysql/高级特性/Undo日志",
                  "Mysql/高级特性/锁",
                  "Mysql/高级特性/MVCC"
              ],
              collapsed: true,
              link: {
                  type: "generated-index"
              }
          },
          {
              type: Type.CAT,
              label: "运维",
              items: [
                  "Mysql/高级特性/其他日志",
                  "Mysql/高级特性/主从复制"
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
      type: Type.DOC,
      id: "Mysql/MySQL参数与命令",
      label: "MySQL参数与命令"
  }
]

module.exports = mysqlSideBar;