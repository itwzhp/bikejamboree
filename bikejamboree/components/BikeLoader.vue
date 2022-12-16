<template>
  <div class="bike-loader__container">
    <BikeImage
      class="bike-loader"
      :img-src="require('~/assets/images/loader.svg')"
      img-alt="Loader"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bike-loader {
  &__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
