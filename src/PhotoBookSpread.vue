<template>
	
	<div class="PhotoBookSpread">
		<app-photo-book-page
		v-for = " ( page, index ) in pages.slice( (spreadNumber * 2) - 2, spreadNumber * 2) "
		v-bind:id = " index "
		v-bind:spreadNumber = " spreadNumber "
		>
		</app-photo-book-page>
	</div>
	
</template>

<script>
	// v-bind:key="page.id"
	// v-bind:pageNumber="index + 1"
	// v-if = " index + 1 / pages.length < maxSpreadPage "
	// v-bind:pageNumber = " pageNumber "
	import PhotoBookPage from './PhotoBookPage.vue';

	export default {
		data(){
			return {
				maxSpreadPage: 2
			}
		},
		props: {
			spreads: Array,
			pages: Array,
			spreadNumber: Number
		},
		methods: {

		},
		computed: {
			pageNumber(){
				console.log( this.pages[2] );
				console.log( this.pages.slice( (this.spreadNumber * 2) - 2, this.spreadNumber * 2) );
				console.log('вызов! ' + this.spreadNumber);
				console.log(this.cIndex);
				let pageNumber;
				this.cIndex == 0 ? pageNumber = this.spreadNumber : pageNumber = this.spreadNumber + 1;
				this.cIndex = this.cIndex + 1;
				console.log(this.cIndex);
				//console.log(pageNumber);
				return pageNumber;
			}
		},
		components: {
			AppPhotoBookPage: PhotoBookPage
		},
		mounted() {
			//console.log(this.spreadNumber);
		}
	}

	
</script>

<style lang="sass">
	.PhotoBookSpread
</style>