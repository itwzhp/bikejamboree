<template>
  <BikeSection class="bike-current mb-75">
    <div class="bike-current__map">
      <BikeMap
        :stops="stops"
        :stages="stages"
        size="small"
        :current-stage-index="Number(11)"
        :live-coordinates="liveCoordinates"
      />
    </div>
    <BikeCard class="bike-map-legend">
      <div>
        <BikeHeading level="2" no-top-margin size="small">
          Aktualnie trwa: Etap XI West
        </BikeHeading>
        <table>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__icon" icon="map-pin" filled />
            </td>
            <td class="bike-map-legend__table-cell">
              Start (17.06.2023) - {{ $t('places.paris') }}
            </td>
          </tr>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__icon" icon="map-pin" filled />
            </td>
            <td class="bike-map-legend__table-cell">
              Meta (08.07.2023) - {{ $t('places.edinburgh') }}
            </td>
          </tr>

          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <div class="bike-map-legend__route-icon" />
            </td>
            <td class="bike-map-legend__table-cell">
              {{ $t('route.route_of_the_expedition') }}
            </td>
          </tr>
          <tr v-if="liveDateAndTime" class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__live-icon" icon="disc" />
            </td>
            <td class="bike-map-legend__table-cell">
              Aktualne położenie
              <small class="bike-map-legend__live-date">({{ liveDateAndTime }})</small>
            </td>
          </tr>
        </table>
      </div>
    </BikeCard>
    <div class="bike-current__map">
      <BikeMap
        :stops="stops"
        :stages="stages"
        size="small"
        :current-stage-index="Number(13)"
        :live-coordinates="liveCoordinates"
      />
    </div>
    <BikeCard class="bike-map-legend">
      <div>
        <BikeHeading level="2" no-top-margin size="small">
          Aktualnie trwa: Etap XII East
        </BikeHeading>
        <table>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__icon" icon="map-pin" filled />
            </td>
            <td class="bike-map-legend__table-cell">
              Start (17.06.2023) - {{ $t('places.chorzow') }}
            </td>
          </tr>
          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__icon" icon="map-pin" filled />
            </td>
            <td class="bike-map-legend__table-cell">
              Meta (08.07.2023) - {{ $t('places.gdansk') }}
            </td>
          </tr>

          <tr class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <div class="bike-map-legend__route-icon" />
            </td>
            <td class="bike-map-legend__table-cell">
              {{ $t('route.route_of_the_expedition') }}
            </td>
          </tr>
          <tr v-if="liveDateAndTime" class="bike-map-legend__table-row">
            <td
              class="bike-map-legend__table-cell bike-map-legend__table-cell--first"
            >
              <BikeIcon class="bike-map-legend__live-icon" icon="disc" />
            </td>
            <td class="bike-map-legend__table-cell">
              Aktualne położenie
              <small class="bike-map-legend__live-date">({{ liveDateAndTime }})</small>
            </td>
          </tr>
        </table>
      </div>
    </BikeCard>
  </BikeSection>
</template>

<script>
import { stopsData, stagesData } from '@/helpers/stages.js'

export default {
  name: 'BikeCurrentState',

  data() {
    return {
      kmlData: ''
    }
  },
  // async fetch() {
  //   this.kmlData = await fetch('https://frog01-20438.wykr.es')
  //     .then(response => response.json())
  // },
  computed: {
    stops() {
      return stopsData
    },
    stages() {
      return stagesData
    }
    // liveCoordinates() {
    //   return (this.kmlData.lat && this.kmlData.lon) ? [this.kmlData.lat, this.kmlData.lon]: null
    // },
    // liveDate() {
    //   return this.kmlData.time
    // },
    // liveDateAndTime() {
    //   const date = new Date(this.liveDate)
    //   const result = `${date.toLocaleDateString()}, ${date.toLocaleTimeString([], {timeStyle: 'short'})}`
    //   return result
    // }
  },
}
</script>

<style lang="scss" scoped>
.bike-current {
  &__map {
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 0;
    margin-top: 30px;
    min-height: 300px;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 30px 0;
  }
}

@include screen-size('tablet') {
  .bike-current {
    display: flex;
    align-items: stretch;
    grid-gap: 30px;
    &__map {
      flex: 1 0 300px;
      margin-top: 0;
      margin-bottom: 0;
    }
    &__link {
      padding: 30px;
    }
  }
}

.bike-map-legend {
  color: $text-color;
  padding: 30px;

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
  &__live-icon {
    color: $brand-red
  }
  &__live-date {
    display: block
  }
}
</style>
