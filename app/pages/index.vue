<script setup lang="ts">
const { t } = useI18n();

useHead(() => {
  const title = t('seo.title');
  const description = t('seo.desc');
  const image = 'https://supermansamui.com/logo.webp';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: t('seo.keywords') },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
  };
});
</script>

<i18n lang="json">
{
  "ru": {
    "seo": {
      "title": "Superman Samui - спецтехника и земляные работы на Самуи",
      "desc": "Аренда экскаваторов, самосвалов и грузовиков на Самуи. Земляные работы, планировка участка, вывоз грунта, подготовка под строительство. Быстрый выезд, честные цены, местные операторы.",
      "keywords": "спецтехника самуи, аренда экскаватора самуи, земляные работы самуи, вывоз грунта самуи, аренда самосвала самуи, excavation samui"
    }
  },
  "en": {
    "seo": {
      "title": "Superman Samui - heavy equipment & earthworks on Koh Samui",
      "desc": "Excavators, dump trucks and heavy machinery for earthworks on Koh Samui. Land clearing, grading, soil removal and full site preparation. Fast response, fair pricing, professional local operators.",
      "keywords": "excavator rental koh samui, earthworks samui, dump truck samui, land clearing samui, construction services samui"
    }
  },
  "th": {
    "seo": {
      "title": "Superman Samui - บริการงานดินและเครื่องจักรหนักบนเกาะสมุย",
      "desc": "เช่ารถขุด รถดั๊มพ์ รถบรรทุก และงานดินทุกประเภทบนเกาะสมุย เคลียร์พื้นที่ ปรับระดับ ขนดิน ถมที่ และเตรียมไซต์งานก่อสร้าง บริการรวดเร็ว ราคายุติธรรม คนขับมืออาชีพ",
      "keywords": "เช่ารถขุด สมุย, งานดิน สมุย, รถดั๊มพ์ สมุย, เคลียร์พื้นที่ สมุย, ปรับระดับ สมุย, บริการเครื่องจักรหนัก สมุย"
    }
  }
}
</i18n>

<template>
  <UPage>
    <HomeHero />

    <HomeServices />

    <HomePricing />

    <HomeBenefits />

    <CoreContacts />
  </UPage>
</template>
