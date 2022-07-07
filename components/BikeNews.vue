<template>
  <BikeSection columns-desktop="3" columns-tablet="3" class="mb-30 bike-news">
    <BikeNewsCard
      v-for="(article, i) in articles"
      :key="`article-${i}`"
      :heading-content="article.title.rendered"
      :date="formatDate(article.date)"
      :href="`blog/${article.slug}`"
      class="bike-news__card"
    />
  </BikeSection>
</template>

<script>
export default {
  props: {
    count: {
      type: String,
      default: '8',
    },
    articles: {
      type: Array,
      default: () => [],
    },
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
.bike-news {
  display: grid;
  grid-gap: 30px;
  &__card {
    width: 100%;
    height: 100%;
  }
}
</style>
