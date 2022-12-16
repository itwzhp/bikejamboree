<template>
  <BikeSection v-if="postData && postData[0]" width="narrow">
    <BikeBreadcrumbs :breadcrumbs-list="breadcrumbs" />
    <BikeHeading no-bottom-margin>
      <span v-html="postData[0].title.rendered" />
    </BikeHeading>
    <span class="bike-post__date">{{ postDate }}</span>
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
      .$get(
        `https://work.bikejamboree.pl/wp-json/wp/v2/posts?slug=${route.params.slug}`
      )
      .catch((e) => console.error(e))
    return { postData }
  },
  computed: {
    postDate() {
      return new Date(this.postData[0].date).toLocaleDateString()
    },

    breadcrumbs() {
      return [
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: this.postData[0].title.rendered,
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.bike-post {
  color: $text-color;
  line-height: 1.5;

  &__date {
    font-size: 12px;
    color: $text-color;
  }

  p {
    @extend .bike-paragraph !optional;
  }

  .wp-block-embed {
    margin: 16px 0;
    max-width: 100%;
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
