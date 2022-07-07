<template>
  <main>
    <BikeBanner :class="{ 'mb-75': $screen.lg }" />
    <BikeIntroduction />
    <BikeHeading centered level="2">
      Aktualności
    </BikeHeading>
    <BikeNewsShort with-link :articles="articles" class="mb-75" />
    <BikeHeading centered level="2">
      Wspierają nas
    </BikeHeading>
    <BikePartners />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ app, store, params }) {
    return { articles: await app.$wp.posts().perPage(3) }
  },
}
</script>
