<template>
  <BikeCard class="bike-news-card">
    <div class="bike-news-card__image-container">
      <BikeImage
        v-if="image"
        :img-src="image"
        img-alt="Loader"
        class="bike-news-card__image"
      />
      <div v-else class="bike-news-card__image-placeholder" />
    </div>
    <footer class="bike-news-card__footer">
      <div v-if="date" class="bike-news-card__date">
        {{ date }}
      </div>
      <BikeHeading
        no-top-margin
        level="2"
        size="small"
        v-html="headingContent"
      />
      <BikeInternalLink
        v-if="href"
        class="bike-news-card__button"
        :with-icon="false"
        :to="href"
        disable-locale-path
      >
        Czytaj artykuł
      </BikeInternalLink>
      <slot />
    </footer>
  </BikeCard>
</template>

<script>
export default {
  props: {
    headingContent: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-news-card {
  display: flex;
  flex-direction: column;
  &__image-container {
    width: 100%;
    aspect-ratio: 1.78;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
  }
  &__image {
    width: 100%;
  }
  &__image-placeholder {
    width: 100%;
    aspect-ratio: 1.78;
    background: white;
    border-radius: 15px 15px 0 0;
    background: #fafafa;
  }
  &__footer {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  &__date {
    font-size: 12px;
    color: $text-color;
    margin-bottom: 8px;
  }
  &__button {
    margin-top: auto;
  }
}
</style>
