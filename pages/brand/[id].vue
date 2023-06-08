<template>

<div>
<div class="flex-col f-c-c px-0 md:px-10">
  <h2 class="text-3xl md:text-5xl my-10 px-3 md:text-center">{{ $t('title'+(id-1)) }}</h2>
 <img :src="`/imgs/brand${id}_bk.jpg`"  class="w-150 md:h-250 md:mb-20">
</div>
</div>
</template>
<script setup lang='ts'>
const route = useRoute()
const id = ref(route.params.id)
</script>
<style scoped lang='scss'>

</style>