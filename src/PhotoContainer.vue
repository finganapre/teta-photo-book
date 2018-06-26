<template>
	<div class="PhotoContainer" v-bind:class="'photo' + photo.id">
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
		display: flex
		align-items: center
		max-width: 100%
		height: auto
		border: 3px dashed #e5e5e5
</style>