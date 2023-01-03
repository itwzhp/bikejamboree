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
          <td>V</td>
          <td>{{ $t('places.teheran') }} - {{ $t('places.kermanshah') }}</td>
          <td>08.02.2023 – 06.03.2023</td>
          <td>
            Adam Dąbrowski<br>
            <BikeExternalLink to="mailto:dabrowski.www@gmail.com" :with-icon="false">
              dabrowski.www@gmail.com
            </BikeExternalLink>
          </td>
          <td v-if="$i18n.locale === 'pl'">
            <BikeUnorderedList no-margin>
              <li>jedna harcerka</li>
            </BikeUnorderedList>
          </td>
        </tr>
        <tr>
          <td>VII</td>
          <td>{{ $t('places.amman') }} - {{ $t('places.port_said') }}</td>
          <td>25.03.2023 – 21.04.2023</td>
          <td>
            Dariusz Zajączkowski<br>
            <BikeExternalLink to="mailto:d.zajaczkowski@zhp.net.pl" :with-icon="false">
              d.zajaczkowski@zhp.net.pl
            </BikeExternalLink>
          </td>
          <td v-if="$i18n.locale === 'pl'">
            <BikeUnorderedList no-margin>
              <li>jeden harcerz - specjalista od mediów społecznościowych lub finansów</li>
            </BikeUnorderedList>
          </td>
        </tr>
        <tr>
          <td>XI East</td>
          <td>{{ $t('places.linz') }} - {{ $t('places.katowice') }}</td>
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
      </BikeTable>
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'DolaczPage',
}
</script>
