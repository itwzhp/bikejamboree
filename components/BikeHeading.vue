<script>
export default {
  name: 'BikeHeading',
  props: {
    level: {
      type: String,
      default: '1',
    },
    size: {
      type: String,
      default: 'medium',
    },
    color: {
      type: String,
      default: 'black',
    },
    centered: {
      type: Boolean,
      default: false,
    },
    withShadow: {
      type: Boolean,
      default: false,
    },
    noTopMargin: {
      type: Boolean,
      default: false,
    },
    noBottomMargin: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        'bike-heading',
        `bike-heading--size-${this.size}`,
        `bike-heading--color-${this.color}`,
        this.centered ? `bike-heading--centered` : '',
        this.withShadow ? `bike-heading--with-shadow` : '',
        this.noTopMargin ? `bike-heading--no-top-margin` : '',
        this.noBottomMargin ? `bike-heading--no-bottom-margin` : '',
      ]
    },
  },

  render(createElement) {
    return createElement(
      'h' + this.level,
      {
        class: this.classes,
      },
      this.$slots.default
    )
  },
}
</script>

<style lang="scss">
.bike-heading {
  color: $text-color;
  font-size: 1.5rem;
  &--centered {
    text-align: center;
  }
  &--with-shadow {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.85);
  }
  &--size-small {
    font-size: 20px;
  }
  &--size-big {
    font-size: 2rem;
  }
  &--color-red {
    color: $brand-red;
  }
  &--color-yellow {
    color: $brand-yellow;
  }
  &--color-white {
    color: #fff;
  }
  &--no-top-margin {
    margin-top: 0;
  }
  &--no-bottom-margin {
    margin-bottom: 0;
  }
}

@include screen-size('tablet') {
  .bike-heading {
    &--size-big {
      font-size: 3rem;
    }
  }
}
</style>
