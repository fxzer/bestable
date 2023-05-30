<template>
  <div class="relative w-full -mt-16 h-screen text-white text-center">
    <img
      :src="homeBackground"
      alt="Bestable 百乐适"
      class="object-cover wh-full"
    />
    <div
      class="absolute top-1/2 left-1/2 -translate-1/2"
      v-if="locale !== 'zh'"
    >
      <h1 class="text-5xl mt-14">{{ $t("welcome") }}</h1>
      <h2 class="text-8xl font-bold mt-10 mb-6 ">
        {{ $t("bestable") }}
      </h2>
      <p class="text-2xltracking-widest">{{ $t("desc") }}</p>
    </div>
  </div>
  <!-- 产品列表 -->
  <div>
    <div class="flex flex-wrap text-bgray">
      <div class="product relative bg-gradient-to-tr from-#192D41 via-#23445c  to-#346589 flex-col f-c-c space-y-6 p-8 bg-g" :class="locale=== 'de' ? 'text-left':'text-center'">
        <h2 class="text-6xl font-bold text-white/90">
          {{ $t("keyword0") }}
        </h2>
        <h3 class="text-2xl font-semibold text-white/80 w-full">
          {{ $t("title0") }}
        </h3>
        <p class="desc hover-scale">{{ $t("desc0") }}</p>
        <NuxtLink to="/brand/1" class="f-s-c pt-4"  >
          <span class="border-2 border-white h-9 f-c-c px-4">了解详情</span><ArrowRight class=" w-14 h-9 bg-white"/>
        </NuxtLink>
      </div>
      <img class="brand-img" :src="products[0].imgsrc" />

      <img class="brand-img" :src="products[1].imgsrc" />
      <div class="product relative bg-gradient-to-tr from-#192D41 via-#23445c  to-#346589 flex-col f-c-c space-y-6 p-8" :class="locale=== 'de' ? 'text-left':'text-center'">
        <h2 class="text-6xl font-bold text-white/90">
          {{ $t("keyword1") }}
        </h2>
        <h3 class="text-2xl font-semibold text-white/80 w-full">
          {{ $t("title1") }}
        </h3>
        <p class="desc hover-scale">{{ $t("desc1") }}</p>
        <NuxtLink to="brand/2" class="f-s-c pt-4"  >
          <span class="border-2 border-white h-9 f-c-c px-4">了解详情</span><ArrowRight class=" w-14 h-9 bg-white"/>
        </NuxtLink>
      </div>

      <div class="product relative bg-gradient-to-tr from-#192D41 via-#23445c  to-#346589 flex-col f-c-c space-y-6 p-8" :class="locale=== 'de' ? 'text-left':'text-center'">
        <h2 class="text-6xl font-bold text-white/90">
          {{ $t("keyword2") }}
        </h2>
        <h3 class="text-2xl font-semibold text-white/80 w-full">
          {{ $t("title2") }}
        </h3>
        <p class="desc hover-scale">{{ $t("desc2") }}</p>
        <NuxtLink to="brand/3" class="f-s-c pt-4"  >
          <span class="border-2 border-white h-9 f-c-c px-4">了解详情</span><ArrowRight class=" w-14 h-9 bg-white"/>
        </NuxtLink>
      </div>
      <img class="brand-img" :src="products[2].imgsrc" />

      <img class="brand-img" :src="products[3].imgsrc" />
      <div class="product relative bg-gradient-to-tr from-#192D41 via-#23445c  to-#346589 flex-col f-c-c space-y-6 p-8" :class="locale=== 'de' ? 'text-left':'text-center'">
        <h2 class="text-6xl font-bold text-white/90">
          {{ $t("keyword3") }}
        </h2>
        <h3 class="text-2xl font-semibold text-white/80 w-full">
          {{ $t("title3") }}
        </h3>
        <p class="desc hover-scale">{{ $t("desc3") }}</p>
        <NuxtLink to="brand/4" class="f-s-c pt-4"  >
          <span class="border-2 border-white h-9 f-c-c px-4">了解详情</span><ArrowRight class=" w-14 h-9 bg-white"/>
        </NuxtLink>
      </div>
    </div>
  </div>
  <!-- 特效 -->
  <!-- <div class="absolute top-0 bottom-0 right-0 w-1/2 opacity-40 z-10">
  <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1 1" preserveAspectRatio="none">
<defs>
  <linearGradient :id="'gradient' + 1" x1="0" y1="1" x2="1" y2="0">
<stop offset="0" :stop-color="products[0].from"></stop>
<stop offset="0.5" :stop-color="products[0].via"></stop>
<stop offset="1" :stop-color="products[0].to"></stop>
  </linearGradient>
</defs>
<path d="M0 1 Q 0.8 0.8 1 0 L 1 1 Z" :fill="'url(#gradient' + index + ')'"></path>
  </svg>
  <div class="mask">
  </div>
</div> -->
</template>
<style scoped lang="scss"></style>

<script setup>
const { locale } = useI18n();
const homeBackground = computed(() => {
  return locale.value === "zh"
    ? "/imgs/背景图有字版本.png"
    : "/imgs/背景图无字版本.png";
});
const products = reactive([
  {
    kwcolor: "text-#fbc545",
    imgsrc: "/imgs/主页宣传黄.png",
    keyword: "专利配方 筑梦成长",
    title: "Bestable百乐适健长素酵母锌γ-氨基丁酸益生菌",
    desc: "江南大学专利配方，多国进口原材料，助儿身高成长",
    tittleClass: " from-[#57A9FB] via-purple-400 to-[#fbc545]",
    from: "#57A9FB",
    via: "#C396ED",
    to: "#fbc545",
  },
  {
    kwcolor: "text-#90cb1b",
    imgsrc: "/imgs/主页宣传绿.png",
    keyword: "多种酵素 突破瓶颈",
    title: "Bestable百乐适畅益乐益生元综合果蔬酵素粉",
    desc: "针对亚洲人饮食特点设计，17种酵素定制而成，改善幼儿便秘问题",
    tittleClass: "  from-[#90cb1b] via-purple-400 to-[#57A9FB]",
    from: "#57A9FB",
    via: "#C396ED",
    to: "#90cb1b",
  },
  {
    kwcolor: "text-purple-400",
    imgsrc: "/imgs/主页宣传紫.png",
    keyword: "双益结合 活力满满",
    title: "Bestable百乐适畅益适益生菌",
    desc: "进口益生菌鼠李糖乳杆菌HN001+乳双歧杆菌HN019，双倍调节肠道菌群，每盒添加活性乳酸菌6000亿CFU",
    tittleClass: " from-[#57A9FB] via-purple-400 to-[#fbc545]",
    from: "#B7F4EC",
    via: "#FB9DC7",
    to: "#C396ED",
  },
  {
    kwcolor: "text-#57A9FB",
    imgsrc: "/imgs/主页宣传蓝.png",
    keyword: "纳米分散 高效吸收",
    title: "Bestable百乐适植物乳植杆菌粉SNK",
    desc: "进口专利植物乳植杆菌粉SNK，每毫克含菌20亿，搭配进口浓缩乳清蛋白粉，提高免疫、润肠通便，加速营养吸收",
    tittleClass: " from-[#fbc545] via-purple-400 to-[#57A9FB]",
    from: "#fbc545",
    via: "#89E9E0",
    to: "#57A9FB",
  },
]);
</script>
<style lang="scss" scoped>
.product {
  width: 42%;
}
.brand-img {
  width: 58%;
}
</style>
