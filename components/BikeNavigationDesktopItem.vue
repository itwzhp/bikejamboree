<template>
  <li class="bike-navigation-item">
    <NuxtLink v-if="href" :class="linkClasses" :to="localePath(href)">
      {{ $t(label) }}
    </NuxtLink>
    <span v-else :class="linkClasses">
      {{ $t(label) }}
      <BikeIcon
        v-if="hasDropdown"
        class="bike-navigation-item__icon"
        icon="chevron-down"
      />
    </span>
    <BikeCard v-if="hasDropdown" class="bike-navigation-item__dropdown">
      <ul class="bike-navigation-item__dropdown-list">
        <BikeNavigationDesktopItem
          label="navigation.idea"
          href="/o-projekcie"
        />
        <BikeNavigationDesktopItem
          label="navigation.route"
          href="/o-projekcie/trasa"
        />
        <BikeNavigationDesktopItem
          label="navigation.people"
          href="/o-projekcie/ludzie"
        />
        <BikeNavigationDesktopItem
          label="navigation.anders_traces"
          href="/o-projekcie/130-sladow"
        />
        <BikeNavigationDesktopItem
          label="navigation.join_us"
          href="/o-projekcie/dolacz"
        />
      </ul>
      <BikeCard />
    </BikeCard>
  </li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
    hasDropdown: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    linkClasses() {
      return [
        'bike-navigation-item__link',
        this.active ? 'bike-navigation-item__link--active' : null,
        this.href ? null : 'bike-navigation-item__link--dropdown',
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-navigation-item {
  font-weight: 500;
  transition: color 0.1s ease-in-out;
  color: $text-color;
  position: relative;
  &:last-of-type {
    padding-right: 0;
  }
  &__link {
    padding: 10px 15px;
    display: block;
    display: flex;
    white-space: nowrap;
    &--active {
      color: $brand-red;
    }
    &--dropdown {
      cursor: default;
    }
    &.nuxt-link-exact-active {
      color: $brand-red;
    }
    &:hover {
      color: $brand-red;
      & + .bike-navigation-item__dropdown {
        display: block;
      }
    }
  }
  &__icon {
    transform: scale(0.5);
  }
  &__dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    display: none;
    &:hover {
      display: block;
    }
  }
  &__dropdown-list {
    list-style-type: none;
    padding: 0;
  }
}
</style>
