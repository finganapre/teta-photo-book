<template>
	<div class="MainLogo">
		<h1 class="MainLogo__title">{{ title }}</h1>
		<span class="MainLogo__description">{{ description }}</span>
	</div>      
  
</template>

<script>
	export default {
		data(){
			return {
				title: 'Конструктор фотокниг',
				description: 'Создание фотокниг онлайн'
			}
		}
	}
</script>

<style lang="sass">
	.MainLogo
		&__title
			display: block
			margin: 0
		&__description
			display: block
			color: #ccc
</style>

