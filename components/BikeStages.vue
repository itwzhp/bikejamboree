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
        {{ st.name }}
        <span class="bike-stages__link-details">{{
          `(${st.startPoint.city} - ${st.finishPoint.city})`
        }}</span>
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
export default {
  data() {
    return {
      currentStageIndex: -1,
      stops: [
        {
          lat: 51.1762,
          lon: 71.5048,
          city: 'Nur-Sułtan',
          country: 'Kazachstan',
          type: 'start',
        },
        {
          lat: 46.8002,
          lon: 61.6654,
          city: 'Aralsk',
          country: 'Kazachstan',
          type: 'regular',
        },
        {
          lat: 41.3125,
          lon: 69.2787,
          city: 'Taszkent',
          country: 'Uzbekistan',
          type: 'regular',
        },
        {
          lat: 37.9406,
          lon: 58.3823,
          city: 'Aschabad',
          country: 'Turkmenistan',
          type: 'regular',
        },
        {
          lat: 35.6935,
          lon: 51.369,
          city: 'Teheran',
          country: 'Iran',
          type: 'regular',
        },
        {
          lat: 34.4905,
          lon: 46.7563,
          city: 'Kermanszah',
          country: 'Iran',
          type: 'regular',
        },
        {
          lat: 31.9517,
          lon: 35.924,
          city: 'Amman',
          country: 'Jordania',
          type: 'regular',
        },
        {
          lat: 31.2018,
          lon: 29.9158,
          city: 'Alexandria',
          country: 'Egipt',
          type: 'regular',
        },
        {
          lat: 40.5493,
          lon: 17.2489,
          city: 'Taranto',
          country: 'Włochy',
          type: 'regular',
        },
        {
          lat: 41.49093,
          lon: 13.81383,
          city: 'Monte Cassino',
          country: 'Włochy',
          type: 'regular',
        },
        {
          lat: 45.4613,
          lon: 9.1595,
          city: 'Mediolan',
          country: 'Włochy',
          type: 'regular',
        },
        {
          lat: 48.8589,
          lon: 2.3469,
          city: 'Paryż',
          country: 'Francja',
          type: 'regular',
        },
        {
          lat: 55.9537,
          lon: -3.1884,
          city: 'Edynburg',
          country: 'Wielka Brytania',
          type: 'finish',
        },
        {
          lat: 48.3062,
          lon: 14.2862,
          city: 'Linz',
          country: 'Austria',
          type: 'regular',
        },
        {
          lat: 50.214,
          lon: 19.008,
          city: 'Katowice',
          country: 'Polska',
          type: 'regular',
        },
        {
          lat: 54.3275,
          lon: 18.8645,
          city: 'Gdańsk',
          country: 'Polska',
          type: 'finish',
        },
      ],
    }
  },
  computed: {
    stages() {
      return [
        {
          name: 'Etap I',
          startPoint: this.stops[0],
          startDate: new Date(2022, 10, 12),
          finishPoint: this.stops[1],
          finishDate: new Date(2022, 11, 9),
          distance: '1500 km',
          leader: 'Zbigniew Sas',
          nextStages: [1],
        },
        {
          name: 'Etap II',
          startPoint: this.stops[1],
          startDate: new Date(2022, 11, 10),
          finishPoint: this.stops[2],
          finishDate: new Date(2022, 11, 30),
          distance: '1400 km',
          leader: 'Miłosz Bączkowski',
          previousStages: [0],
          nextStages: [2],
        },
        {
          name: 'Etap III',
          startPoint: this.stops[2],
          startDate: new Date(2022, 11, 31),
          finishPoint: this.stops[3],
          finishDate: new Date(2023, 0, 20),
          distance: '1400 km',
          leader: 'Arkadiusz Kościelski',
          previousStages: [1],
          nextStages: [3],
        },
        {
          name: 'Etap IV',
          startPoint: this.stops[3],
          startDate: new Date(2023, 0, 21),
          finishPoint: this.stops[4],
          finishDate: new Date(2023, 1, 10),
          distance: '1300 km',
          leader: 'Monika Szenfer',
          previousStages: [2],
          nextStages: [4],
        },
        {
          name: 'Etap V',
          startPoint: this.stops[4],
          startDate: new Date(2023, 1, 11),
          finishPoint: this.stops[5],
          finishDate: new Date(2023, 2, 3),
          distance: '1000 km',
          leader: 'Adam Dąbrowski',
          previousStages: [3],
          nextStages: [5],
          points: [
            { lat: 34.6504, lon: 50.8417 },
            { lat: 32.6627, lon: 51.6955 },
            { lat: 33.4994, lon: 49.053 },
            { lat: 33.8973, lon: 48.7516 },
          ],
        },
        {
          name: 'Etap VI',
          startPoint: this.stops[5],
          startDate: new Date(2023, 2, 4),
          finishPoint: this.stops[6],
          finishDate: new Date(2023, 2, 24),
          distance: '1400 km',
          leader: 'Marcin Dałkiewicz',
          previousStages: [4],
          nextStages: [6],
        },
        {
          name: 'Etap VII',
          startPoint: this.stops[6],
          startDate: new Date(2023, 2, 25),
          finishPoint: this.stops[7],
          finishDate: new Date(2023, 3, 21),
          distance: '1800 km',
          leader: 'Dariusz Zajączkowski',
          previousStages: [5],
          nextStages: [7],
          points: [
            { lat: 32.7045, lon: 35.2898 },
            { lat: 32.8184, lon: 34.9885 },
            { lat: 31.9257, lon: 34.868 },
            { lat: 31.8953, lon: 34.8105 },
            { lat: 31.7884, lon: 35.2068 },
            { lat: 31.7072, lon: 35.2029 },
            { lat: 31.6076, lon: 34.896 },
            { lat: 31.2986, lon: 34.9349 },
            { lat: 31.2588, lon: 35.2133 },
            { lat: 31.3156, lon: 35.3537 },
            { lat: 31.2588, lon: 35.2133 },
            { lat: 30.8516, lon: 34.7826 },
            { lat: 29.5581, lon: 34.9482 },
            { lat: 29.3142, lon: 34.7408 },
            { lat: 29.035, lon: 34.6619 },
            { lat: 28.5676, lon: 33.9536 },
            { lat: 28.7144, lon: 33.3305 },
            { lat: 29.9737, lon: 32.5263 },
            { lat: 30.6318, lon: 31.9393 },
          ],
        },
        {
          name: 'Etap VII Sea',
          startPoint: this.stops[7],
          startDate: new Date(2023, 3, 22),
          finishPoint: this.stops[8],
          finishDate: new Date(2023, 4, 7),
          distance: '970 Mm',
          leader: 'Anna Śledzińska',
          previousStages: [6],
          nextStages: [8],
        },
        {
          name: 'Etap VIII',
          startPoint: this.stops[8],
          startDate: new Date(2023, 4, 8),
          finishPoint: this.stops[9],
          finishDate: new Date(2023, 4, 19),
          distance: '400 km',
          leader: 'Dorota Limontas',
          previousStages: [7],
          nextStages: [9],
        },
        {
          name: 'Etap IX',
          startPoint: this.stops[9],
          startDate: new Date(2023, 4, 20),
          finishPoint: this.stops[10],
          finishDate: new Date(2023, 5, 2),
          distance: '800 km',
          leader: 'Anna Popowska',
          previousStages: [8],
          nextStages: [10, 12],
        },
        {
          name: 'Etap X West',
          startPoint: this.stops[10],
          startDate: new Date(2023, 5, 3),
          finishPoint: this.stops[11],
          finishDate: new Date(2023, 5, 16),
          distance: '900 km',
          leader: 'Wojciech Wrześniak',
          previousStages: [9],
          nextStages: [11],
        },
        {
          name: 'Etap XI West',
          startPoint: this.stops[11],
          startDate: new Date(2023, 5, 17),
          finishPoint: this.stops[12],
          finishDate: new Date(2023, 6, 8),
          distance: '1200 km',
          points: [
            { lat: 49.9202, lon: 1.084 },
            { lat: 50.868, lon: 0.6099 },
            { lat: 51.4895, lon: -0.3282 },
            { lat: 53.7976, lon: -1.5436 },
          ],
          leader: 'Piotr Wojtaszek',
          previousStages: [10],
        },
        {
          name: 'Etap X East',
          startPoint: this.stops[10],
          startDate: new Date(2023, 5, 3),
          finishPoint: this.stops[13],
          finishDate: new Date(2023, 5, 15),
          distance: '800 km',
          leader: 'Piotr Sudoł',
          previousStages: [9],
          nextStages: [13],
        },
        {
          name: 'Etap XI East',
          startPoint: this.stops[13],
          startDate: new Date(2023, 5, 16),
          finishPoint: this.stops[14],
          finishDate: new Date(2023, 5, 26),
          distance: '800 km',
          previousStages: [12],
          nextStages: [14],
        },
        {
          name: 'Etap XII East',
          startPoint: this.stops[14],
          startDate: new Date(2023, 5, 27),
          finishPoint: this.stops[15],
          finishDate: new Date(2023, 6, 8),
          distance: '650 km',
          previousStages: [13],
          points: [
            { lat: 50.8097, lon: 19.1222 },
            { lat: 52.2652894, lon: 19.1650943 },
            { lat: 53.0145, lon: 18.6014 },
          ],
          leader: 'Łukasz Tomala',
        },
      ]
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
