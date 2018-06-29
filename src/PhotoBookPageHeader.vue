<template>
	<header class="PhotoBookPageHeader" v-bind:class="setHeaderStyle">
		<div class="PhotoBookPageHeader__inf" v-bind:class="setHeaderInfStyle">
			{{ pageNumber }}
		</div>
		<div class="PhotoBookPageHeader__opt" v-bind:class="setHeaderOptStyle">
			<i class="far fa-edit PhotoBookPageHeader__opt__template" @click="$emit('openTemplateWindow')"></i>
		</div>
	</header>
</template>

<script>
	export default {
		props: {
			direction: String,
			pageNumber: Number
		},
		computed: {
			setHeaderStyle() {
				let needStyle = '';

				this.direction == 'left' ? needStyle = 'PhotoBookPageHeader--left' : needStyle = 'PhotoBookPageHeader--right';

				return needStyle;
			},
			setHeaderOptStyle() {
				let needStyle = '';

				this.direction == 'left' ? needStyle = 'PhotoBookPageHeader__opt--right' : needStyle = 'PhotoBookPageHeader__opt--left';

				return needStyle;
			},
			setHeaderInfStyle() {
				let needStyle = '';

				this.direction == 'left' ? needStyle = 'PhotoBookPageHeader__inf--left' : needStyle = 'PhotoBookPageHeader__inf--right';

				return needStyle;
			}
		}
	}
</script>

<style lang="sass">
	.PhotoBookPageHeader
		padding-bottom: 5px
		width: 100%
		display: flex
		flex-direction: row
		flex-wrap: nowrap
		align-items: center
		&--left
			justify-content: flex-start
		&--right
			justify-content: flex-end
		&__inf
			width: 50%
		&__inf
			width: 50%
			display: flex
			height: 100%
			flex-direction: row
			align-items: center
			flex-wrap: nowrap
			&--left
				justify-content: flex-start
			&--right
				justify-content: flex-end
		&__opt
			width: 50%
			height: 100%
			display: flex
			flex-direction: row
			align-items: center
			flex-wrap: nowrap
			&--left
				justify-content: flex-start
				order: -3
			&--right
				justify-content: flex-end
			&__template
				cursor: pointer
				font-size: 1.2em
</style>