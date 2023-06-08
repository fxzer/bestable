<template>
  <div class="w-full text-sm">
    <Header />
    <div id="content" class="pt-16 w-full">
      <slot />
    </div>
    <Footer /> 
  </div>
</template>

<script setup >
import Header from './default/Header.vue'
import Footer from './default/Footer.vue'

</script>

<style scoped lang="scss">
</style>