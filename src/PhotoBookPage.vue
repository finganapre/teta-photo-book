<template>
	<div class="PhotoBookPage">
		<app-photo-book-page-header
		v-bind:direction="pageDirection"
		v-bind:pageNumber="pageNumber"
		@openTemplateWindow="redshowTemplateWindow"
		@addPhoto="addPhoto"
		@rmvPhoto="rmvPhoto"
		@nextTemplate="nextTemplate"
		>
		</app-photo-book-page-header>
		
		<div class="PhotoBookPageGrid" v-bind:class="changeTemplate">
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

		<app-photo-book-template-window v-bind:show="showTemplateWindow">
			
		</app-photo-book-template-window>
	</div>
</template>

<script>
	import PhotoBookPageHeader from './PhotoBookPageHeader.vue';

	import PhotoContainer from './PhotoContainer.vue';

	import PhotoBookPageFooter from './PhotoBookPageFooter.vue';

	import PhotoBookTemplateWindow from './PhotoBookTemplateWindow.vue';

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
					
				],

				showTemplateWindow: false,

				templatesClasses: [
					{
						classes: ['PhotoBookPageGrid--noPhoto']
					},
					{
						classes: ['PhotoBookPageGrid--grid1x1']
					},
					{
						classes: ['PhotoBookPageGrid--grid1x2', 'PhotoBookPageGrid--grid2x1']
					},
					{
						classes: ['PhotoBookPageGrid--grid3x1']
					},
					{
						classes: ['PhotoBookPageGrid--grid2x2']
					},
					{
						classes: ['PhotoBookPageGrid--tgrid2x3bc']
					},
					{
						classes: ['PhotoBookPageGrid--grid3x2', 'PhotoBookPageGrid--grid2x3']
					},
					{
						classes: ['PhotoBookPageGrid--tgrid3x3bc']
					},
					{
						classes: ['PhotoBookPageGrid--grid2x4']
					},
					{
						classes: ['PhotoBookPageGrid--grid3x3']
					},
					{
						classes: ['PhotoBookPageGrid--grid5x2']
					},
					{
						classes: ['11']
					},
					{
						classes: ['PhotoBookPageGrid--grid5x2']
					}
				],

				currentClass: 0

				/*
					
					
					
				*/


			}
		},

		props: {
			spreadNumber: Number,
			id: Number,
		},
		methods: {
			redshowTemplateWindow(){
				this.showTemplateWindow = !this.showTemplateWindow;
			},

			addPhoto(){
				this.photos.push({
					id: this.photos.length + 1,
					href: 'src/assets/6.jpeg'
				});
				this.currentClass = 0;
				console.log(this.photos);
			},

			rmvPhoto(){
				console.log('rmv');
				this.photos.splice(-1, 1);
				this.currentClass = 0;
			},

			nextTemplate(){
				if (this.templatesClasses[this.photos.length].classes[this.currentClass + 1]){
					console.log('next', this.currentClass);
					this.currentClass += 1;
					//this.templatesClasses[this.photos.length].classes[this.currentClass + 1];
				} else {
					console.log('abort', this.templatesClasses[this.photos.length].classes[this.currentClass + 1]);
					this.currentClass = 0;
				}
				
			}
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
				
			},

			changeTemplate(){
				let photoQnt = this.photos.length;
				console.log(photoQnt);
				let photoClass = this.templatesClasses[photoQnt].classes[this.currentClass];
				console.log(photoClass);
				return photoClass;
			}

						
		},
		components: {
			AppPhotoBookPageHeader: PhotoBookPageHeader,

			AppPhotoContainer: PhotoContainer,

			AppPhotoBookPageFooter: PhotoBookPageFooter,

			AppPhotoBookTemplateWindow: PhotoBookTemplateWindow
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

		// 1
		&--grid1x1
			grid-template-rows: 1fr
			grid-template-columns: 1fr

		//2
		&--grid1x2
			grid-template-rows: 1fr
			grid-template-columns: repeat(2, 1fr)
		&--grid2x1
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: 1fr

		// 3
		&--grid3x1
			grid-template-rows: repeat(3, 1fr)
			grid-template-columns: repeat(1, 1fr)

		// 4
		&--grid2x2
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: repeat(2, 1fr)
		
		// 5
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

		// 6
		&--grid2x3
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: repeat(3, 1fr)
		&--grid3x2
			grid-template-rows: repeat(3, 1fr)
			grid-template-columns: repeat(2, 1fr)

		// 7
		&--tgrid3x3bc
			grid-template-areas: "photo1 photo4 photo5" "photo2 photo4 photo6" "photo3 photo4 photo7"
			grid-template-rows: repeat(3, 1fr)
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

		// 8
		&--grid2x4
			grid-template-rows: repeat(2, 1fr)
			grid-template-columns: repeat(4, 1fr)

		// 9
		&--grid3x3
			grid-template-rows: repeat(3, 1fr)
			grid-template-columns: repeat(3, 1fr)

		// 10
		&--grid5x2
			grid-template-rows: repeat(5, 1fr)
			grid-template-columns: repeat(2, 1fr)


</style>