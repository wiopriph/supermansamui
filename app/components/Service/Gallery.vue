<script setup lang="ts">
type GalleryItem = {
  src: string
  alt?: string
};

const props = defineProps<{
  title: string
  items: GalleryItem[]
}>();
</script>

<template>
  <section class="py-10 space-y-6 border-b border-gray-50">
    <h2
      class="text-xl md:text-2xl font-semibold text-center"
      v-text="props.title"
    />

    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full sm:basis-1/3' }"
      dots
      class="pt-2"
    >
      <div class="w-full aspect-video overflow-hidden rounded-xl">
        <img
          :src="item.src"
          :alt="item.alt || ''"
          class="w-full h-full object-cover"
        >
      </div>
    </UCarousel>
  </section>
</template>
