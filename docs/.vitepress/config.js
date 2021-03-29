module.exports = {
  title: 'VeCharts',
  description: '📈 ECharts 5.x for Vue 2.x & Vue 3.x.',
  docsDir: 'docs',
  port: 4848,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Chart', link: '/chart/' },
      { text: 'GitHub', link: 'https://github.com/vueblocks/ve-charts' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          children: [
            { text: 'VeCharts', link: '/guide/' },
          ]
        },
        {
          text: '图表类型',
          collapsable: true,
          children: [
            { text: '柱状图', link: '/chart/bar' },
            { text: '折线图', link: '/chart/line' },
            { text: '饼图', link: '/chart/pie' },
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}
