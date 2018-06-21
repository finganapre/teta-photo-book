<template>
  <div class="wrapper" v-show="load">
    <div class="content">
          <app-main-header></app-main-header>
        

      <!--<app-photo-book>-->
        
          <section class="container std-pd-big">

            <div class="AppPhotoBook">
              <h2 class="AppPhotoBook__title text-center">{{ bookName }}</h2>
              
              <div class="std-pd-md">

                
                <div class="std-md-pagging">

                <!-- app-book-page-navigation -->
                  <app-book-page-navigation
                  v-bind:leftTitle="'left'"
                  v-bind:rightTitle="'right'"

                  v-bind:leftClick="preBookPage"
                  v-bind:rightClick="nextBookPage"

                  ></app-book-page-navigation>
                <!-- app-book-page-navigation -->

                </div>
                
                

                <!-- app-progress -->
                  <app-progress 
                  v-bind:max="pages.length"
                  v-bind:val="currentPage"
                  ></app-progress>
                <!-- app-progress -->
              </div>
              

              
              <div class="std-pd-md">
                <!-- AppPhotoBook__book -->
                <div class="AppPhotoBook__book" v-for="page in pages">{{ page }}</div>
                <!-- AppPhotoBook__book -->
              </div>
              
              
              
              <div class="std-pd-md">
                <!-- AppPhotoBookOptions -->
                <div class="AppOptions">
                  <h3>Опции</h3>
                  <div class="AppOptions__Page">
                    <button class="AppOptions__Page__rmvPage btn btn-danger" @click="rmvPage">{{ rmvPageText }}</button>
                    <button class="AppOptions__Page__addPage btn btn-primary" v-on:click="addPage">{{ addPageText }}</button>
                  </div>
                </div>
                <!-- AppPhotoBookOptions -->
              </div>

              <div class="std-pd-md">

                <!--<app-cashbox>-->
                <div class="AppCashbox">
                  <h2 class="AppCashbox__title">Стоимость книги</h2>
                  <ul class="AppCashbox__list">
                    <li class="AppCashbox__list__item" v-for="priceString in pricesStrings">{{ priceString }}</li>
                  </ul>
                </div>
                <!--</app-cashbox>-->

              </div>

            </div>
          </section>
        
      <!--</app-photo-book>-->



      

    </div>

      
        
    
    <app-main-footer></app-main-footer>

  </div>
</template>

<script>
  import Progress from './Progress.vue';
  import MainHeader from './MainHeader.vue';
  import BookPageNavigation from './BookPageNavigation.vue';

  import MainFooter from './MainFooter.vue';



  export default {

    data(){
      return {
        a: 'vara',
        b: 'varb',

        load: true,

        bookName: 'My book title',

        pages: ['page1'],
        currentPage: 1,

        rmvPageText: 'Удалить страницу',
        addPageText: 'Добавить страницу',

        prices: {
          /*key: 'value',
          key2: 'value2'*/
        },
        pricesStrings: []
      }
    },

    methods: {

      nextBookPage(){
        console.log('try next');
        if ( !( this.currentPage + 1 > this.pages.length ) ){
          console.log('next', this.currentPage, this.pages.length);
          this.currentPage = this.currentPage + 1;
          console.log('next', this.currentPage, this.pages.length);
        }
      },
      preBookPage(){
        console.log('try pre');
        if ( !( this.currentPage - 1 < 1 ) ){
          console.log('pre', this.currentPage, this.pages.length);
          this.currentPage = this.currentPage - 1;
          console.log('pre', this.currentPage, this.pages.length);
        }
      },

      addPage() {
        this.pages.push('page' + (this.pages.length + 1) );
      },
      rmvPage() {
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
      AppProgress: Progress,
      AppMainHeader: MainHeader,
      AppBookPageNavigation: BookPageNavigation,
      AppMainFooter: MainFooter
    },

    mounted() {
      this.cash;
    }
  }
</script>

<style lang="sass">
  body
    font-size: 18px
  .AppPhotoBook
    &__title
      margin: 0
  
  // std pd classes
  .std-pd-big
    padding-top: 100px
    padding-bottom: 100px
  .std-pd-md
    padding-top: 40px
    padding-bottom: 40px
    &:last-child
      padding-bottom: 0
  .std-pd-sm
    padding-top: 30px
    padding-bottom: 30px
  .std-pd-xs
    padding-top: 15px
    padding-bottom: 15px

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