<template lang="pug">
#v-description
  .description.container
    h1 Affordable Professional Web Design
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laudantium eius eos nulla voluptatem omnis, atque quibusdam sapiente quos id.
</template>

<script>
export default {
  name: 'Description',
}
</script>

<style lang="sass" scoped>
#v-description
  background-image: url('../res/showcase.jpg')
  background-size: cover
.description
  display: flex
  flex-direction: column
  justify-content: center
  height: 542px
  h1
    color: #ffffff
    font-size: 55px
    margin-bottom: 10px
    margin-top: 0
    text-align: center
  p
    color: #ffffff
    font-size: 20px
    text-align: center

@media (max-width: 991px)
  .description
    height: 300px
  .container
    h1
      font-size: 30px
    p
      font-size: 14px
</style>
