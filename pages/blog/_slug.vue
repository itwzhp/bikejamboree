<template>
  <BikeSection width="narrow">
    <BikeHeading>
      <span v-html="postData[0].title.rendered" />
    </BikeHeading>
    <div
      v-if="postData[0] && postData[0].content"
      class="bike-post"
      v-html="postData[0].content.rendered"
    />
  </BikeSection>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ app, route }) {
    return { postData: await app.$wp.posts().slug(route.params.slug) }
  },
}
</script>

<style lang="scss">
.bike-post {
  color: $text-color;
  line-height: 1.5;
  p {
    @extend .bike-paragraph !optional;
  }
}
</style>
