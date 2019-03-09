const pkg = require('./package')
const { cn, en } = require('./src/locales/index')

module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/font_719179_rmp9wa6m5l.css'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/css/base/_base.scss',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/doc-search.scss',
    '~/assets/css/common.scss'
  ],
  plugins: ['@/plugins/main', '@/plugins/element-ui'],
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'cn',
            iso: 'cn'
          },
          {
            code: 'en',
            iso: 'en'
          }
        ],
        defaultLocale: 'cn',
        strategy: 'prefix_except_default',
        vueI18n: {
          fallbackLocale: 'cn',
          silentTranslationWarn: true,
          messages: {
            cn,
            en
          }
        },
        seo: true,
        vueI18nLoader: true,
        vuex: {
          moduleName: 'i18n',
          mutations: {
            setLocale: 'I18N_SET_LOCALE',
            setMessages: 'I18N_SET_MESSAGES'
          }
        }
      }
    ]
  ],
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: ['@kazupon/vue-i18n-loader']
        })
      }
    }
  }
}
