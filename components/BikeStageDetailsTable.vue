<template>
  <table>
    <tr class="bike-stage-details-table__row">
      <td
        class="bike-stage-details-table__cell bike-stage-details-table__cell--first"
      >
        {{ $t('route.start') }}:
      </td>
      <td class="bike-stage-details-table__cell">
        {{ $t(`places.${stageData.startPoint.city}`) }} ({{ $t(`places.${stageData.startPoint.country}`) }})
        <br>
        {{ stageData.startDate.toLocaleDateString() }}
      </td>
    </tr>
    <tr class="bike-stage-details-table__row">
      <td
        class="bike-stage-details-table__cell bike-stage-details-table__cell--first"
      >
        {{ $t('route.finish') }}:
      </td>
      <td class="bike-stage-details-table__cell">
        {{ $t(`places.${stageData.finishPoint.city}`) }} ({{ $t(`places.${stageData.finishPoint.country}`) }})
        <br>
        {{ stageData.finishDate.toLocaleDateString() }}
      </td>
    </tr>
    <tr class="bike-stage-details-table__row">
      <td
        class="bike-stage-details-table__cell bike-stage-details-table__cell--first"
      >
        {{ $t('route.distance') }}:
      </td>
      <td class="bike-stage-details-table__cell">
        {{ stageData.distance }}
      </td>
    </tr>
    <tr class="bike-stage-details-table__row">
      <td
        class="bike-stage-details-table__cell bike-stage-details-table__cell--first"
      >
        {{ $t('route.leader') }}:
      </td>
      <td class="bike-stage-details-table__cell">
        {{ stageData.leader }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    stageData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.bike-stage-details-table {
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
  &__row {
    vertical-align: top;
  }
  &__cell {
    padding-bottom: 7px;
    color: $text-color;
  }
  &__cell--first {
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
