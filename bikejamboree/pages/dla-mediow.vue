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
          <BikeExternalLink :with-icon="false" to="/files/ja-final-sztafety-komunikat-prasowy-11.7.2023.pdf">
            komunikat prasowy o starcie sztafety
          </BikeExternalLink>
        </li>
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="file-text" />
          <BikeExternalLink :with-icon="false" to="/files/ja-final-sztafety-komunikat-prasowy-11.7.2023.pdf">
            komunikat prasowy o finale sztafety
          </BikeExternalLink>
        </li>
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="archive" />
          <BikeExternalLink :with-icon="false" to="/files/edynburg-final-foto.zip">
            pakiet zdjęć z finału w Edynburgu
          </BikeExternalLink>
        </li>
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="archive" />
          <BikeExternalLink :with-icon="false" to="/files/gdansk-final-foto.zip">
            pakiet zdjęć z finału w Gdańsku
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
        <tr v-for="(article, i) in articles.reverse()" :key="`article-${i}`">
          <td>{{ article.title }}</td>
          <td>{{ article.publisher }}, {{ article.date }}</td>
          <td>
            <BikeExternalLink :with-icon="false" :to="article.link">
              {{ article.cta }}
            </BikeExternalLink>
          </td>
        </tr>
      </BikeTable>
    </BikeSection>
  </main>
</template>

<script>
import articles from "../helpers/media.js"

export default {
  name: 'MediaPage',

  data() {
    return {
      articles
    }
  }
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
