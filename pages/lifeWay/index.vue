<script setup lang="ts"></script>

<template>
  <div class="flex-col f-s-c p-20">
    <h2 class="text-5xl mb-12">{{ $t("lfTitle") }}</h2>
    <div class="grid grid-cols-3 gap-10">
      <NuxtLink
        v-for="idx in 3"
        :to="`/lifeWay/${idx}`"
        class="bg-zinc-50/50 hover:sd-15-2 sd-10-2  group"
      >
        <img :src="`/imgs/lf${idx}.jpg`" alt="" />
        <div class="p-6">
          <h3 class="mb-4 text-xl">{{ $t(`lfArr[${idx - 1}].title`) }}</h3>
          <p class="text-zinc-600 text-base">
            {{ $t(`lfArr[${idx - 1}].desc`) }}
          </p>
          <p class="flex justify-end mt-4">
            <ArrowRight class="text-white w-16 h-8 bg-#57A9FB/60  group-hover:bg-#57A9FB" />
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
