<template>
  <header
    class="w-full h-16  fixed top-0 left-0   z-40  backdrop-blur-lg flex saturate-200  bg-white/50  items-center justify-between py-4 px-8 border-b border-slate-100 shadow-sm shadow-slate-300/10"
  >
  <div class="flex divide-x ">
    <div class="text-sm text-slate-700 font-medium hidden md:flex ">
      <a
        href="#"
        class="px-4 hover:text-sky-500 "
        >Docs</a
      >
      <a
        href="#"
        class="px-4 hover:text-sky-500  "
        >Blog</a
      >
      <a
        href="#"
        class="px-4 hover:text-sky-500  "
        >Components</a
      >
      <a
        href="#"
        class="px-4 hover:text-sky-500  "
        >Playground</a
      >
    </div>
  </div>
  <LocaleBtn />
  </header>
</template>

<script setup lang="ts">
const isDark = ref(false);
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>
