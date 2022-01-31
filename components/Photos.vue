<template>
  <div class="container py-24">
    <div class="uppercase text-center font-agblack text-xl mb-12">Photos</div>
    <flickity ref="flickity" :options="flickityOptions" class="carousel">
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE" /></div>
    </flickity>
  </div>
</template>
<style scoped>

</style>

<script>

import Flickity from 'vue-flickity'

export default {
  
  data() {
    return {
      flickityOptions: { 
        lazyLoad: 1,
        wrapAround: true, 
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>

<style scoped>
@media (min-width: 767px) {
  .carousel-cell{
    width:33%;
    padding:0 10px;
  }
}
</style>