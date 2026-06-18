<script setup lang="ts">
type BeforeAfterPair = {
  beforeImage: string
  beforeAlt: string
  afterImage: string
  afterAlt: string
};

type BeforeAfterMetaItem = {
  value: string
  icon?: string
};

type BeforeAfterItem = {
  title: string
  description?: string
  pairs: BeforeAfterPair[]
  meta?: BeforeAfterMetaItem[]
};

defineProps<{
  title: string
  items: BeforeAfterItem[]
}>();
</script>

<template>
  <section class="space-y-6 border-b border-gray-50 py-10">
    <h2
      class="text-center text-2xl font-semibold sm:text-3xl"
      v-text="title"
    />

    <div class="space-y-6 pt-2">
      <UCard
        v-for="(item, index) in items"
        :key="index"
        class="overflow-hidden"
      >
        <div class="space-y-5">
          <div class="space-y-4">
            <BeforeAfterSlider
              v-for="(pair, pairIndex) in item.pairs"
              :key="pairIndex"
              :beforeImage="pair.beforeImage"
              :beforeAlt="pair.beforeAlt"
              :afterImage="pair.afterImage"
              :afterAlt="pair.afterAlt"
            />
          </div>

          <div class="space-y-4">
            <div class="space-y-2">
              <h3 class="text-lg font-semibold sm:text-xl">
                {{ item.title }}
              </h3>

              <p
                v-if="item.description"
                class="text-sm leading-relaxed text-gray-600 sm:text-base"
              >
                {{ item.description }}
              </p>
            </div>

            <div
              v-if="item.meta?.length"
              class="flex flex-wrap gap-2"
            >
              <div
                v-for="(metaItem, metaIndex) in item.meta"
                :key="metaIndex"
                class="inline-flex max-w-full items-center gap-2 rounded-full bg-gray-50 px-3 py-1.5 text-sm text-gray-700"
              >
                <UIcon
                  :name="metaItem.icon || 'i-lucide-info'"
                  class="shrink-0 text-gray-500"
                />

                <span class="truncate">{{ metaItem.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
