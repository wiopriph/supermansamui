<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_FACEBOOK,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
  SOCIALS_LINE,
  SOCIALS_TELEGRAM,
  SOCIALS_TIKTOK,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


const props = defineProps<{
  page: string;
  location: string;
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
    label: string;
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
    label: 'WhatsApp',
    link: SOCIALS_WHATSAPP,
  },
  {
    type: 'social',
    key: 'line',
    icon: 'i-simple-icons-line',
    label: 'LINE',
    link: SOCIALS_LINE,
  },
  {
    type: 'social',
    key: 'messenger',
    icon: 'i-simple-icons-messenger',
    label: 'Messenger',
    link: SOCIALS_MESSENGER,
  },
  {
    type: 'social',
    key: 'facebook',
    icon: 'i-simple-icons-facebook',
    label: 'Facebook',
    link: SOCIALS_FACEBOOK,
  },
  {
    type: 'social',
    key: 'telegram',
    icon: 'i-simple-icons-telegram',
    label: 'Telegram',
    link: SOCIALS_TELEGRAM,
  },
  {
    type: 'social',
    key: 'tiktok',
    icon: 'i-simple-icons-tiktok',
    label: 'TikTok',
    link: SOCIALS_TIKTOK,
  },
].filter((item) => item.link));


const { locale } = useI18n();
const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const onPhoneClick = () => {
  trackPhoneClick({
    page: props.page,
    locale: locale.value,
    location: props.location,
    phone: CONTACT_PHONE,
  });
};

const onSocialClick = (item: Extract<Item, { type: 'social' }>) => {
  trackSocialClick({
    page: props.page,
    locale: locale.value,
    location: props.location,
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
  <section class="py-4 space-y-3">
    <UContainer class="text-center space-y-8">
      <div class="flex flex-wrap justify-center gap-3 pt-2">
        <UButton
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
          :icon="item.icon"
          :target="item.type === 'social' ? '_blank' : undefined"
          :rel="item.type === 'social' ? 'noopener' : undefined"
          variant="soft"
          size="lg"
          class="px-5"
          @click="onClick(item as Item)"
        >
          <span
            class="hidden md:block"
            v-text="item.label"
          />
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
