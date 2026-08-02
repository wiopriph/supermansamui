<script setup lang="ts">
import { SOCIALS_WHATSAPP } from '~/constants/contacts';


defineProps<{
  error: {
    statusCode?: number
    message?: string
  }
}>();

// The error page can render outside the normal page context, so no i18n
// composables here - the locale is read straight from the URL prefix.
const route = useRoute();

const prefix = computed(() => {
  const seg = route.path.split('/')[1];

  return seg === 'ru' || seg === 'th' ? `/${seg}` : '';
});

const MESSAGES = {
  en: {
    title: 'Page not found',
    subtitle: "The page you're looking for doesn't exist or has been moved.",
    hint: 'Maybe you were looking for one of these?',
    cta: 'Write to us',
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    equipment: 'Equipment',
  },
  ru: {
    title: 'Страница не найдена',
    subtitle: 'Такой страницы не существует или она была перемещена.',
    hint: 'Возможно, вы искали одно из этого?',
    cta: 'Написать нам',
    home: 'Главная',
    services: 'Услуги',
    projects: 'Проекты',
    equipment: 'Техника',
  },
  th: {
    title: 'ไม่พบหน้านี้',
    subtitle: 'หน้าที่คุณค้นหาไม่มีอยู่หรือถูกย้ายแล้ว',
    hint: 'บางทีคุณกำลังมองหาสิ่งเหล่านี้?',
    cta: 'ติดต่อเรา',
    home: 'หน้าหลัก',
    services: 'บริการ',
    projects: 'ผลงาน',
    equipment: 'เครื่องจักร',
  },
} as const;

const msg = computed(() => {
  const seg = route.path.split('/')[1];

  return MESSAGES[seg === 'ru' || seg === 'th' ? seg : 'en'];
});

const links = computed(() => [
  { label: msg.value.home, to: prefix.value || '/', icon: 'i-lucide-house' },
  { label: msg.value.services, to: `${prefix.value}/services/earthworks`, icon: 'i-lucide-hard-hat' },
  { label: msg.value.projects, to: `${prefix.value}/projects`, icon: 'i-lucide-images' },
  { label: msg.value.equipment, to: `${prefix.value}/equipment`, icon: 'i-lucide-tractor' },
]);

const goTo = (path: string) => {
  clearError({ redirect: path });
};
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center space-y-10 px-4 py-20 text-center">
    <div class="relative select-none">
      <p class="text-[160px] font-black leading-none tracking-tighter text-primary/10 sm:text-[220px]">
        404
      </p>

      <div class="absolute inset-0 flex items-center justify-center">
        <UIcon
          name="i-lucide-tractor"
          class="size-16 text-primary opacity-80 sm:size-24"
        />
      </div>
    </div>

    <div class="max-w-md space-y-3">
      <h1 class="text-2xl font-bold text-highlighted sm:text-3xl">
        {{ msg.title }}
      </h1>

      <p class="text-base text-muted">
        {{ msg.subtitle }}
      </p>
    </div>

    <div class="w-full max-w-sm space-y-4">
      <p class="text-sm font-medium uppercase tracking-wide text-muted">
        {{ msg.hint }}
      </p>

      <div class="grid grid-cols-2 gap-2">
        <button
          v-for="link in links"
          :key="link.label"
          type="button"
          class="flex items-center gap-2 rounded-xl border border-default bg-default px-4 py-3 text-sm font-medium text-default transition hover:border-primary/30 hover:bg-elevated hover:text-primary"
          @click="goTo(link.to)"
        >
          <UIcon
            :name="link.icon"
            class="size-4 flex-none text-primary"
          />
          {{ link.label }}
        </button>
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
      {{ msg.cta }}
    </UButton>
  </div>
</template>
