<template>
  <div class="bg-primary w-full py-10">
    <div class="w-300 mx-auto">
      <div class="space-x-6 f-s-c">
        <NuxtLink to="/"><img src="/logo.png" alt="" class="block h-15" /></NuxtLink>
        <p class="text-white">{{ $t('concat') }}</p>
        <img src="/wechat.png" class="wh-9" alt="" />
        <img src="/douyin.svg" class="wh-10 p-1.5 bg-black rounded-md" alt="" />
        <img src="/red-book.png" class="h-10 mt-3" alt="" />
      </div>
      <div class="leading-loose mt-8 flex space-x-30">
        <div>
          <h2 class="text-white/50 text-lg font-semibold mb-2">{{ $t('brands') }}</h2>
          <div class="flex-col f-c-s space-y-2">
            <NuxtLink @click="goTo(idx, 'brand')" class="hover:text-white text-white/80 text-base cursor-pointer"
              v-for="idx in 4">
              {{ $t(`title${idx - 1}`) }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <h2 class="text-white/50 text-lg font-semibold mb-2">{{ $t('about') }}</h2>
          <div class="flex-col f-c-s space-y-2">
            <NuxtLink v-for="idx in 3" :to="`/about/${idx}`"
              class="hover:text-white text-white/80 text-base cursor-pointer">
              {{ $t(`about${idx}`) }}
            </NuxtLink>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <p class="mr-3 text-white/50 text-lg font-semibold">
              {{ $t('hostline') }}
            </p>
            <p class="text-base text-white/80 whitespace-nowrap font-semibold">
              {{ $t('mrlin') }} 13609555669
            </p>
          </div>
          <div>
            <p class="mr-3 mt-6  text-white/50 text-lg font-semibold">
              {{ $t('servline') }}
            </p>
            <p class="text-base whitespace-nowrap text-white/80 font-semibold">
              400-920-9008
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const goTo = (idx: number, key: string) => {
  router.push(`/${key}/${idx}`);
};
</script>
<style scoped lang="scss"></style>
