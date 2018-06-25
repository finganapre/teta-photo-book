<template>
	<img class="PhotoBookPhotoContainerPhoto" v-bind:src=" photoHref ">
</template>

<script>
	export default {
		props: {
			photoHref: String
		}
	}
</script>

<style lang="sass">
	.PhotoBookPhotoContainerPhoto
		max-width: 100%
		height: auto
</style>