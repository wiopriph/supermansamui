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
  <section class="space-y-10 py-14">
    <CoreSectionHeading :title="title" />

    <div class="space-y-6">
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
              class="text-sm leading-relaxed text-muted sm:text-base"
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
