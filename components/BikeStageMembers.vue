<template>
  <div class="mb-75">
    <carousel v-if="!$screen.lg" hide-arrows class="bike-carousel">
      <slide
        v-for="(member, i) in members"
        :key="`member-${i}`"
        class="bike-carousel__slide"
      >
        <BikePersonCard
          :heading-content="member.name"
          :image="require(`~/assets/images/people/${member.photo}`)"
          :label="member.isLeader ? 'Lider etapu' : ''"
          class="bike-news-short__card"
        >
          <BikeParagraph>
            {{ member.bio }}
          </BikeParagraph>
        </BikePersonCard>
      </slide>
    </carousel>
    <BikeSection v-else columns-tablet="2" columns-desktop="3" gap="30">
      <BikePersonCard
        v-for="(member, i) in members"
        :key="`member-${i}`"
        :heading-content="member.name"
        :image="require(`~/assets/images/people/${member.photo}`)"
        :label="member.isLeader ? 'Lider etapu' : ''"
        class="bike-news-short__card"
      >
        <BikeParagraph>
          {{ member.bio }}
        </BikeParagraph>
      </BikePersonCard>
    </BikeSection>
  </div>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliderOptions: {
        navButtons: false,
        dots: false,
        infinite: false,
        slidesToShow: 1.3,
        swipeDistance: 15,
      },
    }
  },
}
</script>

<style lang="scss">
.bike-carousel {
  grid-gap: 30px;
  &__card {
    width: 100%;
    height: 100%;
  }
  &__slide {
    flex: 0 0 calc(100vw - 96px) !important;
    box-sizing: content-box;
    padding-left: 24px;
    margin: 5px 0;
    height: unset !important;
    &:last-of-type {
      padding-right: 24px;
    }
  }
}
.vs-carousel__wrapper {
  align-items: stretch;
  scroll-padding: 24px;
}
</style>
