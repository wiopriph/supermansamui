<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_WHATSAPP,
  SOCIALS_LINE,
  SOCIALS_MESSENGER,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


const props = defineProps<{
  title: string;
  description: string;
  imageSrc: string;
  page: string;
  /** Small line above the title, e.g. the project location */
  eyebrow?: string;
  eyebrowIcon?: string;
}>();


type Item =
  | {
    type: 'phone';
    icon: string;
    label: string;
    link: string;
  }
  | {
    type: 'social';
    key: SocialKey;
    icon: string;
    link: string;
  };

const items = computed(() => [
  {
    type: 'phone',
    icon: 'i-lucide-phone',
    label: CONTACT_PHONE,
    link: `tel:${CONTACT_PHONE}`,
  },
  {
    type: 'social',
    key: 'whatsapp',
    icon: 'i-simple-icons-whatsapp',
    link: SOCIALS_WHATSAPP,
  },
  {
    type: 'social',
    key: 'line',
    icon: 'i-simple-icons-line',
    link: SOCIALS_LINE,
  },
  {
    type: 'social',
    key: 'messenger',
    icon: 'i-simple-icons-messenger',
    link: SOCIALS_MESSENGER,
  },
].filter((item) => item.link));


const LOCATION = 'hero';
const { locale } = useI18n();
const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const onPhoneClick = () => {
  trackPhoneClick({
    page: props.page,
    locale: locale.value,
    location: LOCATION,
    phone: CONTACT_PHONE,
  });
};

const onSocialClick = (item: Extract<Item, { type: 'social' }>) => {
  trackSocialClick({
    page: props.page,
    locale: locale.value,
    location: LOCATION,
    social: item.key,
    url: item.link,
  });
};

const onClick = (item: Item) => {
  if (item.type === 'phone') {
    onPhoneClick();
  } else {
    onSocialClick(item);
  }
};
</script>

<template>
  <section class="bleed relative flex min-h-[380px] items-end overflow-hidden sm:min-h-[460px] lg:min-h-[540px]">
    <img
      :src="imageSrc"
      :alt="title"
      fetchpriority="high"
      class="absolute inset-0 h-full w-full object-cover object-center md:object-left"
    >

    <!-- Heavier at the bottom on phones, where only the title sits on the photo -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5 md:from-black/60 md:via-black/25 md:to-black/10" />

    <!-- From md the text sits on the left, so darken that side regardless of the photo -->
    <div class="absolute inset-0 hidden bg-gradient-to-r from-black/70 via-black/35 to-transparent md:block" />

    <div class="relative z-10 w-full py-6 sm:py-10">
      <div class="max-w-2xl text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.45)]">
        <div class="mb-3 h-1.5 w-16 bg-primary md:mb-4" />

        <p
          v-if="eyebrow"
          class="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wider text-white/85 uppercase md:mb-3"
        >
          <UIcon
            v-if="eyebrowIcon"
            :name="eyebrowIcon"
            class="size-4"
          />
          {{ eyebrow }}
        </p>

        <h1 class="mb-4 text-3xl leading-[0.95] font-bold text-balance sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="mb-6 hidden text-base leading-7 text-white/80 sm:text-lg md:block">
          {{ description }}
        </p>

        <div class="flex flex-wrap gap-3">
          <UButton
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
            :icon="item.icon"
            :target="item.type === 'social' ? '_blank' : undefined"
            :rel="item.type === 'social' ? 'noopener' : undefined"
            color="primary"
            variant="solid"
            size="lg"
            @click="onClick(item as Item)"
          >
            <span
              v-if="item.label"
              class="hidden sm:block"
              v-text="item.label"
            />
          </UButton>
        </div>
      </div>
    </div>
  </section>

  <!-- On phones the description moves below the photo, onto a white background -->
  <p class="mt-6 text-base leading-7 text-toned md:hidden">
    {{ description }}
  </p>
</template>
