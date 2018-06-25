<template>
	<div class="PhotoBookPageHeader" v-bind:class="setStyle">
		{{ pageNumber }}
	</div>
</template>

<script>
	export default {
		props: {
			direction: String,
			pageNumber: Number
		},
		computed: {
			setStyle() {
				var needStyle = '';

				this.direction == 'left' ? needStyle = 'PhotoBookPageHeader--left' : needStyle = 'PhotoBookPageHeader--right';

				return needStyle;
			}
		}
	}
</script>

<style lang="sass">
	.PhotoBookPageHeader
		width: 100%
		display: flex
		flex-direction: row
		flex-wrap: nowrap
		align-items: center
		&--left
			justify-content: flex-start
		&--right
			justify-content: flex-end
</style>