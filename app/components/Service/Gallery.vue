<script setup lang="ts">
const selectedIndex = ref(0);

type GalleryItem = {
  src: string
  title: string
  alt: string
};

const props = defineProps<{
  title: string
  items: GalleryItem[]
}>();

const hasItems = computed(() => props.items.length > 0);
const hasMultipleItems = computed(() => props.items.length > 1);
const selectedItem = computed(() => props.items[selectedIndex.value]);

watchEffect(() => {
  if (!props.items.length) {
    selectedIndex.value = 0;

    return;
  }

  if (selectedIndex.value > props.items.length - 1) {
    selectedIndex.value = 0;
  }
});

const selectItem = (index: number) => {
  selectedIndex.value = index;
};

const showPrevious = () => {
  if (!props.items.length) {
    return;
  }

  selectedIndex.value = selectedIndex.value === 0 ?
    props.items.length - 1 :
    selectedIndex.value - 1;
};

const showNext = () => {
  if (!props.items.length) {
    return;
  }

  selectedIndex.value = selectedIndex.value === props.items.length - 1 ?
    0 :
    selectedIndex.value + 1;
};
</script>

<template>
  <section class="py-10 space-y-6 border-b border-gray-50">
    <h2
      class="text-xl md:text-2xl font-semibold text-center"
      v-text="props.title"
    />

    <div
      v-if="hasItems"
      class="space-y-4 pt-2"
    >
      <div class="relative overflow-hidden rounded-2xl bg-gray-100">
        <img
          :src="selectedItem?.src"
          :alt="selectedItem?.alt || ''"
          class="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] object-cover"
        >

        <div
          v-if="hasMultipleItems"
          class="absolute inset-x-0 top-0 flex items-center justify-between p-3 sm:p-4"
        >
          <div class="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
            {{ selectedIndex + 1 }} / {{ props.items.length }}
          </div>

          <div class="flex items-center gap-2">
            <UButton
              icon="i-lucide-chevron-left"
              color="neutral"
              variant="solid"
              size="sm"
              class="rounded-full"
              @click="showPrevious"
            />

            <UButton
              icon="i-lucide-chevron-right"
              color="neutral"
              variant="solid"
              size="sm"
              class="rounded-full"
              @click="showNext"
            />
          </div>
        </div>

        <div
          v-if="selectedItem?.title"
          class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-4 sm:p-5"
        >
          <p class="text-sm sm:text-base text-white">
            {{ selectedItem.title }}
          </p>
        </div>
      </div>

      <div
        v-if="hasMultipleItems"
        class="hidden lg:grid lg:grid-cols-6 gap-2"
      >
        <button
          v-for="(item, index) in props.items"
          :key="index"
          type="button"
          class="group relative overflow-hidden rounded-lg border transition"
          :class="index === selectedIndex ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200 hover:border-gray-300'"
          @click="selectItem(index)"
        >
          <img
            :src="item.src"
            :alt="item.alt || ''"
            class="w-full aspect-[4/3] object-cover"
          >

          <div
            class="absolute inset-0 bg-black/0 transition group-hover:bg-black/5"
            :class="index === selectedIndex ? 'bg-black/10' : ''"
          />
        </button>
      </div>
    </div>
  </section>
</template>
