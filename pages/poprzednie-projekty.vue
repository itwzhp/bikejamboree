<template>
  <main>
    <BikeSection width="narrow" :class="$screen.lg ? 'mb-75' : 'mb-30'">
      <BikeHeading> Poprzednie projekty </BikeHeading>
      <BikeParagraph>
        Jakkolwiek nieskromnie by to nie zabrzmiało, jesteśmy ekspertami w
        organizacji międzykontynentalnych sztafet rowerowych. Specjalizacja to,
        owszem, dość wąska, za to naprawdę znamy się na tym, co robimy.
      </BikeParagraph>
    </BikeSection>
    <BikeSection columns-desktop="2" width="narrow" class="mb-75">
      <article class="bike-article">
        <BikeHeading level="2">
          Bike Jamboree 2017-2019
        </BikeHeading>
        <BikeParagraph>
          Rowerowa sztafeta, jakiej jeszcze nie było. Dookoła świata!
        </BikeParagraph>
        <BikeExternalLink :with-icon="false" to="https://a.bikejamboree.pl/">
          Strona wyprawy
        </BikeExternalLink>
      </article>
      <BikeImage
        :img-src="require('~/assets/images/bike-jamboree-logo.webp')"
        img-alt="Bike Jamboree - logo wyprawy"
        class="bike-article__image"
      />
    </BikeSection>
    <BikeSection columns-desktop="2" width="narrow" class="mb-75">
      <BikeImage
        v-if="$screen.lg"
        :img-src="require('~/assets/images/rowerowe-jamboree-logo.webp')"
        img-alt="Rowerowe Jamboree - logo wyprawy"
        class="bike-article__image"
      />
      <article class="bike-article">
        <BikeHeading level="2">
          Rowerowe Jamboree 2015
        </BikeHeading>
        <BikeParagraph>
          Z Polski przez Europę, Azję Mniejszą, Bliski Wschód, Azję Centralną,
          Chiny, aż do Japonii!
        </BikeParagraph>
        <BikeExternalLink
          :with-icon="false"
          to="https://web.archive.org/web/20160325131031/http://www.rowerowejamboree.pl/"
        >
          Strona wyprawy
        </BikeExternalLink>
      </article>
      <BikeImage
        v-if="!$screen.lg"
        :img-src="require('~/assets/images/rowerowe-jamboree-logo.webp')"
        img-alt="Rowerowe Jamboree - logo wyprawy"
        class="bike-article__image"
      />
    </BikeSection>
    <BikeSection columns-desktop="2" width="narrow">
      <article class="bike-article">
        <BikeHeading level="2">
          Afryka Nowaka 2009-2011
        </BikeHeading>
        <BikeParagraph> Sztafeta śladami Kazimierza Nowaka. </BikeParagraph>
        <BikeExternalLink :with-icon="false" to="https://afrykanowaka.pl/">
          Strona wyprawy
        </BikeExternalLink>
      </article>
      <BikeImage
        :img-src="require('~/assets/images/afryka-nowaka-logo.webp')"
        img-alt="Afryka Nowaka - logo wyprawy"
        class="bike-article__image"
      />
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'ProjektyPage',
}
</script>

<style lang="scss" scoped>
.bike-article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__image {
    display: block;
    max-width: 60%;
    margin: 30px auto 0;
  }
}

@include screen-size('tablet') {
  .bike-article {
    &__image {
      margin-top: 0;
    }
  }
}
</style>
