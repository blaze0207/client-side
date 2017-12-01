<template lang="pug">
#v-app
  v-header
  .view: router-view
  v-footer
</template>

<script>
import Header from '../vue/header.vue'
import Footer from '../vue/footer.vue'
export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-footer': Footer,
  }
}
</script>

<style lang="sass" scoped>
#v-app
  display: flex
  flex-direction: column
  height: 100%
.view
  flex: 1
  padding-top: 90px
  padding-bottom: 70px
</style>
