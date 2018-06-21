<template>
	<div class="Logo">
		<div class="Logo__title">{{ title }}</div>
		<span class="Logo__description">{{ description }}</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title: 'Тета',
				description: 'Креативная мастерская'
			}
		}
	}
</script>

<style lang="sass">
	.Logo
		&__title
			text-transform: uppercase
			display: block
			margin: 0
		&__description
			display: block
			color: #ccc
</style>