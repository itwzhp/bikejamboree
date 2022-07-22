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
  async asyncData({ $axios }) {
    let articles = []
    articles = await $axios
      .$get('https://work.bikejamboree.pl/wp-json/wp/v2/posts?per_page=3')
      .catch((e) => console.error(e))
    return { articles }
  },
}
</script>
