<template>
  <nav class="bike-language-switch-dropdown">
    <span class="bike-language-switch-dropdown__current">
      <img
        class="bike-language-switch-dropdown__flag-image"
        :src="require(`~/assets/images/flag-${$i18n.locale}.svg`)"
      >
      <BikeIcon class="bike-language-switch-dropdown__icon" icon="chevron-down" />
    </span>
    <BikeCard class="bike-language-switch-dropdown__dropdown">
      <ul class="bike-language-switch-dropdown__list">
        <BikeLanguageSwitchItem
          v-for="locale in $i18n.locales"
          :key="`locale-${locale.code}`"
          :class="getItemClasses(locale.code)"
          :locale="locale"
        />
      </ul>
    </BikeCard>
  </nav>
</template>

<script>
export default {
  name: 'BikeLanguageSwitchDropdown',

  methods: {
    getItemClasses(code) {
      return ['bike-language-switch-dropdown__list-item', {'bike-language-switch-dropdown__list-item--current': code === this.$i18n.locale}]
    }
  }
}
</script>

<style lang="scss">
.bike-language-switch-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  &__current {
    padding: 10px 0 10px 10px;
    display: flex;
    align-items: center;
    &:hover {
      color: $brand-red;
      & + .bike-language-switch-dropdown__dropdown {
        display: block;
      }
    }
  }
  &__dropdown {
    position: absolute;
    top: calc(50% + 20px);
    right: 0;
    padding: 20px;
    display: none;
    &:hover {
      display: block;
    }
  }
  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  &__list-item {
    &--current {
      font-weight: bold;
    }
  }
  &__icon {
    transform: scale(0.5);
  }
  &__flag-image {
    width: 25px;
    border: 1px solid $text-color;
  }
}
</style>
