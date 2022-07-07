<template>
  <nav class="bike-navigation-mobile">
    <ul class="bike-navigation-mobile__list">
      <li class="bike-navigation-mobile__list-item">
        <NuxtLink :class="isActive('')" to="/" @click.native="closeNavigation">
          Strona Główna
        </NuxtLink>
      </li>
      <li class="bike-navigation-mobile__list-item">
        <span :class="isActive('o-projekcie')"> O projekcie </span>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink to="/o-projekcie" @click.native="closeNavigation">
          Idea
        </NuxtLink>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink to="/o-projekcie/trasa" @click.native="closeNavigation">
          Trasa
        </NuxtLink>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink to="/o-projekcie/ludzie" @click.native="closeNavigation">
          Ludzie
        </NuxtLink>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink to="/o-projekcie/dolacz" @click.native="closeNavigation">
          Dołącz
        </NuxtLink>
      </li>
      <li class="bike-navigation-mobile__list-item">
        <NuxtLink
          :class="isActive('poprzednie-projekty')"
          to="/poprzednie-projekty"
          @click.native="closeNavigation"
        >
          Poprzednie projekty
        </NuxtLink>
      </li>
      <li class="bike-navigation-mobile__list-item">
        <NuxtLink
          :class="isActive('blog')"
          to="/blog"
          @click.native="closeNavigation"
        >
          Blog
        </NuxtLink>
      </li>
      <li class="bike-navigation-mobile__list-item">
        <NuxtLink
          :class="isActive('kontakt')"
          to="/kontakt"
          @click.native="closeNavigation"
        >
          Kontakt
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    closeNavigation() {
      this.$emit('close-navigation')
    },
    isActive(route) {
      return this.$route.path.split('/')[1] === route
        ? 'bike-navigation-mobile__list-item--active'
        : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-navigation-mobile {
  display: flex;
  align-items: center;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #fff;
  &__list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 0 100px;
    width: 100%;
    height: 100%;
  }
  &__list-item {
    padding: 15px;
    font-weight: bold;
    font-size: 1.5rem;
    color: $text-color;
    &--active {
      color: $brand-red;
    }
    .nuxt-link-exact-active {
      color: $brand-red;
    }
    &--secondary {
      font-size: 1rem;
      padding: 10px;
      + .bike-navigation-mobile__list-item:not(.bike-navigation-mobile__list-item--secondary) {
        margin-top: 24px;
      }
    }
  }
}
</style>
