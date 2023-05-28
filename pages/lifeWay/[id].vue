<script setup lang="ts">
const route = useRoute();
const id = ref(parseInt(route.params.id as string));
</script>

<template>
  <div class="flex-col f-c-s p-50">
    <h2 class="text-5xl mb-12">
      {{ $t(`lfArr[${ id  - 1}].title`) }}
    </h2>
    <img :src="`/imgs/lf${id}.jpg`" alt=""  class="w-200"/>
    <p class=" mt-10 text-lg">
      {{ $t(`lfArr[${ id   - 1}].desc`) }}
    </p>

   <template v-if="id==1">
    <div class="text-left" v-for="(idx,i = idx -1) in 3" >
       <h3 class="text-xl mt-10 font-semibold w-full"> {{ $t(`lfArr[${ id  - 1}].parr[${i}].title`) }}</h3>
       <div v-for="p in 3">
        <template v-if="i==1 && p===3"></template>
        <template v-else >
          <h4 class="text-lg font-semibold   mt-4 mb-2 text-slate-600">{{ $t(`lfArr[${ id  - 1}].parr[${i}].t${p}`) }}</h4>
         <p class="text-lg leading-loose"> {{ $t(`lfArr[${ id  - 1}].parr[${i}].d${p}`) }}</p>
        </template>
       </div>
    </div>
    <p class="mt-10 text-lg">
      {{ $t(`lfArr[${ id   - 1}].footer`) }}
    </p>
   </template>
   <template v-else-if="id==2">
       <div v-for="i in 5">
        <h4 class="text-lg font-semibold   mt-4 mb-2 text-slate-600">{{ $t(`sleeps[${ i - 1}].title`) }}</h4>
        <p class="text-lg leading-loose"> {{ $t(`sleeps[${ i - 1}].desc`)}}</p>
       </div>
  </template>
   <template v-else-if="id==3">
       <div v-for="i in 12">
          <p class="text-lg leading-loose my-2"> {{ $t(`kyhua[${ i - 1}]`)}}</p>
       </div>
  </template>
 
  </div>
</template>

<style scoped lang="scss"></style>
