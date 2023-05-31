  import {
    defineConfig, presetAttributify,
    presetUno, transformerVariantGroup,
    transformerDirectives, 
  } from 'unocss'
  import presetRemToPx from '@unocss/preset-rem-to-px'
  export default defineConfig({
    shortcuts: [
      ['flex-col', 'flex flex-col'],
      ['f-s-c', 'flex justify-start items-center'],
      ['f-c-c', 'flex justify-center items-center'],
      ['f-b-c', 'flex justify-between items-center'],
      ['f-c-s', 'flex justify-center items-stretch'],
      ['f-b-s', 'flex justify-between items-stretch'],
      ['f-r-c', 'flex justify-around items-center'],  
      //宽高相同
      [/^wh-(.+)$/, ([, c]) => `w-${c}  h-${c}`],
    ],
    rules: [
      [/^clamp-(\d+)$/, ([, d]) => ({
        'display': '-webkit-box',
        '-webkit-box-orient': ' vertical',
        '-webkit-line-clamp': d,
        'overflow': 'hidden',
      })],
      [/^sd-(\d+)-(\d+)$/, ([, d,a]) => ({
        'box-shadow': `0 0 ${d}px rgba(0, 0, 0, 0.${a})`,
      })],
    ],
    theme: {
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetRemToPx(),
    ],
    transformers: [
      transformerDirectives(), // @apply, @screen, @variants
      transformerVariantGroup(), //样式分组
    ],
  })