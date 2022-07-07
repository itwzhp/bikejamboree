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
  async asyncData({ app, store, params }) {
    return { articles: await app.$wp.posts().perPage(9) }
  },
}
</script>
