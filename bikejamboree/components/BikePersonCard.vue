<template>
  <BikeCard class="bike-person-card">
    <div class="bike-person-card__image-container">
      <BikeImage
        v-if="image"
        :img-src="image"
        img-alt="Loader"
        class="bike-person-card__image"
      />
      <div v-else class="bike-person-card__image-placeholder" />
      <div v-if="label" class="bike-person-card__label">
        {{ label }}
      </div>
    </div>
    <footer class="bike-person-card__footer">
      <div v-if="date" class="bike-person-card__date">
        {{ date }}
      </div>
      <BikeHeading
        no-top-margin
        level="2"
        size="small"
        v-html="headingContent"
      />
      <BikeInternalLink
        v-if="href"
        class="bike-person-card__button"
        :with-icon="false"
        :to="href"
        disable-locale-path
      >
        Czytaj artykuł
      </BikeInternalLink>
      <slot />
    </footer>
  </BikeCard>
</template>

<script>
export default {
  props: {
    headingContent: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.bike-person-card {
  display: flex;
  flex-direction: column;
  &__image-container {
    width: 100%;
    // aspect-ratio: 4/3;
    aspect-ratio: 1;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
    position: relative;
  }
  &__label {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #fff;
    padding: 7px;
    color: #fff;
    background: $brand-red;
    font-weight: bold;
    font-size: 12px;
  }
  &__image {
    width: 100%;
  }
  &__image-placeholder {
    width: 100%;
    aspect-ratio: 1.78;
    background: white;
    border-radius: 15px 15px 0 0;
    background: #fafafa;
  }
  &__footer {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  &__date {
    font-size: 12px;
    color: $text-color;
    margin-bottom: 8px;
  }
  &__button {
    margin-top: auto;
  }
}
</style>
