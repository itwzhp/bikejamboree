<template>
  <div>
    <BikeHeading centered level="2">
      Partnerzy
    </BikeHeading>
    <BikeSection
      class="bike-partners"
      centered
      :rounded="$screen.lg"
      :width="!$screen.lg ? 'full' : null"
      background="red"
    >
      <a
        v-for="(partner, i) in partners"
        :key="`partner-${i}`"
        :href="partner.websiteUrl"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >
        <img
          class="bike-partners__logo"
          :src="require(`~/assets/images/partners/${partner.imageFilename}`)"
          :alt="partner.imageAlt"
        >
      </a>
    </BikeSection>
    <BikeHeading centered level="2">
      Patroni
    </BikeHeading>
    <BikeSection
      class="bike-partners mb-30"
      centered
      :rounded="$screen.lg"
      :width="!$screen.lg ? 'full' : null"
      background="red"
    >
      <a
        v-for="(partner, i) in patrons"
        :key="`partner-${i}`"
        :href="partner.websiteUrl"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >
        <img
          class="bike-partners__logo"
          :src="require(`~/assets/images/partners/${partner.imageFilename}`)"
          :alt="partner.imageAlt"
        >
      </a>
    </BikeSection>
    <BikeHeading centered level="2">
      Patroni Medialni
    </BikeHeading>
    <BikeSection
      class="bike-partners"
      centered
      :rounded="$screen.lg"
      :width="!$screen.lg ? 'full' : null"
      background="red"
    >
      <a
        v-for="(partner, i) in media"
        :key="`partner-${i}`"
        :href="partner.websiteUrl"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >
        <img
          class="bike-partners__logo"
          :src="require(`~/assets/images/partners/${partner.imageFilename}`)"
          :alt="partner.imageAlt"
        >
      </a>
    </BikeSection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          websiteUrl: 'https://crosso.pl',
          imageFilename: 'crosso-logo.webp',
          imageAlt: 'Crosso logo',
        },
        {
          websiteUrl: 'https://cstpoland.pl/',
          imageFilename: 'cst-logo.webp',
          imageAlt: 'CST logo',
        },
        {
          websiteUrl: 'https://namioty.marabut.com/',
          imageFilename: 'marabut-logo.webp',
          imageAlt: 'Marabut logo',
        },
        {
          websiteUrl: 'https://facebook.com/MedykRescueTeam/',
          imageFilename: 'medyk-logo.webp',
          imageAlt: 'Medyk Rescue Team logo',
        },
        {
          websiteUrl: 'https://pajaksport.pl/',
          imageFilename: 'pajak-logo.webp',
          imageAlt: 'Pajak Sport logo',
        },
        {
          websiteUrl: 'https://rowerysportowy.pl/',
          imageFilename: 'rowerysportowy-logo.webp',
          imageAlt: 'Rowery Sportowy logo',
        },
        {
          websiteUrl: 'http://sony.pl',
          imageFilename: 'sony-logo.webp',
          imageAlt: 'Sony logo',
        },
        {
          websiteUrl: 'https://www.facebook.com/profile.php?id=100077403560198',
          imageFilename: 'wkasz-logo.webp',
          imageAlt: 'Wkasz Design logo',
        },
      ],
      patrons: [
        {
          websiteUrl: 'https://www.gov.pl/web/dyplomacja',
          imageFilename: 'msz-logo.webp',
          imageAlt: 'MSZ logo',
        },
        {
          websiteUrl: 'https://muzeumharcerstwa.pl/',
          imageFilename: 'muzeum-harcerstwa-logo.webp',
          imageAlt: 'Muzeum Harcerstwa logo',
        },
        {
          websiteUrl: 'https://niw.gov.pl',
          imageFilename: 'niw-logo.webp',
          imageAlt: 'Narodowy Instytut wolności logo',
        },
        {
          websiteUrl: 'https://sybir.bialystok.pl',
          imageFilename: 'muzeum-pamieci-sybiru-logo.webp',
          imageAlt: 'Muzeum Pamięci Sybiru logo',
        },
        {
          websiteUrl: 'http://normandavies.com/',
          imageFilename: 'norman-davies-logo.webp',
          imageAlt: 'Norman Davies logo',
        }
      ],
      media: [
        {
          websiteUrl: 'https://rp.pl/',
          imageFilename: 'rzeczpospolita-logo.webp',
          imageAlt: 'Rzeczpospolita logo',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.bike-partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  &__logo {
    max-height: 80px;
    max-width: 120px;
    filter: brightness(0) invert(1);
    padding: 15px;
    display: block;
  }
}

@include screen-size('tablet') {
  .bike-partners {
    min-height: 120px;
    &__logo {
      max-height: 120px;
      max-width: 200px;
      filter: brightness(0) invert(1);
      padding: 10px 25px;
    }
  }
}
</style>
