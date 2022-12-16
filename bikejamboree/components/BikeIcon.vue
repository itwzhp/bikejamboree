<template>
  <i :class="classes" v-html="$feathericons[icon].toSvg(options)" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'black',
    },
    withShadow: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'bike-icon',
        `bike-icon--${this.color}`,
        this.withShadow ? `bike-heading--with-shadow` : '',
      ]
    },
    options() {
      return this.filled ? { fill: 'currentColor' } : {}
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  &--white {
    color: #fff;
  }
  &--with-shadow {
    filter: drop-shadow(1px 1px 2px #000);
  }
}
</style>
