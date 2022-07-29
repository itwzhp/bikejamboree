<template>
  <main>
    <BikeSection width="narrow" class="mb-30">
      <BikeHeading> Dołącz do nas </BikeHeading>
      <BikeParagraph>
        W "JednoŚladami Andersa" można wziąć udział na kilka sposobów:
      </BikeParagraph>
      <BikeUnorderedList class="mb-75">
        <li>Pojedź w sztafecie</li>
        <li>Weź udział w inicjatywie programowej (ogłosimy je wkrótce)</li>
        <li>
          Zaproponuj własny element wzbogacający projekt upamiętniający
          dokonania polskiej armii.
        </li>
      </BikeUnorderedList>
      <BikeHeading level="2">
        Rekrutacja
      </BikeHeading>
      <BikeParagraph> Aktualnie trwa rekrutacja na etapy: </BikeParagraph>
      <BikeTable>
        <tr>
          <td>Etap</td>
          <td>Trasa</td>
          <td>Data</td>
          <td>Kontakt</td>
          <td>Poszukiwani</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Nur-Sułtan - Aralsk</td>
          <td>12.11.2022 - 9.12.2022</td>
          <td>
            Zbigniew Sas<br>
            <BikeExternalLink to="mailto:zjs@op.pl" :with-icon="false">
              zjs@op.pl
            </BikeExternalLink>
          </td>
          <td>jeden harcerz lub harcerka</td>
        </tr>
        <tr>
          <td>XI East</td>
          <td>Linz - Katowice</td>
          <td>16.06.2023 - 28.06.2023</td>
          <td>
            Zbigniew Sas<br>
            <BikeExternalLink to="mailto:zjs@op.pl" :with-icon="false">
              zjs@op.pl
            </BikeExternalLink>
          </td>
          <td>lider etapu</td>
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
