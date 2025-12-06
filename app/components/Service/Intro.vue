<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
</script>

<template>
  <section class="py-10 border-b border-gray-50">
    <p
      class="text-gray-600 leading-relaxed text-center"
      v-text="props.text"
    />
  </section>
</template>
