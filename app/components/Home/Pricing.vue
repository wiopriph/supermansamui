<script setup lang="ts">
import { PRICING } from '~/constants/pricing';


const { t } = useI18n();

const excavators = [
  {
    labelKey: 'pricing.excavators.pc30',
    prices: [
      { key: 'hour', value: PRICING.excavators.pc30.hour },
      { key: 'shift', value: PRICING.excavators.pc30.shift },
    ],
  },
  {
    labelKey: 'pricing.excavators.cat305cr',
    prices: [
      { key: 'hour', value: PRICING.excavators.cat305cr.hour },
      { key: 'shift', value: PRICING.excavators.cat305cr.shift },
    ],
  },
  {
    labelKey: 'pricing.excavators.pc128',
    prices: [
      { key: 'hour', value: PRICING.excavators.pc128.hour },
      { key: 'shift', value: PRICING.excavators.pc128.hour },
    ],
  },
];

const trucks = [
  {
    labelKey: 'pricing.trucks.elf',
    prices: [
      { key: 'trip', value: PRICING.trucks.elf.trip },
      { key: 'shift', value: PRICING.trucks.elf.shift },
    ],
  },
  {
    labelKey: 'pricing.trucks.hino300',
    prices: [
      { key: 'trip', value: PRICING.trucks.hino300.trip },
      { key: 'shift', value: PRICING.trucks.hino300.shift },
    ],
  },
  {
    labelKey: 'pricing.trucks.fm18',
    prices: [
      { key: 'trip', value: PRICING.trucks.fm18.trip },
      { key: 'shift', value: PRICING.trucks.fm18.shift },
    ],
  },
];
</script>

<i18n lang="json">
{
  "ru": {
    "pricing": {
      "hour": "от {price} бат/час",
      "trip": "от {price} бат/рейс",
      "shift": "от {price} бат/смена",
      "title": "Цены",
      "lead": "Базовые цены на популярные услуги. Точный расчёт зависит от объёма, подъезда и условий на участке.",
      "excavators": {
        "title": "Экскаваторы",
        "pc30": "Мини-экскаватор",
        "cat305cr": "Средний экскаватор",
        "pc128": "Большой экскаватор"
      },
      "trucks": {
        "title": "Грузовики и самосвалы",
        "elf": "Компактный самосвал",
        "hino300": "6-колёсный самосвал",
        "fm18": "10-колёсный самосвал"
      },
      "extraTitle": "Дополнительно",
      "crane": "Кран - от {price} бат/час",
      "delivery": "Доставка экскаватора - {price} бат. Бесплатно от 3 часов работы.",
      "note": "Чтобы получить точную цену, отправьте локацию, фото подъезда и короткое описание задачи."
    }
  },
  "en": {
    "pricing": {
      "hour": "from {price} THB/hour",
      "trip": "from {price} THB/trip",
      "shift": "from {price} THB/shift",
      "title": "Prices",
      "lead": "Base prices for common jobs. Final cost depends on volume, site access and conditions.",
      "excavators": {
        "title": "Excavators",
        "pc30": "Mini excavator",
        "cat305cr": "Medium excavator",
        "pc128": "Large excavator"
      },
      "trucks": {
        "title": "Trucks & dump trucks",
        "elf": "Compact dump truck",
        "hino300": "6-wheel dump truck",
        "fm18": "10-wheel dump truck"
      },
      "extraTitle": "Additional",
      "crane": "Crane - from {price} THB/hour",
      "delivery": "Excavator delivery - {price} THB. Free from 3 hours.",
      "note": "To get an exact quote, send your location, access photos and a short job description."
    }
  },
  "th": {
    "pricing": {
      "hour": "เริ่มต้น {price} บาท/ชั่วโมง",
      "trip": "เริ่มต้น {price} บาท/เที่ยว",
      "shift": "เริ่มต้น {price} บาท/กะ",
      "title": "ราคา",
      "lead": "ราคาเริ่มต้นสำหรับงานที่พบบ่อย ราคาจริงขึ้นอยู่กับปริมาณงาน ทางเข้า และสภาพหน้างาน",
      "excavators": {
        "title": "รถขุด",
        "pc30": "รถขุดเล็ก",
        "cat305cr": "รถขุดขนาดกลาง",
        "pc128": "รถขุดขนาดใหญ่"
      },
      "trucks": {
        "title": "รถบรรทุกและรถดั๊ม",
        "elf": "รถดั๊มขนาดเล็ก",
        "hino300": "รถดั๊ม 6 ล้อ",
        "fm18": "รถดั๊ม 10 ล้อ"
      },
      "extraTitle": "เพิ่มเติม",
      "crane": "บริการเครน - เริ่มต้น {price} บาท/ชั่วโมง",
      "delivery": "ค่าขนส่งรถขุด - {price} บาท ฟรีเมื่อใช้งานตั้งแต่ 3 ชั่วโมงขึ้นไป",
      "note": "ส่งโลเคชัน รูปทางเข้า และรายละเอียดงาน เพื่อคำนวณราคาที่แม่นยำ"
    }
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ t('pricing.title') }}
      </h2>

      <p class="text-sm text-gray-600 max-w-2xl mx-auto">
        {{ t('pricing.lead') }}
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <UCard>
        <template #header>
          <div class="font-semibold">
            {{ t('pricing.excavators.title') }}
          </div>
        </template>

        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="row in excavators"
              :key="row.labelKey"
              class="border-b border-gray-100 last:border-b-0"
            >
              <td class="py-3 pr-4 text-gray-700">
                {{ t(row.labelKey) }}
              </td>

              <td class="py-3 text-right">
                <div class="space-y-1">
                  <I18nT
                    v-for="price in row.prices"
                    :key="price.key"
                    :keypath="`pricing.${price.key}`"
                    tag="div"
                    class="whitespace-nowrap"
                  >
                    <template #price>
                      <strong v-text="price.value" />
                    </template>
                  </I18nT>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </UCard>

      <UCard>
        <template #header>
          <div class="font-semibold">
            {{ t('pricing.trucks.title') }}
          </div>
        </template>

        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="row in trucks"
              :key="row.labelKey"
              class="border-b border-gray-100 last:border-b-0"
            >
              <td class="py-3 pr-4 text-gray-700">
                {{ t(row.labelKey) }}
              </td>

              <td class="py-3 text-right">
                <div class="space-y-1">
                  <I18nT
                    v-for="price in row.prices"
                    :key="price.key"
                    :keypath="`pricing.${price.key}`"
                    tag="div"
                    class="whitespace-nowrap"
                  >
                    <template #price>
                      <strong v-text="price.value" />
                    </template>
                  </I18nT>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <div class="font-semibold">
          {{ t('pricing.extraTitle') }}
        </div>
      </template>

      <div class="space-y-2 text-sm">
        <p>
          {{ t('pricing.crane', { price: PRICING.crane.hour }) }}
        </p>

        <p>
          {{ t('pricing.delivery', { price: PRICING.delivery.excavator }) }}
        </p>
      </div>
    </UCard>

    <p class="text-sm text-center text-gray-600 max-w-2xl mx-auto">
      {{ t('pricing.note') }}
    </p>
  </section>
</template>
