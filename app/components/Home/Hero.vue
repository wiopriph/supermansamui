<script setup lang="ts">
import { CONTACT_PHONE } from '~/constants/contacts';


const { t } = useI18n();

const links = computed(() => [
  {
    label: t('hero.primary'),
    icon: 'i-lucide-phone',
    color: 'primary',
    to: `tel:${CONTACT_PHONE}`,
  },
  // {
  //   label: t('hero.secondary'),
  //   icon: 'i-lucide-list-tree',
  //   variant: 'soft',
  //   to: `https://wa.me/${CONTACT_PHONE}`,
  //   target: '_blank',
  // },
]);
</script>

<i18n lang="json">
{
  "ru": {
    "hero": {
      "h1": "Аренда экскаваторов и грузовиков на Самуи",
      "lead": "Экскаваторы для копки фундаментов, траншей и подготовки участка. Самосвалы и грузовики для вывоза грунта, доставки материалов, перевозки грузов и переездов на Самуи. Быстрый выезд, опытные операторы и честные цены.",
      "primary": "Позвонить",
      "secondary": "Написать в WhatsApp"
    }
  },
  "en": {
    "hero": {
      "h1": "Excavator & Truck Rental on Koh Samui",
      "lead": "Excavators for foundation digging, trenching and land preparation. Dump trucks and transport vehicles for soil removal, material delivery, cargo transport and moving services across Koh Samui. Fast response, skilled operators and fair pricing.",
      "primary": "Call now",
      "secondary": "Message on WhatsApp"
    }
  },
  "th": {
    "hero": {
      "h1": "บริการเช่ารถขุดและรถบรรทุกบนเกาะสมุย",
      "lead": "รถขุดสำหรับงานพื้นฐาน ขุดฟุตติ้ง วางท่อ และเตรียมพื้นที่ พร้อมรถดั๊มพ์และรถบรรทุกสำหรับขนดิน ส่งวัสดุ ขนย้ายสิ่งของ และบริการย้ายบ้านบนเกาะสมุย ทำงานเร็ว ราคาเป็นกันเอง พร้อมคนขับมืออาชีพ",
      "primary": "โทรเลย",
      "secondary": "แชทผ่าน WhatsApp"
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
