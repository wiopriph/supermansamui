<script setup lang="ts">
defineProps<{
  beforeImage: string
  beforeAlt: string
  afterImage: string
  afterAlt: string
}>();

const position = ref(50);
const { t } = useI18n();
</script>

<i18n lang="json">
{
  "ru": { "before": "До", "after": "После" },
  "en": { "before": "Before", "after": "After" },
  "th": { "before": "ก่อน", "after": "หลัง" }
}
</i18n>

<template>
  <div class="relative aspect-video w-full select-none overflow-hidden rounded-2xl bg-gray-100">
    <img
      :src="afterImage"
      :alt="afterAlt"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      draggable="false"
    >

    <div
      class="absolute inset-0 overflow-hidden"
      :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
    >
      <img
        :src="beforeImage"
        :alt="beforeAlt"
        class="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable="false"
      >
    </div>

    <div class="pointer-events-none absolute inset-x-0 bottom-3 flex justify-between px-4">
      <span
        class="rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm"
        v-text="t('before')"
      />

      <span
        class="rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gray-900 backdrop-blur-sm"
        v-text="t('after')"
      />
    </div>

    <div
      class="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)]"
      :style="{ left: `${position}%` }"
    />

    <div
      class="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
      :style="{ left: `${position}%` }"
    >
      <div class="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.22)] ring-1 ring-black/8">
        <UIcon
          name="i-lucide-chevrons-left-right"
          class="size-5 text-gray-700"
        />
      </div>
    </div>

    <input
      type="range"
      min="0"
      max="100"
      :value="position"
      :aria-label="`${beforeAlt} / ${afterAlt}`"
      class="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
      @input="position = Number(($event.target as HTMLInputElement).value)"
    >
  </div>
</template>
