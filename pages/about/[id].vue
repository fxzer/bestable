<template>

<div class="wrap flex-col f-c-c p-20">
  <h2 class="text-5xl ">{{ $t('about'+id) }}</h2>
  <p class="mt-10 text-xl leading-loose px-20">{{ $t(`aboutContent${id}[0]`) }}</p>
  <p class="mt-10 text-xl leading-loose px-20">{{ $t(`aboutContent${id}[1]`) }}</p>
</div>
</template>
<script setup lang='ts'>
const route = useRoute()
const id = ref(route.params.id)
</script>
<style scoped lang='scss'>
.wrap {
  min-height: calc(100vh - 64px - 328px)
}
</style>