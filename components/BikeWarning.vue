<template>
  <BikeSection class="bike-warning" background="red">
    <BikeIcon class="bike-warning__icon" icon="info" color="white" />
    <BikeParagraph class="bike-warning__paragraph" no-margin>
      <slot />
    </BikeParagraph>
  </BikeSection>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bike-warning {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  &__icon {
    transform: scale(1.2)
  }
  &__paragraph {
    color: #fff;
    margin-left: 15px;
    font-size: .9em;
  }
}
</style>
