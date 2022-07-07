<template>
  <img class="bike-image" :src="imgSrc" :alt="imgAlt">
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    },
  },
}
</script>
