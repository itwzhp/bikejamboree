<template>
  <div class="bike-table__container">
    <table class="bike-table">
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: 'BikeTable',
}
</script>

<style lang="scss">
.bike-table {
  line-height: 1.5;
  color: $text-color;
  tr {
    &:first-of-type {
      font-weight: bold;
    }
  }
  td {
    padding: 10px;
    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    }
  }
  &__container {
    max-width: 100%;
    overflow-x: scroll;
  }
}
</style>
