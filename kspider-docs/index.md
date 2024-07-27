---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: 'Kspider'
    text: '在线可视化爬虫\WEB自动化测试平台'
    tagline: 无需编写后端代码的爬虫\WEB自动化测试平台，可自定义函数、复杂脚本、定时任务，支持插件热插拔，自定义扩展，方便快捷的管理UI，效率翻倍，更多功能等你探索。
    actions:
        - theme: brand
          text: 快速开始
          link: /BasicCourse/intro.md
        - theme: alt
          text: 实战案例
          link: /Examples/intro.md
        - theme: alt
          text: 源码
          link: https://github.com/kkangert/kspider

features:
    - title: 无需编写后端代码
      details: 在线定制爬虫\WEB自动化测试规则
    - title: 插件丰富
      details: selenium等插件
    - title: 高度灵活
      details: 扩展方便，规则定制灵活
---

---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/61531911?v=4',
    name: 'kangert',
    title: 'Kspider作者',
    links: [
      { icon: 'github', link: 'https://github.com/kkangert' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/76479169?v=4',
    name: 'zhaozhaonihao',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/zhaozhaonihao' }
    ]
  }
]
</script>


# 团队介绍
<VPTeamMembers size="small" :members="members" />
