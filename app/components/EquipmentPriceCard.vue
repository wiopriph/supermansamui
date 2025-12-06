<script setup lang="ts">
import { CONTACT_PHONE } from '~/constants/contacts';


type SpecItem = {
  label: string
  value: string | number
};

type PriceItem = {
  label: string
  value: string | number
};

const props = defineProps<{
  title: string
  image?: string
  specs: SpecItem[]
  prices: PriceItem[]
  buttonText?: string
}>();

const formatValue = (value: string | number) =>
  typeof value === 'number' ? value.toLocaleString('en-US') : value;

const { t } = useI18n();
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
    :image="props.image"
    :title="title"
    orientation="vertical"
    variant="outline"
  >
    <template #description>
      <div class="flex-1 flex flex-col gap-3 pt-3">
        <div
          v-if="specs.length"
          class="space-y- text-sm text-gray-600"
        >
          <div
            v-for="(spec, index) in specs"
            :key="index"
            class="flex justify-between gap-3 border-b border-gray-100 py-1"
          >
            <span class="text-gray-500">
              {{ spec.label }}
            </span>

            <span class="font-medium">
              {{ formatValue(spec.value) }}
            </span>
          </div>
        </div>

        <div
          v-if="prices.length"
          class="mt-auto pt-3"
        >
          <p
            class="text-sm font-semibold mb-2"
            v-text="t('price')"
          />

          <div class="space-y-1 text-sm mb-4">
            <div
              v-for="(price, index) in prices"
              :key="index"
              class="flex justify-between gap-3"
            >
              <span class="text-gray-500">
                {{ price.label }}
              </span>

              <span class="font-semibold">
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
      >
        {{ buttonText || t('order') }}
      </UButton>
    </template>
  </UBlogPost>
</template>
