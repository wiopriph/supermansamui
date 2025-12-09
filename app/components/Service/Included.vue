<script setup lang="ts">
type FeatureItem = {
  title: string
  description?: string
  icon?: string
};

const props = defineProps<{
  title: string
  items: FeatureItem[]
}>();
</script>

<template>
  <section class="py-10 space-y-6 border-b border-gray-50">
    <h2 class="text-2xl sm:text-3xl font-semibold text-center">
      {{ props.title }}
    </h2>

    <UPageGrid class="pt-2">
      <UPageFeature
        v-for="(item, index) in props.items"
        :key="index"
        :icon="item.icon || 'i-heroicons-check-circle'"
        :title="item.title"
        :description="item.description"
        :ui="{ title: 'text-gray-600' }"
      />
    </UPageGrid>
  </section>
</template>
