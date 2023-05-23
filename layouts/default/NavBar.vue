<template>
  <div
    class="w-full h-[60px] sticky top-0 z-40 left-0 backdrop-blur flex  items-center justify-between py-4 px-8 border-b border-slate-100 shadow-sm lignt:shadow-slate-300/10 bg-white/10 dark:border-slate-300/10 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75 dark:text-white"
  >
    <div class="flex items-center">
      <NavLogo />
      <span
        class="text-xs ml-4 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 text-slate-400  "
        >v3.5.1</span
      >
    </div>
  <div class="flex divide-x ">
    <div class="text-sm text-slate-700 font-medium hidden md:flex ">
      <a
        href="#"
        class="px-4 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400"
        >Docs</a
      >
      <a
        href="#"
        class="px-4 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400"
        >Blog</a
      >
      <a
        href="#"
        class="px-4 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400"
        >Components</a
      >
      <a
        href="#"
        class="px-4 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400"
        >Playground</a
      >
    </div>
    <div class="flex mx-4 pl-4">
      <a
        href="#"
        class="px-2"
        @click="toggleTheme"
      >
        <DarkIcon v-if="isDark" /> <LightIcon v-else />
      </a>
      <a href="#" class="px-2 text-gray-400  hover:text-gray-600 dark:text-gray-400 dark:hover:text-slate-200"
        ><GithubIcon />
      </a>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import NavLogo from "./NavLogo.vue";
import DarkIcon from "./DarkIcon.vue";
import LightIcon from "./LightIcon.vue";
import GithubIcon from "./GithubIcon.vue";
import { ref } from "vue";
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
