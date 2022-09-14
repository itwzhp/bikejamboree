<template>
  <NuxtLink :class="classes" :to="linkDestination">
    <BikeIcon v-if="withIcon" class="bike-link__icon" icon="chevron-right" />
    <span class="bike-link__content">
      <slot />
    </span>
  </NuxtLink>
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
    disableLocalePath: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return ['bike-link', this.withIcon ? `bike-link--with-icon` : '']
    },
    linkDestination() {
      return this.disableLocalePath ? this.to : this.localePath(this.to)
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
