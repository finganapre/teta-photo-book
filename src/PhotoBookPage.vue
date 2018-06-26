<template>
	<div class="PhotoBookPage">
		<app-photo-book-page-header
		v-bind:direction="pageDirection"
		v-bind:pageNumber="pageNumber"
		>
		</app-photo-book-page-header>
		
		<div class="PhotoBookPageGrid PhotoBookPageGrid--tgrid2x3bc">
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
					},
					/*{
						id: 6,
						href: 'src/assets/6.jpeg'
					}*/
					
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
		grid-gap: 20px
		&--grid1x1
			grid-template-rows: 1fr
			grid-template-columns: 1fr
		&--grid1x2
			grid-template-rows: 1fr
			grid-template-columns: repeat(2, 1fr)
		&--grid2x1
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: 1fr
		&--grid2x2
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: repeat(2, 1fr)
		&--grid2x3
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: repeat(3, 1fr)
		&--grid3x1
			grid-template-rows: repeat(3, 1fr)
			grid-template-columns: repeat(1, 1fr)
		&--grid3x2
			grid-template-rows: repeat(3, 1fr)
			grid-template-columns: repeat(2, 1fr)
		&--grid3x3
			grid-template-rows: repeat(3, 1fr)
			grid-template-columns: repeat(3, 1fr)
		&--tgrid2x3bc
			grid-template-areas: "photo1 photo2 photo3" "photo4 photo2 photo5"
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: repeat(3, 1fr)
			& .PhotoContainer
				&.photo1
					grid-area: photo1
				&.photo2
					grid-area: photo2
				&.photo3
					grid-area: photo3
				&.photo4
					grid-area: photo4
				&.photo5
					grid-area: photo5
				&.photo6
					grid-area: photo6
				&.photo7
					grid-area: photo7
				&.photo8
					grid-area: photo8
				&.photo9
					grid-area: photo9
				&.photo10
					grid-area: photo10
				&.photo11
					grid-area: photo11
				&.photo12
					grid-area: photo12
</style>