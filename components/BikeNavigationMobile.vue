<template>
  <nav class="bike-navigation-mobile">
    <ul class="bike-navigation-mobile__list">
      <li class="bike-navigation-mobile__list-item">
        <NuxtLink
          :class="isActive('')"
          :to="localePath('/')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.homepage') }}
        </NuxtLink>
      </li>
      <li class="bike-navigation-mobile__list-item">
        <span :class="isActive('o-projekcie')">
          {{ $t('navigation.about') }}
        </span>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink
          :to="localePath('/o-projekcie')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.idea') }}
        </NuxtLink>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink
          :to="localePath('/o-projekcie/trasa')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.route') }}
        </NuxtLink>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink
          :to="localePath('/o-projekcie/ludzie')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.people') }}
        </NuxtLink>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink
          :to="localePath('/o-projekcie/130-sladow')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.traces') }}
        </NuxtLink>
      </li>
      <li
        class="bike-navigation-mobile__list-item bike-navigation-mobile__list-item--secondary"
      >
        <NuxtLink
          :to="localePath('/o-projekcie/dolacz')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.join_us') }}
        </NuxtLink>
      </li>
      <li class="bike-navigation-mobile__list-item">
        <NuxtLink
          :class="isActive('poprzednie-projekty')"
          :to="localePath('/poprzednie-projekty')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.previous_projects') }}
        </NuxtLink>
      </li>
      <li
        v-if="$i18n.locale === 'pl'"
        class="bike-navigation-mobile__list-item"
      >
        <NuxtLink
          :class="isActive('blog')"
          :to="localePath('/blog')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.blog') }}
        </NuxtLink>
      </li>
      <li
        v-if="$i18n.locale === 'pl'"
        class="bike-navigation-mobile__list-item"
      >
        <NuxtLink
          :class="isActive('dla-mediow')"
          :to="localePath('/dla-mediow')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.media') }}
        </NuxtLink>
      </li>
      <li class="bike-navigation-mobile__list-item">
        <NuxtLink
          :class="isActive('kontakt')"
          :to="localePath('/kontakt')"
          @click.native="closeNavigation"
        >
          {{ $t('navigation.contact_us') }}
        </NuxtLink>
      </li>
    </ul>
    <div class="bike-navigation-mobile__language-switch">
      <BikeLanguageSwitchList />
    </div>
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
  &__language-switch {
    position: absolute;
    bottom: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
