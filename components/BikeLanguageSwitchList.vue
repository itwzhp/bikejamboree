<template>
  <ul class="bike-language-switch-list">
    <BikeLanguageSwitchItem
      v-for="locale in $i18n.locales"
      :key="`locale-${locale.code}`"
      :class="getItemClasses(locale.code)"
      :locale="locale"
    />
  </ul>
</template>

<script>
export default {
  name: 'BikeLanguageSwitchDropdown',

  methods: {
    getItemClasses(code) {
      return [
        'bike-language-switch-list__list-item',
        {
          'bike-language-switch-list__list-item--current':
            code === this.$i18n.locale,
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.bike-language-switch-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  &__list-item {
    margin: 0 10px;
    &--current {
      font-weight: bold;
    }
  }
}
</style>
