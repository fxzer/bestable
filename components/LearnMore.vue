<script setup lang='ts'>
defineProps(['link'])
</script>

<template>
  <NuxtLink :to="link" class="f-s-c absolute bottom-20% left-21% h-6 text-bgray">
    <span class="border-1 border-white h-full  f-c-c px-2 text-xs">{{ $t('learnMore')
    }}</span>
    <ArrowRight class="w-8 h-full bg-white" />
  </NuxtLink>
</template>

<style scoped lang='scss'></style>
