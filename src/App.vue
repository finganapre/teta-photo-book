<template>
  <div class="container-fluid" v-show="load">
    <div class="row">
      <section class="container">
        <h1 class="text-center">Конструктор Фотокниг</h1>
      </section>
    </div>


    <div class="row">
      <section class="container">
          <app-progress></app-progress>
      </section>
    </div>
    



    <!--<app-navigation>-->
      <div class="row">
        <section class="container">
          
            <div class="AppNavigation__arrow">
              <div class="AppNavigation__arrow__container" :title="left">
                <i class="fas fa-angle-left AppNavigation__arrow__container__left"></i>
              </div>
              <div class="AppNavigation__arrow__container text-right" :title="right">
                <i class="fas fa-angle-right AppNavigation__arrow__container__right"></i>  
              </div>
            </div>
         
        </section>
      </div>
      
    <!--</app-navigation>-->



    <!--<app-photo-book>-->
      <div class="row">
        <section class="container">

          <div class="AppPhotoBook">
            <h2 class="AppPhotoBook__title text-center">{{ bookName }}</h2>
            <div class="AppPhotoBook__list" v-for="page in pages">{{ page }}</div>
          </div>

        </section>
      </div>
    <!--</app-photo-book>-->
    


    <!--<app-options>-->
    <div class="row">
      <section class="container">

        <div class="AppOptions">
          <div class="AppOptions__Page">
            <button class="AppOptions__Page__rmvPage" @click="rmvPage">-</button>
            <button class="AppOptions__Page__addPage" v-on:click="addPage">+</button>
          </div>
        </div>

      </section>
    </div>
    <!--</app-options>-->



    <!--<app-cashbox>-->
      <div class="row">
        <section class="container">
          
          <div class="AppCashbox">
            <h2 class="AppCashbox__title">Стоимость книги</h2>
            <ul class="AppCashbox__list">
              <li class="AppCashbox__list__item" v-for="priceString in pricesStrings">{{ priceString }}</li>
            </ul>
          </div>

        </section>
      </div>
    <!--</app-cashbox>-->
  </div>
</template>

<script>
  import Progress from './Progress.vue';

  export default{

    data(){
      return{
        a: 'vara',
        b: 'varb',

        load: true,

        left: 'left',
        right: 'right',

        bookName: 'My book',
        pages: ['page1', 'page2', 'page3'],

        prices: {
          /*key: 'value',
          key2: 'value2'*/
        },
        pricesStrings: []
      }
    },

    methods: {
      addPage(){
        this.pages.push('page' + (this.pages.length + 1) );
      },
      rmvPage(){
        this.pages.splice(-1,1);
      }
    },

    computed: {
      cash(){
        this.pricesStrings = [];
        for (let price in this.prices){
          this.pricesStrings.push(this.prices[price] + ': ' + price);
        }
      }
    },

    components: {
      AppProgress: Progress
    },

    mounted() {
      this.cash;
    }
  }
</script>

<style lang="sass">
  

  body
    font-size: 18px
  .AppNavigation
    &__arrow
      display: flex
      flex-direction: row
      justify-content: space-between
      &__container
        box-sizing: border-box
        padding: 0 15px
        width: 50%
        font-size: 2.5em
        cursor: pointer
        transition: all 0.3s ease
        &:hover
          background-color: #e5e5e5
      &__left
      &__right
        
</style>