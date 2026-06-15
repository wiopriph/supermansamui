<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_LINE,
  SOCIALS_WHATSAPP,
  SOCIALS_MESSENGER,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


type SocialItem = {
  key: SocialKey;
  label: string;
  icon: string;
  href: string;
};

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localeRoute = useLocaleRoute();
const route = useRoute();

const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const year = new Date().getFullYear();

const availableLocales = computed(() =>
  locales.value.filter(item => item.code !== locale.value),
);

const page = computed(() =>
  route.path.replace(/^\/(ru|en|th)(?=\/|$)/, '') || '/',
);

const phoneLink = computed(() => `tel:${CONTACT_PHONE}`);

const services = computed(() => [
  {
    label: t('footer.earthworks'),
    to: localeRoute({ name: 'services-earthworks' }),
  },
  {
    label: t('footer.excavator'),
    to: localeRoute({ name: 'services-excavator' }),
  },
  {
    label: t('footer.truck'),
    to: localeRoute({ name: 'services-truck' }),
  },
  {
    label: t('footer.projects'),
    to: localeRoute({ name: 'projects' }),
  },
]);

const socials = computed<SocialItem[]>(() => {
  const items: Array<SocialItem | null> = [
    SOCIALS_WHATSAPP ?
      {
        key: 'whatsapp',
        label: 'WhatsApp',
        icon: 'i-simple-icons-whatsapp',
        href: SOCIALS_WHATSAPP,
      } :
      null,
    SOCIALS_LINE ?
      {
        key: 'line',
        label: 'LINE',
        icon: 'i-simple-icons-line',
        href: SOCIALS_LINE,
      } :
      null,
    SOCIALS_MESSENGER ?
      {
        key: 'messenger',
        label: 'Messenger',
        icon: 'i-simple-icons-messenger',
        href: SOCIALS_MESSENGER,
      } :
      null,
  ];

  return items.filter((item): item is SocialItem => Boolean(item));
});

const mainSocial = computed(() =>
  socials.value.find(item => item.key === 'whatsapp') ?? socials.value[0],
);

const onPhoneClick = (location: string) => {
  trackPhoneClick({
    page: page.value,
    locale: locale.value,
    location,
    phone: CONTACT_PHONE,
  });
};

const onSocialClick = (social: SocialItem, location: string) => {
  trackSocialClick({
    page: page.value,
    locale: locale.value,
    location,
    social: social.key,
    url: social.href,
  });
};
</script>

<i18n lang="json">
{
  "ru": {
    "footer": {
      "tagline": "Земляные работы, экскаваторы и грузовики на Самуи.",
      "description": "Расчистка участков, подготовка земли, вывоз грунта и работа строительной техники.",
      "services": "Услуги",
      "contacts": "Контакты",
      "languages": "Язык",
      "earthworks": "Земляные работы",
      "excavator": "Аренда экскаватора",
      "projects": "Проекты",
      "truck": "Аренда грузовиков",
      "call": "Позвонить",
      "getEstimate": "Получить расчёт",
      "rights": "Все права защищены."
    }
  },
  "en": {
    "footer": {
      "tagline": "Earthworks, excavators and dump trucks on Koh Samui.",
      "description": "Land clearing, site preparation, soil removal and construction machinery services.",
      "services": "Services",
      "contacts": "Contacts",
      "languages": "Language",
      "earthworks": "Earthworks",
      "excavator": "Excavator Rental",
      "projects": "Projects",
      "truck": "Truck Rental",
      "call": "Call now",
      "getEstimate": "Get estimate",
      "rights": "All rights reserved."
    }
  },
  "th": {
    "footer": {
      "tagline": "งานดิน รถขุด และรถบรรทุกบนเกาะสมุย",
      "description": "บริการถางที่ ปรับพื้นที่ ขนดิน และเครื่องจักรก่อสร้าง",
      "services": "บริการ",
      "contacts": "ติดต่อ",
      "languages": "ภาษา",
      "earthworks": "งานดิน / ปรับพื้นที่",
      "excavator": "บริการเช่ารถขุด",
      "projects": "ผลงาน",
      "truck": "บริการเช่ารถบรรทุก",
      "call": "โทรเลย",
      "getEstimate": "ประเมินราคา",
      "rights": "สงวนลิขสิทธิ์ทั้งหมด"
    }
  }
}
</i18n>

<template>
  <footer class="border-t border-default">
    <UContainer class="py-10 lg:py-12">
      <div class="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <NuxtLink
            :to="localeRoute({ name: 'index' })"
            class="inline-flex items-center"
          >
            <img
              src="/logo.webp"
              alt="Superman Samui"
              class="h-12 w-auto"
            >
          </NuxtLink>

          <p class="mt-5 text-lg font-semibold text-highlighted">
            {{ t('footer.tagline') }}
          </p>

          <p class="mt-3 text-sm text-muted">
            {{ t('footer.description') }}
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <UButton
              v-if="mainSocial"
              :to="mainSocial.href"
              target="_blank"
              color="primary"
              size="lg"
              class="font-semibold"
              @click="onSocialClick(mainSocial, 'footer_cta')"
            >
              <UIcon
                :name="mainSocial.icon"
                class="size-5"
              />
              {{ t('footer.getEstimate') }}
            </UButton>

            <UButton
              :to="phoneLink"
              variant="outline"
              color="primary"
              size="lg"
              class="font-semibold"
              @click="onPhoneClick('footer_cta')"
            >
              <UIcon
                name="i-lucide-phone"
                class="size-5"
              />
              {{ t('footer.call') }}
            </UButton>
          </div>
        </div>

        <div>
          <p class="mb-4 text-sm font-bold uppercase text-muted">
            {{ t('footer.services') }}
          </p>

          <nav class="grid gap-3">
            <NuxtLink
              v-for="item in services"
              :key="item.label"
              :to="item.to"
              class="text-sm text-muted hover:text-primary"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <div>
          <p class="mb-4 text-sm font-bold uppercase text-muted">
            {{ t('footer.contacts') }}
          </p>

          <div class="grid gap-3">
            <ULink
              :to="phoneLink"
              class="flex items-center gap-3 text-sm text-muted hover:text-primary"
              @click="onPhoneClick('footer')"
            >
              <UIcon
                name="i-lucide-phone"
                class="size-5 text-primary"
              />
              {{ CONTACT_PHONE }}
            </ULink>

            <ULink
              v-for="social in socials"
              :key="social.key"
              :to="social.href"
              target="_blank"
              class="flex items-center gap-3 text-sm text-muted hover:text-primary"
              @click="onSocialClick(social, 'footer')"
            >
              <UIcon
                :name="social.icon"
                class="size-5 text-primary"
              />
              {{ social.label }}
            </ULink>
          </div>

          <div class="mt-6">
            <p class="mb-3 text-sm font-bold uppercase text-muted">
              {{ t('footer.languages') }}
            </p>

            <div class="flex gap-2 flex-wrap">
              <a
                v-for="lang in availableLocales"
                :key="lang.code"
                :href="switchLocalePath(lang.code)"
              >
                <UButton
                  as="span"
                  variant="outline"
                  size="xs"
                >
                  {{ lang.name }}
                  {{ lang.flag }}
                </UButton>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-default pt-5 text-center text-xs text-muted">
        © Superman Samui {{ year }} · {{ t('footer.rights') }}
      </div>
    </UContainer>
  </footer>
</template>
