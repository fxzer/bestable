<script setup lang='ts'>
const { locale } = useI18n();
defineProps(['i'])
const imgRef = ref();
onMounted(() => {
  imgRef.value.addEventListener('load', onLoad);
});
const isLoaded = ref(false);
const onLoad = () => {
  isLoaded.value = true;
}
</script>

<template>
   <!-- 宣传图 -->
  <img class="brand-img  h-64" :src="`/home/promot/${i}.png`" />
   <!-- 文字介绍 -->
  <div class="product relative">
    <img :src="`/home/text/${locale}/${i}.jpg`" class=" wh-full" ref="imgRef"/>
   <LearnMore :link="`/brand/${i}`" v-if="isLoaded"/>
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
