<template>
  <BikeSection
    class="bike-banner"
    width="full"
    centered
    :rounded="$screen.lg"
    background-image="banner.webp"
  />
</template>

<script>
export default {
  props: {
    headingContent: {
      type: String,
      default: '',
    },
    subheadingContent: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-banner {
  padding: 30px 20px;
  background-position: center;
  background-size: cover;
  min-height: 140px;
}

@include screen-size('tablet') {
  .bike-banner {
    min-height: 400px;
    padding: 50px;
  }
}
</style>
