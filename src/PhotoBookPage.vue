<template>
	<div class="PhotoBookPage">
		<app-photo-book-page-header
		v-bind:direction="pageDirection"
		v-bind:pageNumber="pageNumber"
		>
		</app-photo-book-page-header>
		
		<div class="PhotoBookPageGrid PhotoBookPageGrid--grid1">
			<app-photo-container
			v-for=" item in photos "
			v-bind:photo = " item "
			>
			</app-photo-container>
		</div>
		

		<app-photo-book-page-footer
		v-bind:direction="pageDirection"
		v-bind:pageNumber="pageNumber"
		>
		</app-photo-book-page-footer>
	</div>
</template>

<script>
	import PhotoBookPageHeader from './PhotoBookPageHeader.vue';

	import PhotoContainer from './PhotoContainer.vue';

	import PhotoBookPageFooter from './PhotoBookPageFooter.vue';

	export default {
		data(){
			return {
				photos: [
					{
						id: 1,
						href: 'src/assets/1.jpg'
					},
					{
						id: 2,
						href: 'src/assets/2.jpg'
					},
					{
						id: 3,
						href: 'src/assets/3.jpg'
					},
					{
						id: 4,
						href: 'src/assets/4.jpg'
					},
					{
						id: 5,
						href: 'src/assets/5.jpg'
					}
					
				]
			}
		},

		props: {
			spreadNumber: Number,
			id: Number,
		},
		computed: {
			pageNumber(){
				let rightPageNumber = this.spreadNumber * 2;
				let leftPageNumber = rightPageNumber - 1;

				if ( this.id == 0 ) {
					let pageNumber = leftPageNumber;
					return pageNumber;
				} else {
					let pageNumber = rightPageNumber;
					return pageNumber;
				}
			},

			pageDirection(){
				if ( this.id == 0 ) {
					let pageDirection = 'left';
					return pageDirection;
				} else {
					let pageDirection = 'right';
					return pageDirection;
				}
				
			}			
		},
		components: {
			AppPhotoBookPageHeader: PhotoBookPageHeader,

			AppPhotoContainer: PhotoContainer,

			AppPhotoBookPageFooter: PhotoBookPageFooter
		}
	}
</script>

<style lang="sass">
	.PhotoBookPage
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: start
		height: auto
		width: 50%
		padding: 15px
		float: left
		border: 1px solid #e5e5e5
		
	.PhotoBookPageGrid
		display: grid
		&--grid1
			grid-template-columns: 33.33% 33.33% 33.33%
			grid-template-rows: 200px 200px 200px
</style>