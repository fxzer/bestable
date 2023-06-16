<template>

<div class="wrap flex-col f-c-c ">
  <div class="title-bg h-66 md:h-100 f-c-c">
    <h2 class="text-5xl  p-15 text-white">{{ $t('about'+id) }}</h2>
  </div>
  <div class="py-20 text-xl space-y-10 leading-loose px-4 md:px-30 lg:px-50 xl:px-80">
    <p>{{ $t(`aboutContent${id}[0]`) }}</p>
    <p>{{ $t(`aboutContent${id}[1]`) }}</p>
  </div>
 
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