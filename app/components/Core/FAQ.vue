<script setup lang="ts">
type FaqItem = {
  question: string
  answer: string
};

const props = defineProps<{
  title: string
  items: FaqItem[]
}>();

const accordionItems = computed(() =>
  props.items.map((item, index) => ({
    label: item.question,
    content: item.answer,
    value: String(index),
  })),
);

const faqJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: props.items.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}));

useHead(() => ({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify(faqJsonLd.value),
  }],
}));
</script>

<template>
  <section class="py-10 border-b border-gray-50">
    <h2
      v-if="props.title"
      class="text-xl md:text-2xl font-semibold text-center"
      v-text="props.title"
    />

    <UAccordion
      :items="accordionItems"
      :unmountOnHide="false"
      type="multiple"
    />
  </section>
</template>
