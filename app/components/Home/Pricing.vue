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
  equipmentLabel: string
}>();

const localeRoute = useLocaleRoute();
</script>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ title }}
      </h2>

      <p class="text-sm text-muted max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <UCard
        v-for="group in groups"
        :key="group.title"
      >
        <template #header>
          <p class="font-semibold">
            {{ group.title }}
          </p>
        </template>

        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="item in group.items"
              :key="item.label"
              class="border-b border-default last:border-b-0"
            >
              <td class="py-3 pr-4 text-default">
                <span class="font-medium">{{ item.label }}</span>
              </td>

              <td class="py-3 text-right text-muted">
                <div class="space-y-0.5">
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
        <p class="font-semibold">
          {{ extraTitle }}
        </p>
      </template>

      <div class="space-y-2 text-sm text-muted">
        <p
          v-for="item in extraItems"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </UCard>

    <div class="flex flex-col items-center gap-4">
      <p class="text-sm text-center text-muted max-w-2xl">
        {{ note }}
      </p>

      <UButton
        :to="localeRoute({ name: 'equipment' })"
        variant="outline"
        color="neutral"
        trailingIcon="i-lucide-arrow-right"
      >
        {{ equipmentLabel }}
      </UButton>
    </div>
  </section>
</template>
