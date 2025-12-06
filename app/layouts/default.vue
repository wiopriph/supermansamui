<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_FACEBOOK,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
  SOCIALS_LINE,
  SOCIALS_TELEGRAM,
  SOCIALS_TIKTOK,
} from '~/constants/contacts';


const { locale } = useI18n();
const i18nHead = useLocaleHead();
const url = useRequestURL();

const metaOg = computed(() => [
  { key: 'og:type', property: 'og:type', content: 'website' },
  { key: 'og:site_name', property: 'og:site_name', content: 'Superman Samui' },

  { name: 'apple-mobile-web-app-title', content: 'Superman Samui' },
]);

const siteUrl = computed(() => `${url.protocol}//${url.host}`);

const phoneE164 = computed(() => {
  const digits = CONTACT_PHONE.replace(/\D/g, '');

  return digits.startsWith('0') ? `+66${digits.slice(1)}` : `+66${digits}`;
});

const sameAs = computed(() =>
  [
    SOCIALS_FACEBOOK,
    SOCIALS_LINE,
    SOCIALS_MESSENGER,
    SOCIALS_WHATSAPP,
    SOCIALS_TELEGRAM,
    SOCIALS_TIKTOK,
  ].filter(Boolean),
);

const jsonLdBase = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl.value}#website`,
      url: siteUrl.value,
      name: 'Superman Samui',
      inLanguage: locale.value,
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl.value}#business`,
      name: 'Superman Samui',
      url: siteUrl.value,
      image: `${siteUrl.value}/logo.png`,
      telephone: phoneE164.value,
      priceRange: '฿฿',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ko Samui',
        addressRegion: 'Surat Thani',
        addressCountry: 'TH',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ko Samui, Surat Thani, Thailand',
      },
      sameAs: sameAs.value,
    },
  ],
}));

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || []), ...metaOg.value],
  script: [
    {
      key: 'schema-org-base',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLdBase.value),
    },
  ],
}));
</script>

<template>
  <UApp>
    <AppHeader />

    <UMain>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UMain>

    <AppFooter />
  </UApp>
</template>
