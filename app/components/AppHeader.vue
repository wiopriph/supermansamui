<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import {
  CONTACT_PHONE,
  SOCIALS_LINE,
  SOCIALS_WHATSAPP,
  SOCIALS_MESSENGER,
} from '~/constants/contacts';
import type { SocialKey } from '~/composables/useAnalyticsEvent';


const { t, locale, locales } = useI18n();
const localeRoute = useLocaleRoute();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => locales.value.filter(i => i.code !== locale.value));

const route = useRoute();

const { trackPhoneClick, trackSocialClick } = useAnalyticsEvent();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('header.earthworks'),
    to: localeRoute({ name: 'services-earthworks' }),
  },
  {
    label: t('header.excavator'),
    to: localeRoute({ name: 'services-excavator' }),
  },
  {
    label: t('header.truck'),
    to: localeRoute({ name: 'services-truck' }),
  },
  {
    label: t('header.projects'),
    to: localeRoute({ name: 'projects' }),
  },
]);

type SocialItem = {
  key: SocialKey;
  label: string;
  icon: string;
  href: string;
};

const socials = computed(() =>
  [
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      icon: 'i-simple-icons-whatsapp',
      href: SOCIALS_WHATSAPP,
    },
    {
      key: 'line',
      label: 'LINE',
      icon: 'i-simple-icons-line',
      href: SOCIALS_LINE,
    },
    {
      key: 'messenger',
      label: 'Messenger',
      icon: 'i-simple-icons-messenger',
      href: SOCIALS_MESSENGER,
    },
  ].filter((item) => item.href),
);

const phoneLink = computed(() => `tel:${CONTACT_PHONE}`);
const page = computed(() => route.path.replace(/^\/(ru|en|th)(?=\/|$)/, '') || '/');

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
    "header": {
      "contactUs": "Свяжитесь с нами",
      "earthworks": "Земляные работы",
      "excavator": "Аренда экскаватора",
      "projects": "Проекты",
      "truck": "Аренда грузовиков",
      "title": "Superman Samui"
    }
  },
  "en": {
    "header": {
      "contactUs": "Contact us",
      "earthworks": "Earthworks",
      "excavator": "Excavator Rental",
      "projects": "Projects",
      "truck": "Truck Rental",
      "title": "Superman Samui"
    }
  },
  "th": {
    "header": {
      "contactUs": "ติดต่อเรา",
      "earthworks": "งานดิน / ปรับพื้นที่",
      "excavator": "บริการเช่ารถขุด",
      "projects": "ผลงาน",
      "truck": "บริการเช่ารถบรรทุก",
      "title": "Superman Samui"
    }
  }
}
</i18n>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        :to="localeRoute({ name: 'index' })"
        class="flex items-center gap-2"
        aria-label="Superman Samui"
      >
        <img
          src="/man.webp"
          alt="Superman Samui"
          class="h-10 w-auto sm:hidden"
        >

        <img
          src="/logo.webp"
          alt="Superman Samui"
          class="h-10 w-auto hidden sm:block"
        >
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <div class="flex items-center gap-4">
        <UButton
          :to="phoneLink"
          size="sm"
          variant="soft"
          class="flex items-center gap-2"
          @click="onPhoneClick('header')"
        >
          <UIcon
            name="i-lucide-phone"
            class="size-4"
          />

          <span class="text-sm font-semibold tracking-wide hidden sm:block">
            {{ CONTACT_PHONE }}
          </span>
        </UButton>

        <div class="flex items-center gap-2">
          <a
            v-for="lang in availableLocales"
            :key="lang.code"
            :href="switchLocalePath(lang.code)"
          >
            <UButton
              as="span"
              variant="outline"
              size="sm"
            >
              {{ lang.flag }}
            </UButton>
          </a>
        </div>
      </div>
    </template>

    <template #body>
      <div class="flex flex-col gap-6">
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />

        <div class="space-y-5 mt-auto pb-8">
          <p class="text-sm font-medium opacity-70">
            {{ t('header.contactUs') }}
          </p>

          <div class="flex flex-col gap-3">
            <ULink
              :to="phoneLink"
              class="flex items-center gap-3 text-sm"
              @click="onPhoneClick('header_mobile')"
            >
              <UIcon
                name="i-lucide-phone"
                class="size-5"
              />

              <span class="font-medium">{{ CONTACT_PHONE }}</span>
            </ULink>

            <ULink
              v-for="social in socials"
              :key="social.label"
              :to="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-sm"
              @click="onSocialClick(social as SocialItem, 'header_mobile')"
            >
              <UIcon
                :name="social.icon"
                class="size-5"
              />

              <span>{{ social.label }}</span>
            </ULink>
          </div>

          <div class="flex flex-wrap gap-2 pt-4">
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
    </template>
  </UHeader>
</template>
