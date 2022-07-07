<template>
  <a :class="classes" :href="to" target="blank" :aria-label="ariaLabel">
    <BikeIcon v-if="withIcon" class="bike-link__icon" icon="chevron-right" />
    <span class="bike-link__content">
      <slot />
    </span>
  </a>
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
    ariaLabel: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return ['bike-link', this.withIcon ? `bike-link--with-icon` : '']
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-link {
  @include bike-link;
  &__icon {
    @include bike-link__icon;
  }
  &__content {
    @include bike-link__content;
  }
}
</style>
