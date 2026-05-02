<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_LINE,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


type Props = {
  title: string
  description: string
  primaryLabel: string
  page?: string
  location?: string
};

const props = withDefaults(defineProps<Props>(), {
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
  <UPageHero
    :title="title"
    :description="description"
    :ui="{
      title: 'text-4xl mx-auto text-balance',
      description: 'mx-auto text-balance text-base sm:text-lg',
      links: 'flex flex-nowrap sm:flex-wrap justify-center gap-3',
    }"
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
        <span
          v-if="link.label"
          class="hidden sm:block"
          v-text="link.label"
        />
      </UButton>
    </template>
  </UPageHero>
</template>
