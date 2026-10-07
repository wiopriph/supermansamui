<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
</script>

<template>
  <section class="py-12">
    <p
      class="mx-auto max-w-3xl text-center text-lg leading-8 text-toned"
      v-text="props.text"
    />
  </section>
</template>
