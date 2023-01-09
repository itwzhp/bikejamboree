<template>
  <main>
    <BikeSection>
      <BikeHeading centered level="2">
        {{ $t('route.route') }}
      </BikeHeading>
      <BikeParagraph v-if="$i18n.locale === 'pl'">
        Trasa sztafety "JednoŚladami Andersa" liczy około 15 000 km i jest podzielona na 15 etapów - 14 rowerowych i jeden morski. W Mediolanie trasa rozdziela sie na dwie odnogi ("West" i "East"), przez co w tym samym czasie będą odbywały się dwa etapy sztafety.
        <BikeParagraph />
      </bikeparagraph>
    </BikeSection>
    <BikeStages class="mb-75" />
    </bikeparagraph>
    </bikeparagraph>
  </main>
</template>

<script>
export default {
  name: 'TrasaPage',
}
</script>
