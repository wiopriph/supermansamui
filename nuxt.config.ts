export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
  },

  app: {
    head: {
      titleTemplate: '%s - Superman Samui',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-new.ico' },

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
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/ui',
  ],

  image: {
    // Static hosting: variants are prerendered into _ipx/ during generate.
    provider: 'ipx',
    quality: 75,
    format: ['webp'],
  },

  runtimeConfig: {
    public: {
      appName: 'Superman Samui',
      gtmId: '',
      gtmEnabled: false,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  sitemap: {
    xsl: false,
    cacheMaxAgeSeconds: 86400,
    sitemaps: true,
  },

  ssr: true,

  ui: {
    colorMode: false,
  },
});
