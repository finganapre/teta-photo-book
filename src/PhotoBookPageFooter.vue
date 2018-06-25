<template>
	<div class="PhotoBookPageFooter" v-bind:class="setStyle">
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
				let needStyle = '';

				this.direction == 'left' ? needStyle = 'PhotoBookPageFooter--left' : needStyle = 'PhotoBookPageFooter--right';

				return needStyle;

			}
		}
	}
</script>

<style lang="sass">
	.PhotoBookPageFooter
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