<template>
	<header class="container-fluid MainHeader">
		<div class="row">
			<div class="container">
				<div class="row flex-row">
					<div class="col-lg-6">
						<app-main-logo></app-main-logo>
					</div>
					<div class="col-lg-6">
						<app-main-burger-menu></app-main-burger-menu>
					</div>
				</div>
				
			</div>
		</div>
	</header>
</template>

<script>
	import MainLogo from './MainLogo.vue';
	import MainBurgerMenu from './MainBurgerMenu.vue';

	export default {
		components: {
		  AppMainLogo: MainLogo,
		  AppMainBurgerMenu: MainBurgerMenu
		}
	}
</script>

<style lang="sass">
	
	.MainHeader
	  background-color: #f9f9f9
	  padding-top: 30px
	  padding-bottom: 30px


	
</style>