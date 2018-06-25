<template>
	<div class="PhotoBookPage">
		<app-photo-book-page-header
		v-bind:direction="'left'"
		v-bind:pageNumber="pageNumber"
		>
		
		</app-photo-book-page-header>

		Контент страницы (блоки с возможностью вставить фотку) {{ id }}

		<app-photo-book-page-footer
		v-bind:direction="'right'"
		v-bind:pageNumber="pageNumber"
		>
		</app-photo-book-page-footer>
	</div>
</template>

<script>
	import PhotoBookPageHeader from './PhotoBookPageHeader.vue';
	import PhotoBookPageFooter from './PhotoBookPageFooter.vue';

	export default {
		props: {
			pageNumber: Number,
			id: Number
		},
		components: {
			AppPhotoBookPageHeader: PhotoBookPageHeader,
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
		height: 400px
		width: 50%
		padding: 15px
		float: left
		border: 1px solid #e5e5e5
</style>