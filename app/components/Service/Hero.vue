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
  <section class="bleed relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[460px] lg:min-h-[540px]">
    <img
      :src="imageSrc"
      :alt="title"
      fetchpriority="high"
      class="absolute inset-0 h-full w-full object-cover object-center md:object-left"
    >

    <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-black/20" />

    <div class="relative z-10 mx-auto flex w-full max-w-6xl justify-center py-8 sm:py-10 md:justify-start">
      <div class="max-w-2xl text-center text-white md:text-left">
        <div class="mx-auto mb-4 h-1.5 w-16 bg-primary md:mx-0" />

        <p
          v-if="eyebrow"
          class="mb-3 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wider text-white/85 uppercase"
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

        <p class="mb-6 text-base leading-7 text-white/80 sm:text-lg">
          {{ description }}
        </p>

        <div class="flex flex-nowrap justify-center gap-3 sm:flex-wrap md:justify-start">
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
</template>
