<template>
	 <!--<app-photo-book>-->
	 <div class="AppPhotoBook">
	   <h2 class="AppPhotoBook__title text-center">{{ bookName }}</h2>
	   
	   <div class="std-pd-md">

	     
	     <div class="std-md-pagging">

	     <!-- app-book-page-navigation -->
	       <app-book-page-navigation
	       v-bind:leftTitle="'left'"
	       v-bind:rightTitle="'right'"

	       v-bind:leftClick="preBookSpread"
	       v-bind:rightClick="nextBookSpread"

	       ></app-book-page-navigation>
	     <!-- app-book-page-navigation -->

	     </div>
	     
	     

	     <!-- app-progress -->
	       <app-progress 
	       v-bind:max="pages.length / 2"
	       v-bind:val="Math.ceil(currentPage / 2)"
	       v-bind:showNumber="true"
	       ></app-progress>
	     <!-- app-progress -->

	     <!-- app-progress -->
	       <app-progress 
	       v-bind:max="pages.length"
	       v-bind:val="currentPage"
	       v-bind:showNumber="true"
	       ></app-progress>
	     <!-- app-progress -->
	   </div>

	   <div class="std-pd-md-bt">
	     <!-- AppPhotoBookOptions -->
	     <div class="AppOptions">
	       <div class="AppOptions__Page">
	         <button class="AppOptions__Page__rmvPage btn btn-danger" @click="rmvSpread">{{ rmvSpreadText }}</button>
	         <button class="AppOptions__Page__addPage btn btn-primary" v-on:click="addSpread">{{ addSpreadText }}</button>
	       </div>
	     </div>
	     <!-- AppPhotoBookOptions -->
	   </div>
	   

	   
	   <div class="std-pd-md">
	     <!-- AppPhotoBook__book -->
	     	<div class="row">
	     		<div class="col-md-12">
	     			<app-photo-book-page v-for="page in pages">
	     				
	     			</app-photo-book-page>
	     		</div>
	     	</div>
			
			
	     <!-- AppPhotoBook__book -->
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
	<!--</app-photo-book>-->
</template>

<script>
	import BookPageNavigation from './BookPageNavigation.vue';
	import Progress from './Progress.vue';

	import PhotoBookPage from './PhotoBookPage.vue';

	export default {
		data(){
			return {
				pages: ['coverFront1', 'coverBack1', 'coverFront1', 'coverBack2'],
	        	currentPage: 1,
	        	rmvSpreadText: 'Удалить разворот',
	        	addSpreadText: 'Добавить разворот',

	        	prices: {
	        	  /*key: 'value',
	        	  key2: 'value2'*/
	        	},

	        	pricesStrings: []
			}
		},
		props: {
			bookName: String
		},

		methods: {
		  // next
		  nextBookSpread(){
		    console.log('try next', this.currentPage, this.pages.length, (this.currentPage + 1) * 2);
		    
		    if ( !( (this.currentPage + 1) * 2 > this.pages.length ) ){
		      console.log('next', this.currentPage, this.pages.length);
		      this.currentPage += 1;
		      this.currentPage *= 2;
		      console.log('next', this.currentPage, this.pages.length);
		    }
		  },
		  preBookSpread(){
		    console.log('try pre', this.currentPage, this.pages.length);
		    if ( !( this.currentPage - 2 < 1 ) ){
		      console.log('pre', this.currentPage, this.pages.length);
		      this.currentPage /= 2;
		      this.currentPage -= 1;
		      console.log('pre', this.currentPage, this.pages.length);
		    }
		  },

		  addSpread() {
		    this.pages.push('page' + (this.pages.length + 1) );
		    this.pages.push('page' + (this.pages.length + 1) );
		    this.currentPage = this.pages.length;

		    console.log(this.currentPage);
		  },
		  rmvSpread() {
		  	if ( this.pages.length > 4 ) {
		  		this.pages.splice(-1,1);
		  		this.pages.splice(-1,1);
		  		this.currentPage > this.pages.length ? this.currentPage = this.pages.length : 0;
		  		console.log(this.currentPage);
		  	}
		    
		  }
		},

		components: {
		  AppBookPageNavigation: BookPageNavigation,
		  AppProgress: Progress,

		  AppPhotoBookPage: PhotoBookPage
		},

		computed: {
		  cash(){
		    this.pricesStrings = [];
		    for (let price in this.prices){
		      this.pricesStrings.push(this.prices[price] + ': ' + price);
		    }
		  }
		},

		mounted() {
		  this.cash;
		  console.log(this.pages.length);
		}
	}
</script>

<style lang="sass">

</style>