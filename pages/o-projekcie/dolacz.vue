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
          <td>Lider</td>
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
          <td>dwóch harcerzy</td>
        </tr>
        <tr>
          <td>III</td>
          <td>Taszkent - Aschabad</td>
          <td>31.12.2022 - 20.01.2023</td>
          <td>
            Arkadiusz Kościelski<br>
            <BikeExternalLink
              to="mailto:arek.koscielski@gmail.com"
              :with-icon="false"
            >
              arek.koscielski@gmail.com
            </BikeExternalLink>
          </td>
          <td>jedna osoba</td>
        </tr>
        <tr>
          <td>V</td>
          <td>Teheran - Kermanszach</td>
          <td>11.02.2023 - 3.03.023</td>
          <td>
            Adam Dąbrowski<br>
            <BikeExternalLink
              to="mailto:dabrowski.www@gmail.com"
              :with-icon="false"
            >
              dabrowski.www@gmail.com
            </BikeExternalLink>
          </td>
          <td>jeden harcerz</td>
        </tr>
        <tr>
          <td>X West</td>
          <td>Mediolan - Paryż</td>
          <td>3.06.2023 - 16.06.2023</td>
          <td>
            Wojciech Wrześniak<br>
            <BikeExternalLink to="mailto:pizmak22@gmail.com" :with-icon="false">
              pizmak22@gmail.com
            </BikeExternalLink>
          </td>
          <td>jeden harcerz, mówiący po francusku</td>
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
