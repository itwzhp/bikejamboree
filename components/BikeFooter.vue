<template>
  <footer class="bike-footer">
    <section class="bike-footer__section">
      <NuxtLink to="/">
        <img
          class="bike-footer__image"
          src="~/assets/images/bike-jamboree-logo-small.webp"
          alt="jednoŚladami Andresa - logo"
        >
      </NuxtLink>
      <BikeParagraph no-margin>
        {{ $t('footer.project_name') }}
      </BikeParagraph>
    </section>
    <section class="bike-footer__section bike-footer__section--lower">
      <BikeExternalLink :with-icon="false" to="mailto:info@bikejamboree.pl">
        info@bikejamboree.pl
      </BikeExternalLink>
      <ul class="bike-footer__social-media">
        <li class="bike-footer__social-media-item">
          <BikeExternalLink
            :with-icon="false"
            to="https://www.facebook.com/BikeJamboree"
            aria-label="Facebook link"
          >
            <BikeIcon
              class="bike-footer__social-media-item-icon"
              icon="facebook"
            />
          </BikeExternalLink>
        </li>
        <li class="bike-footer__social-media-item">
          <BikeExternalLink
            :with-icon="false"
            to="https://www.instagram.com/bike_jamboree"
            aria-label="Instagram link"
          >
            <BikeIcon
              class="bike-footer__social-media-item-icon"
              icon="instagram"
            />
          </BikeExternalLink>
        </li>
        <li class="bike-footer__social-media-item">
          <BikeExternalLink
            :with-icon="false"
            to="https://www.youtube.com/channel/UCfnLu42rsTplyLu8PGlLdtA"
            aria-label="YouTube link"
          >
            <BikeIcon
              class="bike-footer__social-media-item-icon"
              icon="youtube"
            />
          </BikeExternalLink>
        </li>
        <li class="bike-footer__social-media-item">
          <BikeExternalLink
            :with-icon="false"
            to="https://bikejamboree.pl/feed"
            aria-label="RSS link"
          >
            <BikeIcon class="bike-footer__social-media-item-icon" icon="rss" />
          </BikeExternalLink>
        </li>
      </ul>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.bike-footer {
  padding: 10px 24px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  &__section {
    display: flex;
    align-items: center;
    padding: 15px 0;
    &--lower {
      border-top: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__image {
    max-height: 60px;
    margin-right: 20px;
  }
  &__social-media {
    list-style-type: none;
    padding: 0;
    display: flex;
  }
  &__social-media-item {
    margin: 0 5px;
    padding: 0 5px;
    &:last-of-type {
      padding-right: 0;
    }
  }
}

@include screen-size('tablet') {
  .bike-footer {
    &__image {
      max-height: 80px;
    }
  }
}
</style>
