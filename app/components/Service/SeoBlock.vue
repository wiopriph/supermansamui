<script setup lang="ts">
type Props = {
  title: string
  paragraphs?: string[]
  list?: string[]
  tags?: string[]
};

defineProps<Props>();
</script>

<template>
  <section class="py-10 space-y-6">
    <h2 class="text-2xl sm:text-3xl font-semibold text-center mb-4">
      {{ title }}
    </h2>

    <div
      v-if="paragraphs?.length"
      class="space-y-4 text-base leading-7 text-gray-700 dark:text-gray-300"
    >
      <p
        v-for="(p, index) in paragraphs"
        :key="index"
      >
        {{ p }}
      </p>
    </div>

    <ul
      v-if="list?.length"
      class="mt-4 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
    >
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>

    <div
      v-if="tags?.length"
      class="mt-6 flex flex-wrap gap-2"
    >
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
      >
        {{ tag }}
      </span>
    </div>
  </section>
</template>
