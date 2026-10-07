<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  /** Small blue label above the title; without it a short red bar is shown */
  eyebrow?: string
}>();
</script>

<template>
  <div class="mx-auto max-w-2xl text-center">
    <p
      v-if="eyebrow"
      class="eyebrow mb-3"
      v-text="eyebrow"
    />

    <div
      v-else
      class="mx-auto mb-4 h-1 w-10 bg-primary"
    />

    <h2
      class="text-3xl font-bold text-highlighted sm:text-4xl"
      v-text="title"
    />

    <p
      v-if="subtitle"
      class="mt-3 text-base leading-7 text-muted"
      v-text="subtitle"
    />
  </div>
</template>
