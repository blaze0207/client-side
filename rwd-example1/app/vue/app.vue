<template lang="pug">
#v-app
  #intro
    transition(name='fade', mode='out-in'): .background.background--1(v-show='bg === 1')
    transition(name='fade', mode='out-in'): .background.background--2(v-show='bg === 2')
    transition(name='fade', mode='out-in'): .background.background--3(v-show='bg === 3')
    .intro.container
      .intro__title: h1 Breath Easy
      .intro__button
        .btn Get Started
    .arrow
      span(@click='left') <
      span(@click='right') >
    .dot
      .dot__dot(@mouseover='bg=1')
      .dot__dot(@mouseover='bg=2')
      .dot__dot(@mouseover='bg=3')
  .content.container
    p The launch comes amid signs that US President Donald Trump is growing increasingly frustrated with the lack of progress in curbing North Korea's nuclear and ballistic missile programs. Trump reacted to the launch late Monday on Twitter. "North Korea has just launched another missile. Does this guy have anything better to do with his life?" he asked, referring to North Korean leader Kim Jong Un.
    p The launch comes amid signs that US President Donald Trump is growing increasingly frustrated with the lack of progress in curbing North Korea's nuclear and ballistic missile programs. Trump reacted to the launch late Monday on Twitter. "North Korea has just launched another missile. Does this guy have anything better to do with his life?" he asked, referring to North Korean leader Kim Jong Un.
    p The launch comes amid signs that US President Donald Trump is growing increasingly frustrated with the lack of progress in curbing North Korea's nuclear and ballistic missile programs. Trump reacted to the launch late Monday on Twitter. "North Korea has just launched another missile. Does this guy have anything better to do with his life?" he asked, referring to North Korean leader Kim Jong Un.
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      bg: 1,
    }
  },
  methods: {
    left() {
      this.bg = this.bg - 1 < 1 ? 3 : this.bg - 1
    },
    right() {
      this.bg = this.bg + 1 > 3 ? 1 : this.bg + 1
    },
  },
}
</script>

<style lang="sass" scoped>
#v-app
  height: 100%
#intro
  height: 100%
  position: relative

.background
  background-size: cover
  height: 100%
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  &--1
    background-image: url('../res/pexels-photo.jpg')
  &--2
    background-image: url('../res/box5.jpg')
  &--3
    background-image: url('../res/box6.jpg')
.intro
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100%
  &__title
    h1
      color: #f9f3f4
      font-size: 500%
      margin: 0
      text-shadow: 0 0 300px #000
  &__button
    margin-top: 40px
    .btn
      color: #036A81
      font-size: 135%
      text-decoration: none
      text-transform: uppercase
      padding: 10px 20px
      border-radius: 9px
      border: solid #036A81 2px
      cursor: pointer
      transition: transform 2s
    .btn:hover
      border: solid #ffffff 2px
      transform: rotate(180deg)
      color: #ffffff
.arrow
  position: absolute
  right: 0
  left: 0
  top: 0
  bottom: 0
  pointer-events: none
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 20px
  span
    color: rgba(white, .9)
    font-size: 48px
    z-index: 1
    cursor: pointer
    pointer-events: auto
.dot
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  display: flex
  justify-content: center
  align-items: flex-end
  padding-bottom: 50px
  &__dot
    width: 20px
    height: 20px
    border-radius: 50%
    background-color: rgba(white, .9)
    margin: 0 10px
    cursor: pointer
.content
  p
    font-size: 135%
    line-height: 150%
    text-align: justify
    margin: 3%
@media (max-width: 768px)
  .intro
    text-align: center
    font-size: 50%
  .content
    margin: 0
    font-size: 50%
    width: 100%
    line-height: 100%
</style>
