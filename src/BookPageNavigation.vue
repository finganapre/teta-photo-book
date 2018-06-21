<template>
	<div class="AppNavigation__arrow">
	  <div class="AppNavigation__arrow__container" :title="leftTitle" @click="leftClick">
	    <i class="fas fa-angle-left AppNavigation__arrow__container__left"></i>
	  </div>
	  <div class="AppNavigation__arrow__container text-right" :title="rightTitle" @click="rightClick">
	    <i class="fas fa-angle-right AppNavigation__arrow__container__right"></i>  
	  </div>
	</div>
</template>

<script>
	export default {
		props: {
			leftTitle: String,
			rightTitle: String,

			leftClick: Function,
			rightClick: Function
		},
		methods: {
		  
		}
	}
</script>

<style lang="sass">
	.AppNavigation
	  &__arrow
	    display: flex
	    flex-direction: row
	    justify-content: space-between
	    &__container
	      box-sizing: border-box
	      
	      width: 50%
	      font-size: 2.5em
	      cursor: pointer
	      transition: all 0.3s ease
	      &:hover
	        background-color: #f9f9f9
	        padding-left: 15px
	        padding-right: 15px
	    &__left
	    &__right
</style>