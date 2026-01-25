<script setup lang="ts">
import {
  CONTACT_PHONE,
  SOCIALS_WHATSAPP,
  SOCIALS_LINE,
  SOCIALS_MESSENGER,

} from '~/constants/contacts';


const props = defineProps<{
  title: string
  description: string
  imageSrc: string
}>();

const socials = computed(() => [
  {
    icon: 'i-lucide-phone',
    label: CONTACT_PHONE,
    link: `tel:${CONTACT_PHONE}`,
  },
  {
    icon: 'i-simple-icons-whatsapp',
    link: SOCIALS_WHATSAPP,
  },
  {
    icon: 'i-simple-icons-line',
    link: SOCIALS_LINE,
  },
  {
    icon: 'i-simple-icons-facebook',
    link: SOCIALS_MESSENGER,
  },
].filter((item) => item.link));
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
        :alt="title"
        fetchpriority="high"
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

          <div class="flex flex-nowrap sm:flex-wrap justify-center md:justify-end gap-3">
            <UButton
              v-for="(social, index) in socials"
              :key="index"
              :to="social.link"
              target="_blank"
              :icon="social.icon"
              color="primary"
              variant="solid"
              size="lg"
            >
              <span
                v-if="social.label"
                class="hidden sm:block"
                v-text="social.label"
              />
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
