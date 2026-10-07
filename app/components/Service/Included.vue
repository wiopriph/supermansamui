<script setup lang="ts">
type FeatureItem = {
  title: string
  description?: string
  icon?: string
};

const props = withDefaults(defineProps<{
  title: string
  items: FeatureItem[]
  /** 'muted' gives the section a light grey full-width background */
  tone?: 'default' | 'muted'
}>(), {
  tone: 'default',
});
</script>

<template>
  <section
    :class="[
      'space-y-10 py-14',
      props.tone === 'muted' && 'bleed bg-elevated/60',
    ]"
  >
    <CoreSectionHeading :title="props.title" />

    <div class="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="flex gap-4"
      >
        <span class="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
          <UIcon
            :name="item.icon || 'i-heroicons-check-circle'"
            class="size-5"
          />
        </span>

        <div>
          <h3
            class="text-lg font-semibold text-highlighted"
            v-text="item.title"
          />

          <p
            class="mt-1 text-sm leading-6 text-muted"
            v-text="item.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
