<script setup lang="ts">
import { getEquipmentByCategory, type Equipment } from '~/data/equipment';


const { t } = useI18n();
const localePath = useLocalePath();

const excavators = getEquipmentByCategory('excavator');
const trucks = getEquipmentByCategory('truck');
const tractors = getEquipmentByCategory('tractor');

const categories = computed(() => [
  { key: 'excavator', label: t('categories.excavator'), items: excavators },
  { key: 'truck', label: t('categories.truck'), items: trucks },
  { key: 'tractor', label: t('categories.tractor'), items: tractors },
].filter(c => c.items.length > 0));

function specChips(item: Equipment) {
  const chips = [];

  if (item.specs.operatingWeight) {
    chips.push({ icon: 'i-lucide-weight', value: item.specs.operatingWeight });
  }

  if (item.specs.maxDigDepth) {
    chips.push({ icon: 'i-lucide-ruler', value: item.specs.maxDigDepth });
  }

  if (item.specs.bucketCapacity) {
    chips.push({ icon: 'i-lucide-cup-soda', value: item.specs.bucketCapacity });
  }

  if (item.specs.payload) {
    chips.push({ icon: 'i-lucide-package', value: item.specs.payload });
  }

  if (item.specs.bodyVolume) {
    chips.push({ icon: 'i-lucide-box', value: item.specs.bodyVolume });
  }

  if (item.specs.bladeWidth) {
    chips.push({ icon: 'i-lucide-move-horizontal', value: item.specs.bladeWidth });
  }

  if (item.specs.enginePower) {
    chips.push({ icon: 'i-lucide-zap', value: item.specs.enginePower });
  }

  return chips.slice(0, 3);
}

function startingPrice(item: Equipment): { value: string; label: string } | null {
  if (item.prices.hour) {
    return {
      value: `${item.prices.hour}`,
      label: t('prices.hour'),
    };
  }

  if (item.prices.trip) {
    return {
      value: `${item.prices.trip}`,
      label: t('prices.trip'),
    };
  }

  return null;
}

useHead(() => ({
  title: t('seo.title'),
  meta: [
    { name: 'description', content: t('seo.description') },
    { property: 'og:title', content: t('seo.title') },
    { property: 'og:description', content: t('seo.description') },
  ],
}));
</script>

<i18n lang="json">
{
  "ru": {
    "seo": {
      "title": "Наша техника на Самуи — экскаваторы и самосвалы",
      "description": "Список строительной техники Superman Samui: экскаваторы и самосвалы с техническими характеристиками и стоимостью аренды."
    },
    "title": "Наша техника",
    "description": "Собственный парк строительной техники на Самуи. Технические характеристики, стоимость аренды, фотографии.",
    "categories": {
      "excavator": "Экскаваторы",
      "truck": "Самосвалы",
      "tractor": "Тракторы"
    },
    "specs": {
      "payload": "Грузоподъёмность",
      "bodyVolume": "Объём кузова",
      "maxDigDepth": "Глубина копания",
      "operatingWeight": "Рабочая масса"
    },
    "prices": {
      "hour": "₿/час",
      "shift": "₿/смена",
      "trip": "₿/рейс"
    },
    "viewDetails": "Подробнее",
    "currency": "฿"
  },
  "en": {
    "seo": {
      "title": "Our equipment on Koh Samui — excavators and dump trucks",
      "description": "Superman Samui construction equipment: excavators and dump trucks with full specs and hire rates."
    },
    "title": "Our equipment",
    "description": "Own fleet of construction machinery on Koh Samui. Specifications, hire rates and photos.",
    "categories": {
      "excavator": "Excavators",
      "truck": "Dump trucks",
      "tractor": "Tractors"
    },
    "specs": {
      "payload": "Payload",
      "bodyVolume": "Body volume",
      "maxDigDepth": "Max dig depth",
      "operatingWeight": "Operating weight"
    },
    "prices": {
      "hour": "฿/hr",
      "shift": "฿/shift",
      "trip": "฿/trip"
    },
    "viewDetails": "View details",
    "currency": "฿"
  },
  "th": {
    "seo": {
      "title": "เครื่องจักรของเรา — รถขุดและรถดั๊มพ์บนเกาะสมุย",
      "description": "เครื่องจักรก่อสร้าง Superman Samui: รถขุดและรถดั๊มพ์ พร้อมสเปคและราคา"
    },
    "title": "เครื่องจักรของเรา",
    "description": "ฝูงบินเครื่องจักรก่อสร้างของตัวเองบนเกาะสมุย สเปค ราคา และรูปภาพ",
    "categories": {
      "excavator": "รถขุด",
      "truck": "รถดั๊มพ์",
      "tractor": "แทรกเตอร์"
    },
    "specs": {
      "payload": "น้ำหนักบรรทุก",
      "bodyVolume": "ปริมาตรกระบะ",
      "maxDigDepth": "ความลึกขุดสูงสุด",
      "operatingWeight": "น้ำหนักปฏิบัติการ"
    },
    "prices": {
      "hour": "฿/ชม.",
      "shift": "฿/กะ",
      "trip": "฿/เที่ยว"
    },
    "viewDetails": "ดูรายละเอียด",
    "currency": "฿"
  }
}
</i18n>

<template>
  <div class="py-10 sm:py-14 space-y-14">
    <section class="text-center space-y-4">
      <h1 class="text-3xl sm:text-4xl font-bold text-highlighted">
        {{ t('title') }}
      </h1>

      <p class="text-base sm:text-lg text-muted">
        {{ t('description') }}
      </p>
    </section>

    <div
      v-for="category in categories"
      :key="category.key"
      class="space-y-6"
    >
      <h2 class="text-2xl font-semibold text-highlighted sm:text-3xl">
        {{ category.label }}
      </h2>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <EquipmentCard
          v-for="item in category.items"
          :key="item.id"
          :to="localePath({ name: 'equipment-slug', params: { slug: item.id } })"
          :image="item.image"
          :title="item.name"
          :subtitle="item.i18n[$i18n.locale as 'en' | 'ru' | 'th']?.type ?? item.i18n.en.type"
          :description="item.i18n[$i18n.locale as 'en' | 'ru' | 'th']?.summary ?? item.i18n.en.summary"
          :specs="specChips(item)"
          :priceLabel="startingPrice(item)?.label"
          :priceValue="startingPrice(item)?.value"
          :viewLabel="t('viewDetails')"
        />
      </div>
    </div>
  </div>
</template>
