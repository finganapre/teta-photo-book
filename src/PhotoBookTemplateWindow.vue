<template>
	<div class="PhotoBookTemplateWindow" name="fade" v-show="show">
		<h3>Выберите шаблон</h3>
	</div>
</template>

<script>
	export default {
		props: {
			show: Boolean
		}

	}
</script>

<style lang="sass">
	.PhotoBookTemplateWindow
		position: absolute
		background-color: #fff
		color: #333
		z-index: 1000
		top: 40px
		padding: 15px


	.fade-leave
		
	.fade-leave-to
		
	.fade-leave-active		
	 	animation: fadeOut 1s linear
	.fade-enter
		
	.fade-enter-to
		
	.fade-enter-active
		animation: fadeIn 1s linear

	@keyframes fadeIn
		from
			0%
				opacity: 0
		to
			100%
				opacity: 1

	@keyframes fadeOut
		from
			0%
				opacity: 1
		to
			100%
				opacity: 0
		
</style>