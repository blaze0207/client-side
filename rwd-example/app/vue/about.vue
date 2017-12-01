<template lang="pug">
#v-about.container
  .description
    .description__topic1
      h3.description__title About vegetables
      .description__content
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quis commodi, molestiae at nihil velit inventore quo! Libero distinctio, eos repellendus maxime odit fugiat quia harum perferendis quas mollitia alias cupiditate magnam est deserunt laboriosam, nostrum labore porro qui, delectus suscipit eveniet. Soluta praesentium, deleniti molestias ipsa repudiandae beatae porro.
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis doloribus mollitia facilis maiores dolorem qui. Praesentium ut veniam cum nesciunt velit hic, eveniet. Necessitatibus vel tenetur laborum perferendis fuga amet itaque molestias dicta totam veritatis animi nesciunt, voluptate, temporibus aperiam, repellendus autem accusamus, dolorem maxime id voluptas quam blanditiis et fugit ipsum nam. Facere alias id beatae ipsa fuga exercitationem, eveniet reprehenderit enim suscipit. Omnis ad illum consequatur quo qui provident velit quasi ipsum, iste reprehenderit possimus, incidunt doloremque impedit sunt! Delectus autem veniam obcaecati ipsum id labore tenetur, nobis odio dolor dolorem inventore architecto optio temporibus sit repellat.
    .description__topic2
      h3.description__title What we do vegetables
      .description__content: p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quis commodi, molestiae at nihil velit inventore quo! Libero distinctio, eos repellendus maxime odit fugiat quia harum perferendis quas mollitia alias cupiditate magnam est deserunt laboriosam, nostrum labore porro qui, delectus suscipit eveniet. Soluta praesentium, deleniti molestias ipsa repudiandae beatae porro.
  .thumb
    h3.thumb__title View thumb image
    .thumb__box
      .thumb__image
        img(src='../res/box1.jpg')
        span Image 1
      .thumb__image
        img(src='../res/box2.jpg')
        span Image 2
      .thumb__image
        img(src='../res/box3.jpg')
        span Image 3
    .thumb__box
      .thumb__image
        img(src='../res/box7.jpg')
        span Image 4
      .thumb__image
        img(src='../res/box5.jpg')
        span Image 5
      .thumb__image
        img(src='../res/box6.jpg')
        span Image 6
  .image
    .image__title
      h3 View image
    .image__image
      img(src='../res/box4.jpg')
      span Bridge
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="sass" scoped>
#v-about
  padding: 20px 0
.description
  display: flex
  &__topic1
    flex: 3
  &__topic2
    flex: 2
    margin-left: 20px
.thumb
  &__box
    display: flex
    justify-content: space-between
    margin: 20px 0
  &__image
    text-align: center
    img
      width: 300px
    span
      display: block
.image
  &__image
    text-align: center
    img
      width: 100%
    span
      display: block

@media (max-width: 991px)
  #v-about
    padding: 20px 15px
  .description
    display: flex
    flex-direction: column
    align-items: center
    &__topic1, &__topic2
      display: flex
      flex-direction: column
      h3
        margin: 0
    &__topic2
      margin-left: 0
  .thumb
    &__title
      text-align: center
    &__box
      display: flex
      flex-direction: column
    &__image
      text-align: center
      margin-bottom: 10px
      img
        width: 90%
      span
      display: block
  .image
    &__title
      text-align: center
    &__image
      text-align: center
      img
        width: 90%
      span
        display: block
</style>
