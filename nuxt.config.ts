export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64x64.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon-128x128.png' },
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/favicon-256x256.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' },

        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  features: {
    inlineStyles: true,
  },

  i18n: {
    baseUrl: 'https://supermansamui.com',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', language: 'en-US', name: 'English', flag: '🇬🇧' },
      { code: 'th', language: 'th-TH', name: 'ไทย', flag: '🇹🇭' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', flag: '🇷🇺' },
    ],
    strategy: 'prefix_except_default',
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    // '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
  ],

  runtimeConfig: {
    TELEGRAM_CHAT_ID: '',
    TELEGRAM_BOT_TOKEN: '',

    SUPABASE_URL: '',
    SUPABASE_SERVICE_ROLE: '',

    LINE_CHANNEL_ACCESS_TOKEN: '',
    LINE_TO: '',

    public: {
      appName: 'Superman Samui',
      gtmId: '',
      gtmEnabled: false,

      supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
      },
    },
  },

  sitemap: {
    xsl: false,
    sitemapName: 'sitemap.xml',
    cacheMaxAgeSeconds: 86400,
  },

  ssr: true,

  // supabase: {
  //   redirect: false,
  //   serviceKey: process.env.SUPABASE_SERVICE_KEY,
  // },

  ui: {
    colorMode: false,
  },
});
