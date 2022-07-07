<template>
  <BikeCard class="bike-news-card">
    <div class="bike-news-card__image-placeholder" />
    <footer class="bike-news-card__footer">
      <div class="bike-news-card__date">
        {{ date }}
      </div>
      <BikeHeading
        no-top-margin
        level="2"
        size="small"
        v-html="headingContent"
      />
      <BikeInternalLink
        class="bike-news-card__button"
        :with-icon="false"
        :to="href"
      >
        Czytaj artykuł
      </BikeInternalLink>
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
  },
}
</script>

<style lang="scss" scoped>
.bike-news-card {
  display: flex;
  flex-direction: column;
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
