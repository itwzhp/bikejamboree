<template>
  <button class="bike-hamburger" aria-label="otwórz / zamknij menu">
    <div>
      <div class="bike-hamburger__dash--open" />
      <div class="bike-hamburger__dash--open" />
      <div class="bike-hamburger__dash--open" />
    </div>
    <!-- <div>
      <div class="bike-hamburger__dash--close" />
      <div class="bike-hamburger__dash--close" />
    </div> -->
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bike-hamburger {
  width: 35px;
  border: 0;
  background: none;
  cursor: pointer;
  &__dash {
    &--open {
      height: 4px;
      margin-bottom: 4px;
      background: $brand-red;
      &:nth-child(2) {
        width: 65%;
      }
    }
    // &--close {
    //   height: 4px;
    //   margin-bottom: 4px;
    //   background: $brand-red;
    //   transform: translate(4.5px, 4.5px) rotate(-45deg);
    //   &:nth-child(2) {
    //     transform: translate(4.5px, -4.5px) rotate(45deg);
    //   }
    // }
  }
}
</style>
