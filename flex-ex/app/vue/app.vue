<template lang="pug">
#v-app
  .container
    .section
      h2 flex-direction: row
      .flex-container.demo1
        .flex-item A
        .flex-item B
        .flex-item C
        .flex-item D
      h2 flex-direction: row-reverse
      .flex-container.demo2
        .flex-item A
        .flex-item B
        .flex-item C
        .flex-item D
      h2 flex-direction: column
      .flex-container.demo3
        .flex-item A
        .flex-item B
        .flex-item C
        .flex-item D
      h2 flex-direction: column-reverse
      .flex-container.demo4
        .flex-item A
        .flex-item B
        .flex-item C
        .flex-item D
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="sass" scoped>
#v-app
  height: 100%
  background-color: #333
  font-size: 16px
  color: #f0f0f0
  line-height: 1.1em
.section
  width: 500px
  margin: auto
  border: 1px solid #f0f0f0

.flex-item:nth-child(1)
  background-color: lightblue
.flex-item:nth-child(2)
  background-color: yellow
.flex-item:nth-child(3)
  background-color: red
.flex-item:nth-child(4)
  background-color: black

.flex-item
  padding: .5em

.flex-container
  width: 100%
  display: flex
.demo1
  flex-direction: row
.demo2
  flex-direction: row-reverse
.demo3
  flex-direction: column
.demo4
  flex-direction: column-reverse
</style>
