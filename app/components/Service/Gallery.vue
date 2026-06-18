<script setup lang="ts">
type GalleryItem = {
  src: string
  title: string
  alt: string
};

const props = defineProps<{
  title: string
  items: GalleryItem[]
}>();

const selectedIndex = ref(0);
const thumbsRef = ref<HTMLElement | null>(null);

const hasItems = computed(() => props.items.length > 0);
const hasMultiple = computed(() => props.items.length > 1);
const selected = computed(() => props.items[selectedIndex.value]);

watchEffect(() => {
  if (selectedIndex.value >= props.items.length) {
    selectedIndex.value = 0;
  }
});

const go = (index: number) => {
  selectedIndex.value = (index + props.items.length) % props.items.length;

  nextTick(() => {
    const el = thumbsRef.value?.children[selectedIndex.value] as HTMLElement;

    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
};

const prev = () => go(selectedIndex.value - 1);
const next = () => go(selectedIndex.value + 1);

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') prev();
  else if (e.key === 'ArrowRight') next();
};

// drag-to-swipe on desktop
const dragStart = ref<number | null>(null);

const onMousedown = (e: MouseEvent) => {
  dragStart.value = e.clientX;
};

const onMouseup = (e: MouseEvent) => {
  if (dragStart.value === null) return;

  const dx = e.clientX - dragStart.value;

  if (Math.abs(dx) > 40) dx < 0 ? next() : prev();

  dragStart.value = null;
};
</script>

<template>
  <section
    class="py-10 space-y-4 border-b border-default"
    tabindex="-1"
    @keydown="onKeydown"
  >
    <h2
      class="text-2xl sm:text-3xl font-semibold text-center"
      v-text="title"
    />

    <div
      v-if="hasItems"
      class="space-y-3"
    >
      <div
        class="relative overflow-hidden rounded-2xl bg-elevated select-none"
        :class="hasMultiple ? 'cursor-grab active:cursor-grabbing' : ''"
        @mousedown="onMousedown"
        @mouseup="onMouseup"
      >
        <img
          :src="selected?.src"
          :alt="selected?.alt || ''"
          class="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] object-cover pointer-events-none"
          draggable="false"
        >

        <template v-if="hasMultiple">
          <button
            type="button"
            aria-label="Previous"
            class="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            @click.stop="prev"
          >
            <UIcon
              name="i-lucide-chevron-left"
              class="size-5"
            />
          </button>

          <button
            type="button"
            aria-label="Next"
            class="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            @click.stop="next"
          >
            <UIcon
              name="i-lucide-chevron-right"
              class="size-5"
            />
          </button>

          <div
            class="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white"
          >
            {{ selectedIndex + 1 }} / {{ items.length }}
          </div>
        </template>

        <div
          v-if="selected?.title"
          class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-4 sm:p-5"
        >
          <p class="text-sm sm:text-base text-white pointer-events-none">
            {{ selected.title }}
          </p>
        </div>
      </div>

      <div
        v-if="hasMultiple"
        ref="thumbsRef"
        class="flex gap-2 overflow-x-auto pb-1 scroll-smooth"
        style="scrollbar-width: none;"
      >
        <button
          v-for="(item, index) in items"
          :key="index"
          type="button"
          class="relative flex-none overflow-hidden rounded-lg border-2 transition"
          :class="index === selectedIndex
            ? 'border-primary ring-2 ring-primary/20'
            : 'border-transparent opacity-60 hover:opacity-90'"
          style="width: 80px; height: 56px;"
          @click="go(index)"
        >
          <img
            :src="item.src"
            :alt="item.alt || ''"
            class="w-full h-full object-cover"
          >
        </button>
      </div>
    </div>
  </section>
</template>
