<template>
  <BikeSection width="narrow" class="bike-biography">
    <BikeImage
      v-if="photoPath"
      class="bike-biography__image"
      :img-src="photoPath"
      :img-alt="`${name} - zdjęcie`"
    />
    <header class="mb-30">
      <BikeHeading no-bottom-margin no-top-margin level="2">
        {{ name }}
      </BikeHeading>
      <BikeExternalLink v-if="email" :to="`mailto:${email}`" :with-icon="false">
        {{ email }}
      </BikeExternalLink>
    </header>
    <slot />
  </BikeSection>
</template>

<script>
export default {
  name: 'BikeBiography',
  props: {
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    photoPath: {
      type: String,
      default: null,
    },
  }
}
</script>

<style lang="scss">
.bike-biography {
  display: grid;
  grid-template-areas: 'header' 'image' 'text';
  overflow: auto;
  &__image {
    max-width: 250px;
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin: 0 auto 30px;
    display: block;
    grid-area: image;
  }
}

@include screen-size('tablet') {
  .bike-biography {
    display: block;
    &__image {
      float: left;
      margin: 0 24px 24px 0;
    }
  }
}
</style>
