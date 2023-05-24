<template>
  <img src="/imgs/背景图有字版本.png" alt="Bestable 百乐适" class="block object-cover w-full h-screen home-bg">
  <div>
    <div class="products-wrap grid grid-cols-2">
      <div class="product relative bg-white flex-col f-c-c space-y-6 p-4 group  sd-3-1" v-for="(product, index) in products" :class="'bok' + index"
        :key="index">
        <h2 class="keyword hover-scale" :class="product.kwcolor">
          {{  $t('keyword'+index) }}</h2>
        <h3 class="title hover-scale " :class="product.tittleClass"  >
          {{  $t('title'+index) }}</h3>
        <p class="desc hover-scale"> {{  $t('desc'+index) }}</p>
        <!-- 特效 -->
        <div class="absolute top-0 bottom-0 right-0 w-1/2 opacity-40 z-10">
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1 1" preserveAspectRatio="none">
            <defs>
              <linearGradient :id="'gradient' + index" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" :stop-color="product.from"></stop>
                <stop offset="0.5" :stop-color="product.via"></stop>
                <stop offset="1" :stop-color="product.to"></stop>
              </linearGradient>
            </defs>
            <path d="M0 1 Q 0.8 0.8 1 0 L 1 1 Z" :fill="'url(#gradient' + index + ')'"></path>
          </svg>
          <div class="mask">
          </div>
        </div>
      </div>
      <img v-for="(product, index) in products" :key="index" class="z-20" :class="'img' + index" :src="product.imgsrc"
        :alt="`${product.keyword}，${product.title}，${product.desc}`">
    </div>

  </div>
</template>
<style scoped lang='scss'></style>

<script setup>

const { locale } = useI18n()
const products = reactive([
  {
    kwcolor: 'text-#fbc545',
    imgsrc: '/imgs/主页宣传黄.png',
    keyword: '专利配方 筑梦成长',
    title: 'Bestable百乐适健长素酵母锌γ-氨基丁酸益生菌',
    desc: '江南大学专利配方，多国进口原材料，助儿身高成长',
    tittleClass: ' from-[#57A9FB] via-purple-400 to-[#fbc545]',
    from: '#57A9FB',
    via: '#C396ED',
    to: '#fbc545',
  },
  {
    kwcolor: 'text-#90cb1b',
    imgsrc: '/imgs/主页宣传绿.png',
    keyword: '多种酵素 突破瓶颈',
    title: 'Bestable百乐适畅益乐益生元综合果蔬酵素粉',
    desc: '针对亚洲人饮食特点设计，17种酵素定制而成，改善幼儿便秘问题',
    tittleClass: '  from-[#90cb1b] via-purple-400 to-[#57A9FB]',
    from: '#57A9FB',
    via: '#C396ED',
    to: '#90cb1b',
  },
  {
    kwcolor: 'text-purple-400',
    imgsrc: '/imgs/主页宣传紫.png',
    keyword: '双益结合 活力满满',
    title: 'Bestable百乐适畅益适益生菌',
    desc: '进口益生菌鼠李糖乳杆菌HN001+乳双歧杆菌HN019，双倍调节肠道菌群，每盒添加活性乳酸菌6000亿CFU',
    tittleClass: ' from-[#57A9FB] via-purple-400 to-[#fbc545]',
    from: '#B7F4EC',
    via: '#FB9DC7',
    to: '#C396ED',
  },
  {
    kwcolor: 'text-#57A9FB',
    imgsrc: '/imgs/主页宣传蓝.png',
    keyword: '纳米分散 高效吸收',
    title: 'Bestable百乐适植物乳植杆菌粉SNK',
    desc: '进口专利植物乳植杆菌粉SNK，每毫克含菌20亿，搭配进口浓缩乳清蛋白粉，提高免疫、润肠通便，加速营养吸收',
    tittleClass: ' from-[#fbc545] via-purple-400 to-[#57A9FB]',
    from: '#fbc545',
    via: '#89E9E0',
    to: '#57A9FB',
  }

])
const reverseGradient  = (product) => {
  const { from, via, to } = product
  product.from = to
  product.via = via
  product.to = from
}

</script>
<style lang="scss" scoped>
.products-wrap {
  grid-template-areas:
    "b0 g0"
    "g1 b1"
    "b2 g2"
    "g3 b3"
}
.bok0 {
  grid-area: b0;
}

.bok1 {
  grid-area: b1;
}

.bok2 {
  grid-area: b2;
}

.bok3 {
  grid-area: b3;
}

.img0 {
  grid-area: g0;
}

.img1 {
  grid-area: g1;
}

.img2 {
  grid-area: g2;
}

.img3 {
  grid-area: g3;
}
.keyword{
  @apply text-6xl font-bold z-20  transition-all duration-300 ease-in-out    
}
.title{
  @apply relative text-2xl bg-clip-text text-transparent bg-gradient-to-r  font-semibold z-20  transition-all duration-300 ease-in-out   
}
.desc{
  @apply  text-gray-700 z-20  transition-all duration-300  ease-in-out  
}
.mask{
  @apply absolute inset-0  bg-white  transition duration-300 ease-in-out  group-hover:translate-x-[100%] will-change-transform
}
.product:hover .hover-scale{
    transform: scale(1.05) translateY(-4px);
}
 
</style>

