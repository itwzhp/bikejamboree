<template>
  <BikeCard class="bike-stage-details">
    <template v-if="currentStageIndex > -1">
      <BikeHeading size="small" level="3" no-top-margin>
        {{ currentStage.name }}
      </BikeHeading>
      <table>
        <tr class="bike-stage-details__table-row">
          <td
            class="bike-stage-details__table-cell bike-stage-details__table-cell--first"
          >
            start:
          </td>
          <td class="bike-stage-details__table-cell">
            {{
              `${currentStage.startPoint.city} (${currentStage.startPoint.country})`
            }}<br>
            {{ currentStage.startDate.toLocaleDateString() }}
          </td>
        </tr>
        <tr class="bike-stage-details__table-row">
          <td
            class="bike-stage-details__table-cell bike-stage-details__table-cell--first"
          >
            meta:
          </td>
          <td class="bike-stage-details__table-cell">
            {{
              `${currentStage.finishPoint.city} (${currentStage.finishPoint.country})`
            }}<br>
            {{ currentStage.finishDate.toLocaleDateString() }}
          </td>
        </tr>
        <tr class="bike-stage-details__table-row">
          <td
            class="bike-stage-details__table-cell bike-stage-details__table-cell--first"
          >
            dystans:
          </td>
          <td class="bike-stage-details__table-cell">
            {{ currentStage.distance }}
          </td>
        </tr>
        <tr class="bike-stage-details__table-row">
          <td
            class="bike-stage-details__table-cell bike-stage-details__table-cell--first"
          >
            lider:
          </td>
          <td class="bike-stage-details__table-cell">
            {{ currentStage.leader }}
          </td>
        </tr>
      </table>
      <nav class="bike-stage-details__nav">
        <ul
          v-if="currentStage.previousStages"
          class="bike-stage-details__nav-single bike-stage-details__nav-single--prev"
        >
          <li
            v-for="st in currentStage.previousStages"
            :key="`prev-${st}`"
            class="bike-stage-details__nav-item bike-stage-details__nav-item--prev"
            @click="selectStage(st)"
          >
            <BikeIcon
              class="bike-stage-details__nav-item-icon"
              icon="chevron-left"
            />
            <BikeButton :with-icon="false">
              {{ stages[st].name }}
            </BikeButton>
          </li>
        </ul>
        <ul
          v-if="currentStage.nextStages"
          class="bike-stage-details__nav-single bike-stage-details__nav-single--next"
        >
          <li
            v-for="st in currentStage.nextStages"
            :key="`prev-${st}`"
            class="bike-stage-details__nav-item bike-stage-details__nav-item--next"
            @click="selectStage(st)"
          >
            <BikeButton :with-icon="false">
              {{ stages[st].name }}
            </BikeButton>
            <BikeIcon
              class="bike-stage-details__nav-item-icon"
              icon="chevron-right"
            />
          </li>
        </ul>
        <BikeButton
          class="bike-stage-details__nav-item bike-stage-details__nav-item--all"
          @click.native="selectStage(-1)"
        >
          Pokaż całą trasę
        </BikeButton>
      </nav>
    </template>
    <div v-else class="bike-stage-details__empty">
      <div class="bike-stage-details__action">
        <BikeIcon icon="arrow-down-left" />
        <BikeParagraph no-margin>
          Wybierz etap z listy
        </BikeParagraph>
      </div>
      <BikeParagraph> lub </BikeParagraph>
      <BikeInternalLink @click.native="selectStage(0)">
        Zacznij od początku (Etap I)
      </BikeInternalLink>
    </div>
  </BikeCard>
</template>

<script>
export default {
  props: {
    stages: {
      type: Array,
      default: () => [],
    },
    currentStageIndex: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    currentStage() {
      return this.stages[this.currentStageIndex]
    },
  },
  methods: {
    selectStage(i) {
      this.$emit('select-stage', i)
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-stage-details {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
  }
  &__action {
    display: flex;
    margin-bottom: 1em;
  }
  &__table-row {
    vertical-align: top;
  }
  &__table-cell {
    padding-bottom: 7px;
    color: $text-color;
  }
  &__table-cell--first {
    padding-right: 7px;
  }
  &__nav {
    margin-top: auto;
    display: grid;
    grid-template-areas: 'prev next' 'all all';
  }
  &__nav-single {
    list-style-type: none;
    padding: 0;
    min-height: 58px;
    &--prev {
      grid-area: prev;
    }
    &--next {
      grid-area: next;
    }
  }
  &__nav-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: $brand-red;
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &--next {
      justify-content: flex-end;
    }
    &--all {
      grid-area: all;
      justify-content: center;
      margin-top: 20px;
    }
  }
  &__nav-item-icon {
    color: $brand-yellow;
  }
  &__legend {
    margin-top: auto;
    padding-top: 15px;
  }
}
</style>
