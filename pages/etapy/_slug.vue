<template>
  <main>
    <BikeSection>
      <BikeBreadcrumbs :breadcrumbs-list="breadcrumbs" class="mb-10" />
      <BikeHeading no-top-margin>
        {{ $t(`stages.${currentStageData.name}`) }}
      </BikeHeading>
    </BikeSection>
    <BikeSection class="mb-75 bike-stage-page__details" width="full">
      <BikeMap
        :stops="stops"
        :stages="stages"
        :current-stage-index="Number(currentStageIndex)"
        class="bike-stages__map bike-stage-page__map mb-30"
        @select-stage="selectStage($event)"
      />
      <BikeCard class="bike-map-legend bike-stage-page__legend">
        <BikeStageDetailsTable :stage-data="currentStageData" />
      </BikeCard>
    </BikeSection>
    <template v-if="currentStageData.members">
      <BikeSection>
        <BikeHeading level="2" centered>
          Uczestnicy
        </BikeHeading>
      </BikeSection>
      <BikeStageMembers :members="currentStageData.members" />
    </template>
    <BikeSection>
      <BikeHeading level="2" centered>
        Blog
      </BikeHeading>
    </BikeSection>
    <!-- <BikeWarning class="mb-10">
      Ten etap startuje {{ currentStageData.startDate.toLocaleDateString() }}. Wcześniej może zainteresują Cię inne artykuły:
    </BikeWarning> -->
    <BikeNewsShort with-link :articles="articles" class="mb-75" />
  </main>
</template>

<script>
import { stopsData, stagesData } from '@/helpers/stages.js'

export default {
  async asyncData({ $axios }) {
    let articles = []
    articles = await $axios
      .$get('https://work.bikejamboree.pl/wp-json/wp/v2/posts?per_page=3')
      .catch((e) => console.error(e))
    return { articles }
  },

  data() {
    return {
      teamMembers: [1, 2, 3, 4, 5, 6],
    }
  },
  computed: {
    stops() {
      return stopsData
    },
    stages() {
      return stagesData
    },
    currentStageData() {
      return this.stages.filter((el) => {
        return el.id === this.stageId
      })[0]
    },
    currentStageIndex() {
      return this.stages.findIndex((stage) => stage.id === this.stageId)
    },
    stageId() {
      return this.$route.params.slug
    },
    breadcrumbs() {
      return [
        {
          label: 'Etapy',
          href: '/etapy',
        },
        {
          label: this.$t(`stages.${this.currentStageData.name}`),
        },
      ]
    },
  }
}
</script>

<style lang="scss" scoped>
.bike-stage-page {
  &__legend {
    padding: 30px 20px;
    max-width: 80vw;
    margin: 0 auto;
  }
}

@include screen-size('tablet') {
  .bike-stage-page {
    &__details {
      display: grid;
      grid-template-areas: 'map legend';
      grid-template-columns: 3fr 1fr;
      gap: 30px;
    }
    &__map {
      grid-area: map;
    }
    &__legend {
      grid-area: legend;
      max-width: unset;
      margin: 0;
    }
  }
}
</style>
