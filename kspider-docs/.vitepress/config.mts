import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Kspider',
    description: '在线可视化爬虫工具',
    lastUpdated: true,
    base: '/',
    lang: 'zh-CN',
    themeConfig: {
        search: {
            provider: 'local'
        },
        editLink: {
          text: '在 GitHub 上编辑此页面',
          pattern: 'https://github.com/kkangert/kspider-docs/edit/main/kspider-docs/:path'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: '首页', link: '/' }],

        sidebar: [
            {
                text: '快速开始',
                items: [
                  {
                    text: '介绍',
                    link: '/BasicCourse/intro.md'
                  },
                  {
                    text: '部署',
                    link: '/BasicCourse/install.md'
                  },
                  {
                    text: '快速开始',
                    link: '/BasicCourse/quickstart.md'
                  },
                  {
                    text: '表达式语法',
                    link: '/BasicCourse/expression.md'
                  },
                  {
                    text: '内置变量',
                    link: '/BasicCourse/variable.md'
                  }
                ]
            },
            {
                text: '函数扩展',
                items: []
            },
            {
                text: '类型扩展',
                items: []
            },
            {
                text: '插件扩展',
                items: []
            }
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/kkangert/kspider' }],
        footer: {
            message: 'Kspider',
            copyright: `MIT | © ${new Date().getFullYear()} kangert.top All rights reserved.`
        }
    }
})
