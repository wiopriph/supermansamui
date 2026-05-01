<script setup lang="ts">
type ServiceItem = {
  key: string
  title: string
  text: string
  image: string
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
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ title }}
      </h2>

      <p class="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
    </div>

    <UBlogPosts
      orientation="horizontal"
      class="lg:gap-y-6 gap-6 sm:gap-6"
    >
      <UBlogPost
        v-for="service in items"
        :key="service.key"
        :description="service.text"
        :image="service.image"
        :to="service.to"
        :ui="{
          root: 'h-full',
          body: 'gap-2',
          image: 'aspect-video object-cover',
          title: 'text-base font-semibold text-gray-900 dark:text-white',
          description: 'text-sm leading-6 text-gray-600 dark:text-gray-300',
        }"
      >
        <template
          v-if="service.to"
          #title
        >
          <div class="flex items-center justify-between gap-3">
            <span>{{ service.title }}</span>

            <div class="flex items-center gap-1 text-sm text-primary shrink-0 opacity-80 transition-transform duration-200 group-hover:translate-x-1">
              <span class="hidden md:block">{{ details }}</span>

              <UIcon
                name="i-lucide-arrow-right"
                class="w-4 h-4"
              />
            </div>
          </div>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </section>
</template>
