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
      {text: 'GitHub', link: 'https://github.com/XavierShi'}
    ],
    sidebar: {
      '/common/':[
        '',
        '1'
      ]
    }
  }
}