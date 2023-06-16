<script setup lang="ts">
const route = useRoute();
const id = ref(parseInt(route.params.id as string));
</script>

<template>
  <div class="flex-col f-c-s p-5 md:p-50">
    <h2 class="text-5xl mb-12">
      {{ $t(`lfArr[${ id  - 1}].title`) }}
    </h2>
    <img :src="`/life-way/${id}.jpg`" alt=""  class="w-200"/>
    <p class=" mt-10 text-lg">
      {{ $t(`lfArr[${ id   - 1}].desc`) }}
    </p>
  <!-- 第一个 -->
   <template v-if="id==1">
    <div class="text-left" v-for="idx in 3" :key="idx">
       <h3 class="text-xl mt-10 font-semibold w-full"> {{ $t(`lfArr[${ id  - 1}].parr[${idx -1}].title`) }}</h3>
       <div v-for="p in 3" :key="p">
        <template v-if="idx===2 && p===3"></template>
        <template v-else >
          <h4 class="text-lg font-semibold   mt-4 mb-2 text-slate-600">{{ $t(`lfArr[${ id  - 1}].parr[${idx -1}].t${p}`) }}</h4>
         <p class="text-lg leading-loose"> {{ $t(`lfArr[${ id  - 1}].parr[${idx -1}].d${p}`) }}</p>
        </template>
       </div>
    </div>
    <p class="mt-10 text-lg">
      {{ $t(`lfArr[${ id   - 1}].footer`) }}
    </p>
   </template>
   <!-- 第二个 -->
   <template v-else-if="id==2">
       <div v-for="i in 5" :key="i">
        <h4 class="text-lg font-semibold   mt-4 mb-2 text-slate-600">{{ $t(`sleeps[${ i - 1}].title`) }}</h4>
        <p class="text-lg leading-loose"> {{ $t(`sleeps[${ i - 1}].desc`)}}</p>
       </div>
  </template>
   <!-- 第三个 -->
   <template v-else-if="id==3">
       <div v-for="i in 12" :key="i">
          <p class="text-lg leading-loose my-2"> {{ $t(`kyhua[${ i - 1}]`)}}</p>
       </div>
  </template>
 
  </div>
</template>

