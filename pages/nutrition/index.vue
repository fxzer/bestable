<script setup lang='ts'>

</script>

<template>
  <div class="mb-20 px-4  md:px-30 lg:px-50 xl:px-80 text-xl">
    <h1 class="text-5xl my-10 leading-normal">{{ $t('nutrition.title') }}</h1>
    <header class="mb-10">{{ $t('nutrition.header') }}</header>
    <h2 class="font-semibold mb-8">{{ $t('nutrition.subTitle') }}</h2>
    <section v-for="i in 5" class="mb-8">
      <h2 class="  font-semibold mb-3">{{ $t(`nutrition.content[${i-1}].title`) }}</h2>
      <p  >{{ $t(`nutrition.content[${i-1}].desc`) }}</p>
    </section>
    <footer>{{ $t('nutrition.footer') }}</footer>
  </div>
</template>

<style scoped lang='scss'>

</style>
