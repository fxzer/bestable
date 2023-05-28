<template>
  <header
    class="w-full h-16 fixed top-0   left-0 z-50 backdrop-blur-lg saturate-200 bg-white/50 f-b-c px-4 lg:px-10 shadow-sm shadow-slate-300/40"
  >
    <NuxtLink to="/">LOGO</NuxtLink>
    <div
      class="w-800px text-sm f-c-c   h-full space-x-16 text-slate-700 font-medium "
    >
      <NuxtLink :to="nav.path"  class="nav-bar f-c-c   text-lg flex-1 h-full hover:text-sky-600" v-for="nav in navs" :key="nav.key" 
    
       @mouseenter="curNav = nav"
        >{{
        $t(nav.key)
      }}</NuxtLink>
    </div>
    <div class="f-c-c space-x-6">
      <LocaleBtn />
      <NuxtLink to="/help" class="hover:text-sky-600" >{{ $t('helpAndQuery') }}</NuxtLink>
    </div>
  </header>
    <!-- 下拉面板 :PC端  -->
    <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__slideInDown"
    leave-active-class="animate__animated animate__slideOutUp"
  >
    <div
      v-if="curNav?.popper"
      ref="popper"
      class="popper top-16 fixed left-0 w-full overflow-auto p-10 z-40 backdrop-blur-lg saturate-200 bg-white/60 shadow-md shadow-gray-600/10"
    >
    <!-- 品牌 -->
    <div class="brands w-bx grid grid-cols-4 gap-8" v-if="curNav.key === 'brand'" >
      <NuxtLink @click="goTo(idx,'brand')"   class="nav-bar f-c-c  text-slate-700   hover:text-sky-600 text-xl font-mono" v-for="idx in 4"   
        >
      <img :src="`/imgs/brand${idx}.jpg`" alt="" class="block w-20 h-20  mr-4">
      <h2>{{ $t(`title${idx}`) }}</h2>
      </NuxtLink> 
    </div>

    <!-- 关于 -->
    <div class="brands f-c-c  space-x-40" v-else-if="curNav.key === 'about'" >
      <NuxtLink @click="goTo(idx,'about')"   class="nav-bar cursor-pointer f-c-c  text-slate-700   hover:text-sky-600 text-xl font-mono" v-for="idx in 3"   
        >
      <h2>{{ $t(`about${idx}`) }}</h2>
      </NuxtLink> 
    </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isDark = ref(false);
const router = useRouter();
const navs = useNavs();
const curNav = ref({});
const popper = ref();
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
const goTo = (idx:number,key:string) => {
  router.push(`/${key}/${idx}`);
  curNav.value = {};
};
function mouseMove(e: MouseEvent) {
  let navList = document.querySelectorAll(".nav-bar");
  const isInNav =  Array.from(navList).some((nav) => nav.contains(e.target as HTMLElement));
  const isPopper = popper.value?.contains(e.target as HTMLElement)
  if (!isPopper && !isInNav)  curNav.value = {}
}
onMounted(() => {
  document.addEventListener('mousemove', mouseMove)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', mouseMove)
})
</script>
