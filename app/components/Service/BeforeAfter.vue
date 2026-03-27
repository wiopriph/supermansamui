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

const props = defineProps<{
  title: string
  items: BeforeAfterItem[]
}>();

const comparisonPositions = ref<Record<string, number>>({});

const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, value));

const getComparisonPosition = (key: string) => comparisonPositions.value[key] ?? 50;

const setComparisonPosition = (key: string, value: number | string) => {
  const numericValue = Number(value);

  comparisonPositions.value[key] = Number.isFinite(numericValue) ?
    clamp(numericValue) :
    50;
};

const { t } = useI18n();

const beforeLabel = computed(() => t('beforeLabel'));
const afterLabel = computed(() => t('afterLabel'));
</script>

<i18n lang="json">
{
  "ru": {
    "beforeLabel": "До",
    "afterLabel": "После"
  },
  "en": {
    "beforeLabel": "Before",
    "afterLabel": "After"
  },
  "th": {
    "beforeLabel": "ก่อน",
    "afterLabel": "หลัง"
  }
}
</i18n>

<template>
  <section class="space-y-6 border-b border-gray-50 py-10">
    <h2
      class="text-center text-2xl font-semibold sm:text-3xl"
      v-text="props.title"
    />

    <div class="space-y-6 pt-2">
      <UCard
        v-for="(item, index) in items"
        :key="index"
        class="overflow-hidden"
      >
        <div class="space-y-5">
          <div class="space-y-4">
            <div
              v-for="(pair, pairIndex) in item.pairs"
              :key="pairIndex"
              class="space-y-3"
            >
              <div class="lg:hidden">
                <div
                  class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
                  :style="{
                    clipPath: 'inset(0 round 1rem)',
                  }"
                >
                  <img
                    :src="pair.afterImage"
                    :alt="pair.afterAlt"
                    class="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  >

                  <div
                    class="absolute inset-0 overflow-hidden"
                    :style="{
                      clipPath: `inset(0 ${100 - getComparisonPosition(`${index}-${pairIndex}`)}% 0 0)`,
                    }"
                  >
                    <img
                      :src="pair.beforeImage"
                      :alt="pair.beforeAlt"
                      class="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    >
                  </div>

                  <div class="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
                    <span class="rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      {{ beforeLabel }}
                    </span>

                    <span class="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-900">
                      {{ afterLabel }}
                    </span>
                  </div>

                  <div
                    class="pointer-events-none absolute inset-y-0 w-0.5 bg-white/95 shadow-[0_0_0_1px_rgba(15,23,42,0.08)]"
                    :style="{ left: `${getComparisonPosition(`${index}-${pairIndex}`)}%` }"
                  >
                    <div
                      class="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white text-gray-900 shadow-lg"
                    >
                      <UIcon
                        name="i-lucide-move-horizontal"
                        class="text-lg"
                      />
                    </div>
                  </div>

                  <input
                    :aria-label="`${item.title} comparison slider`"
                    class="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
                    type="range"
                    min="0"
                    max="100"
                    :value="getComparisonPosition(`${index}-${pairIndex}`)"
                    @input="setComparisonPosition(`${index}-${pairIndex}`, ($event.target as HTMLInputElement).value)"
                  >
                </div>
              </div>

              <div class="hidden gap-4 lg:grid lg:grid-cols-2">
                <div class="space-y-2">
                  <span class="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    {{ beforeLabel }}
                  </span>

                  <div class="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                    <img
                      :src="pair.beforeImage"
                      :alt="pair.beforeAlt"
                      class="h-full w-full object-cover"
                      loading="lazy"
                    >
                  </div>
                </div>

                <div class="space-y-2">
                  <span class="block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {{ afterLabel }}
                  </span>

                  <div class="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 ring-1 ring-primary/10">
                    <img
                      :src="pair.afterImage"
                      :alt="pair.afterAlt"
                      class="h-full w-full object-cover"
                      loading="lazy"
                    >
                  </div>
                </div>
              </div>
            </div>
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

                <span class="truncate">
                  {{ metaItem.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
