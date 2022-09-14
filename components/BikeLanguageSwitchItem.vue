<template>
  <li
    class="bike-language-switch-item"
  >
    <NuxtLink
      class="bike-language-switch-item__link"
      :to="switchLocalePath(locale.code)"
    >
      <img
        class="bike-language-switch-item__flag-image"
        :src="require(`~/assets/images/flag-${locale.code}.svg`)"
      >
      <span class="bike-language-switch-item__label">
        {{ locale.name }}
      </span>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'BikeLanguageSwitchItem',

  props: {
    locale: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.bike-language-switch-item {
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &__link {
    display: flex;
    align-items: center;
  }
  &__icon {
    transform: scale(0.5);
  }
  &__flag-image {
    width: 25px;
    border: 1px solid $text-color;
  }
  &__label {
    margin-left: 5px;
  }
}
</style>
