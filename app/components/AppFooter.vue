<script setup lang="ts">
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localeRoute = useLocaleRoute();

const items = computed(() => [
  {
    label: t('footer.excavator'),
    to: localeRoute({ name: 'services-excavator' }),
  },
  // {
  //   label: t('footer.services'),
  //   to: localeRoute({ name: 'services' }),
  // },
  // {
  //   label: t('footer.contacts'),
  //   to: localeRoute({ name: 'contacts' }),
  // },
]);

const year = new Date().getFullYear();
</script>

<i18n lang="json">
{
  "en": {
    "footer": {
      "excavator": "Excavator Rental",
      "services": "Services",
      "contacts": "Contacts",
      "rights": "All rights reserved."
    }
  },
  "ru": {
    "footer": {
      "excavator": "Аренда экскаватора",
      "services": "Услуги",
      "contacts": "Контакты",
      "rights": "Все права защищены."
    }
  },
  "th": {
    "footer": {
      "excavator": "บริการเช่ารถขุด",
      "services": "บริการ",
      "contacts": "ติดต่อ",
      "rights": "สงวนลิขสิทธิ์ทั้งหมด"
    }
  }
}
</i18n>

<template>
  <UFooter :ui="{ bottom: 'lg:py-4 py-4', }">
    <template #left>
      <NuxtLink
        :to="localeRoute({ name: 'index' })"
        class="flex items-center gap-2"
      >
        <img
          src="/logo.png"
          alt="Superman Samui"
          class="h-10 w-auto"
        >
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      class="justify-center"
    />

    <template #right>
      <div class="flex items-center gap-2">
        <UButton
          v-for="lang in locales"
          :key="lang.code"
          :to="switchLocalePath(lang.code)"
          size="xs"
          :variant="locale === lang.code ? 'solid' : 'outline'"
        >
          <span>{{ lang.flag }}</span>

          <span>{{ lang.name }}</span>
        </UButton>
      </div>
    </template>

    <template #bottom>
      <div class="text-center text-xs opacity-70">
        © Superman Samui {{ year }} · {{ t('footer.rights') }}
      </div>
    </template>
  </UFooter>
</template>
