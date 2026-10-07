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
  <section class="py-14 space-y-8">
    <CoreSectionHeading :title="title" />

    <div
      v-if="paragraphs?.length"
      class="max-w-3xl space-y-3 text-base leading-7 text-toned"
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
      class="mt-4 list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-300"
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
