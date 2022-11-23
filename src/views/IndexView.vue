<template>
  <div class="index">
    <public-header />
    <index-carousel />
    <index-main />
  </div>
</template>

<script>
import PublicHeader from '@/components/PublicHeader.vue'
import IndexCarousel from '@/components/IndexCarousel.vue'
import IndexMain from '@/components/IndexMain.vue'
  export default {
  components: { PublicHeader, IndexCarousel, IndexMain },
  data() {
    return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>