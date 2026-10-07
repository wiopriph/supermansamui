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
  <section class="bleed relative bg-blue-950">
    <div
      class="
        relative
        min-h-[420px] sm:min-h-[460px] lg:min-h-[540px]
        flex items-end
      "
    >
      <img
        :src="imageSrc"
        :alt="title"
        fetchpriority="high"
        class="
          absolute inset-0 w-full h-full
          object-cover
          object-center md:object-left
        "
      >

      <div class="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/35 to-blue-950/5" />

      <div
        class="
          relative z-10
          mx-auto max-w-6xl
          w-full
          px-4 sm:px-6 lg:px-8
          py-6 sm:py-10
          flex
          justify-center md:justify-start
        "
      >
        <div class="max-w-2xl text-white text-center md:text-left">
          <div class="mx-auto mb-4 h-1.5 w-16 bg-primary md:mx-0" />

          <h1 class="mb-4 text-4xl leading-[0.95] font-bold text-balance sm:text-5xl lg:text-6xl">
            {{ title }}
          </h1>

          <p class="mb-6 text-base leading-7 text-white/80 sm:text-lg">
            {{ description }}
          </p>

          <div class="flex flex-nowrap sm:flex-wrap justify-center md:justify-start gap-3">
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
    </div>
  </section>
</template>
