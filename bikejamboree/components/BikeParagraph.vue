<template>
  <p :class="classes">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BikeParagraph',
  props: {
    noMargin: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        'bike-paragraph',
        this.noMargin ? `bike-paragraph--no-margin` : '',
      ]
    },
  },
}
</script>

<style lang="scss">
.bike-paragraph {
  line-height: 1.5;
  margin-top: 0;
  color: $text-color;
  &--no-margin {
    margin: 0;
  }
}
</style>
