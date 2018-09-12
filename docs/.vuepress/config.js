const common = require('../common')

module.exports = {
  base: '/web/',
  title: 'Xavier\'s Web notes',
  description: 'Xavier\'s Web notes',
  themeConfig: {
    nav: [
      {text: 'Common', link: '/common/'},
      {text: 'Vue', link: '/vue/'},
      {text: 'React', link: '/react/'},
      {text: 'Node', link: '/node/'},
    ],
    sidebar: {
      '/common/':common()
    },
    lastUpdated: '最后更新时间',
    repo: 'xaviershi/web',
  },
  markdown:{
    lineNumbers: true
  }
}