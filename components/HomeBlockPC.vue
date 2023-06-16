<template>
  <div class="flex">
    <!-- 文字介绍 -->
    <div class="product relative min-h-100  hidden md:block">
      <!-- <img v-if="locale === 'zh'" :src="`/home/text/zh/${i}.jpg`" class="wh-full" />
      <img v-else-if="locale === 'en'" :src="`/home/text/en/${i}.jpg`" class="wh-full" />
      <img v-else="locale==='de'" :src="`/home/text/de/${i}.jpg`" class="wh-full" /> -->
      <img :src="`/home/text/${locale}/${i}.jpg`" class=" wh-full" />
      <NuxtLink :to="`/brand/${i}`" class="f-s-c absolute bottom-20% left-20% ">
        <span class="border-2 border-white text-white h-9 f-c-c px-4 text-sm">{{
          $t('learnMore') }}</span>
        <ArrowRight class=" w-14 h-9  bg-white" />¸
      </NuxtLink>
    </div>
    <!-- 宣传图 -->
    <img class="brand-img min-h-100 hidden md:block" :src="`/home/promot/${i}.png`" />
  </div>
</template>

<script lang="ts"  setup>
defineProps(['i'])
const { locale } = useI18n();

</script>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .product {
    width: 42%;
  }

  .brand-img {
    width: 58%;
  }
}
</style>

