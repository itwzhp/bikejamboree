<template>
  <main>
    <BikeSection width="narrow">
      <BikeHeading> Kontakt </BikeHeading>
      <BikeParagraph>
        W sztabie projektu pracujemy wolontariacko, zdalnie i z całej Polski, a
        nawet bywa, że i ze świata. Zatem, jeśli masz pytanie, zachęcamy do
        napisania do nas maila.
      </BikeParagraph>
      <ul class="contact-list mb-30">
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="mail" />
          <BikeExternalLink :with-icon="false" to="mailto:info@bikejamboree.pl">
            info@bikejamboree.pl
          </BikeExternalLink>
        </li>
      </ul>
      <BikeParagraph> W internecie znajdziesz nas na: </BikeParagraph>
      <ul class="contact-list">
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="facebook" />
          <BikeExternalLink
            :with-icon="false"
            to="https://www.facebook.com/BikeJamboree"
          >
            facebook.com/BikeJamboree
          </BikeExternalLink>
        </li>
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="instagram" />
          <BikeExternalLink
            :with-icon="false"
            to="https://www.instagram.com/bike_jamboree"
          >
            instagram.com/bike_jamboree
          </BikeExternalLink>
        </li>
        <li class="contact-list__item">
          <BikeIcon class="contact-list__item-icon" icon="youtube" />
          <BikeExternalLink
            :with-icon="false"
            to="https://www.youtube.com/channel/UCfnLu42rsTplyLu8PGlLdtA"
          >
            YouTube: Bike Jamboree
          </BikeExternalLink>
        </li>
      </ul>
    </BikeSection>
  </main>
</template>

<script>
export default {
  name: 'KontaktPage',
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
</style>
