<template>
  <main>
    <BikeSection width="narrow" class="mb-30">
      <BikeHeading level="2">
        {{ $t('traces.traces_for_the_birthday') }}
      </BikeHeading>
      <BikeParagraph>
        {{ $t('traces.have_a_look_around') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('traces.when_you_do_find') }}
        <a href="mailto:dorota.limontas@zhp.net.pl">dorota.limontas@zhp.net.pl</a>.
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('traces.all_traces_will_be') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('traces.feel_free_to_engage') }}
      </BikeParagraph>
    </BikeSection>
    <BikeSection :width="mapSectionWidth">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1Kfny46c_efX7kpQiJ5To7PR0692Hh7E&ehbc=2E312F"
        width="1440"
        height="600"
      />
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'MiejscaPage',

  computed: {
    mapSectionWidth() {
      return !this.$screen.lg ? 'full' : 'narrow'
    },
  },
}
</script>

<styles lang="scss">
iframe {
  max-width: 100%;
}
</styles>
