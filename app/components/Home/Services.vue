<script setup lang="ts">
type ServiceItem = {
  key: string
  title: string
  text: string
  image: string
  imageAlt?: string
  to?: string | Record<string, any>
};

defineProps<{
  title: string
  subtitle: string
  details: string
  items: ServiceItem[]
}>();
</script>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-8">
      <div class="space-y-2 text-center">
        <h2
          class="text-2xl sm:text-3xl font-semibold"
          v-text="title"
        />

        <p
          class="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          v-text="subtitle"
        />
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="service in items"
          :key="service.key"
          :to="service.to"
          class="relative group/service flex h-full flex-col overflow-hidden rounded-lg bg-default ring ring-default transition hover:bg-elevated/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <div class="aspect-video overflow-hidden bg-elevated">
            <img
              :src="service.image"
              :alt="service.imageAlt || service.title"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-300 group-hover/service:scale-[1.03]"
            >
          </div>

          <div class="flex flex-1 flex-col gap-3 p-5">
            <div class="flex items-start justify-between gap-3">
              <h3
                class="text-base font-semibold leading-6 text-highlighted"
                v-text="service.title"
              />

              <UIcon
                name="i-lucide-arrow-up-right"
                class="mt-0.5 h-4 w-4 shrink-0 text-primary"
              />
            </div>

            <p
              class="text-sm leading-6 text-muted"
              v-text="service.text"
            />

            <div class="mt-auto flex items-center gap-2 pt-1 text-sm font-medium text-primary">
              <span v-text="details" />

              <UIcon
                name="i-lucide-arrow-up-right"
                class="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
