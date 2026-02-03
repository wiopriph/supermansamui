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
}>();

const formatValue = (value: string | number) => typeof value === 'number' ? value.toLocaleString('en-US') : value;

const { t } = useI18n();

const emit = defineEmits(['click']);
</script>

<i18n lang="json">
{
  "ru": {
    "price": "Цена",
    "order": "Заказать"
  },
  "en": {
    "price": "Price",
    "order": "Order now"
  },
  "th": {
    "price": "ราคา",
    "order": "สั่งงาน"
  }
}
</i18n>

<template>
  <UBlogPost
    :date="subtitle"
    :title="title"
    :image="image"
    :ui="{
      authors:'pt-3 gap-x-3 gap-y-1.5',
      description: 'h-full'
    }"
    orientation="vertical"
    variant="outline"
  >
    <template #description>
      <div class="flex flex-col h-full pt-3">
        <p
          v-if="description"
          class="
            text-sm
            text-gray-600
            leading-snug
            mb-3
            line-clamp-4
          "
          v-text="description"
        />

        <div
          v-if="prices && prices.length"
          class="
            mt-auto
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            p-4
          "
        >
          <p class="text-xs uppercase tracking-wide text-gray-800 mb-3">
            {{ t('price') }}
          </p>

          <div class="space-y-2">
            <div
              v-for="(price, index) in prices"
              :key="index"
              class="flex justify-between items-baseline gap-4"
            >
              <span class="text-sm text-gray-600">
                {{ price.label }}
              </span>

              <span class="text-lg font-bold text-gray-800 whitespace-nowrap">
                {{ formatValue(price.value) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #authors>
      <UButton
        :to="`tel:${CONTACT_PHONE}`"
        block
        color="primary"
        size="lg"
        @click="emit('click')"
      >
        {{ buttonText || t('order') }}
      </UButton>
    </template>
  </UBlogPost>
</template>
