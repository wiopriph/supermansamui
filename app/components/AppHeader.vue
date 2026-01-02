<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import {
  CONTACT_PHONE,
  SOCIALS_LINE,
  SOCIALS_WHATSAPP,
  SOCIALS_MESSENGER,
} from '~/constants/contacts';


const { t } = useI18n();
const localeRoute = useLocaleRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('header.excavator'),
    to: localeRoute({ name: 'services-excavator' }),
  },
  {
    label: t('header.truck'),
    to: localeRoute({ name: 'services-truck' }),
  },
]);

const socials = computed(() =>
  [
    {
      label: 'WhatsApp',
      icon: 'i-simple-icons-whatsapp',
      href: SOCIALS_WHATSAPP,
    },
    {
      label: 'LINE',
      icon: 'i-simple-icons-line',
      href: SOCIALS_LINE,
    },
    {
      label: 'Messenger',
      icon: 'i-simple-icons-messenger',
      href: SOCIALS_MESSENGER,
    },
  ].filter((item) => item.href),
);

const phoneLink = computed(() => `tel:${CONTACT_PHONE}`);
</script>

<i18n lang="json">
{
  "ru": {
    "header": {
      "contactUs": "Свяжитесь с нами",
      "excavator": "Аренда экскаватора",
      "truck": "Аренда грузовиков",
      "title": "Superman Samui"
    }
  },
  "en": {
    "header": {
      "contactUs": "Contact us",
      "excavator": "Excavator Rental",
      "truck": "Truck Rental",
      "title": "Superman Samui"
    }
  },
  "th": {
    "header": {
      "contactUs": "ติดต่อเรา",
      "excavator": "บริการเช่ารถขุด",
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
        >
          <UIcon
            name="i-lucide-phone"
            class="size-4"
          />

          <span class="text-sm font-semibold tracking-wide">
            {{ CONTACT_PHONE }}
          </span>
        </UButton>

        <div class="flex items-center gap-3">
          <ULink
            v-for="social in socials"
            :key="social.label"
            :to="social.href"
            :aria-label="social.label"
            external
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex"
          >
            <UIcon
              :name="social.icon"
              class="size-5"
            />
          </ULink>
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
            >
              <UIcon
                :name="social.icon"
                class="size-5"
              />

              <span>{{ social.label }}</span>
            </ULink>
          </div>
        </div>
      </div>
    </template>
  </UHeader>
</template>
