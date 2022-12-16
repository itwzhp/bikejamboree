<template>
  <div>
    <carousel v-if="!$screen.lg" hide-arrows class="bike-news-short__carousel">
      <slide
        v-for="(article, i) in articles"
        :key="`article-${i}`"
        class="bike-news-short__slide"
      >
        <BikeNewsCard
          :heading-content="article.title.rendered"
          :date="formatDate(article.date)"
          :href="`blog/${article.slug}`"
          :image="article.rest_media"
          class="bike-news-short__card"
        />
      </slide>
    </carousel>
    <BikeSection v-else columns-tablet="3" columns-desktop="3" class="mb-30 bike-news-short">
      <BikeNewsCard
        v-for="(article, i) in articles"
        :key="`article-${i}`"
        :heading-content="article.title.rendered"
        :date="formatDate(article.date)"
        :href="`/blog/${article.slug}`"
        :image="article.rest_media"
        class="bike-news-short__card"
      />
    </BikeSection>
    <BikeInternalLink v-if="withLink" to="blog" class="bike-news-short__link">
      Zobacz wszystkie
    </BikeInternalLink>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: String,
      default: '8',
    },
    withLink: {
      type: Boolean,
      default: false,
    },
    articles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliderOptions: {
        navButtons: false,
        dots: false,
        infinite: false,
        slidesToShow: 1.3,
        swipeDistance: 15,
      },
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString()
    },
  },
}
</script>

<style lang="scss">
.bike-news-short {
  grid-gap: 30px;
  &__card {
    width: 100%;
    height: 100%;
  }
  &__link {
    text-align: center;
    justify-content: center;
  }
  &__carousel {
    margin-bottom: 24px;
  }
  &__slide {
    flex: 0 0 calc(100vw - 96px) !important;
    box-sizing: content-box;
    padding-left: 24px;
    margin: 5px 0;
    height: unset !important;
    &:last-of-type {
      padding-right: 24px;
    }
  }
}
.vs-carousel__wrapper {
  align-items: stretch;
  scroll-padding: 24px;
}
</style>
