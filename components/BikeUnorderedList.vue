<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    noMargin: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        'bike-unordered-list',
        { 'bike-unordered-list--no-margin': this.noMargin },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-unordered-list {
  color: $text-color;
  line-height: 1.5;
  &--no-margin {
    padding-left: 0;
    list-style-position: inside;
  }
}
</style>
