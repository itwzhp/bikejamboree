<template>
  <header class="bike-header">
    <div class="bike-header__container">
      <NuxtLink class="bike-header__homepage-link" :to="localePath('/')">
        <img
          class="bike-header__image"
          src="~/assets/images/bike-jamboree-logo-small.webp"
          alt="jednoŚladami Andresa - logo"
        >
      </NuxtLink>
      <BikeNavigationDesktop class="bike-header__navigation--desktop" />
      <BikeNavigationMobile
        v-if="mobileNavVisible"
        class="bike-header__navigation--mobile"
        @close-navigation="toggleMobileNavVisibility"
      />
      <BikeHamburger
        class="bike-header__hamburger-button"
        @click.native="toggleMobileNavVisibility"
      />
      <BikeLanguageSwitchDropdown class="bike-header__language-switch" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileNavVisible: false,
    }
  },
  methods: {
    toggleMobileNavVisibility() {
      this.mobileNavVisible = !this.mobileNavVisible
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 9999;
  background: #fff;
  margin-bottom: 30px;
  &__container {
    display: flex;
    justify-content: flex-end;
    height: 80px;
    padding: 10px 24px;
    max-width: 1440px;
    margin: 0 auto;
  }
  &__homepage-link {
    margin-right: auto;
  }
  &__image {
    max-height: 60px;
  }
  // TODO: fix
  &__navigation--desktop.bike-navigation {
    display: none;
  }
  &__language-switch {
    display: none;
  }
}

@include screen-size('tablet') {
  .bike-header {
    margin-bottom: 60px;
    &__container {
      height: 100px;
    }
    &__image {
      max-height: 80px;
    }
    &__navigation--mobile {
      display: none;
    }
    &__navigation--desktop.bike-navigation {
      display: flex;
    }
    &__hamburger-button {
      display: none;
    }
    &__language-switch {
      display: flex;
      margin-left: 10px;
    }
  }
}
</style>
