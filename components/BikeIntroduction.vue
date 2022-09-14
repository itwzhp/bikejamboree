<template>
  <BikeSection columns-desktop="2" class="bike-introduction mb-75">
    <article class="bike-introduction__article">
      <BikeHeading>
        {{ $t('homepage.project_name') }}
      </BikeHeading>
      <BikeParagraph class="bike-introduction__paragraph">
        {{ $t('homepage.travel_project_during_which') }}
      </BikeParagraph>
      <BikeParagraph class="mb-30">
        {{ $t('homepage.the_project_has_been') }}
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
            :img-src="zhpLogoPath"
            img-alt="Związek Harcerstwa Polskiego"
          />
        </a>
      </div>
    </article>
    <BikeVideo
      youtube-url="https://youtu.be/uykmuqvMVLw"
      :heading="$t('homepage.why_am_i_a_part')"
    />
  </BikeSection>
</template>

<script>
export default {
  computed: {
    zhpLogoPath() {
      return this.$i18n.locale === 'pl' ? require('~/assets/images/zhp-logo.webp') : require('~/assets/images/zhp-logo-en.webp')
    }
  }
}
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
