<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
  SOCIALS_LINE,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


const { t, locale } = useI18n();

const links = computed(() => [
  {
    type: 'phone' as const,
    icon: 'i-lucide-phone',
    label: t('hero.primary'),
    to: `tel:${CONTACT_PHONE}`,
  },
  {
    type: 'social' as const,
    key: 'line' as const,
    icon: 'i-simple-icons-line',
    label: 'LINE',
    to: SOCIALS_LINE,
  },
  {
    type: 'social' as const,
    key: 'whatsapp' as const,
    icon: 'i-simple-icons-whatsapp',
    label: 'WhatsApp',
    to: SOCIALS_WHATSAPP,
  },
  {
    type: 'social' as const,
    key: 'messenger' as const,
    icon: 'i-simple-icons-facebook',
    label: 'Facebook',
    to: SOCIALS_MESSENGER,
  },
].filter((item) => item.to));


const PAGE = '/';
const LOCATION = 'hero';
const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const onClick = (item: typeof links.value[number]) => {
  if (item.type === 'phone') {
    trackPhoneClick({
      locale: locale.value,
      page: PAGE,
      location: LOCATION,
      phone: CONTACT_PHONE,
    });

    return;
  }

  trackSocialClick({
    locale: locale.value,
    page: PAGE,
    location: LOCATION,
    social: item.key as SocialKey,
    url: item.to,
  });
};
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
  >
    <template #links>
      <UButton
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        :icon="link.icon"
        :target="link.type === 'social' ? '_blank' : undefined"
        :rel="link.type === 'social' ? 'noopener' : undefined"
        size="lg"
        @click="onClick(link)"
      >
        {{ link.label }}
      </UButton>
    </template>
  </UPageHero>
</template>
