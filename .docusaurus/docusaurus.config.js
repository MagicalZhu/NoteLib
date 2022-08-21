/*
AUTOGENERATED - DON'T EDIT
Your edits in this file will be overwritten in the next build!
Modify the docusaurus.config.js file at your site's root instead.
*/
export default {
  "title": "花裤衩",
  "tagline": "知道的越多,不知道的也就越多",
  "url": "https://huakucha.com",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "MagicalZhu",
  "projectName": "XDocs",
  "presets": [
    [
      "classic",
      {
        "debug": true,
        "docs": {
          "path": "docs",
          "sidebarPath": "/Users/yoey/Desktop/XDocs/sidebars.js",
          "editUrl": "https://github.com/MagicalZhu/XDocs/tree/main",
          "showLastUpdateTime": false,
          "showLastUpdateAuthor": false,
          "remarkPlugins": [
            null
          ]
        },
        "theme": {
          "customCss": "/Users/yoey/Desktop/XDocs/src/css/custom.css"
        },
        "blog": {
          "path": "blog",
          "editUrl": "https://github.com/MagicalZhu/XDocs/tree/main",
          "postsPerPage": 5,
          "authorsMapPath": "author.yml",
          "showReadingTime": true
        },
        "pages": {
          "path": "src/pages",
          "include": [
            "**/*.{js,jsx,ts,tsx,md,mdx}"
          ]
        }
      }
    ]
  ],
  "customFields": {
    "home": "/",
    "sidebarHiddenWhenLoad": true
  },
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true
    },
    "hideableSidebar": true,
    "image": "img/fav.png",
    "announcementBar": {
      "id": "support_us",
      "content": "🌟欢迎来到花裤衩的博客🌟",
      "backgroundColor": "#fafbfc",
      "textColor": "#091E42",
      "isCloseable": true
    },
    "navbar": {
      "title": "花裤衩",
      "logo": {
        "alt": "花裤衩的博客",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "label": "🤖基础知识",
          "position": "left",
          "items": [
            {
              "label": "并发编程",
              "to": "docs/currency"
            },
            {
              "label": "计算机网络",
              "to": "docs/networrk-basic"
            },
            {
              "label": "Linux",
              "to": "docs/linuxCommand"
            },
            {
              "label": "数据结构与算法",
              "to": "docs/dataStructure"
            },
            {
              "label": "LeetCode",
              "to": "docs/leetCode"
            },
            {
              "label": "MySQL",
              "to": "docs/mysql"
            }
          ]
        },
        {
          "label": "👨‍💻后端框架",
          "position": "left",
          "items": [
            {
              "label": "Spring",
              "to": "docs/spring"
            },
            {
              "label": "SpringCloud",
              "to": "docs/springCloud"
            }
          ]
        },
        {
          "label": "🚀分布式系统",
          "position": "left",
          "items": [
            {
              "label": "理论与算法",
              "to": "docs/distribute"
            },
            {
              "label": "分布式基础技术",
              "to": "docs/basicTech"
            },
            {
              "label": "基础中间件",
              "to": "docs/basicMiddleware"
            },
            {
              "label": "定时任务",
              "to": "docs/job"
            },
            {
              "label": "缓存",
              "to": "docs/cache"
            },
            {
              "label": "搜索引擎",
              "to": "docs/searchEngine"
            },
            {
              "label": "消息队列",
              "to": "docs/messageQueue"
            },
            {
              "label": "数据库",
              "to": "docs/database"
            }
          ]
        },
        {
          "label": "👩‍💻前端技术",
          "position": "left",
          "items": [
            {
              "label": "Vue",
              "to": "docs/front/Vue"
            }
          ]
        },
        {
          "label": "👋其他",
          "position": "left",
          "items": [
            {
              "to": "/blog",
              "label": "博客"
            },
            {
              "to": "/website",
              "label": "网址导航"
            }
          ]
        },
        {
          "position": "right",
          "href": "/docs/source/devSource",
          "className": "header-share-link",
          "aria-label": "GitHub repository"
        },
        {
          "href": "https://github.com/MagicalZhu",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": "前端链接",
          "items": [
            {
              "label": "Vue",
              "href": "https://v3.cn.vuejs.org/"
            },
            {
              "label": "React",
              "href": "https://react.docschina.org/"
            },
            {
              "label": "TypeScript",
              "href": "http://ts.xcatliu.com/"
            },
            {
              "label": "MDN",
              "href": "https://developer.mozilla.org/zh-CN/docs/Web"
            }
          ]
        },
        {
          "title": "后端链接",
          "items": [
            {
              "label": "Spring",
              "href": "https://spring.io/"
            },
            {
              "label": "Docker",
              "href": "https://docs.docker.com/get-started/"
            },
            {
              "label": "Kubernetes",
              "href": "https://kubernetes.io/zh/docs/home/"
            },
            {
              "label": "JVM",
              "href": "https://docs.oracle.com/javase/8/docs/technotes/tools/windows/index.html"
            }
          ]
        },
        {
          "title": "社区",
          "items": [
            {
              "label": "掘金",
              "href": "https://juejin.cn"
            },
            {
              "label": "InfoQ",
              "href": "https://www.infoq.cn/"
            },
            {
              "label": "Github",
              "href": "https://github.com/"
            }
          ]
        },
        {
          "title": "文档构建",
          "items": [
            {
              "label": "Docusaurus",
              "href": "https://www.docusaurus.cn/"
            },
            {
              "label": "Typora",
              "href": "https://typoraio.cn"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 huakucha. Built With Docusaurus.",
      "style": "light"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#403f53",
          "backgroundColor": "#FBFBFB"
        },
        "styles": [
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(162, 191, 252)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgba(239, 83, 80, 0.56)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "inserted",
              "attr-name"
            ],
            "style": {
              "color": "rgb(72, 118, 214)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(152, 159, 177)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "builtin",
              "char",
              "constant",
              "url"
            ],
            "style": {
              "color": "rgb(72, 118, 214)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(201, 103, 101)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(170, 9, 130)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "rgb(153, 76, 195)"
            }
          },
          {
            "types": [
              "function",
              "selector",
              "doctype"
            ],
            "style": {
              "color": "rgb(153, 76, 195)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(17, 17, 17)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(153, 76, 195)"
            }
          },
          {
            "types": [
              "operator",
              "property",
              "keyword",
              "namespace"
            ],
            "style": {
              "color": "rgb(12, 150, 155)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(188, 84, 84)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "defaultLanguage": "java",
      "additionalLanguages": [
        "java",
        "sql",
        "ini"
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 6
    },
    "algolia": {
      "appId": "4FYW54E03N",
      "apiKey": "bdbf6635d35dfa0c308bb91c8b85ea01",
      "indexName": "huakucha",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "imageZoom": {
      "selector": ".markdown img",
      "options": {
        "margin": 24,
        "background": "#BADA55",
        "scrollOffset": 0,
        "container": "#zoom-container",
        "template": "#zoom-template"
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "autoCollapseSidebarCategories": false
  },
  "staticDirectories": [
    "static"
  ],
  "titleDelimiter": "|",
  "plugins": [
    "plugin-image-zoom",
    null
  ],
  "stylesheets": [
    {
      "rel": "preconnect",
      "href": "https://fonts.gstatic.com",
      "type": "text/css"
    },
    {
      "href": "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      "type": "text/css",
      "rel": "stylesheet"
    }
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "noIndex": false
};