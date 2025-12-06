<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  image?: string | null
  ctaPrimaryLabel?: string
  ctaSecondaryLabel?: string
  ctaPrimaryLink?: string
  ctaSecondaryLink?: string
}>();
</script>

<template>
  <UPageHero
    :title="props.title"
    :description="props.subtitle"
    orientation="horizontal"
    class="border-b border-gray-100"
  >
    <div
      v-if="props.image"
      class="overflow-hidden w-full"
    >
      <img
        :src="props.image"
        :alt="props.title"
        class="w-full object-cover"
        loading="lazy"
      >
    </div>

    <template #links>
      <div class="flex flex-wrap gap-3">
        <UButton
          v-if="props.ctaPrimaryLabel"
          size="lg"
          as="a"
          :href="props.ctaPrimaryLink"
          target="_blank"
          rel="noopener"
        >
          {{ props.ctaPrimaryLabel }}
        </UButton>

        <UButton
          v-if="props.ctaSecondaryLabel"
          variant="ghost"
          as="a"
          :href="props.ctaSecondaryLink"
        >
          {{ props.ctaSecondaryLabel }}
        </UButton>
      </div>
    </template>
  </UPageHero>
</template>
