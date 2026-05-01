<script setup lang="ts">
type PriceItem = {
  label: string
  prices: string[]
};

type PriceGroup = {
  title: string
  items: PriceItem[]
};

defineProps<{
  title: string
  description: string
  groups: PriceGroup[]
  extraTitle: string
  extraItems: string[]
  note: string
}>();
</script>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ title }}
      </h2>

      <p class="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <UCard
        v-for="group in groups"
        :key="group.title"
      >
        <template #header>
          <div class="font-semibold">
            {{ group.title }}
          </div>
        </template>

        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="item in group.items"
              :key="item.label"
              class="border-b border-gray-100 dark:border-gray-800 last:border-b-0"
            >
              <td class="py-3 pr-4 text-gray-700 dark:text-gray-300">
                <span class="font-medium">{{ item.label }}</span>
              </td>

              <td class="py-3 text-right">
                <div class="space-y-1">
                  <div
                    v-for="price in item.prices"
                    :key="price"
                    class="whitespace-nowrap"
                  >
                    {{ price }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <div class="font-semibold">
          {{ extraTitle }}
        </div>
      </template>

      <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <p
          v-for="item in extraItems"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </UCard>

    <p class="text-sm text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      {{ note }}
    </p>
  </section>
</template>
