<template>
  <BikeSection columns-desktop="2" class="bike-introduction mb-75">
    <article class="bike-introduction__article">
      <BikeHeading>
        Harcerska sztafeta rowerowa "jednoŚladami Andersa"
      </BikeHeading>
      <BikeParagraph class="bike-introduction__paragraph">
        "JednoŚladami Andersa" to projekt podróżniczy polegający na przejechaniu
        w sztafecie rowerowej szlaku armii gen. Andersa - z okolic dolnego biegu
        rzeki Wołga w zachodniej Syberii aż do Edynburga w Wielkiej Brytanii
        oraz Gdańska.
      </BikeParagraph>
      <BikeParagraph class="mb-30">
        Inicjatorami i organizatorem wyprawy są uczestnicy rowerowej sztafety
        dookoła świata Bike Jamboree, która odbyła się w latach 2017-2019 przy
        wsparciu organizacyjnym Fundacji Światowe Jamboree, Związku Harcerstwa
        Polskiego i Stowarzyszenia Afryka Nowaka.
      </BikeParagraph>
      <div class="bike-introduction__images">
        <a
          href="https://fsj.zhp.pl"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <BikeImage
            class="bike-introduction__image"
            :img-src="require('~/assets/images/fsj-logo.webp')"
            img-alt="Związek Harcerstwa Polskiego"
          />
        </a>
        <a
          href="https://zhp.pl"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <BikeImage
            class="bike-introduction__image"
            :img-src="require('~/assets/images/zhp-logo.webp')"
            img-alt="Związek Harcerstwa Polskiego"
          />
        </a>
      </div>
    </article>
    <BikeVideo
      youtube-url="https://youtu.be/uykmuqvMVLw"
      heading="Dlaczego jadę jednoŚladami Andersa?"
    />
  </BikeSection>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bike-introduction {
  &__article {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  &__heading {
    margin-top: auto;
  }
  &__images {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
  }
  &__image {
    max-width: 125px;
    margin: 0 20px;
    filter: brightness(0);
  }
}

@include screen-size('tablet') {
  .bike-introduction {
    &__article {
      padding: 0 30px;
      margin-bottom: 0;
    }
  }
}
</style>
