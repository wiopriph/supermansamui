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


const { t } = useI18n();

const phoneLink = `tel:${CONTACT_PHONE}`;

const socials = computed(() => [
  {
    icon: 'i-simple-icons-whatsapp',
    label: 'WhatsApp',
    link: SOCIALS_WHATSAPP,
  },
  {
    icon: 'i-simple-icons-line',
    label: 'LINE',
    link: SOCIALS_LINE,
  },
  {
    icon: 'i-simple-icons-messenger',
    label: 'Messenger',
    link: SOCIALS_MESSENGER,
  },
  {
    icon: 'i-simple-icons-facebook',
    label: 'Facebook',
    link: SOCIALS_FACEBOOK,
  },
  {
    icon: 'i-simple-icons-telegram',
    label: 'Telegram',
    link: SOCIALS_TELEGRAM,
  },
  {
    icon: 'i-simple-icons-tiktok',
    label: 'TikTok',
    link: SOCIALS_TIKTOK,
  },
].filter((item) => item.link),
);
</script>

<i18n lang="json">
{
  "ru": {
    "contacts": {
      "title": "Связаться с нами",
      "subtitle": "Пишите или звоните - оперативно отвечаем, подскажем по технике, рассчитаем стоимость и поможем с выбором.",
      "call": "Позвонить"
    }
  },
  "en": {
    "contacts": {
      "title": "Get in touch",
      "subtitle": "Call or message us - quick replies, equipment guidance and free job estimates.",
      "call": "Call now"
    }
  },
  "th": {
    "contacts": {
      "title": "ติดต่อเรา",
      "subtitle": "สอบถามได้ตลอดเวลา ตอบไว แนะนำเครื่องจักรและประเมินงานให้ฟรี",
      "call": "โทรเลย"
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
        >
          {{ social.label }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
