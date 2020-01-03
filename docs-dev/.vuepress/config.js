module.exports = {
  title: '邱志林的博客',
  description: '邱志林的博客',
  base: '/blog/',
  dest: 'docs',
  repo: 'https://github.com/jean1024/',
  nav: [
    { text: 'vue', link: '/' },
    { text: 'css', link: '/blog/' },
    { text: 'js', link: '/zhihu/' },],
  head: [
    ['link', { rel: 'icon', href: '/fav.ico' }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/guide',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'tech',   // 必要的
        path: '/tech',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/tech/express/cookie与session'
        ]
      },
    ]
  }
}