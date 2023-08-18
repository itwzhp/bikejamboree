<template>
  <main>
    <BikeHeading centered level="2">
      Aktualności
    </BikeHeading>
    <BikeNews :articles="articles" />
  </main>
</template>

<script>
export default {
  name: 'NewsPage',

  async asyncData({ $axios }) {
    let articles = []
    articles = await $axios
      .$get('https://work.bikejamboree.pl/wp-json/wp/v2/posts?per_page=100')
      .catch((e) => console.error(e))
    return { articles }
  },
}
</script>
