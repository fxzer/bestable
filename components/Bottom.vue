<script setup lang='ts'>
const paths = [
  '/',
  '/nutrition',
  '/form'
]
</script>

<template>
 <div class="w-full sd-3-1 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 md:h-96 bottom-0  p-10  md:(py-16 px-20)">
    <div v-for="(idx,i = idx -1) in 3">
      <h3 class="text-3xl">{{ $t(`footer[${i}].title`) }}</h3>
      <p class="text-xl my-4 md:(my-10 h-10) text-gray-600 ">{{ $t(`footer[${i}].desc`) }}</p>
      <a :href="paths[i]" class="f-s-c pt-4"  ><span class="border-2 border-primary h-8 f-c-c px-4">{{ $t(`footer[${i}].btn`) }}</span
        ><ArrowRight class="text-white w-14 h-8 bg-primary"
      /></a>
    </div>
  </div>
</template>

<style scoped lang='scss'>

</style>
