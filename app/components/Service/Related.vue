<script setup lang="ts">
type RelatedService = {
  icon: string
  title: string
  description: string
  to: string | Record<string, any>
};

defineProps<{
  title: string
  subtitle?: string
  items: RelatedService[]
}>();

const { t } = useI18n();
</script>

<i18n lang="json">
{
  "ru": {
      "learnMore": "Подробнее"
  },
  "en": {
      "learnMore": "Learn more"
  },
  "th": {
      "learnMore": "ดูเพิ่มเติม"
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6 border-b border-default">
    <div class="space-y-2 text-center">
      <h2
        class="text-2xl sm:text-3xl font-semibold"
        v-text="title"
      />

      <p
        v-if="subtitle"
        class="text-sm text-muted max-w-2xl mx-auto"
        v-text="subtitle"
      />
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <NuxtLink
        v-for="item in items"
        :key="String(item.to)"
        :to="item.to"
        class="group/related flex h-full gap-4 rounded-lg bg-default p-5 ring ring-default transition hover:bg-elevated/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div class="flex size-11 shrink-0 items-center justify-center text-primary">
          <UIcon
            :name="item.icon"
            class="size-6"
            aria-hidden="true"
          />
        </div>

        <div class="flex min-w-0 flex-1 flex-col gap-3">
          <div class="flex items-start justify-between gap-3">
            <h3
              class="text-base font-semibold leading-6 text-highlighted"
              v-text="item.title"
            />

            <UIcon
              name="i-lucide-arrow-up-right"
              class="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
          </div>

          <p
            class="text-sm leading-6 text-muted"
            v-text="item.description"
          />

          <div class="mt-auto flex items-center gap-2 pt-1 text-sm font-medium text-primary">
            <span>{{ t('learnMore') }}</span>

            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4 shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
