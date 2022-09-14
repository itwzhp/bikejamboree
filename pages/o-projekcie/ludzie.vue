<template>
  <main>
    <BikeSection width="narrow" class="mb-30">
      <BikeHeading> {{ $t('people.people') }} </BikeHeading>
      <BikeParagraph>
        {{ $t('people.project_is_organized_by_number') }}
      </BikeParagraph>
    </BikeSection>
    <BikeBiography
      class="mb-75"
      name="Zbigniew Popowski"
      email="zbigniew.popowski@zhp.net.pl"
      :photo-path="require('~/assets/images/people/zbigniew-popowski.webp')"
    >
      <BikeParagraph>
        {{ $t('people.hes_been_an_active_scout') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.since_2006_hes_been_leading') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Zbigniew Sas"
      :photo-path="require('~/assets/images/people/zbigniew-sas.webp')"
      email="zbigniew.sas@zhp.net.pl"
    >
      <BikeParagraph>
        {{ $t('people.in_recent_years_hes_been') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Anna Śledzińska"
      :photo-path="require('~/assets/images/people/anna-sledzinska.webp')"
      email="ania@bikejamboree.pl"
    >
      <BikeParagraph>
        {{ $t('people.she_is_a_guide_leader') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Arek Kościelski"
      :photo-path="require('~/assets/images/people/arek-koscielski.webp')"
    >
      <BikeParagraph>
        {{ $t('people.hes_an_it_specialist') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Beata Kościelska"
      :photo-path="require('~/assets/images/people/beata-koscielska.webp')"
    >
      <BikeParagraph>
        {{ $t('people.a_biologist_microbiologist_and_epidemiologist') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Dariusz &quot;Mors&quot; Zajączkowski"
      email="d.zajaczkowski@zhp.net.pl"
      :photo-path="require('~/assets/images/people/dariusz-zajaczkowski.webp')"
    >
      <BikeParagraph>
        {{ $t('people.hes_a_trader_and_a_lab') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Dorota Limontas"
      email="dorota.limontas@zhp.net.pl"
      :photo-path="require('~/assets/images/people/dorota-limontas.webp')"
    >
      <BikeParagraph>
        {{ $t('people.shes_a_devoted_preschool_teacher') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Magdalena Suchan"
      email="magdalena.suchan@zhp.net.pl"
      :photo-path="require('~/assets/images/people/magdalena-suchan.webp')"
    >
      <BikeParagraph>
        {{ $t('people.shes_a_restless_individual') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.apart_from_the_above') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.where_is_a_bike') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.magda_took_part') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.in_the_jednosladami_andersa') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Monika Szenfer"
      :photo-path="require('~/assets/images/people/monika-szenfer.webp')"
    >
      <BikeParagraph>
        {{ $t('people.every_day_she_uses') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.she_belives_in_mark_twain') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.in_bike_jamboree_around') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.in_the_project_shes_responsible') }}
      </BikeParagraph>
    </BikeBiography>

    <BikeBiography
      class="mb-75"
      name="Adam Zawadzki"
      :photo-path="require('~/assets/images/people/adam-zawadzki.webp')"
    >
      <BikeParagraph>
        {{ $t('people.for_him_impossible_becomes') }}
      </BikeParagraph>
      <BikeParagraph>
        {{ $t('people.his_profession_is_also') }}
      </BikeParagraph>
    </BikeBiography>
  </main>
</template>

<script>
export default {
  name: 'LudziePage',
}
</script>
