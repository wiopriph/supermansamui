<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
</script>

<template>
  <section class="py-12">
    <p
      class="max-w-3xl text-lg leading-8 text-toned"
      v-text="props.text"
    />
  </section>
</template>
