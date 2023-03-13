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
          <td>"Strefa Młodych – Harcerze śladami Armii Andersa cz.2"</td>
          <td>Radio Zachód, 13.03.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://zachod.pl/821392/strefa-mlodych-jednosladami-andersa-cz-2/">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"سپاهان میزبان دوچرخه‌سواران لهستانی"</td>
          <td>Foolad Mobarakeh Sepahan Club, 09.03.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.sepahansc.com/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1/%D8%B3%D9%BE%D8%A7%D9%87%D8%A7%D9%86-%D9%85%DB%8C%D8%B2%D8%A8%D8%A7%D9%86-%D8%AF%D9%88%DA%86%D8%B1%D8%AE%D9%87%D8%B3%D9%88%D8%A7%D8%B1%D8%A7%D9%86-%D9%84%D9%87%D8%B3%D8%AA%D8%A7%D9%86%DB%8C">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>Rowerowa wyprawa harcerzy</td>
          <td>TVK Macrosat, 01.03.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.facebook.com/macrosatPL/posts/pfbid033T5cmwr1Gt7AiVzjdPkpibkUfwCahxy8rBJubEwF9LH2tgWo2KE5h6tR5zqgGqAMl">
              Oglądaj materiał
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>Jadą na rowerach, by promować historię</td>
          <td>Radio Plus Olsztyn, 27.02.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.radioplus.pl/olsztyn/jada-na-rowerach-by-promowac-historie-aa-Hs5c-jA7z-nmeD.html">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>Dorota Limontas / Bike Jamboree</td>
          <td>Warmia Bike, 26.02.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://open.spotify.com/show/1fJfStMBKHukaTR8c7Ozm0">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>Rowerem szlakiem Armii Andersa</td>
          <td>Gazeta Olsztyńska, 24.02.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://bikejamboree.pl/files/gazeta-olsztynska-24-02-2023.jpg">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>Jadą rowerami szlakiem armii Andersa. "Ta historia jest żywa"</td>
          <td>Radio Olsztyn, 20.02.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://radioolsztyn.pl/jada-rowerami-szlakiem-armii-andersa-ta-historia-jest-zywa">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Od Kazachstanu do Edynburga. Łodzianie w podróży rowerem liczącej 15 tys. km"</td>
          <td>Gazeta Wyborcza Łódź, 05.02.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.rp.pl/plus-minus/art37617021-jednosladami-andersa-mroz-step-i-zyczliwi-ludzie">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Strefa Młodych – Harcerze śladami Armii Andersa"</td>
          <td>Radio Zachód, 30.01.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://zachod.pl/793611/strefa-mlodych-harcerze-sladami-armii-andersa/">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"2Kółka: II etap wyprawy rowerowej „JednoŚladami Andersa” zakończony!"</td>
          <td>Radio Zielona Góra, 25.01.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://rzg.pl/237882/2kolka-ii-etap-wyprawy-rowerowej-jednosladami-andersa-zakonczony/">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Sztafeta rowerowa 🚴 „JednoŚladami Andersa” dotarła do Taszkentu!"</td>
          <td>Serwis Rzeczypospolitej Polskiej, 22.01.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.gov.pl/web/uzbekistan/sztafeta-rowerowa--jednosladami-andersa-dotarla-do-taszkentu/">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"JednoŚladami Andersa w Taszkencie (Uzbekistan)"</td>
          <td>Ośrodek Rozwoju Polskiej Edukacji za Granicą, 21.01.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.orpeg.pl/jednosladami-andersa-w-taszkencie-uzbekistan/">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Przepraszam, że tak wcześnie - Bartłomiej Walkowski"</td>
          <td>Radio Zielona Góra, 10.01.2023</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://rzg.pl/234453/bartlomiej-walkowski/">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"2Kółka – ekipa rowerowa „JednoŚladami Andersa” na trasie w Kazachstanie"</td>
          <td>Radio Zielona Góra, 21.12.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://rzg.pl/230406/2kolka-ekipa-rowerowa-jednosladami-andersa-na-trasie-w-kazachstanie/">
              Słuchaj audycji
            </BikeExternalLink>
          </td>
        </tr>
        <tr>
          <td>"Jednośladami Andersa. Mróz, step i życzliwi ludzie"</td>
          <td>Rzeczpospolita, 16.12.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://www.rp.pl/plus-minus/art37617021-jednosladami-andersa-mroz-step-i-zyczliwi-ludzie">
              Czytaj artykuł
            </BikeExternalLink>
          </td>
        </tr>
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
          <td>"Witaj Wielkopolsko!" (01:05:25)</td>
          <td>TVP3, 15.11.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://poznan.tvp.pl/64529853/15112022">
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
          <td>"Trwają przygotowania do sztafety rowerowej śladami Armii gen. Andersa."</td>
          <td>Telewizja Asta, 08.11.2022</td>
          <td>
            <BikeExternalLink :with-icon="false" to="https://youtu.be/36BMTop3u1s">
              Oglądaj materiał
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
