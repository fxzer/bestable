<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div class="flex-col f-s-c p-6 pt-12  md:p-20">
    <h2   :class="locale !='zh' ? 'text-10' : 'text-5xl'">{{ $t("helpAndQuery") }}</h2>
    <h2 class=" font-semibold pt-12 md:pt-20 pb-10"  :class="locale !='zh'? 'text-26px' : 'text-4xl'">{{ $t("Anti-counterfeiting query") }}</h2>
    <h3 class="text-2xl  ">{{ $t('queryWayTitle') }}</h3>
    <img src="/qrcode.jpg" alt="" class="my-10">
  </div>
</template>

<style scoped lang="scss"></style>
