<template>
  <main>
    <BikeSection>
      <BikeHeading> Etapy sztafety </BikeHeading>
    </BikeSection>
    <BikeSection>
      <BikeInternalLink
        v-for="(stage, i) in stages.slice(0, 6)"
        :key="`stage-${i}`"
        :to="`/o-projekcie/etapy/${stage.id}`"
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
