<script setup lang="ts">
import { CONTACT_PHONE } from '~/constants/contacts';


type PriceItem = {
  label: string
  value: string | number
};

const props = defineProps<{
  title: string
  subtitle?: string
  image?: string
  description?: string
  prices?: PriceItem[]
  buttonText?: string
  to?: string
}>();

const formatValue = (value: string | number) => typeof value === 'number' ? value.toLocaleString('en-US') : value;

const { t } = useI18n();

const emit = defineEmits(['click']);
</script>

<i18n lang="json">
{
  "ru": {
    "order": "Заказать",
    "details": "Подробнее"
  },
  "en": {
    "order": "Order now",
    "details": "View details"
  },
  "th": {
    "order": "สั่งงาน",
    "details": "รายละเอียด"
  }
}
</i18n>

<template>
  <div class="flex flex-col overflow-hidden rounded-2xl bg-default ring ring-default">
    <div
      v-if="image"
      class="aspect-video overflow-hidden bg-elevated"
    >
      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="h-full w-full object-cover"
      >
    </div>

    <div class="flex flex-1 flex-col gap-4 p-5">
      <div>
        <p
          v-if="subtitle"
          class="text-xs font-semibold uppercase tracking-wider text-primary"
          v-text="subtitle"
        />

        <h3
          class="mt-1 text-xl font-bold text-highlighted"
          v-text="title"
        />

        <p
          v-if="description"
          class="mt-2 text-sm leading-6 text-muted line-clamp-3"
          v-text="description"
        />
      </div>

      <div
        v-if="prices && prices.length"
        class="mt-auto rounded-xl bg-elevated/60 ring ring-default divide-y divide-default"
      >
        <div
          v-for="(price, index) in prices"
          :key="index"
          class="flex items-center justify-between gap-4 px-4 py-3"
        >
          <span
            class="text-sm text-muted"
            v-text="price.label"
          />

          <span
            class="text-base font-bold text-highlighted tabular-nums"
            v-text="formatValue(price.value)"
          />
        </div>
      </div>

      <div class="flex gap-2 pt-1">
        <UButton
          v-if="props.to"
          :to="props.to"
          color="neutral"
          variant="outline"
          size="md"
          class="flex-1 justify-center"
        >
          {{ t('details') }}
        </UButton>

        <UButton
          :to="`tel:${CONTACT_PHONE}`"
          color="primary"
          size="md"
          class="flex-1 justify-center"
          @click="emit('click')"
        >
          {{ buttonText || t('order') }}
        </UButton>
      </div>
    </div>
  </div>
</template>
