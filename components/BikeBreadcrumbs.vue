<template>
  <ul class="bike-breadcrumbs">
    <li class="bike-breadcrumbs__item">
      <NuxtLink to="/">
        <BikeIcon class="bike-breadcrumbs__icon" icon="home" />
      </NuxtLink>
    </li>
    <li v-for="(breadcrumb, i) in breadcrumbsList" :key="`breadcrumb-${i}`" class="bike-breadcrumbs__item">
      <NuxtLink v-if="breadcrumb.href" :to="breadcrumb.href" class="bike-breadcrumbs__link">
        {{ breadcrumb.label }}
      </NuxtLink>
      <template v-else>
        {{ breadcrumb.label }}
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BikeBreadcrumbs",

  props: {
    breadcrumbsList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.bike-breadcrumbs {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &__icon {
    transform: scale(0.7);
    color: $brand-red;
  }
  &__link {
    color: $text-color;
    &:hover {
      color: #000;
    }
  }
  &__item {
    margin-right: 8px;
    font-size: 12px;
    white-space: nowrap;
    color: $text-color;
    &:after {
      content: '/';
      margin-left: 5px;
      color: $text-color;
    }
    &:first-of-type {
      display: flex;
      align-items: center;
    }
    &:last-of-type {
      margin-right: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      &:after {
        content: none
      }
    }
  }
}
</style>
