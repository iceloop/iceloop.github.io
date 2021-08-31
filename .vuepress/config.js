module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  "title": "牛浩然的博客",
  "description": "牛浩然的博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "归档",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "了解我们",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],


    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "知行合一",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "止于至善",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],

    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "牛浩然",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2020-2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}