<script setup lang="ts">
type RelatedService = {
  icon: string;
  title: string;
  description: string;
  to: string;
};

const props = defineProps<{
  title: string;
  items: RelatedService[];
}>();
</script>

<template>
  <section class="py-10 space-y-6 border-b border-gray-50">
    <h2 class="text-2xl sm:text-3xl font-semibold text-center">
      {{ props.title }}
    </h2>

    <div class="grid gap-4 md:grid-cols-2">
      <UCard
        v-for="item in props.items"
        :key="item.to"
      >
        <div class="flex gap-4">
          <UIcon
            :name="item.icon"
            class="mt-1 size-7 text-primary"
          />

          <div>
            <h3 class="text-lg font-semibold">
              <NuxtLink
                :to="item.to"
                class="hover:text-primary"
              >
                {{ item.title }}
              </NuxtLink>
            </h3>

            <p class="mt-2 text-gray-600 dark:text-gray-400">
              {{ item.description }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
