<template>
  <div class="bike-video" :style="inlineStyles">
    <template v-if="!playerVisible">
      <BikeHeading
        centered
        class="bike-video__heading"
        with-shadow
        color="white"
        @click.native="showPlayer"
      >
        {{ heading }}
      </BikeHeading>
      <BikeImage
        class="bike-video__thumbnail"
        :img-src="youtubeThumbnailUrl"
        @click.native="showPlayer"
      />
      <BikeIcon
        with-shadow
        class="bike-video__icon"
        icon="play"
        color="white"
        @click.native="showPlayer"
      />
    </template>
    <iframe
      v-if="playerVisible"
      id="ytplayer"
      class="bike-video__iframe"
      type="text/html"
      :width="width"
      :height="height"
      :src="`https://www.youtube.com/embed/${youtubeVideoId}`"
      frameborder="0"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  props: {
    youtubeUrl: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 720,
    },
    height: {
      type: Number,
      default: 405,
    },
    heading: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      playerVisible: false,
    }
  },
  computed: {
    youtubeVideoId() {
      const url = new URL(this.youtubeUrl)
      if (url.hostname === 'youtu.be') return url.pathname.replace('/', '')
      if (url.hostname === 'www.youtube.com') {
        return url.searchParams.get('v')
      }
      return ''
    },
    youtubeThumbnailUrl() {
      return `https://img.youtube.com/vi/${this.youtubeVideoId}/maxresdefault.jpg`
    },
    inlineStyles() {
      return { width: `${this.width}px` }
    },
  },
  methods: {
    showPlayer() {
      this.playerVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-video {
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 15px;
  overflow: hidden;
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    cursor: pointer;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  &__heading {
    position: absolute;
    margin-top: 24px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  &__thumbnail {
    max-width: 100%;
    filter: grayscale(60%);
    cursor: pointer;
    border-radius: 15px;
    overflow: hidden;
  }
  &__iframe {
    max-width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
}

@include screen-size('tablet') {
  .bike-video {
    &__icon {
      transform: translate(-50%, -50%) scale(3);
    }
  }
}
</style>
