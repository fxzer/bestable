<template>
  <div class="relative text-bgray ">
    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"     data-v-12008bb2=""
      class="cursor-pointer wh-6  hover:text-white " @click="optionVisible = !optionVisible">
      <path fill="currentColor"
        d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z">
      </path>
    </svg>
    <!-- 语言选项 -->
    <div
      class="absolute top-full -translate-x-1/2 space-y-1  sd-10-2  shadow-gray-400 bg-primary/80  p-1 "
      v-if="optionVisible">
      <div class=" whitespace-nowrap px-2 py-1 hover:(bg-white/40 text-white/80)  cursor-pointer"
        :class="locale === item.value ? 'bg-white/60 text-white font-semibold' : ''" :value="item.value" v-for="item in locales"
        @click="toggleLocale(item)">{{ item.name }}</div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const optionVisible = ref(false)
const locales = reactive([
  {
    name: 'English',
    value: 'en'
  },
  {
    name: '简体中文',
    value: 'zh'
  },
  {
    name: 'Deutsch',
    value: 'de'
  }
])
type Locale = {
  name: string
  value: string
}
const toggleLocale = (item: Locale) => {
  optionVisible.value = !optionVisible.value
  locale.value = item.value
}
</script>
<style scoped lang='scss'></style>