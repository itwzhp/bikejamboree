<template>
  <main class="media-page">
    <BikeSection width="narrow">
      <BikeHeading>Dla mediów</BikeHeading>
      <BikeParagraph>
        Jeżeli jesteś przedstawicielem mediów i chciałbyś otrzymywać informacje o projekcie, zaprosić nas na rozmowę o tej wyjątkowej sztafecie, albo spotkać się z nami na trasie - prosimy o kontakt z szefową promocji projektu - hm. Magdaleną Suchan:
      </BikeParagraph>

      <ul class="contact-list mb-60">
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="mail" />
          <BikeExternalLink :with-icon="false" to="mailto:magdalena.suchan@zhp.net.pl">
            magdalena.suchan@zhp.net.pl
          </BikeExternalLink>
        </li>
      </ul>
      <BikeHeading size="small" level="2">
        Materiały do pobrania
      </BikeHeading>
      <ul class="contact-list mb-60">
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="image" />
          <BikeExternalLink :with-icon="false" :to="require('~/assets/images/logo.webp')">
            logotyp "JednoŚladami Andersa"
          </BikeExternalLink>
        </li>
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="archive" />
          <BikeExternalLink :with-icon="false" to="/files/jednosladami-andersa-foto.zip">
            pakiet zdjęć
          </BikeExternalLink>
        </li>
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="file-text" />
          <BikeExternalLink :with-icon="false" to="/files/22-11-09_JA start-sztafety-komunikat-prasowy_druk.pdf">
            komunikat prasowy o starcie sztafety
          </BikeExternalLink>
        </li>
      </ul>
      <BikeHeading size="small" level="2">
        Informacje o projekcie
      </BikeHeading>
      <BikeInternalLink to="/o-projekcie">
        Idea, formuła, inicjatorzy
      </BikeInternalLink>
      <BikeInternalLink to="/o-projekcie/trasa" class="mb-60">
        Trasa wyprawy
      </BikeInternalLink>
      <BikeHeading level="2" size="small">
        Media o nas
      </BikeHeading>
      <BikeTable no-header vertical-on-mobile>
        <tr>
          <td>"Harcerze na rowerze w podróży dookoła świata"</td>
          <td>Pytanie na Śniadanie, 17.11.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://pytanienasniadanie.tvp.pl/64574595/harcerze-na-rowerze-w-podrozy-dookola-swiata">
              Oglądaj materiał
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Na rowerach śladem polskiej armii"</td>
          <td>Rzeczpospolita, 11.11.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.rp.pl/historia-polski/art37399001-na-rowerach-sladem-polskiej-armii">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Zielonogórscy harcerze przejadą tysiące kilometrów szlakiem armii Andersa"</td>
          <td>Gazeta Wyborcza, 4.11.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://zielonagora.wyborcza.pl/zielonagora/7,35182,29105708,zielonogorscy-harcerze-przejada-tysiace-kilometrow-szlakiem.html">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Zielonogórscy harcerze wezmą udział w rowerowej sztafecie"</td>
          <td>Radio Plus, 20.10.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.radioplus.pl/zielona-gora/zielonogorscy-harcerze-wezma-udzial-w-rowerowej-sztafecie-aa-Nxdh-doaN-37f5.html">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Pojadą śladami Andersa"</td>
          <td>Radio Plus, 13.10.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.radioplus.pl/zielona-gora/pojada-sladami-andersa-aa-pHVE-1W9B-qSUm.html">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Śladami Andersa na rowerach. Zielonogórscy harcerze w sztafecie"</td>
          <td>Radio Zielona Góra, 12.10.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://rzg.pl/208631/sladami-andersa-na-rowerach-zielonogorscy-harcerze-w-sztafecie/">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"2KÓŁKA – Harcerska sztafeta rowerowa JednoŚladami Andersa"</td>
          <td>Radio Zielona Góra, 12.10.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://rzg.pl/208373/2kolka-harcerska-sztafeta-rowerowa-jednosladami-andersa/">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
      </BikeTable>
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'MediaPage',
}
</script>

<style lang="scss" scoped>
.contact-list {
  list-style-type: none;
  padding: 0 0 0 15px;
  &__item {
    display: flex;
    margin-bottom: 10px;
  }
  &__item-icon {
    margin-right: 10px;
  }
}

.media-page {
  .bike-table {
    td:nth-child(1) {
      font-weight: 500;
    }
    td:nth-child(2) {
      padding-bottom: 0;
      font-weight: 300;
    }
    td:nth-child(3) {
      padding-top: 0;
      white-space: nowrap;
    }
  }
}
</style>
