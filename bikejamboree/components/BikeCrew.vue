<template>
  <BikeSection class="bike-crew" centered rounded background="red">
    <img
      class="bike-crew__logo"
      src="~/assets/images/zhp-logo.webp"
      alt="Związek Harcerstwa Polskiego"
    >
    <img
      class="bike-crew__logo"
      src="~/assets/images/bike-jamboree-logo-small.webp"
      alt="Bike Jamboree"
    >
    <img
      class="bike-crew__logo"
      src="~/assets/images/fsj-logo.webp"
      alt="Fundacja Światowe Jamboree"
    >
  </BikeSection>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bike-crew {
  display: flex;
  justify-content: center;
  &__logo {
    display: block;
    height: 90px;
    filter: brightness(0) invert(1);
    padding: 10px 20px;
  }
}
</style>
