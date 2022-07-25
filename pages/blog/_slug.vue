<template>
  <BikeSection v-if="postData && postData[0]" width="narrow">
    <BikeHeading>
      <span v-html="postData[0].title.rendered" />
    </BikeHeading>
    <div
      v-if="postData[0].content"
      class="bike-post"
      v-html="postData[0].content.rendered"
    />
  </BikeSection>
</template>

<script>
export default {
  name: 'BlogPage',

  async asyncData({ $axios, route }) {
    let postData = []
    postData = await $axios
      .$get(`https://work.bikejamboree.pl/wp-json/wp/v2/posts?slug=${route.params.slug}`)
      .catch((e) => console.error(e))
    return { postData }
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

  .wp-block-embed {
    margin: 16px 0;
    max-width: 100%
  }

  iframe {
    max-width: 100%;
  }

  figure {
    margin: 16px 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
