<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_LINE,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


type Fact = {
  value: string | number
  label: string
};

type Props = {
  eyebrow: string
  title: string
  description: string
  primaryLabel: string
  facts: Fact[]
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
  <section class="dark relative -mx-4 overflow-hidden bg-slate-950 text-white sm:-mx-6 lg:-mx-8">
    <img
      :src="image"
      alt=""
      fetchpriority="high"
      class="absolute inset-0 h-full w-full object-cover object-center opacity-40"
    >

    <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

    <div class="absolute inset-0 bg-blueprint" />

    <div class="relative mx-auto w-full max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-14 lg:px-8 lg:pt-24 lg:pb-16">
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

      <dl class="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
        <div
          v-for="fact in facts"
          :key="fact.label"
        >
          <dd class="font-display text-3xl font-semibold tabular-nums sm:text-4xl">
            {{ fact.value }}
          </dd>

          <dt class="mt-1 text-xs tracking-wider text-white/60 uppercase">
            {{ fact.label }}
          </dt>
        </div>
      </dl>
    </div>
  </section>
</template>
