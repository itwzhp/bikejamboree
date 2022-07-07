<template>
  <article class="bike-card">
    <slot />
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bike-card {
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
}
</style>
