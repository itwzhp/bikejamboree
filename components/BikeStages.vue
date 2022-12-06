<template>
  <BikeSection width="full" class="mb-75 bike-stages">
    <BikeMap
      :stops="stops"
      :stages="stages"
      :current-stage-index="Number(currentStageIndex)"
      :live-coordinates="liveCoordinates"
      class="bike-stages__map"
      @select-stage="selectStage($event)"
    />
    <div class="bike-stages__list">
      <BikeButton
        v-for="(st, i) in stages"
        :key="`stage-${i}`"
        size="small"
        class="mb-10 bike-stages__list-item"
        @click.native="selectStage(i)"
      >
        {{ $t(`stages.${st.name}`) }}
        <span class="bike-stages__link-details">
          ({{ $t(`places.${st.startPoint.city}`) }} -
          {{ $t(`places.${st.finishPoint.city}`) }})
        </span>
      </BikeButton>
    </div>
    <BikeStageDetails
      class="bike-stages__details"
      :stages="stages"
      :current-stage-index="Number(currentStageIndex)"
      @select-stage="selectStage($event)"
    />
    <BikeMapLegend :live-date-and-time="liveDateAndTime" class="bike-stages__map-legend" />
  </BikeSection>
</template>

<script>
import { stopsData, stagesData } from '@/helpers/stages.js'

export default {
  data() {
    return {
      currentStageIndex: -1,
      kmlData: ''
    }
  },
  async fetch() {
    this.kmlData = await fetch('https://inreach.radom.zhp.pl')
      .then(response => response.json())
  },
  computed: {
    stops() {
      return stopsData
    },
    stages() {
      return stagesData
    },
    liveCoordinates() {
      return (this.kmlData.lat && this.kmlData.lon) ? [this.kmlData.lat, this.kmlData.lon]: null
    },
    liveDate() {
      return this.kmlData.time
    },
    liveDateAndTime() {
      const date = new Date(this.liveDate)
      const result = `${date.toLocaleDateString()}, ${date.toLocaleTimeString([], {timeStyle: 'short'})}`
      return result
    }
  },
  methods: {
    selectStage(i) {
      this.currentStageIndex = i
    }
  },
}
</script>

<style lang="scss">
.bike-stages {
  display: grid;
  grid-template-areas: 'map' 'legend' 'details' 'list';
  grid-gap: 15px;
  &__map {
    grid-area: map;
    overflow: hidden;
  }
  &__list {
    grid-area: list;
    columns: 2;
    max-width: calc(100vw - 48px);
    height: 100%;
    margin: 10px auto 0;
  }
  &__list-item {
    max-width: 100%;
  }
  &__details {
    grid-area: details;
    max-width: calc(100vw - 48px);
    margin: 0 auto;
    width: 100%;
  }
  &__map-legend {
    grid-area: legend;
    max-width: calc(100vw - 48px);
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  &__link-details {
    white-space: nowrap;
    font-size: 12px;
  }
}

@include screen-size('tablet') {
  .bike-stages {
    grid-template-areas: 'map details' 'map legend' 'list legend';
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 470px 50px auto;
    grid-gap: 30px;
    &__map {
      border-radius: 15px;
    }
    &__list {
      columns: 3;
      max-width: 100%;
      width: 100%;
      margin-top: 0;
    }
    &__link-details {
      font-size: 14px;
    }
  }
}
</style>
