<template>      
  <div class="progress Progress">
  	<div class="progress-bar" v-bind:style="width">
		<div class="" v-show="showNumber">{{ val + ' / ' + max }}</div>
  	</div>
  </div>
</template>

<script>
	export default {
		props: {
			max: Number,
			val: Number,
			showNumber: false
		},

		computed: {
			width() {
				let w = this.val / this.max * 100;

				if ( w > 100 ) {
					w = 100;
				} else if ( w < 0 ) {
					w = 0;
				}

				return {
					width: w + '%'
				}
			}
		}
	}
</script>

<style lang="sass">
	.Progress
		height: 20px
		border-radius: 0
</style>