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
  <section class="py-14">
    <CoreSectionHeading
      v-if="props.title"
      :title="props.title"
    />

    <UAccordion
      :items="accordionItems"
      :unmountOnHide="false"
      type="multiple"
      class="mt-8 max-w-3xl"
    />
  </section>
</template>
