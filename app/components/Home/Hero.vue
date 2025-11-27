<script setup lang="ts">
import { CONTACT_PHONE } from '~/constants/contacts';


const { t } = useI18n();
// const localePath = useLocalePath();

const phoneLink = computed(() => `tel:${CONTACT_PHONE}`);

const links = computed(() => [
  {
    label: t('hero.primary'),
    icon: 'i-lucide-phone',
    color: 'primary',
    to: phoneLink,
  },
  // {
  //   label: t('hero.secondary'),
  //   icon: 'i-lucide-list-tree',
  //   variant: 'soft',
  //   to: localePath('/services'),
  // },
]);
</script>

<i18n lang="json">
{
  "ru": {
    "hero": {
      "h1": "Аренда спецтехники на Самуи",
      "lead": "Предоставляем экскаваторы разных размеров, самосвалы, грузовики и технику с краном для копки котлованов, расчистки участков, вывоза грунта, доставки материалов и любых земляных работ на острове Самуи. Работаем быстро, аккуратно и по честным ценам.",
      "primary": "Позвонить",
      "secondary": "Смотреть услуги"
    }
  },
  "en": {
    "hero": {
      "h1": "Heavy equipment rental on Koh Samui",
      "lead": "Mini and large excavators, dump trucks, crane trucks and loaders for excavation, land clearing, soil removal, material delivery and all types of earthworks on Koh Samui. Fast work, fair pricing and experienced local operators.",
      "primary": "Call now",
      "secondary": "View services"
    }
  },
  "th": {
    "hero": {
      "h1": "บริการเช่าเครื่องจักรหนักบนเกาะสมุย",
      "lead": "ให้บริการรถขุดหลายขนาด รถดั๊มพ์ รถบรรทุก และรถเครน สำหรับงานขุดดิน เคลียร์พื้นที่ ขนย้ายดิน ส่งวัสดุ และงานดินทุกประเภทบนเกาะสมุย ทำงานรวดเร็ว ราคาเป็นกันเอง พร้อมคนขับมีประสบการณ์",
      "primary": "โทรเลย",
      "secondary": "ดูบริการทั้งหมด"
    }
  }
}
</i18n>

<template>
  <UPageHero
    :title="t('hero.h1')"
    :description="t('hero.lead')"
    :links="links"
  />
</template>
