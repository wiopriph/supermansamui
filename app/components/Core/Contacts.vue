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

const phoneLink = `tel:${CONTACT_PHONE}`;

type SocialItem = {
  key: SocialKey;
  icon: string;
  label: string;
  link: string;
};

const socials = computed(() => [
  {
    key: 'whatsapp',
    icon: 'i-simple-icons-whatsapp',
    label: 'WhatsApp',
    link: SOCIALS_WHATSAPP,
  },
  {
    key: 'line',
    icon: 'i-simple-icons-line',
    label: 'LINE',
    link: SOCIALS_LINE,
  },
  {
    key: 'messenger',
    icon: 'i-simple-icons-messenger',
    label: 'Messenger',
    link: SOCIALS_MESSENGER,
  },
  {
    key: 'facebook',
    icon: 'i-simple-icons-facebook',
    label: 'Facebook',
    link: SOCIALS_FACEBOOK,
  },
  {
    key: 'telegram',
    icon: 'i-simple-icons-telegram',
    label: 'Telegram',
    link: SOCIALS_TELEGRAM,
  },
  {
    key: 'tiktok',
    icon: 'i-simple-icons-tiktok',
    label: 'TikTok',
    link: SOCIALS_TIKTOK,
  },
].filter((item) => item.link));


const { t, locale } = useI18n();
const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const onPhoneClick = () => {
  trackPhoneClick({
    page: props.page,
    locale: locale.value,
    location: props.location,
    phone: CONTACT_PHONE,
  });
};

const onSocialClick = (social: SocialItem) => {
  trackSocialClick({
    page: props.page,
    locale: locale.value,
    location: props.location,
    social: social.key,
    url: social.link,
  });
};
</script>

<i18n lang="json">
{
  "ru": {
    "contacts": {
      "title": "Связаться с нами",
      "subtitle": "Пишите или звоните - оперативно отвечаем, подскажем по технике, рассчитаем стоимость и поможем с выбором."
    }
  },
  "en": {
    "contacts": {
      "title": "Get in touch",
      "subtitle": "Call or message us - quick replies, equipment guidance and free job estimates."
    }
  },
  "th": {
    "contacts": {
      "title": "ติดต่อเรา",
      "subtitle": "สอบถามได้ตลอดเวลา ตอบไว แนะนำเครื่องจักรและประเมินงานให้ฟรี"
    }
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6">
    <UContainer class="text-center space-y-8">
      <div class="space-y-3">
        <h2 class="text-2xl font-semibold">
          {{ t('contacts.title') }}
        </h2>

        <p class="text-gray-600 max-w-xl mx-auto">
          {{ t('contacts.subtitle') }}
        </p>
      </div>

      <div>
        <UButton
          :to="phoneLink"
          size="xl"
          color="primary"
          icon="i-lucide-phone"
          class="px-8"
          @click="onPhoneClick"
        >
          {{ CONTACT_PHONE }}
        </UButton>
      </div>

      <div class="flex flex-wrap justify-center gap-3 pt-2">
        <UButton
          v-for="(social, index) in socials"
          :key="index"
          :to="social.link"
          :icon="social.icon"
          target="_blank"
          variant="soft"
          size="lg"
          class="px-5"
          @click="onSocialClick(social as SocialItem)"
        >
          {{ social.label }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
