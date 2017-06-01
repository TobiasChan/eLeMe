<template>
  <div class="rating-select"></div>
</template>

<script type="text/ecmacript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;

  export default {
  	props: {
  	  ratings: {
        type: Array，
        default() {
          return [];
        }
      },
      selectType: {
        type: Number，
        default: ALL
      }
  	}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rating-select
  	width: 100%
  	height: 16px
  	border-top: 1px solid rgba(7, 17, 27, 0.1)
  	border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  	background: #f3f5f7
</style>
