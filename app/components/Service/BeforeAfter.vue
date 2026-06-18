<script setup lang="ts">
type BeforeAfterPair = {
  beforeImage: string
  beforeAlt: string
  afterImage: string
  afterAlt: string
};

type BeforeAfterItem = {
  title: string
  description?: string
  slug: string
  pairs: BeforeAfterPair[]
};

defineProps<{
  title: string
  items: BeforeAfterItem[]
}>();

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<i18n lang="json">
{
  "en": {
    "details": "View project"
  },
  "ru": {
    "details": "Подробнее"
  },
  "th": {
    "details": "ดูโครงการ"
  }
}
</i18n>

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

          <div class="space-y-3">
            <h3
              class="text-lg font-semibold sm:text-xl"
              v-text="item.title"
            />

            <p
              v-if="item.description"
              class="text-sm leading-relaxed text-gray-600 sm:text-base"
              v-text="item.description"
            />

            <UButton
              :to="localePath({ name: 'projects-slug', params: { slug: item.slug } })"
              variant="outline"
              size="sm"
            >
              {{ t('details') }}
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
