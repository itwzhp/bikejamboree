<template>
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
          websiteUrl: 'https://elvelo.pl/',
          imageFilename: 'elvelo-logo.webp',
          imageAlt: 'Elvelo logo',
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
          websiteUrl: 'https://www.gov.pl/web/dyplomacja',
          imageFilename: 'msz-logo.webp',
          imageAlt: 'MSZ logo',
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
        },
        {
          websiteUrl: 'https://pajaksport.pl/',
          imageFilename: 'pajak-logo.webp',
          imageAlt: 'Pajak Sport logo',
        },
        {
          websiteUrl: 'https://rp.pl/',
          imageFilename: 'rzeczpospolita-logo.webp',
          imageAlt: 'Rzeczpospolita logo',
        },
        {
          websiteUrl: 'http://sony.pl',
          imageFilename: 'sony-logo.webp',
          imageAlt: 'Sony logo',
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
    &__logo {
      max-height: 120px;
      max-width: 200px;
      filter: brightness(0) invert(1);
      padding: 10px 25px;
    }
  }
}
</style>
