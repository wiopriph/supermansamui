<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  phone: string
  buttonLabel: string
  imageSrc: string
}>();
</script>

<template>
  <section class="relative -mx-4 sm:-mx-6 lg:-mx-8">
    <div
      class="
        relative
        min-h-[420px] sm:min-h-[460px] lg:min-h-[540px]
        flex items-end
      "
    >
      <img
        :src="imageSrc"
        alt=""
        class="
          absolute inset-0 w-full h-full
          object-cover
          object-center md:object-left
        "
      >

      <div class="absolute inset-0 bg-black/30" />

      <div
        class="
          relative z-10
          mx-auto max-w-6xl
          w-full
          px-4 sm:px-6 lg:px-8
          py-6 sm:py-10
          flex
          justify-center md:justify-end
        "
      >
        <div class="max-w-xl text-white text-center md:text-right">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {{ title }}
          </h1>

          <p class="text-base sm:text-lg text-white/80 mb-6">
            {{ description }}
          </p>

          <UButton
            color="primary"
            size="lg"
            icon="i-lucide-phone"
            :to="`tel:${phone}`"
          >
            {{ buttonLabel }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
