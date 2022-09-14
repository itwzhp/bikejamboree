<template>
  <nav class="bike-navigation">
    <ul class="bike-navigation__list">
      <BikeNavigationDesktopItem
        class="bike-navigation__list-item"
        label="navigation.homepage"
        href="/"
        :active="isActive('')"
      />
      <BikeNavigationDesktopItem
        class="bike-navigation__list-item"
        label="navigation.about"
        :active="isActive('o-projekcie')"
        has-dropdown
      />
      <BikeNavigationDesktopItem
        class="bike-navigation__list-item"
        label="navigation.previous_projects"
        href="/poprzednie-projekty"
        :active="isActive('poprzednie-projekty')"
      />
      <BikeNavigationDesktopItem
        v-if="$i18n.locale === 'pl'"
        class="bike-navigation__list-item"
        label="navigation.blog"
        href="/blog"
        :active="isActive('blog')"
      />
      <BikeNavigationDesktopItem
        class="bike-navigation__list-item"
        label="navigation.contact_us"
        href="/kontakt"
        :active="isActive('kontakt')"
      />
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path.split('/')[1] === route
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-navigation {
  display: flex;
  align-items: center;
  &__list {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
}
</style>
