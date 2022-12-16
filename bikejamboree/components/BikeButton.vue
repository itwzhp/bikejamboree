<template>
  <button :class="classes">
    <BikeIcon v-if="withIcon" class="bike-button__icon" icon="chevron-right" />
    <span class="bike-button__content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    withIcon: {
      type: Boolean,
      default: true,
    },
    to: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'regular',
    },
  },
  computed: {
    classes() {
      return [
        'bike-button',
        this.withIcon ? `bike-button--with-icon` : '',
        `bike-button--size-${this.size}`,
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-button {
  @include bike-link;
  border: none;
  background: none;
  &__icon {
    @include bike-link__icon;
  }
  &__content {
    @include bike-link__content;
  }
  &--size-small {
    @include bike-link--small;
  }
}
</style>
