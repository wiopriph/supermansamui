<script setup lang="ts">
import { CONTACT_PHONE } from '~/constants/contacts';


const route = useRoute();
const { t, locale } = useI18n();
const { trackPhoneClick } = useAnalyticsEvent();
const { current: context } = useContactContext();

const phoneLink = `tel:${CONTACT_PHONE}`;

const pagePath = computed(() => route.path.replace(/^\/(ru|th)(?=\/|$)/, '') || '/');

// Only on pages with a concrete subject to discuss
const eligible = computed(() => /^\/(services|equipment|projects)(\/|$)/.test(pagePath.value));

const message = computed(() => {
  if (context.value?.message) return context.value.message;

  if (context.value?.name) return t('messageAbout', { topic: context.value.name });

  return t('message');
});

const scrolledPastHero = ref(false);
const contactsInView = ref(false);

const visible = computed(() => eligible.value && scrolledPastHero.value && !contactsInView.value);

// Contact blocks and the footer: the bar hides while any of them is on screen
let targets: Element[] = [];

const collectTargets = () => {
  targets = Array.from(document.querySelectorAll('[data-contact-block], footer'));
};

const update = () => {
  scrolledPastHero.value = window.scrollY > window.innerHeight * 0.8;

  contactsInView.value = targets.some((el) => {
    const rect = el.getBoundingClientRect();

    return rect.top < window.innerHeight && rect.bottom > 0;
  });
};

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  collectTargets();
  update();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update);
  window.removeEventListener('resize', update);
});

watch(() => route.path, async () => {
  await nextTick();
  collectTargets();
  update();
});

const onPhoneClick = () => {
  trackPhoneClick({
    page: pagePath.value,
    locale: locale.value,
    location: 'floating',
    phone: CONTACT_PHONE,
  });
};
</script>

<i18n lang="json">
{
  "ru": {
    "call": "Позвонить",
    "write": "Написать",
    "message": "Здравствуйте! Хочу обсудить проект на Самуи.",
    "messageAbout": "Здравствуйте! Интересует: {topic}. Подскажите стоимость."
  },
  "en": {
    "call": "Call",
    "write": "Message us",
    "message": "Hi! I'd like to discuss a project on Koh Samui.",
    "messageAbout": "Hi! I'm interested in: {topic}. Could you give me an estimate?"
  },
  "th": {
    "call": "โทร",
    "write": "ส่งข้อความ",
    "message": "สวัสดีครับ/ค่ะ อยากปรึกษาเรื่องงานบนเกาะสมุย",
    "messageAbout": "สวัสดีครับ/ค่ะ สนใจ: {topic} ขอทราบราคาครับ/ค่ะ"
  }
}
</i18n>

<template>
  <Transition
    enterActiveClass="transition duration-200 ease-out"
    enterFromClass="translate-y-full"
    leaveActiveClass="transition duration-150 ease-in"
    leaveToClass="translate-y-full"
  >
    <div
      v-show="visible"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-default bg-default/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden"
    >
      <div class="mx-auto flex max-w-lg gap-3">
        <UButton
          :to="phoneLink"
          icon="i-lucide-phone"
          color="neutral"
          variant="soft"
          size="lg"
          class="flex-1 justify-center"
          @click="onPhoneClick"
        >
          {{ t('call') }}
        </UButton>

        <CoreContactModal
          :page="pagePath"
          location="floating"
          :name="context?.name"
          :message="message"
        >
          <UButton
            icon="i-lucide-message-circle"
            size="lg"
            class="flex-1 justify-center"
          >
            {{ t('write') }}
          </UButton>
        </CoreContactModal>
      </div>
    </div>
  </Transition>
</template>
