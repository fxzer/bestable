<template>
  <div class="relative w-full -mt-16 h-600px md:h-screen text-white text-center">
    <img :src="`/home/origin/${locale}.jpg`" class="object-cover wh-full" />
  </div>
  <!-- 移动端 -->
  <div  class="block md:hidden">
    <HomeBlockMobile v-for="i in 4" :key="i" :i="i" />
  </div>
  <!-- PC端 -->
  <div class="hidden md:block">
    <template v-for="i in 4" :key="i">
      <HomeBlockPC  :i="i" v-if="i % 2" />
      <HomeBlockPCRev  :i="i" v-else />
    </template>
  </div>
  <Bottom />
</template>
<style scoped lang="scss"></style>

<script setup>
const { locale } = useI18n();
</script>
