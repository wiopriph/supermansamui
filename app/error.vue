<script setup lang="ts">
import { SOCIALS_WHATSAPP } from '~/constants/contacts';


defineProps<{
  error: {
    statusCode?: number;
    message?: string
  }
}>();

const { t } = useI18n();
const localeRoute = useLocaleRoute();

const links = computed(() => [
  { label: t('links.home'), to: localeRoute({ name: 'index' }), icon: 'i-lucide-house' },
  { label: t('links.services'), to: localeRoute({ name: 'services-earthworks' }), icon: 'i-lucide-hard-hat' },
  { label: t('links.projects'), to: localeRoute({ name: 'projects' }), icon: 'i-lucide-images' },
  { label: t('links.equipment'), to: localeRoute({ name: 'equipment' }), icon: 'i-lucide-tractor' },
]);
</script>

<i18n lang="json">
{
  "en": {
    "title": "Page not found",
    "subtitle": "The page you're looking for doesn't exist or has been moved.",
    "hint": "Maybe you were looking for one of these?",
    "cta": "Write to us",
    "links": {
      "home": "Home",
      "services": "Services",
      "projects": "Projects",
      "equipment": "Equipment"
    }
  },
  "ru": {
    "title": "Страница не найдена",
    "subtitle": "Такой страницы не существует или она была перемещена.",
    "hint": "Возможно, вы искали одно из этого?",
    "cta": "Написать нам",
    "links": {
      "home": "Главная",
      "services": "Услуги",
      "projects": "Проекты",
      "equipment": "Техника"
    }
  },
  "th": {
    "title": "ไม่พบหน้านี้",
    "subtitle": "หน้าที่คุณค้นหาไม่มีอยู่หรือถูกย้ายแล้ว",
    "hint": "บางทีคุณกำลังมองหาสิ่งเหล่านี้?",
    "cta": "ติดต่อเรา",
    "links": {
      "home": "หน้าหลัก",
      "services": "บริการ",
      "projects": "ผลงาน",
      "equipment": "เครื่องจักร"
    }
  }
}
</i18n>

<template>
  <NuxtLayout>
    <div class="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center space-y-10">
      <div class="relative select-none">
        <p class="text-[160px] sm:text-[220px] font-black leading-none text-primary/10 tracking-tighter">
          404
        </p>

        <div class="absolute inset-0 flex items-center justify-center">
          <UIcon
            name="i-lucide-tractor"
            class="size-16 sm:size-24 text-primary opacity-80"
          />
        </div>
      </div>

      <div class="space-y-3 max-w-md">
        <h1 class="text-2xl sm:text-3xl font-bold text-highlighted">
          {{ t('title') }}
        </h1>

        <p class="text-base text-muted">
          {{ t('subtitle') }}
        </p>
      </div>

      <div class="space-y-4 w-full max-w-sm">
        <p class="text-sm font-medium text-muted uppercase tracking-wide">
          {{ t('hint') }}
        </p>

        <div class="grid grid-cols-2 gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="flex items-center gap-2 rounded-xl border border-default bg-default px-4 py-3 text-sm font-medium text-default transition hover:bg-elevated hover:border-primary/30 hover:text-primary"
            @click="clearError()"
          >
            <UIcon
              :name="link.icon"
              class="size-4 text-primary flex-none"
            />
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

      <UButton
        v-if="SOCIALS_WHATSAPP"
        :to="SOCIALS_WHATSAPP"
        target="_blank"
        color="primary"
        size="lg"
        icon="i-simple-icons-whatsapp"
      >
        {{ t('cta') }}
      </UButton>
    </div>
  </NuxtLayout>
</template>
