<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
  SOCIALS_LINE,
} from '~/constants/contacts';


const links = computed(() => [
  {
    icon: 'i-lucide-phone',
    label: t('hero.primary'),
    to: `tel:${CONTACT_PHONE}`,
  },
  {
    icon: 'i-simple-icons-line',
    label: 'LINE',
    to: SOCIALS_LINE,
  },
  {
    icon: 'i-simple-icons-whatsapp',
    label: 'WhatsApp',
    to: SOCIALS_WHATSAPP,
  },
  {
    icon: 'i-simple-icons-facebook',
    label: 'Facebook',
    to: SOCIALS_MESSENGER,
  },
].filter((item) => item.to),
);
const { t } = useI18n();
</script>

<i18n lang="json">
{
  "ru": {
    "hero": {
      "h1": "Аренда экскаваторов и грузовиков на Самуи",
      "lead": "Экскаваторы для копки фундаментов, траншей и подготовки участка. Самосвалы и грузовики для вывоза грунта, доставки материалов, перевозки грузов и переездов на Самуи. Быстрый выезд, опытные операторы и честные цены.",
      "primary": "Позвонить",
      "secondary": "Написать в WhatsApp"
    }
  },
  "en": {
    "hero": {
      "h1": "Excavator & Truck Rental on Koh Samui",
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
