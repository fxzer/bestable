<template>
  <div class="bg-primary w-full py-10">
    <div class="w-300 mx-auto">
      <div class="space-x-6 f-s-c">
        <NuxtLink to="/"
          ><img src="/logo.png" alt="" class="block h-15"
        /></NuxtLink>
        <p class="text-white">联系我们</p>
        <img src="/wechat.png" alt="" />
        <img src="/weibo.png" alt="" />
      </div>
      <div class="leading-loose mt-8 f-s-c space-x-30">
        <div>
          <h2 class="text-white/50 text-lg font-semibold mb-2">品牌家族</h2>
          <div class="flex-col f-c-s space-y-2">
            <NuxtLink
              @click="goTo(idx, 'brand')"
              class="hover:text-white text-white/80 text-base cursor-pointer"
              v-for="idx in 4"
            >
              {{ $t(`title${idx - 1}`) }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <h2 class="text-white/50 text-lg font-semibold mb-2">关于百乐适</h2>
          <div class="flex-col f-c-s space-y-2">
            <NuxtLink v-for="idx in 3" :to="`/about/${idx}`" class="hover:text-white text-white/80 text-base cursor-pointer">
              {{ $t(`about${idx}`) }}
            </NuxtLink>
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
