<template>
  <main>
    <BikeSection>
      <BikeBreadcrumbs :breadcrumbs-list="breadcrumbs" class="mb-10" />
      <BikeHeading no-top-margin>
        {{ $t(`stages.${currentStageData.name}`) }}
      </BikeHeading>
    </BikeSection>
    <BikeSection class="mb-10" width="full">
      <BikeMap
        :stops="stops"
        :stages="stages"
        :current-stage-index="Number(currentStageIndex)"
        class="bike-stages__map"
        @select-stage="selectStage($event)"
      />
    </BikeSection>
    <BikeSection class="mb-75">
      <BikeStageDetailsTable :stage-data="currentStageData" />
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
    <BikeWarning class="mb-10">
      Ten etap startuje {{ currentStageData.startDate.toLocaleDateString() }}. Wcześniej może zainteresują Cię inne artykuły:
    </BikeWarning>
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
  },
  mounted() {
    console.log(1, this.$route)
  },
}
</script>
<!--
<style lang="css" scoped>
</style> -->
