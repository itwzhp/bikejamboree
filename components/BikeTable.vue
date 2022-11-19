<template>
  <div class="bike-table__container">
    <table :class="classes">
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: 'BikeTable',
  props: {
    noHeader: {
      type: Boolean,
      default: false
    },
    verticalOnMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return ['bike-table', this.noHeader ? 'bike-table--no-header' : null, this.verticalOnMobile ? 'bike-table--vertical-on-mobile' : null]
    }
  }
}
</script>

<style lang="scss">
.bike-table {
  line-height: 1.5;
  color: $text-color;
  &:not(.bike-table--no-header) tr {
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
  &--vertical-on-mobile {
    table, tr, td {
      display: block;
    }
    tr {
      padding: 10px 0;
    }
    td {
      padding: 2px 0;
    }
  }
}

@include screen-size('tablet') {
  .bike-table {
    &--vertical-on-mobile {
      table {
        display: table;
      }
      tr {
        display: table-row;
      }
      td {
        display: table-cell;
        padding: 10px;
        &:first-of-type {
          padding-left: 0;
        }
        &:last-of-type {
          padding-right: 0;
        }
      }
    }
  }
}
</style>
