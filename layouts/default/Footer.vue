<template>
  <div class="bg-primary w-full p-10">
    <div class="w-full md:w-300 mx-auto ">
      <div class=" f-s-c flex-col  items-start md:items-center space-y-4 md:(space-x-6 space-y-0) md:flex-row">
        <NuxtLink to="/"><img src="/logo.png" alt="" class="block h-15 " /></NuxtLink>
        <p class="text-white">{{ $t('concat') }}</p>
        <div class="f-s-c space-x-4">
          <NuxtLink
            @click="openTab('https://www.douyin.com/user/MS4wLjABAAAA2Po-Ena_CJHF9MPOpopQ25UzlCB4UMgohrurrkgfbc8Lq4fAUnUOPgPGa0hDbbT4')">
            <img src="/concat/douyin.svg" class="wh-10 p-1.5 bg-black rounded-md cursor-pointer" /></NuxtLink>
          <NuxtLink @click="openTab('https://www.xiaohongshu.com/user/profile/60bdbd7c000000000101e521')"><img
              src="/concat/red-book.png" class="h-10 mt-3 cursor-pointer" /></NuxtLink>

        </div>
      </div>
      <div class="leading-loose mt-8 flex flex-col md:flex-row space-y-10  md:(space-x-30 space-y-0)">
        <div>
          <h2 class="text-white/50 text-lg font-semibold mb-2">{{ $t('brands') }}</h2>
          <div class="flex-col f-c-s space-y-2">
            <NuxtLink @click="goTo(idx, 'brand')" class="hover:text-white text-white/80 text-base cursor-pointer"
              v-for="idx in 4">
              {{ $t(`title${idx}`) }}
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
      <div class="text-white/80 f-s-c space-x-2  mt-4">
        <img src="/beian.png" alt=""><span>苏ICP备2023020722号-1</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
const goTo = (idx: number, key: string) => {
  router.push(`/${key}/${idx}`);
};
//新标签页打开
const openTab = (link:string) => {
  window.open(link)
}
</script>
<style scoped lang="scss"></style>
