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
      "h1": "Экскаваторы, самосвалы и грузовики на Самуи",
      "lead": "Земляные работы, аренда экскаватора, вывоз грунта, доставка песка и щебня, перевозка техники и грузов на Самуи. Своя техника, местные операторы и понятная цена до начала работ.",
      "primary": "Позвонить",
      "secondary": "Написать в WhatsApp"
    }
  },
  "en": {
    "hero": {
      "h1": "Excavators, dump trucks and trucks on Koh Samui",
      "lead": "Earthworks, excavator rental, soil removal, sand and gravel delivery, and equipment transport on Koh Samui. Our own machines, local operators and clear pricing before the job starts.",
      "primary": "Call now",
      "secondary": "Message on WhatsApp"
    }
  },
  "th": {
    "hero": {
      "h1": "รถขุด รถดั๊ม และรถบรรทุกบนเกาะสมุย",
      "lead": "งานดิน บริการเช่ารถขุด ขนดิน ส่งทรายและหิน และขนย้ายเครื่องจักรบนเกาะสมุย มีเครื่องจักรของเราเอง คนขับท้องถิ่น และแจ้งราคาชัดเจนก่อนเริ่มงาน",
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
