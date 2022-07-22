<template>
  <div>
    <BikeHeader />
    <main class="bike__main">
      <Nuxt />
    </main>
    <BikeFooter class="bike__footer" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$config.APP_URL}/og-image.jpg`,
        },
      ],
      script: [
        {
          'data-goatcounter': 'https://bikejamboree.goatcounter.com/count',
          async: true,
          src: '//gc.zgo.at/count.js',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.bike {
  &__footer {
    margin-top: 75px;
  }
}
.bike {
  @include screen-size('desktop') {
    &__main {
      max-width: 1440px;
      margin: 0 auto;
    }
  }
}
</style>
