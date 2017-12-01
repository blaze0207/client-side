<template lang="pug">
#v-main
  v-description
  v-newsletter
  v-image
</template>

<script>
import Description from '../vue/description.vue'
import Newsletter from '../vue/newsletter.vue'
import Image from '../vue/image.vue'
export default {
  name: 'Main',
  components: {
    'v-description': Description,
    'v-newsletter': Newsletter,
    'v-image': Image,
  }
}
</script>

<style lang="sass" scoped>
</style>
