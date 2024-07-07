import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Kspider',
    description: '在线可视化爬虫工具',
    lastUpdated: true,
    base: '/',
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: '首页', link: '/' }],

        sidebar: [
            {
                text: '快速开始',
                items: []
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
