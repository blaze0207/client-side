<template lang="pug">
#v-image.image.container
  .image__box
    // img(src='../res/logo_html.png')
    svg(viewBox='0 0 452 520')
      path(fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512')
      path(fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37')
      path(fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z')
      path(fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z')
    h3 HTML5 Markup
    | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus commodi harum, molestiae non sint sit repudiandae odit ducimus neque, minima.
  .image__box
    // img(src='../res/logo_css.png')
    svg(viewBox="0 0 452 520")
      path(fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460')
      path(fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37')
      path(fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z')
      path(fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z')
    h3 CSS3 Style
    | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus commodi harum, molestiae non sint sit repudiandae odit ducimus neque, minima.
  .image__box
    // img(src='../res/logo_brush.jpg')
    svg(viewBox="0 0 452 520")
      path(fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512')
      path(fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37')
      path(fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z')
      path(fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z')
    h3 Graphic Design
    | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus commodi harum, molestiae non sint sit repudiandae odit ducimus neque, minima.
</template>

<script>
export default {
  name: 'Image',
}
</script>

<style lang="sass" scoped>
.image
  display: flex
  justify-content: space-between
  margin: 20px auto
  &__box
    align-items: center
    display: flex
    flex-direction: column
    justify-content: center
    padding: 0 10px
    svg
      width: 200px
      height: 200px

@media (max-width: 991px)
  .container
    align-items: center
    display: flex
    flex-direction: column
    justify-content: center
    .image__box
      margin: 10px 0
      h3
        margin-top: 0
</style>
