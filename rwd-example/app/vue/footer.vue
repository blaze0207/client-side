<template lang="pug">
#v-footer
  .footer.container Hahn web design, Copyright &copy; 2017
</template>

<script>
import Header from '../vue/header.vue'
export default {
  name: 'Footer',
  components: {
    'v-header': Header,
  }
}
</script>

<style lang="sass" scoped>
#v-footer
  background-color: #e8491d
  position: fixed
  bottom: 0
  left: 0
  right: 0
.footer
  align-items: center
  color: #ffffff
  display: flex
  height: 70px
  justify-content: flex-end
</style>
