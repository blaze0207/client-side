<template lang="pug">
#v-header
  .header.container
    .header__logo
      h1
        span.heightlight Hahn
        |  Website
    .header__menu
      router-link(to='/') Home
      router-link(to='/about') About
      router-link(to='/services') Services
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="sass" scoped>
#v-header
  background-color: #35424a
  border-bottom: #e8491d 3px solid
  position: fixed
  left: 0
  right: 0
  top: 0
.header
  display: flex
  justify-content: space-between
  align-items: center
  height: 90px
  &__logo
    color: #ffffff
  &__menu
    align-items: center
    display: flex
    a
      color: #ffffff
      font-siza: 16px
      padding: 0 20px
      text-decoration: none
      text-transform: uppercase
    a:hover
      color: lightblue
.heightlight
  color: #e8491d
  // font-size: 40px

@media (max-width: 991px)
  .heightlight
    font-size: 16px
  .header
    &__logo
      h1
        font-size: 16px
    &__menu
      a
        font-size: 10px
        padding: 0 5px
</style>
