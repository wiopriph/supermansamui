<script setup lang="ts">
type SpecItem = {
  label: string
  value: string | number
};

type PriceItem = {
  label: string
  value: string | number
};

type EquipmentItem = {
  title: string
  subtitle?: string
  image?: string
  specs: SpecItem[]
  prices: PriceItem[]
  buttonText?: string
};

const props = defineProps<{
  title: string
  note?: string
  items: EquipmentItem[]
}>();
</script>

<template>
  <section class="py-10 space-y-6 border-b border-gray-50">
    <div class="space-y-2 text-center">
      <h2
        class="text-2xl sm:text-3xl font-semibold"
        v-text="props.title"
      />

      <p
        v-if="props.note"
        class="text-sm text-gray-600 max-w-2xl mx-auto"
        v-text="props.note"
      />
    </div>

    <UBlogPosts orientation="horizontal">
      <EquipmentPriceCard
        v-for="(item, index) in props.items"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :image="item.image"
        :specs="item.specs"
        :prices="item.prices"
        :buttonText="item.buttonText"
      />
    </UBlogPosts>
  </section>
</template>
