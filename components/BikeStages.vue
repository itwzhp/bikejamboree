<template>
  <BikeSection width="full" class="mb-75 bike-stages">
    <BikeMap
      :stops="stops"
      :stages="stages"
      :current-stage-index="currentStageIndex"
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
      :current-stage-index="currentStageIndex"
      @select-stage="selectStage($event)"
    />
    <BikeMapLegend class="bike-stages__map-legend" />
  </BikeSection>
</template>

<script>
import { stopsData, stagesData } from '@/helpers/stages.js'

export default {
  data() {
    return {
      currentStageIndex: -1,
    }
  },
  computed: {
    stops() {
      return stopsData
    },
    stages() {
      return stagesData
    },
  },
  methods: {
    selectStage(i) {
      this.currentStageIndex = i
    },
  },
}
</script>

<style lang="scss" scoped>
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
