<template>
	<footer class="container-fluid MainFooter">
		<div class="row">
			<div class="container">
				<div class="row flex-row">
					<div class="col-lg-6">
						<app-logo></app-logo>
					</div>
					<div class="col-lg-6">
						
					</div>
				</div>
				
			</div>
		</div>
	</footer>
</template>

<script>
	import Logo from './Logo.vue';

	export default {
		components: {
		  AppLogo: Logo
		}
	}
</script>

<style lang="sass">
	
	.MainFooter
	  background-color: #f9f9f9
	  padding-top: 30px
	  padding-bottom: 30px


	
</style>