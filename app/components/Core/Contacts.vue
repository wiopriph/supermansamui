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


const props = withDefaults(defineProps<{
  page: string;
  location: string;
  /** Mid-page nudge card (desktop only) instead of the full closing section */
  compact?: boolean;
  title?: string;
  description?: string;
  /** Subject of the enquiry: service, machine or project name */
  name?: string;
  /** Full pre-filled WhatsApp text; built from `name` when omitted */
  message?: string;
}>(), {
  compact: false,
  title: '',
  description: '',
  name: '',
  message: '',
});

const { t, locale } = useI18n();
const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const heading = computed(() => props.title || t(props.compact ? 'compact.title' : 'full.title'));
const subheading = computed(() => props.description || t(props.compact ? 'compact.description' : 'full.description'));

const message = computed(() => {
  if (props.message) return props.message;

  if (props.name) return t('messageAbout', { topic: props.name });

  return t('message');
});

const phoneLink = `tel:${CONTACT_PHONE}`;
const whatsappLink = computed(() => `${SOCIALS_WHATSAPP}?text=${encodeURIComponent(message.value)}`);
const lineLink = SOCIALS_LINE;

type SocialItem = {
  key: SocialKey;
  icon: string;
  label: string;
  link: string;
};

// Profiles for following, shown only in the full section
const socials = computed<SocialItem[]>(() => ([
  { key: 'messenger', icon: 'i-simple-icons-messenger', label: 'Messenger', link: SOCIALS_MESSENGER },
  { key: 'facebook', icon: 'i-simple-icons-facebook', label: 'Facebook', link: SOCIALS_FACEBOOK },
  { key: 'telegram', icon: 'i-simple-icons-telegram', label: 'Telegram', link: SOCIALS_TELEGRAM },
  { key: 'tiktok', icon: 'i-simple-icons-tiktok', label: 'TikTok', link: SOCIALS_TIKTOK },
] as SocialItem[]).filter(item => item.link));

const onPhoneClick = () => {
  trackPhoneClick({
    page: props.page,
    locale: locale.value,
    location: props.location,
    phone: CONTACT_PHONE,
  });
};

const onSocialClick = (key: SocialKey, url: string) => {
  trackSocialClick({
    page: props.page,
    locale: locale.value,
    location: props.location,
    social: key,
    url,
  });
};
</script>

<i18n lang="json">
{
  "ru": {
    "full": {
      "title": "Связаться с нами",
      "description": "Пишите или звоните - оперативно отвечаем, подскажем по технике, рассчитаем стоимость и поможем с выбором."
    },
    "compact": {
      "title": "Нужен расчёт?",
      "description": "Пришлите фото участка - быстро ответим и назовём цену."
    },
    "whatsapp": "Написать в WhatsApp",
    "line": "Написать в LINE",
    "message": "Здравствуйте! Хочу обсудить проект на Самуи.",
    "messageAbout": "Здравствуйте! Интересует: {topic}. Подскажите стоимость."
  },
  "en": {
    "full": {
      "title": "Get in touch",
      "description": "Call or message us - quick replies, equipment guidance and free job estimates."
    },
    "compact": {
      "title": "Need an estimate?",
      "description": "Send a photo of your site - we reply quickly with a price."
    },
    "whatsapp": "Message on WhatsApp",
    "line": "Message on LINE",
    "message": "Hi! I'd like to discuss a project on Koh Samui.",
    "messageAbout": "Hi! I'm interested in: {topic}. Could you give me an estimate?"
  },
  "th": {
    "full": {
      "title": "ติดต่อเรา",
      "description": "สอบถามได้ตลอดเวลา ตอบไว แนะนำเครื่องจักรและประเมินงานให้ฟรี"
    },
    "compact": {
      "title": "ต้องการประเมินราคา?",
      "description": "ส่งรูปพื้นที่มา เราตอบไวพร้อมแจ้งราคา"
    },
    "whatsapp": "ทักทาง WhatsApp",
    "line": "ทักทาง LINE",
    "message": "สวัสดีครับ/ค่ะ อยากปรึกษาเรื่องงานบนเกาะสมุย",
    "messageAbout": "สวัสดีครับ/ค่ะ สนใจ: {topic} ขอทราบราคาครับ/ค่ะ"
  }
}
</i18n>

<template>
  <!-- Compact: mid-page nudge, desktop only (mobile has the floating bar) -->
  <section
    v-if="compact"
    data-contact-block
    class="hidden py-6 lg:block"
  >
    <div class="flex items-center justify-between gap-8 rounded-2xl bg-elevated/60 px-8 py-6 ring ring-default">
      <div class="min-w-0">
        <p
          class="text-lg font-semibold text-highlighted"
          v-text="heading"
        />

        <p
          class="mt-1 text-sm text-muted"
          v-text="subheading"
        />
      </div>

      <div class="flex shrink-0 items-center gap-3">
        <UButton
          :to="whatsappLink"
          icon="i-simple-icons-whatsapp"
          target="_blank"
          rel="noopener"
          color="success"
          size="lg"
          @click="onSocialClick('whatsapp', whatsappLink)"
        >
          {{ t('whatsapp') }}
        </UButton>

        <UButton
          v-if="lineLink"
          :to="lineLink"
          icon="i-simple-icons-line"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="soft"
          size="lg"
          @click="onSocialClick('line', lineLink)"
        >
          LINE
        </UButton>

        <a
          :href="phoneLink"
          class="flex items-center gap-2 pl-2 text-sm font-semibold text-highlighted"
          @click="onPhoneClick"
        >
          <UIcon
            name="i-lucide-phone"
            class="size-4 text-primary"
          />

          <span>{{ CONTACT_PHONE }}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Full: closing contact section -->
  <section
    v-else
    data-contact-block
    class="bleed bg-sand-100 py-14"
  >
    <UContainer class="text-center space-y-8">
      <CoreSectionHeading
        :title="heading"
        :subtitle="subheading"
      />

      <div class="flex flex-wrap justify-center gap-3">
        <UButton
          :to="whatsappLink"
          icon="i-simple-icons-whatsapp"
          target="_blank"
          rel="noopener"
          color="success"
          size="xl"
          class="px-6"
          @click="onSocialClick('whatsapp', whatsappLink)"
        >
          {{ t('whatsapp') }}
        </UButton>

        <UButton
          v-if="lineLink"
          :to="lineLink"
          icon="i-simple-icons-line"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="soft"
          size="xl"
          class="px-6"
          @click="onSocialClick('line', lineLink)"
        >
          {{ t('line') }}
        </UButton>

        <UButton
          :to="phoneLink"
          icon="i-lucide-phone"
          color="primary"
          variant="soft"
          size="xl"
          class="px-6"
          @click="onPhoneClick"
        >
          {{ CONTACT_PHONE }}
        </UButton>
      </div>

      <div
        v-if="socials.length"
        class="flex flex-wrap justify-center gap-2 pt-2"
      >
        <UButton
          v-for="social in socials"
          :key="social.key"
          :to="social.link"
          :icon="social.icon"
          target="_blank"
          rel="noopener"
          color="neutral"
          variant="ghost"
          size="sm"
          @click="onSocialClick(social.key, social.link)"
        >
          {{ social.label }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
