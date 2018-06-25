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
	       v-bind:max="bookSpreads.length"
	       v-bind:val="currentSpread"
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
	     			<app-photo-book-spread
	     			v-bind:spreads="bookSpreads"
	     			v-bind:pages="pages"
	     			v-for="(spread, index) in bookSpreads"
					v-bind:spreadNumber="index + 1"
	     			>	
	     			</app-photo-book-spread>
	     			
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
	
	import PhotoBookSpread from './PhotoBookSpread.vue';
	//import PhotoBookPage from './PhotoBookPage.vue';

	export default {
		data(){
			return {
				bookSpreadsNew: [
					{
						id: 0,
						leftPage: {
							id: 0,
							photo: [
								{
									id: 193,
									title: 'Заголовок фото',
									description: 'Описание фото',
									file: 'image.jpg' // тут должен быть сам файл, а не строка=)
								},
								{
									id: 174,
									title: 'Заголовок фото',
									description: 'Описание фото',
									file: 'image.jpg' // тут должен быть сам файл, а не строка=)
								}
							]
						},
						rightPage: {
							id: 1,
							photo: [
								{
									id: 174,
									title: 'Заголовок фото',
									description: 'Описание фото',
									file: 'image.jpg' // тут должен быть сам файл, а не строка=)
								},
								{
									id: 154,
									title: 'Заголовок фото',
									description: 'Описание фото',
									file: 'image.jpg' // тут должен быть сам файл, а не строка=)
								}
							]
						}
					},

					{
						id: 1,
						leftPage: {
							id: 2,
							photo: [
								{
									id: 0,
									title: 'Заголовок фото',
									description: 'Описание фото',
									file: 'image.jpg' // тут должен быть сам файл, а не строка=)
								}
							]
						},
						rightPage: {
							id: 3,
							photo: [
								{
									id: 0,
									title: 'Заголовок фото',
									description: 'Описание фото',
									file: 'image.jpg' // тут должен быть сам файл, а не строка=)
								}
							]
						}
					}
				],
				

				pages: ['coverFront1', 'coverBack1', 'coverFront2', 'coverBack2'],
				bookSpreads: [ ],
	        	currentPage: 1,
	        	currentSpread: 1,

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
		  nextBookSpread() {

		    console.log('try next', this.currentPage, this.pages.length);
		    
		    if ( !( this.currentSpread == this.bookSpreads.length ) ){
		      console.log('next', this.currentPage, this.pages.length);
		     	this.currentSpread += 1;
		      console.log('next', this.currentPage, this.pages.length);
		    }
		  },

		  preBookSpread() {
		    console.log('try pre', this.currentSpread, this.pages.length);
		    if ( !( this.currentSpread == 1 ) ){
		      console.log('pre', this.currentPage, this.pages.length);
		      this.currentSpread -= 1;
		      console.log('pre', this.currentPage, this.pages.length);
		    }
		  },
			
		  addPage(){
			 this.pages.push('page' + (this.pages.length + 1) );
		  },

		  rmvPage(){
			 if ( this.pages.length > 4 ) {
			 	this.pages.splice(-1,1);
			 	this.currentPage > this.pages.length ? this.currentPage = this.pages.length : 0;
			 }
		  },

		  addSpread() {
		    this.addPage();
		    this.addPage();

		    this.currentSpread = this.bookSpreads.length;

		    console.log(this.currentSpread, this.bookSpreads.length);
		  },

		  rmvSpread() {
		  	this.rmvPage();
		  	this.rmvPage();
			
			this.currentSpread > this.bookSpreads.length ? this.currentSpread = this.bookSpreads.length : 0;

			console.log(this.currentSpread, this.bookSpreads.length);
		  }
		},

		components: {
		  AppBookPageNavigation: BookPageNavigation,
		  AppProgress: Progress,
		
		  AppPhotoBookSpread: PhotoBookSpread
		  //AppPhotoBookPage: PhotoBookPage
		},

		computed: {
			cash(){
				this.pricesStrings = [];
				for (let price in this.prices){
				  this.pricesStrings.push(this.prices[price] + ': ' + price);
				}
			},
			pushSpreads(){
				var arr = [];
				for (let i = 0; i <= this.pages.length; i++) {
					
					if ( arr.length == 2 ) {
						this.bookSpreads.push(arr);
						arr = [];
					}

					arr.push( this.pages[i] );
				
					console.log(this.bookSpreads);
				}
			},
		    getPageSpreed() {
		    	if ( this.currentPage && this.currentPage != 0 ) {
		    		switch (this.currentPage % 2){
		    			case 0:
		    				// чётная страница (правая в развороте)
		    				console.log('чётная', this.currentPage);

		    				this.currentSpread = this.currentPage / 2;
		    			break;
		    			
		    			default:
		    				// не чётная страница (левая в развороте)
		    				console.log('не чётная', this.currentPage);
		    				
		    				this.currentSpread = this.currentPage * 2;
		    			break;
		    		}
		    	}
		  	}
		},

		mounted() {
		  this.cash;
		  this.pushSpreads;

		  //console.log(this.pages.length);
		  //console.log(this.bookSpreads.length);
		}
	}
</script>

<style lang="sass">
	.AppPhotoBook
	  &__title
	    margin: 0
</style>