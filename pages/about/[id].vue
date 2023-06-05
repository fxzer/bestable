<template>

<div class="wrap flex-col f-c-c pb-20">
  <div class="title-bg h-100 f-c-c">
    <h2 class="text-5xl p-20 text-white">{{ $t('about'+id) }}</h2>
  </div>
  <p class="mt-20 text-xl leading-loose px-30 lg:px-50 xl:px-80">{{ $t(`aboutContent${id}[0]`) }}</p>
  <p class="mt-10 text-xl leading-loose px-30 lg:px-50 xl:px-80">{{ $t(`aboutContent${id}[1]`) }}</p>
</div>
</template>
<script setup lang='ts'>
const route = useRoute()
const id = ref(route.params.id)
</script>
<style scoped lang='scss'>
.wrap {
  min-height: calc(100vh - 64px - 328px)

}
.title-bg{
    background: url('/about.jpg') no-repeat center;
    background-size: cover;
    width: 100%;
  }
</style>