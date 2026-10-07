<script setup lang="ts">
type PriceItem = {
  label: string
  value: string | number
};

type EquipmentItem = {
  title: string
  subtitle?: string
  description?: string
  image?: string
  prices?: PriceItem[]
  buttonText?: string
  to?: string
};

const props = defineProps<{
  page: string
  title: string
  note?: string
  items: EquipmentItem[]
}>();
</script>

<template>
  <section class="py-10 space-y-8">
    <div class="space-y-2 text-center">
      <h2
        class="text-2xl sm:text-3xl font-semibold text-highlighted"
        v-text="props.title"
      />

      <p
        v-if="props.note"
        class="text-sm text-muted max-w-2xl mx-auto"
        v-text="props.note"
      />
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <EquipmentPriceCard
        v-for="(item, index) in props.items"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
        :image="item.image"
        :prices="item.prices"
        :buttonText="item.buttonText"
        :to="item.to"
        :page="props.page"
      />
    </div>
  </section>
</template>
