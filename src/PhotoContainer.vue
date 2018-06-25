<template>
	<div class="PhotoContainer">
		<app-photo
		v-bind:photoHref = " 'http://localhost:8080/' + photo.href "
		>
		</app-photo>
	</div>
</template>

<script>
	import PhotoApp from './Photo.vue';

	export default {
		props: {
			photo: Object
		},
		components: {
			AppPhoto: PhotoApp
		}
	}
</script>

<style lang="sass">
	.PhotoContainer
		max-width: 100%
		height: auto
		border: 3px dashed #e5e5e5
</style>