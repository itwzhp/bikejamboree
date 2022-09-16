<template>
  <main>
    <BikeSection v-if="$i18n.locale === 'pl'" width="narrow" class="mb-30">
      <BikeHeading level="2">
        "130 śladów na 130 urodziny gen. Andersa"
      </BikeHeading>
      <BikeParagraph>
        Rozejrzyj się w swoim mieście, okolicy, czy regionie i odnajduj ulice,
        skwery, pomniki, szkoły, muzea i wszystko co związane z gen. Władysławem
        Andersem, jego armią, Bitwą pod Monte Cassino, Misiem Wojtkiem i nie
        tylko.
      </BikeParagraph>
      <BikeParagraph>
        Jeśli już znajdziesz jakiś ślad, zrób zdjęcie - najlepiej z rowerem i
        chustą harcerską w roli głównej. Fotkę wraz z informacją o miejscu -
        nazwa, pinezka, współrzędne wyślij na adres:
        <a href="mailto:dorota.limontas@zhp.net.pl">dorota.limontas@zhp.net.pl</a>.
      </BikeParagraph>
      <BikeParagraph>
        Wszystkie ślady będą umieszczane na naszej mapie, tworzonej na podstawie
        naszych wycieczek rowerowych.
      </BikeParagraph>
      <BikeParagraph>
        Zachęcamy, by śladów szukać z drużyną, szczepem, innymi rowerzystami
        albo przyjaciółmi. Wspólne kręcenie jest przyjemniejsze. A poszukiwanie
        to nie tylko poznawanie historii Armii Andersa, ale również zgłębianie
        wiedzy o swojej okolicy.
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
