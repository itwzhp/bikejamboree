<template>
  <div id="map-wrap">
    <client-only>
      <l-map
        ref="bikeMap"
        :zoom="mapZoom"
        :center="[45, 35]"
        :options="{
          attributionControl: false,
          scrollWheelZoom: false,
        }"
        class="bike-map"
      >
        <l-tile-layer
          :url="`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${$config.MAPBOX_KEY}`"
          :options="{ zoomOffset: -1, tileSize: 512 }"
        />
        <l-marker
          v-for="(stop, i) in stops"
          :key="`stop-${i}`"
          :lat-lng="[stop.lat, stop.lon]"
          :icon="getIcon(stop)"
        />
        <l-marker
          v-if="kmlCoordinates"
          :lat-lng="kmlCoordinates"
          :icon="getIcon({type: 'live'})"
        />
        <l-polyline
          v-for="(stage, i) in stages"
          :key="`stage=${i}`"
          :lat-lngs="getAllPoints(stage)"
          :weight="8"
          color="#e94f2D"
          dash-array="10 15"
          :opacity="0.6"
          @click="selectStage(i)"
        />
        <l-polyline
          v-if="currentStageIndex > -1"
          :lat-lngs="getAllPoints(currentStage)"
          :weight="8"
          color="#e94f2D"
          dash-array="10 15"
        />
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'BikeMap',
  props: {
    stops: {
      type: Array,
      default: () => [],
    },
    stages: {
      type: Array,
      default: () => [],
    },
    currentStageIndex: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      kmlCoordinates: ''
    }
  },
  async fetch() {
    this.kmlCoordinates = await fetch('https://inreach.radom.zhp.pl')
      .then(response => response.json())
  },
  computed: {
    map() {
      return this.$refs.bikeMap
    },
    currentStage() {
      return this.stages[this.currentStageIndex]
    },
    mapZoom() {
      return this.$screen.lg ? 4 : 3
    },
  },
  watch: {
    currentStageIndex(stageIndex) {
      this.fitMapToStage(stageIndex)
    },
    map() {
      this.fitMapToStage(this.currentStageIndex)
    }
  },
  updated() {
    this.fitMapToStage(this.currentStageIndex)
  },
  methods: {
    getAllPoints(stage) {
      return stage.points?.length
        ? [stage.startPoint, ...stage.points, stage.finishPoint]
        : [stage.startPoint, stage.finishPoint]
    },
    selectStage(i) {
      this.$emit('select-stage', i)
    },
    getIcon(stop) {
      let anchor = [12, 30]
      let fill = '#454545'
      let stroke = '#454545'
      let icon = 'map-pin'
      switch (stop.type) {
        case 'start':
          icon = 'home'
          break
        case 'finish':
          icon = 'flag'
          anchor = [4, 24]
          break
        case 'live':
          icon = 'disc'
          fill = 'none'
          stroke = 'red'
          break
      }
      return this.$L
        ? this.$L.divIcon({
            className: 'bike-map__marker-icon',
            iconAnchor: anchor,
            html: this.$feathericons[icon].toSvg({
              fill,
              stroke,
            }),
          })
        : ''
    },
    fitMapToStage(stageIndex) {
      if (this.$refs.bikeMap) {
        if (stageIndex > -1) {
          const stage = this.stages[stageIndex]
          this.$refs.bikeMap.fitBounds(this.getAllPoints(stage), {
            animate: true,
            padding: [10, 10],
          })
        } else {
          this.$refs.bikeMap.fitBounds(
            this.stops.map((stop) => [stop.lat, stop.lon]),
            { animate: true, padding: [10, 10] }
          )
        }
      }
    },
  },
}
</script>

<style lang="scss">
.bike-map__marker-icon .feather-disc {
  animation: breathing 1s infinite;
}

@keyframes breathing {
  0% {
    transform: scale(0.95);
  }

  25% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  75% {
    transform: scale(1)
  }

  100% {
    transform: scale(0.95);
  }
}

.bike-map {
  min-height: 350px;
}

@include screen-size('tablet') {
  .bike-map {
    min-height: 550px;
  }
}
</style>
