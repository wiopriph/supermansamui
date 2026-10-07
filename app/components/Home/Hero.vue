<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_LINE,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


type Props = {
  eyebrow: string
  title: string
  description: string
  primaryLabel: string
  image?: string
  page?: string
  location?: string
};

const props = withDefaults(defineProps<Props>(), {
  image: '/images/services/excavators/hero.webp',
  page: '/',
  location: 'hero',
});

const { locale } = useI18n();
const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const links = computed(() => [
  {
    type: 'phone' as const,
    icon: 'i-lucide-phone',
    label: props.primaryLabel,
    to: `tel:${CONTACT_PHONE}`,
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
    key: 'line' as const,
    icon: 'i-simple-icons-line',
    label: 'LINE',
    to: SOCIALS_LINE,
  },
  {
    type: 'social' as const,
    key: 'messenger' as const,
    icon: 'i-simple-icons-messenger',
    label: 'Messenger',
    to: SOCIALS_MESSENGER,
  },
].filter((item) => item.to));

const onClick = (item: typeof links.value[number]) => {
  if (item.type === 'phone') {
    trackPhoneClick({
      locale: locale.value,
      page: props.page,
      location: props.location,
      phone: CONTACT_PHONE,
    });

    return;
  }

  trackSocialClick({
    locale: locale.value,
    page: props.page,
    location: props.location,
    social: item.key as SocialKey,
    url: item.to,
  });
};
</script>

<template>
  <section class="dark bleed relative overflow-hidden bg-blue-950 text-white">
    <img
      :src="image"
      alt=""
      fetchpriority="high"
      class="absolute inset-0 h-full w-full object-cover object-center opacity-75"
    >

    <div class="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/70 to-blue-950/10" />

    <div class="absolute inset-0 bg-blueprint opacity-50" />

    <div class="relative mx-auto w-full max-w-6xl py-14 sm:py-20 lg:py-24">
      <p class="eyebrow">
        {{ eyebrow }}
      </p>

      <h1 class="mt-4 max-w-3xl text-4xl leading-[0.95] font-bold text-balance sm:text-5xl lg:text-6xl">
        {{ title }}
      </h1>

      <p class="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
        {{ description }}
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <UButton
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          :icon="link.icon"
          :target="link.type === 'social' ? '_blank' : undefined"
          :rel="link.type === 'social' ? 'noopener' : undefined"
          :color="link.type === 'phone' ? 'primary' : 'neutral'"
          :variant="link.type === 'phone' ? 'solid' : 'subtle'"
          size="lg"
          @click="onClick(link)"
        >
          <span
            class="hidden sm:block"
            v-text="link.label"
          />
        </UButton>
      </div>
    </div>
  </section>
</template>
