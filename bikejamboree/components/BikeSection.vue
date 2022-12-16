<template>
  <section :class="classes" :style="inlineStyle">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'BikeSection',

  props: {
    width: {
      type: String,
      default: '',
    },
    columnsMobile: {
      type: String,
      default: '1',
    },
    columnsDesktop: {
      type: String,
      default: '1',
    },
    columnsTablet: {
      type: String,
      default: '1',
    },
    centered: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: 'white',
    },
    backgroundImage: {
      type: String,
      default: '',
    },
    gap: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return [
        'bike-section',
        this.centered ? `bike-section--centered` : '',
        this.rounded ? `bike-section--rounded` : '',
        `bike-section--width-${this.width}`,
        `bike-section--background-${this.background}`,
        `bike-section--columns-mobile-${this.columnsMobile}`,
        `bike-section--columns-tablet-${this.columnsTablet}`,
        `bike-section--columns-desktop-${this.columnsDesktop}`,
      ]
    },
    inlineStyle() {
      let style = ''
      if (this.backgroundImage) style += `background-image: url(${this.backgroundImage});`
      if (this.gap) style += `gap: ${this.gap}px;`
      return style
    },
  },
}
</script>

<style lang="scss">
.bike-section {
  margin-left: 24px;
  margin-right: 24px;

  &--width-full {
    margin-left: 0;
    margin-right: 0;
  }

  &--centered {
    text-align: center;
  }

  &--rounded {
    border-radius: 15px;
    overflow: hidden;
  }

  &--background-red {
    background: lighten($brand-red, 20%);
  }

  &--columns-mobile-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @include screen-size('tablet') {
    &--width-full {
      margin-left: 24px;
      margin-right: 24px;
    }

    &--width-narrow {
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
    }

    &--columns-tablet-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &--columns-tablet-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    &--columns-tablet-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @include screen-size('desktop') {
    &--columns-desktop-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &--columns-desktop-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    &--columns-desktop-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
