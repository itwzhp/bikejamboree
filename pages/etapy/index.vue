<template>
  <main>
    <BikeSection>
      <BikeHeading> Etapy sztafety </BikeHeading>
    </BikeSection>
    <BikeSection columns-desktop="3" columns-tablet="2" columns-mobile="2">
      <BikeInternalLink
        v-for="(stage, i) in stages"
        :key="`stage-${i}`"
        :to="`/etapy/${stage.id}`"
      >
        {{ $t(`stages.${stage.name}`) }}
      </BikeInternalLink>
    </BikeSection>
  </main>
</template>

<script>
import { stagesData } from '@/helpers/stages.js'

export default {
  name: 'EtapyPage',

  computed: {
    stages() {
      return stagesData
    },
  },
}
</script>
