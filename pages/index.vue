<template>
  <div class="relative w-full -mt-16 h-600px md:h-screen text-white text-center">
    <img :src="`/home/origin/${locale}.jpg`" class="object-cover wh-full" />
  </div>
  <!-- 移动端 -->
  <div v-if="mdAndSmaller">
    <HomeBlockMobile v-for="i in 4" :key="i" :i="i" />
  </div>
  <!-- PC端 -->
  <div v-else>
    <HomeBlockPC v-for="i in 4" :key="i" :i="i" />
  </div>
  <Bottom />
</template>
<style scoped lang="scss"></style>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndSmaller = breakpoints.smallerOrEqual('md') 
const { locale } = useI18n();
</script>
