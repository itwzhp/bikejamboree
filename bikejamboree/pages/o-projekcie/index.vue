<template>
  <main>
    <BikeSection width="narrow">
      <BikeHeading>
        {{ $t('about_the_project.about_the_project') }}
      </BikeHeading>

      <BikeParagraph>
        {{ $t('about_the_project.travel_project_during_which') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('about_the_project.the_project_aims_at') }}
      </BikeParagraph>

      <BikeHeading level="2">
        {{ $t('about_the_project.formula') }}
      </BikeHeading>
      <BikeParagraph>
        {{ $t('about_the_project.the_core_of_the_project') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('about_the_project.the_main_route_covers_over') }}
      </BikeParagraph>
      <template v-if="$i18n.locale === 'pl'">
        <BikeParagraph>
          {{ $t('about_the_project.relay_is_the_main') }}
        </BikeParagraph>
        <BikeParagraph>
          {{ $t('about_the_project.until_now_we') }}
        </BikeParagraph>
        <BikeUnorderedList>
          <li>{{ $t('about_the_project.activity_one') }}</li>
          <li>{{ $t('about_the_project.activity_two') }}</li>
          <li>{{ $t('about_the_project.activity_three') }}</li>
        </BikeUnorderedList>
        <BikeParagraph>
          {{ $t('about_the_project.all_activities_are_open') }}
        </BikeParagraph>
      </template>

      <BikeHeading level="2">
        {{ $t('about_the_project.initiators') }}
      </BikeHeading>
      <BikeParagraph>
        {{ $t('about_the_project.the_expedition_has_been_initiated') }}
      </BikeParagraph>

      <BikeHeading level="2">
        {{ $t('about_the_project.value_of_the_project') }}
      </BikeHeading>
      <BikeParagraph>
        {{ $t('about_the_project.the_planned_budget_exceeds') }}
      </BikeParagraph>
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>
