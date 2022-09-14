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

      <BikeHeading level="2">
        {{ $t('about_the_project.dates') }}
      </BikeHeading>
      <BikeParagraph>
        {{ $t('about_the_project.although_the_project_itself') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('about_the_project.the_relay_itself_sets') }}
      </BikeParagraph>

      <BikeParagraph class="mb-75">
        {{ $t('about_the_project.due_to_the_changing_geopolitical') }}
      </BikeParagraph>
      <BikeVideo
        youtube-url="https://youtu.be/vk0DTlji_lc"
        :heading="$t('about_the_project.following_anders_footsteps')"
      />
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>
