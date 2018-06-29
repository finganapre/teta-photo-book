<template>
  <div class="wrapper" v-show="load">
    <div class="content">
          <app-main-header></app-main-header>

          <section class="container std-pd-big">

            <app-photo-book
            v-bind:bookName = "'My Book Title'"
            >
            </app-photo-book>

          </section>
    </div>

    <app-main-footer></app-main-footer>
  </div>
</template>

<script>
  import MainHeader from './MainHeader.vue';

  import PhotoBook from './PhotoBook.vue';

  import MainFooter from './MainFooter.vue';



  export default {

    data(){
      return {
        load: true
      }
    },

    methods: {
      
    },

    computed: {

    },

    components: {
      AppMainHeader: MainHeader,

      AppPhotoBook: PhotoBook,

      AppMainFooter: MainFooter
    },

    mounted() {
      
    }
  }
</script>

<style lang="sass">
  body
    font-size: 18px
  
  // std pd classes
  .std-pd-big
    padding-top: 100px
    padding-bottom: 100px

  .std-pd-md
    padding-top: 40px
    padding-bottom: 40px
    &:last-child
      padding-bottom: 0
  .std-pd-md-top
    padding-top: 40px
  .std-pd-md-bot
    padding-bottom: 40px

  .std-pd-sm
    padding-top: 30px
    padding-bottom: 30px
  .std-pd-xs
    padding-top: 15px
    padding-bottom: 15px
  .std-pd-xs-top
    padding-top: 15px

  //  std flex class
  .flex-row
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-items: center

  // bottom footer
  .wrapper
    display: flex
    min-height: 100vh
    flex-direction: column
  .content
    flex: 1
</style>