<script setup lang='ts'>
const { locale } = useI18n();
defineProps(['i'])
</script>

<template>
   <!-- 宣传图 -->
  <img  class="brand-img  h-64" :src="`/home/promot/${i}.png`" />
   <!-- 文字介绍 -->
  <div class="product relative">
    <img :src="`/home/text/${locale}/${i}.jpg`" class=" wh-full" />
   <LearnMore :link="`/brand/${i}`" />
  </div>
</template>

<style scoped lang='scss'>
@media screen and (max-width: 768px) {
  .product {
    width: 100%;
  }
  .brand-img {
    width: 100%;
    min-height: 200px;
  }
}
</style>
