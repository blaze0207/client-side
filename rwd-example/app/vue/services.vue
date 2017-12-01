<template lang="pug">
#v-services.container
  .info
    h1.info__title services
    ul.info__content
      li
        h3 Website Design
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum fugiat itaque modi necessitatibus doloribus cum, nostrum praesentium, provident, nesciunt iste delectus laboriosam voluptatibus recusandae cumque beatae a. Eveniet, officia.
        p Pricing: $1,000 - $3,000
      li
        h3 Website Maintenancece
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum fugiat itaque modi necessitatibus doloribus cum, nostrum praesentium, provident, nesciunt iste delectus laboriosam voluptatibus recusandae cumque beatae a. Eveniet, officia.
        p Pricing: $250 per month
      li
        h3 Website Hosting
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum fugiat itaque modi necessitatibus doloribus cum, nostrum praesentium, provident, nesciunt iste delectus laboriosam voluptatibus recusandae cumque beatae a. Eveniet, officia.
        p Pricing: $25 per month
  .login
    .login__dark
      h3.login__title Get A quote
      form.login__form
        label Name
        input(type='text', placeholder='Your name')
        label Email
        input(type='email', placeholder='Your Email')
        label Message
        textarea(placeholder='Your message')
        button.button_1(type='submit') Send
</template>

<script>
export default {
  name: 'Services',
}
</script>

<style lang="sass" scoped>
#v-services
  display: flex
.info
  flex: 2
  &__content
    padding-left: 0
    li
      background-color: #e6e6e6
      border: #cccccc solid 1px
      list-style: none
      margin-bottom: 5px
      padding: 20px
.login
  flex: 1
  display: flex
  justify-content: flex-end
  align-items: flex-start
  &__dark
    background-color: #35424a
    color: #ffffff
    width: 250px
    display: flex
    flex-direction: column
    align-items: center
    padding: 10px 0
    margin-top: 80px
  &__title
    margin: 0
  &__form
    margin-top: 10px
    input
      margin-bottom: 5px
    label, textarea
      display: block
    button
      background-color: #e8491d
      border: 0
      color: #ffffff
      margin-top: 5px

@media (max-width: 991px)
  #v-services
    padding: 20px 15px
  .container
    display: flex
    flex-direction: column
  .login
    display: flex
    justify-content: center
  .login__dark
    margin-top: 0
    width: 100%
</style>
