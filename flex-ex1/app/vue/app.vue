<template lang="pug">
#v-app
  .container
    .section
      h2 flex-wrap: nowrap
      .flex-container.demo1
        .flex-item A
        .flex-item B
        .flex-item C
        .flex-item D
        .flex-item E
        .flex-item F
        .flex-item G
        .flex-item H
        .flex-item I
        .flex-item J
        .flex-item K
        .flex-item L
      h2 flex-wrap: wrap
      .flex-container.demo2
        .flex-item A
        .flex-item B
        .flex-item C
        .flex-item D
        .flex-item E
        .flex-item F
        .flex-item G
        .flex-item H
        .flex-item I
        .flex-item J
        .flex-item K
        .flex-item L
      h2 flex-wrap: wrap-recerse
      .flex-container.demo3
        .flex-item A
        .flex-item B
        .flex-item C
        .flex-item D
        .flex-item E
        .flex-item F
        .flex-item G
        .flex-item H
        .flex-item I
        .flex-item J
        .flex-item K
        .flex-item L
      // h2 flex-wrap: column-reverse
      // .flex-container.demo4
      //   .flex-item A
      //   .flex-item B
      //   .flex-item C
      //   .flex-item D
      //   .flex-item E
      //   .flex-item F
      //   .flex-item G
      //   .flex-item H
      //   .flex-item I
      //   .flex-item J
      //   .flex-item K
      //   .flex-item L
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
  width: 50%
  overflow: hidden
  margin: auto
  border: 1px solid #f0f0f0

.flex-item:nth-child(4n)
  background-color: lightblue
.flex-item:nth-child(4n+1)
  background-color: yellow
.flex-item:nth-child(4n+2)
  background-color: red
.flex-item:nth-child(4n+3)
  background-color: black

.flex-item
  padding: .5em

.flex-container
  // width: 100%
  display: flex
.demo1
  flex-wrap: nowrap
.demo2
  flex-wrap: wrap
.demo3
  flex-wrap: wrap-reverse
// .demo4
//   flex-wrap: column-reverse
</style>
