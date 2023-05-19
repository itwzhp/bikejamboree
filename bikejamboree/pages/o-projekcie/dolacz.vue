<template>
  <main>
    <BikeSection width="narrow" class="mb-30">
      <BikeHeading> {{ $t('join_us.join_us') }} </BikeHeading>
      <BikeParagraph>
        {{ $t('join_us.there_are_several_options') }}
      </BikeParagraph>
      <BikeUnorderedList class="mb-75">
        <li>{{ $t('join_us.ride_a_bike_in_the_relay') }}</li>
        <li>{{ $t('join_us.engage_in_the_programme') }}</li>
        <li>{{ $t('join_us.suggest_your_own_element') }}</li>
      </BikeUnorderedList>
      <BikeHeading level="2">
        {{ $t('join_us.registration') }}
      </BikeHeading>
      <BikeParagraph>
        {{ $t('join_us.currently_we_are_seeking_riders') }}
      </BikeParagraph>
      <BikeTable>
        <tr>
          <td>{{ $t('join_us.stage') }}</td>
          <td>{{ $t('join_us.route') }}</td>
          <td>{{ $t('join_us.date') }}</td>
          <td>{{ $t('join_us.contact') }}</td>
          <td v-if="$i18n.locale === 'pl'">
            Poszukiwani
          </td>
        </tr>
        <tr>
          <td>XI East</td>
          <td>{{ $t('places.linz') }} - {{ $t('places.czestochowa') }}</td>
          <td>16.06.2023 - 26.06.2023</td>
          <td>
            Artur Kulesza <br>
            <BikeExternalLink to="mailto:ak@fsd.org.pl" :with-icon="false">
              ak@fsd.org.pl
            </BikeExternalLink>
          </td>
          <td v-if="$i18n.locale === 'pl'">
            <BikeUnorderedList no-margin>
              <li>spec od nowych mediów</li>
              <li>spec od serwisu roweru</li>
              <li>człowiek otwarty na realizację spotkań z ludźmi</li>
            </BikeUnorderedList>
          </td>
        </tr>
        <tr>
          <td>XI West</td>
          <td>{{ $t('places.paris') }} - {{ $t('places.edinburgh') }}</td>
          <td>16.06.2023 - 09.07.2023</td>
          <td>
            Piotr Wojtaszek <br>
            <BikeExternalLink to="mailto:piotr.wojtaszek@zhp.net.pl" :with-icon="false">
              piotr.wojtaszek@zhp.net.pl
            </BikeExternalLink>
          </td>
          <td v-if="$i18n.locale === 'pl'">
            <BikeUnorderedList no-margin>
              <li>Poszukiwana jedna osoba, której niestraszna jazda po lewej stronie jezdni, londyńska mgła, szkocka mrzawka i francuskie sery. Pełnoletnia.</li>
            </BikeUnorderedList>
          </td>
        </tr>
        <tr>
          <td>XII East</td>
          <td>{{ $t('places.czestochowa') }} - {{ $t('places.gdansk') }}</td>
          <td>27.06.2023 - 08.07.2023</td>
          <td>
            Łukasz Tomala <br>
            <BikeExternalLink to="mailto:lukasz.tomala@zhp.net.pl" :with-icon="false">
              lukasz.tomala@zhp.net.pl
            </BikeExternalLink>
          </td>
          <td v-if="$i18n.locale === 'pl'">
            <BikeUnorderedList no-margin>
              <li>pełnoletnie harcerki i harcerze</li>
            </BikeUnorderedList>
          </td>
        </tr>
      </BikeTable>
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'DolaczPage',
}
</script>
