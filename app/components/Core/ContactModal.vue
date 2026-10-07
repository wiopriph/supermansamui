<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_MESSENGER,
  SOCIALS_WHATSAPP,
  SOCIALS_LINE,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


const props = withDefaults(defineProps<{
  /** Page path for analytics, e.g. '/projects/foo' */
  page: string;
  /** Where the trigger lives, e.g. 'project_sidebar' */
  location: string;
  /** What the user is asking about: project or machine name, goes to analytics */
  name?: string;
  /** Pre-filled text for WhatsApp; falls back to a generic greeting */
  message?: string;
  title?: string;
  description?: string;
}>(), {
  name: 'contact_modal',
  message: '',
  title: '',
  description: '',
});

const { t, locale } = useI18n();
const { trackPhoneClick, trackSocialClick, trackOrderClick } = useAnalyticsEvent();

const open = ref(false);

const modalTitle = computed(() => props.title || t('title'));
const modalDescription = computed(() => props.description || t('description'));
const messageText = computed(() => props.message || t('defaultMessage'));

const whatsappLink = computed(() => `${SOCIALS_WHATSAPP}?text=${encodeURIComponent(messageText.value)}`);
const phoneLink = `tel:${CONTACT_PHONE}`;

type Channel = {
  key: SocialKey;
  icon: string;
  label: string;
  hint?: string;
  link: string;
  primary?: boolean;
};

const channels = computed<Channel[]>(() => [
  {
    key: 'whatsapp',
    icon: 'i-simple-icons-whatsapp',
    label: t('whatsapp'),
    hint: t('whatsappHint'),
    link: whatsappLink.value,
    primary: true,
  },
  {
    key: 'line',
    icon: 'i-simple-icons-line',
    label: t('line'),
    link: SOCIALS_LINE,
  },
  {
    key: 'messenger',
    icon: 'i-simple-icons-messenger',
    label: t('messenger'),
    link: SOCIALS_MESSENGER,
  },
].filter(item => item.link));

const modalLocation = computed(() => `${props.location}_modal`);

watch(open, (value) => {
  if (!value) return;

  trackOrderClick({
    page: props.page,
    locale: locale.value,
    location: props.location,
    name: props.name,
  });
});

const onChannelClick = (channel: Channel) => {
  trackSocialClick({
    page: props.page,
    locale: locale.value,
    location: modalLocation.value,
    social: channel.key,
    url: channel.link,
  });
};

const onPhoneClick = () => {
  trackPhoneClick({
    page: props.page,
    locale: locale.value,
    location: modalLocation.value,
    phone: CONTACT_PHONE,
  });
};
</script>

<i18n lang="json">
{
  "ru": {
    "title": "Обсудить проект",
    "description": "Выберите удобный способ. Отвечаем быстро, подберём технику и посчитаем стоимость.",
    "whatsapp": "Написать в WhatsApp",
    "whatsappHint": "Самый быстрый способ, текст сообщения уже готов",
    "line": "Написать в LINE",
    "messenger": "Messenger",
    "call": "Позвонить",
    "tip": "Пришлите фото или геолокацию участка - так расчёт будет быстрее.",
    "defaultMessage": "Здравствуйте! Хочу обсудить проект на Самуи."
  },
  "en": {
    "title": "Discuss your project",
    "description": "Pick what works for you. We reply fast, suggest the right machinery and give an estimate.",
    "whatsapp": "Message on WhatsApp",
    "whatsappHint": "Fastest way, the message is already drafted",
    "line": "Message on LINE",
    "messenger": "Messenger",
    "call": "Call",
    "tip": "Send a photo or location pin of the site, it makes the estimate faster.",
    "defaultMessage": "Hi! I'd like to discuss a project on Koh Samui."
  },
  "th": {
    "title": "ปรึกษาโครงการ",
    "description": "เลือกช่องทางที่สะดวก เราตอบไว แนะนำเครื่องจักร และประเมินราคาให้",
    "whatsapp": "ทักทาง WhatsApp",
    "whatsappHint": "เร็วที่สุด มีข้อความร่างไว้ให้แล้ว",
    "line": "ทักทาง LINE",
    "messenger": "Messenger",
    "call": "โทร",
    "tip": "ส่งรูปหรือพิกัดพื้นที่มาด้วย จะประเมินราคาได้เร็วขึ้น",
    "defaultMessage": "สวัสดีครับ/ค่ะ อยากปรึกษาเรื่องงานบนเกาะสมุย"
  }
}
</i18n>

<template>
  <UModal
    v-model:open="open"
    :title="modalTitle"
    :description="modalDescription"
  >
    <slot />

    <template #body>
      <div class="space-y-3">
        <template
          v-for="channel in channels"
          :key="channel.key"
        >
          <UButton
            v-if="channel.primary"
            :to="channel.link"
            :icon="channel.icon"
            target="_blank"
            rel="noopener"
            color="success"
            size="xl"
            class="w-full justify-start gap-3 px-4 py-3"
            @click="onChannelClick(channel)"
          >
            <span class="flex flex-col items-start text-left">
              <span
                class="font-semibold"
                v-text="channel.label"
              />

              <span
                v-if="channel.hint"
                class="text-xs font-normal opacity-90"
                v-text="channel.hint"
              />
            </span>
          </UButton>

          <UButton
            v-else
            :to="channel.link"
            :icon="channel.icon"
            target="_blank"
            rel="noopener"
            color="neutral"
            variant="soft"
            size="lg"
            class="w-full justify-start px-4"
            @click="onChannelClick(channel)"
          >
            {{ channel.label }}
          </UButton>
        </template>

        <UButton
          :to="phoneLink"
          icon="i-lucide-phone"
          color="neutral"
          variant="soft"
          size="lg"
          class="w-full justify-start px-4"
          @click="onPhoneClick"
        >
          {{ t('call') }} {{ CONTACT_PHONE }}
        </UButton>

        <p class="pt-1 text-xs leading-5 text-muted">
          {{ t('tip') }}
        </p>
      </div>
    </template>
  </UModal>
</template>
