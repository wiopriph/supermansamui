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
  <section class="py-10 sm:py-14 lg:py-20">
    <div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
      <div>
        <p class="eyebrow">
          {{ eyebrow }}
        </p>

        <h1 class="mt-4 text-4xl leading-[0.95] font-bold text-highlighted text-balance sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-7 text-toned sm:text-lg">
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
            :variant="link.type === 'phone' ? 'solid' : 'outline'"
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

      <figure class="relative">
        <div class="absolute top-5 left-0 z-10 h-16 w-1.5 bg-primary" />

        <img
          :src="image"
          alt=""
          fetchpriority="high"
          width="1200"
          height="630"
          class="aspect-[4/3] w-full rounded-md object-cover ring ring-default lg:aspect-[5/4]"
        >
      </figure>
    </div>
  </section>
</template>
