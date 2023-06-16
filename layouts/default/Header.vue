<template>
  <header
    class="w-screen h-16 fixed top-0 left-0 z-50  bg-gradient-to-tr from-#192D41 via-#23445c  to-#2b5472 f-b-c px-4 lg:px-10 text-bgray  shadow-sm shadow-bgray/40">
    <MenuBtn class="cursor-pointer block md:hidden hover:text-white" @click="showMenu" />
    <NuxtLink to="/"><img src="/logo.png" alt="" class="block h-15"></NuxtLink>
    <div class="w-110  w-800px text-sm f-c-c h-full  hidden md:flex space-x-16 font-medium">
      <NuxtLink :to="nav.path" class="nav-bar f-c-c text-lg flex-1 h-full hover:text-white" v-for="nav in navs"
        :key="nav.key" :class="isActive(nav) ? 'text-white' : 'text-bgray'" @mouseenter="curNav = nav">{{ $t(nav.key) }}
      </NuxtLink>
    </div>
    <div class="f-c-c md:space-x-6">
      <LocaleBtn />
      <NuxtLink to="/help" class="hover:text-white hidden md:block">{{
        $t("helpAndQuery")
      }}</NuxtLink>
    </div>
  </header>


  <!-- 下拉面板 :PC端  -->
  <Transition name="custom-classes" enter-active-class="animate__animated animate__slideInDown"
    leave-active-class="animate__animated animate__slideOutUp">
    <div v-if="curNav?.popper" ref="popper"
      class="popper top-16 fixed left-0 w-full overflow-auto p-10 z-40   backdrop-blur-lg saturate-200 bg-white/60 shadow-md shadow-gray-600/10">
      <!-- 品牌 -->
      <div class="brands w-1260px mx-auto grid grid-cols-4 gap-8" v-if="curNav.key === 'brand'">
        <NuxtLink @click="goTo(idx, 'brand')" class="nav-bar f-c-c hover:text-primary text-xl  cursor-pointer"
          v-for="idx in 4" :class="<any>route.params.id == idx ? 'text-primary' : 'text-primary/80'">
          <img :src="`/header/${idx}.png`" class="block min-w-14 mr-4px h-25 -translate-y-2 rounded-sm" />
          <h2 class="clamp-2" :title="$t(`title${idx}`)">{{ $t(`title${idx}`) }}</h2>
        </NuxtLink>
      </div>

      <!-- 关于 -->
      <div class="brands f-c-c space-x-40" v-else-if="curNav.key === 'about'">
        <NuxtLink @click="goTo(idx, 'about')" class="nav-bar cursor-pointer f-c-c   hover:text-primary text-xl "
          :class="<any>route.params.id == idx ? 'text-primary' : 'text-primary/80'" v-for="idx in 3">
          <h2>{{ $t(`about${idx}`) }}</h2>
        </NuxtLink>
      </div>
    </div>
  </Transition>

  <!-- 移动端 -->
  <Transition name="custom-classes" enter-active-class="animate__animated  animate__slideInDown"
   >
    <div v-if="menuVisible" class="popper popper-tw top-16 md:hidden custom-enter">
      <div class="mx-auto">
        <el-collapse class="block md:hidden">
          <template v-for="nav in navs" :key="nav.key">
            <!-- 品牌 -->
            <el-collapse-item :title="$t(nav.key)" class="level-1" v-if="nav.key === 'brand'">
              <NuxtLink @click="goTo(idx, 'brand')" class="nav-bar f-s-c hover:text-primary text-xl  cursor-pointer"
                v-for="idx in 4" :class="<any>route.params.id == idx ? 'text-primary' : 'text-primary/80'">
                <img :src="`/header/${idx}.png`" class="block min-w-14 mr-4px h-25 -translate-y-2 rounded-sm" />
                <h2 class="clamp-2 text-lg" :title="$t(`title${idx}`)">{{ $t(`title${idx}`) }}</h2>
              </NuxtLink>
            </el-collapse-item>
            <!-- 关于 -->
            <el-collapse-item :title="$t(nav.key)" class="level-1" v-else-if="nav.key === 'about'">
              <div class="brands f-c-c space-x-4 py-2" :class="locale !='zh' ?'flex-col' : 'flex-row'">
                <NuxtLink @click="goTo(idx, 'about')" class="nav-bar cursor-pointer f-c-c  text-lg  hover:text-primary "
                  :class="<any>route.params.id == idx ? 'text-primary' : 'text-primary/80'" v-for="idx in 3">
                  <h2>{{ $t(`about${idx}`) }}</h2>
                </NuxtLink>
              </div>
            </el-collapse-item>
           <template v-else>
            <NuxtLink to="/lifeWay" @click="menuVisible = false"  class="text-lg font-semibold block h-12 leading-12 text-gray-700 border-b"  >{{  $t("lifeWay") }}</NuxtLink>
            <NuxtLink to="/help" @click="menuVisible = false"  class="text-lg font-semibold block h-12 leading-12 text-gray-700"  >{{  $t("helpAndQuery") }}</NuxtLink>
           </template>
          </template>
        </el-collapse>
       
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { locale } = useI18n()
const navs = useNavs();
const curNav = ref<any>({});
const popper = ref();

const isActive = (nav: any) => route.path.includes(nav.key as string);
const goTo = (idx: number, key: string) => {
  menuVisible.value = false
  router.push(`/${key}/${idx}`);
  curNav.value = {};
};
function mouseMove(e: MouseEvent) {
  let navList = document.querySelectorAll(".nav-bar");
  const isInNav = Array.from(navList).some((nav) =>
    nav.contains(e.target as HTMLElement)
  );
  const isPopper = popper.value?.contains(e.target as HTMLElement);
  if (!isPopper && !isInNav) curNav.value = {};
}
onMounted(() => {
  document.addEventListener("mousemove", mouseMove);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousemove", mouseMove);
});
const menuVisible = ref(false)
// 移动端显示菜单
function showMenu() {
  menuVisible.value = !menuVisible.value
}
</script>
<style lang="scss" scoped>
.popper-tw {
  @apply fixed left-0 w-full overflow-auto p-10 z-40 bg-white shadow-md shadow-gray-600/10;
}

.level-1.el-collapse-item :deep(.el-collapse-item__header) {
  @apply font-semibold text-lg text-gray-700;
}
</style>