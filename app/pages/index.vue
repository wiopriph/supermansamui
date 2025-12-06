<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.desc'),
});
</script>

<i18n lang="json">
{
  "ru": {
    "seo": {
      "title": "Superman Samui - аренда спецтехники на Самуи",
      "desc": "Аренда экскаваторов, самосвалов, грузовиков и другой спецтехники на острове Самуи. Земляные работы, вывоз грунта, подготовка участков. Бесплатная консультация и оценка."
    }
  },
  "en": {
    "seo": {
      "title": "Superman Samui - heavy equipment rental on Koh Samui",
      "desc": "Excavators, dump trucks, trucks and other heavy equipment for earthworks on Koh Samui. Excavation, soil removal and site preparation. Free consultation and job estimate."
    }
  },
  "th": {
    "seo": {
      "title": "Superman Samui - บริการเช่าเครื่องจักรหนักบนเกาะสมุย",
      "desc": "บริการเช่าเครื่องจักรหนักบนเกาะสมุย รถขุด รถดั๊มพ์ รถบรรทุก และงานดินทุกประเภท ขุด ถม เคลียร์พื้นที่ ขนย้ายดิน พร้อมให้คำปรึกษาและประเมินงานฟรี"
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
