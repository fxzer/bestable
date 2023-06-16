<template>
  <div class="relative w-full -mt-16 h-600px md:h-screen text-white text-center">
    <img v-if="locale === 'zh'" src="/home/tiny/home-zh.jpg" class="object-cover wh-full" />
    <img v-else-if="locale === 'en'" src="/home/tiny/home-en.jpg" class="object-cover wh-full" />
    <img v-else-if="locale === 'de'" src="/home/tiny/home-de.jpg" class="object-cover wh-full" />
  </div>
  <!-- 产品列表 -->
  <div>
   
    <div class="flex flex-wrap text-bgray" v-if="mdAndSmaller">
      <img class="brand-img h-60" :src="products[0].imgsrc" />
      <div class="product relative ">
        <img v-if="locale === 'zh'" src="/home/text/zh/蓝色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/蓝色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/蓝色.jpg" class="object-cover wh-full" />
        <NuxtLink to="/brand/1" class="f-s-c absolute bottom-20 left-20 ">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5   bg-white" />
        </NuxtLink>
      </div>
     

      <img class="brand-img h-60" :src="products[1].imgsrc" />
      <div class="product relative ">
        <img v-if="locale === 'zh'" src="/home/text/zh/紫色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/紫色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/紫色.jpg" class="object-cover wh-full" />
        <NuxtLink to="brand/2" class="f-s-c absolute bottom-20 left-20 ">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5   bg-white" />
        </NuxtLink>
      </div>
      <img class="brand-img h-60" :src="products[2].imgsrc" />
      <div class="product relative ">
        <img v-if="locale === 'zh'" src="/home/text/zh/绿色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/绿色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/绿色.jpg" class="object-cover wh-full" />
        <NuxtLink to="brand/3" class="f-s-c absolute bottom-20 left-20 ">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5  bg-white" />
        </NuxtLink>
      </div>
      

      <img class="brand-img h-60" :src="products[3].imgsrc" />
      <div class="product relative ">
        <img v-if="locale === 'zh'" src="/home/text/zh/黄色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/黄色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/黄色.jpg" class="object-cover wh-full" />
        <NuxtLink to="brand/4" class="f-s-c absolute bottom-20 left-20 ">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5  bg-white" />
        </NuxtLink>
      </div>
    </div>
    <!-- 移动端 -->
    <div class="flex flex-wrap text-bgray"  v-else>
      <div class="product relative">
        <img v-if="locale === 'zh'" src="/home/text/zh/蓝色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/蓝色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/蓝色.jpg" class="object-cover wh-full" />
        <NuxtLink to="/brand/1" class="f-s-c absolute bottom-4 left-8 md:(bottom-30 left-40)">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5 md:(w-14 h-9) bg-white" />
        </NuxtLink>
      </div>
      <img class="brand-img" :src="products[0].imgsrc" />

      <img class="brand-img" :src="products[1].imgsrc" />
      <div class="product relative ">
        <img v-if="locale === 'zh'" src="/home/text/zh/紫色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/紫色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/紫色.jpg" class="object-cover wh-full" />
        <NuxtLink to="brand/2" class="f-s-c absolute bottom-4 left-8 md:(bottom-30 left-40)">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5 md:(w-14 h-9) bg-white" />
        </NuxtLink>
      </div>

      <div class="product relative ">
        <img v-if="locale === 'zh'" src="/home/text/zh/绿色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/绿色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/绿色.jpg" class="object-cover wh-full" />
        <NuxtLink to="brand/3" class="f-s-c absolute bottom-4 left-8 md:(bottom-30 left-40)">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5 md:(w-14 h-9) bg-white" />
        </NuxtLink>
      </div>
      <img class="brand-img" :src="products[2].imgsrc" />

      <img class="brand-img" :src="products[3].imgsrc" />
      <div class="product relative ">
        <img v-if="locale === 'zh'" src="/home/text/zh/黄色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'en'" src="/home/text/en/黄色.jpg" class="object-cover wh-full" />
        <img v-else-if="locale === 'de'" src="/home/text/de/黄色.jpg" class="object-cover wh-full" />
        <NuxtLink to="brand/4" class="f-s-c absolute bottom-4 left-8 md:(bottom-30 left-40)">
          <span class="border-1 md:border-2 border-white h-5 md:h-9 f-c-c px-2  md:px-4 text-xs md:text-sm">了解详情</span>
          <ArrowRight class="w-8 h-5 md:(w-14 h-9) bg-white" />
        </NuxtLink>
      </div>
    </div>
  </div>
  <Bottom />
</template>
<style scoped lang="scss"></style>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndSmaller = breakpoints.smallerOrEqual('md') 
let lc = ''
const { locale } = useI18n();
const products = reactive([
  {
    kwcolor: "text-#fbc545",
    imgsrc: "/imgs/主页宣传蓝.png",
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
    keyword: "多种酵素 突破瓶颈",
    imgsrc: "/imgs/主页宣传紫.png",
    title: "Bestable百乐适畅益乐益生元综合果蔬酵素粉",
    desc: "针对亚洲人饮食特点设计，17种酵素定制而成，改善幼儿便秘问题",
    tittleClass: "  from-[#90cb1b] via-purple-400 to-[#57A9FB]",
    from: "#57A9FB",
    via: "#C396ED",
    to: "#90cb1b",
  },
  {
    kwcolor: "text-purple-400",
    imgsrc: "/imgs/主页宣传绿.png",

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

    imgsrc: "/imgs/主页宣传黄.png",
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
@media screen and (min-width: 768px) {
  .product {
    width: 42%;
  }

  .brand-img {
    width: 58%;
  }
}

@media screen and (max-width: 768px) {
  .product {
    width: 100%;
  }
  .brand-img {
    width: 100%;
    min-height: 200px;
  }
}
</style>
