<script setup lang='ts'>

</script>

<template>
 <div class="w-full sd-3-1 grid grid-cols-4 gap-10 h-96 bottom-0 py-16 p-8">
    <div v-for="(idx,i = idx -1) in 4">
      <h3 class="text-3xl">{{ $t(`footer[${i}].title`) }}</h3>
      <p class="text-xl my-10 text-gray-600 h-10">{{ $t(`footer[${i}].desc`) }}</p>
      <a href="" class="f-s-c pt-4"  ><span class="border-2 border-primary h-8 f-c-c px-4">{{ $t(`footer[${i}].btn`) }}</span
        ><ArrowRight class="text-white w-14 h-8 bg-primary"
      /></a>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
