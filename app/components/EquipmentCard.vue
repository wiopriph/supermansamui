<script setup lang="ts">
type SpecChip = {
  icon: string
  value: string
};

const props = defineProps<{
  to: string
  image: string
  title: string
  subtitle?: string
  description?: string
  specs?: SpecChip[]
  priceLabel?: string
  priceValue?: string
  viewLabel: string
}>();
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="group flex flex-col overflow-hidden rounded-2xl bg-default ring ring-default transition hover:bg-elevated/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    <div class="aspect-video overflow-hidden bg-elevated">
      <img
        :src="props.image"
        :alt="props.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      >
    </div>

    <div class="flex flex-1 flex-col gap-4 p-5">
      <div>
        <p
          v-if="props.subtitle"
          class="text-xs font-semibold uppercase tracking-wider text-primary"
          v-text="props.subtitle"
        />

        <h3
          class="mt-1 text-xl font-bold text-highlighted"
          v-text="props.title"
        />

        <p
          v-if="props.description"
          class="mt-2 text-sm leading-6 text-muted line-clamp-3"
          v-text="props.description"
        />
      </div>

      <div
        v-if="props.specs && props.specs.length"
        class="flex flex-wrap gap-1.5"
      >
        <span
          v-for="chip in props.specs"
          :key="chip.value"
          class="inline-flex items-center gap-1 rounded-full bg-elevated px-2.5 py-1 text-xs font-medium text-muted ring ring-default"
        >
          <UIcon
            :name="chip.icon"
            class="size-3 shrink-0"
          />
          {{ chip.value }}
        </span>
      </div>

      <div class="mt-auto flex items-center justify-between border-t border-default pt-3">
        <div
          v-if="props.priceLabel && props.priceValue"
          class="text-sm text-muted"
        >
          <span
            class="text-base font-bold text-highlighted tabular-nums"
            v-text="props.priceValue"
          />
          {{ props.priceLabel }}
        </div>

        <span class="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
          {{ props.viewLabel }}
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
