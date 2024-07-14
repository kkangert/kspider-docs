import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Kspider',
    description: '在线可视化爬虫工具',
    lastUpdated: true,
    base: '/',
    lang: 'zh-CN',
    head: [
        [
            'script',
            {},
            `
                window._hmt = window._hmt || [];
                (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?5632192256b15c78a015f4f21ec9bc9b";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
                })();
            `
        ]
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        editLink: {
            text: '编辑此页',
            pattern: 'https://github.com/kkangert/kspider-docs/edit/main/kspider-docs/:path'
        },
        lastUpdated: {
            text: '更新时间',
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
                collapsed: true,
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
                collapsed: true,
                items: [
                    {
                        text: '介绍',
                        link: '/FunctionExtension/intro.md'
                    },
                    {
                        text: '抽取函数',
                        link: '/FunctionExtension/extra.md'
                    },
                    {
                        text: 'base64',
                        link: '/FunctionExtension/base64.md'
                    },
                    {
                        text: 'date',
                        link: '/FunctionExtension/date.md'
                    },
                    {
                        text: 'file',
                        link: '/FunctionExtension/file.md'
                    },
                    {
                        text: 'json',
                        link: '/FunctionExtension/json.md'
                    },
                    {
                        text: 'list',
                        link: '/FunctionExtension/list.md'
                    },
                    {
                        text: 'random',
                        link: '/FunctionExtension/random.md'
                    },
                    {
                        text: 'string',
                        link: '/FunctionExtension/string.md'
                    },
                    {
                        text: 'url',
                        link: '/FunctionExtension/url.md'
                    }
                ]
            },
            {
                text: '类型扩展',
                collapsed: true,
                items: [
                    {
                        text: '介绍',
                        link: '/TypeExtension/intro.md'
                    },
                    {
                        text: 'SpiderResponse',
                        link: '/TypeExtension/spiderResponse.md'
                    },
                    {
                        text: 'String',
                        link: '/TypeExtension/string.md'
                    },
                    {
                        text: 'Date',
                        link: '/TypeExtension/date.md'
                    },
                    {
                        text: 'Object',
                        link: '/TypeExtension/object.md'
                    },
                    {
                        text: 'List',
                        link: '/TypeExtension/list.md'
                    },
                    {
                        text: 'Map',
                        link: '/TypeExtension/map.md'
                    },
                    {
                        text: 'Element',
                        link: '/TypeExtension/element.md'
                    },
                    {
                        text: 'Elements',
                        link: '/TypeExtension/elements.md'
                    }
                ]
            },
            {
                text: '插件扩展',
                collapsed: true,
                items: [
                    {
                        text: '介绍',
                        link: '/PluggableExtension/intro.md'
                    }
                ]
            },
            {
                text: '实战案例',
                collapsed: true,
                items: []
            },
            {
                text: '常见问题',
                link: '/Faq/faq.md'
            }
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/kkangert/kspider' }],
        footer: {
            message: 'Kspider',
            copyright: `MIT | © ${new Date().getFullYear()} kangert.top All rights reserved.`
        }
    }
})
