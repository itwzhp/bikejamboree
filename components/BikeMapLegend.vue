<template>
  <details class="bike-map-legend__details" :open="legendOpen">
    <summary class="bike-map-legend__summary">
      <BikeIcon class="bike-map-legend__summary-icon" icon="chevron-right" />
      <span
        class="bike-map-legend__summary-content bike-map-legend__summary-content--closed"
      >
        Pokaż legendę
      </span>
      <span
        class="bike-map-legend__summary-content bike-map-legend__summary-content--opened"
      >
        Ukryj legendę
      </span>
    </summary>
    <BikeCard class="bike-map-legend">
      <div>
        <BikeHeading level="3" no-top-margin size="small">
          Legenda
        </BikeHeading>
        <table>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__icon" icon="home" filled />
            </td>
            <td class="bike-map-legend__table-cell">
              Start - Nur-Sułtan
            </td>
          </tr>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__icon" icon="flag" filled />
            </td>
            <td class="bike-map-legend__table-cell">
              Meta - Edynburg, Gdańsk
            </td>
          </tr>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__icon" icon="map-pin" filled />
            </td>
            <td class="bike-map-legend__table-cell">
              Miejsca zmiany etapów
            </td>
          </tr>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <div class="bike-map-legend__route-icon" />
            </td>
            <td class="bike-map-legend__table-cell">
              Trasa wyprawy
            </td>
          </tr>
        </table>
      </div>
    </BikeCard>
  </details>
</template>

<script>
export default {
  data() {
    return {
      legendOpen: true,
    }
  },
  mounted() {
    this.legendOpen = this.$screen.lg
  },
}
</script>

<style lang="scss" scoped>
.bike-map-legend {
  color: $text-color;
  padding: 30px;
  &__summary {
    @include bike-link;
    justify-content: center;
    margin-bottom: 10px;
  }
  &__summary-icon {
    @include bike-link__icon;
  }
  &__summary-content {
    &--opened {
      display: none;
    }
  }
  &__details[open] {
    .bike-map-legend__summary-content {
      &--opened {
        display: block;
      }
      &--closed {
        display: none;
      }
    }
  }
  &__table-cell {
    padding-bottom: 7px;
    &--first {
      min-width: 35px;
      padding-right: 7px;
    }
  }
  &__icon {
    transform: scale(0.8);
  }
  &__route-icon {
    height: 6px;
    background: $brand-red;
    opacity: 0.6;
  }
}

@include screen-size('tablet') {
  .bike-map-legend {
    &__summary {
      display: none;
    }
  }
}
</style>
