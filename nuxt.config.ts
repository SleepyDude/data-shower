export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  css: [
    'assets/styles/global.css',
    'assets/styles/katex.min.css',
  ],
  // app: {
  //   head: {
  //     style: [
  //       {
  //         children: ':where(.math-inline .katex-html, .math annotation, .math-display .katex-mathml) {display: none;}',
  //       }
  //     ]
  //   }
  // },
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math',
      ],
      rehypePlugins: [
        'rehype-katex',
        // 'rehype-mathjax',
      ]
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => [
        'semantics',
        'mrow',
        'mi',
        'mo',
        'mn',
        'path',
        'msub',
        'msubsup',
      ].includes(tag.toLowerCase())
    }
  }
})