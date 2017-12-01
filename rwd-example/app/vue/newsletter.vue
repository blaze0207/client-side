<template lang="pug">
#v-newsletter
  .newsletter.container
    h1 Subscribe To Our Newsletter
    form
      input(type='email', placeholder='Enter Email...')
      button(type='submit') Subscribe
</template>

<script>
export default {
  name: 'Newsletter',
}
</script>

<style lang="sass" scoped>
#v-newsletter
  background-color: #35424a
.newsletter
  color: #ffffff
  display: flex
  justify-content: space-between
  align-items: center
  input[type='email']
    padding: 4px
    width: 250px
  button
    background-color: #e8491d
    border-radius: 5px
    border: 0
    color: #ffffff
    height: 32px
    margin-left: 5px
    margin-top: -5px
    padding-left: 20px
    padding-right: 20px
@media (max-width: 991px)
  .container
    align-items: center
    display: flex
    flex-direction: column
    height: 130px
    justify-content: center
    h1
      font-size: 20px
      // margin-bottom: 0
    form
      margin: 0
      padding: 0
      align-items: center
      display: flex
      flex-direction: column
      justify-content: center
    input
      border-radius: 5px
    button
      margin: 10px 0
      border-radius: 5px
      margin-top: 100px 0
      // width: 100%
</style>
