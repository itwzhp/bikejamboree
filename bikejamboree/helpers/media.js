const articles = [
  {
    title: '2KÓŁKA – Harcerska sztafeta rowerowa "JednoŚladami Andersa"',
    publisher: 'Radio Zielona Góra',
    date: '12.10.2022',
    link: 'https://rzg.pl/208373/2kolka-harcerska-sztafeta-rowerowa-jednosladami-andersa',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Śladami Andersa na rowerach. Zielonogórscy harcerze w sztafecie',
    publisher: 'Radio Zielona Góra',
    date: '12.10.2022',
    link: 'https://rzg.pl/208631/sladami-andersa-na-rowerach-zielonogorscy-harcerze-w-sztafecie',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Pojadą śladami Andersa',
    publisher: 'Radio Plus',
    date: '13.10.2022',
    link: 'https://www.radioplus.pl/zielona-gora/pojada-sladami-andersa-aa-pHVE-1W9B-qSUm.html',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Zielonogórscy harcerze wezmą udział w rowerowej sztafecie',
    publisher: 'Radio Plus',
    date: '20.10.2022',
    link: 'https://www.radioplus.pl/zielona-gora/zielonogorscy-harcerze-wezma-udzial-w-rowerowej-sztafecie-aa-Nxdh-doaN-37f5.html',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Zielonogórscy harcerze przejadą tysiące kilometrów szlakiem armii Andersa',
    publisher: 'Gazeta Wyborcza',
    date: '4.11.2022',
    link: 'https://zielonagora.wyborcza.pl/zielonagora/7,35182,29105708,zielonogorscy-harcerze-przejada-tysiace-kilometrow-szlakiem.html',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Trwają przygotowania do sztafety rowerowej śladami Armii gen. Andersa',
    publisher: 'Telewizja Asta',
    date: '08.11.2022',
    link: 'https://youtu.be/36BMTop3u1s',
    cta: 'Oglądaj materiał'
  },
  {
    title: 'Na rowerach śladem polskiej armii',
    publisher: 'Rzeczpospolita',
    date: '11.11.2022',
    link: 'https://www.rp.pl/historia-polski/art37399001-na-rowerach-sladem-polskiej-armii',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Witaj Wielkopolsko! (01:05:25)',
    publisher: 'TVP3',
    date: '15.11.2022',
    link: 'https://poznan.tvp.pl/64529853/15112022',
    cta: 'Oglądaj materiał'
  },
  {
    title: 'Harcerze na rowerze w podróży dookoła świata',
    publisher: 'Pytanie na Śniadanie',
    date: '17.11.2022',
    link: 'https://pytanienasniadanie.tvp.pl/64574595/harcerze-na-rowerze-w-podrozy-dookola-swiata',
    cta: 'Oglądaj materiał'
  },
  {
    title: '"Jednośladami Andersa". Mróz, step i życzliwi ludzie',
    publisher: 'Rzeczpospolita',
    date: '16.12.2022',
    link: 'https://www.rp.pl/plus-minus/art37617021-jednosladami-andersa-mroz-step-i-zyczliwi-ludzie',
    cta: 'Czytaj artykuł'
  },
  {
    title: '2Kółka – ekipa rowerowa "JednoŚladami Andersa" na trasie w Kazachstanie',
    publisher: 'Radio Zielona Góra',
    date: '21.12.2022',
    link: 'https://rzg.pl/230406/2kolka-ekipa-rowerowa-jednosladami-andersa-na-trasie-w-kazachstanie',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Przepraszam, że tak wcześnie - Bartłomiej Walkowski',
    publisher: 'Radio Zielona Góra',
    date: '10.01.2023',
    link: 'https://rzg.pl/234453/bartlomiej-walkowski',
    cta: 'Słuchaj audycji'
  },
  {
    title: '"JednoŚladami Andersa" w Taszkencie (Uzbekistan)',
    publisher: 'Ośrodek Rozwoju Polskiej Edukacji za Granicą',
    date: '21.01.2023',
    link: 'https://www.orpeg.pl/jednosladami-andersa-w-taszkencie-uzbekistan',
    cta: 'Czytaj artykuł'
  },
  {
    title: '"JednoŚladami Andersa" w Taszkencie (Uzbekistan)',
    publisher: 'Ośrodek Rozwoju Polskiej Edukacji za Granicą',
    date: '21.01.2023',
    link: 'https://www.orpeg.pl/jednosladami-andersa-w-taszkencie-uzbekistan',
    cta: 'Czytaj artykuł'
  },
  {
    title: '"JednoŚladami Andersa" – dwójka rudzian bierze udział w wyjątkowej akcji!',
    publisher: 'RudaSlaska.com.pl',
    date: '24.01.2023',
    link: 'https://rudaslaska.com.pl/i,jednosladami-andersa--dwojka-rudzian-bierze-udzial-w-wyjatkowej-akcji,200274,1518094.html',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Sztafeta rowerowa 🚴 "JednoŚladami Andersa" dotarła do Taszkentu!',
    publisher: 'Serwis Rzeczypospolitej Polskiej',
    date: '22.01.2023',
    link: 'https://www.gov.pl/web/uzbekistan/sztafeta-rowerowa--jednosladami-andersa-dotarla-do-taszkentu',
    cta: 'Czytaj artykuł'
  },
  {
    title: '2Kółka: II etap wyprawy rowerowej "JednoŚladami Andersa" zakończony!',
    publisher: 'Radio Zielona Góra',
    date: '25.01.2023',
    link: 'https://rzg.pl/237882/2kolka-ii-etap-wyprawy-rowerowej-jednosladami-andersa-zakonczony',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Strefa Młodych – Harcerze śladami Armii Andersa',
    publisher: 'Radio Zachód',
    date: '30.01.2023',
    link: 'https://zachod.pl/793611/strefa-mlodych-harcerze-sladami-armii-andersa',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Od Kazachstanu do Edynburga. Łodzianie w podróży rowerem liczącej 15 tys. km',
    publisher: 'Gazeta Wyborcza Łódź',
    date: '05.02.2023',
    link: 'https://www.rp.pl/plus-minus/art37617021-jednosladami-andersa-mroz-step-i-zyczliwi-ludzie',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Jadą rowerami szlakiem armii Andersa. "Ta historia jest żywa"',
    publisher: 'Radio Olsztyn',
    date: '20.02.2023',
    link: 'https://radioolsztyn.pl/jada-rowerami-szlakiem-armii-andersa-ta-historia-jest-zywa',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Rowerem szlakiem Armii Andersa',
    publisher: 'Gazeta Olsztyńska',
    date: '24.02.2023',
    link: 'dev/files/gazeta-olsztynska-24-02-2023.jpg',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Dorota Limontas / Bike Jamboree',
    publisher: 'Warmia Bike',
    date: '26.02.2023',
    link: 'https://open.spotify.com/show/1fJfStMBKHukaTR8c7Ozm0',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Jadą na rowerach, by promować historię',
    publisher: 'Radio Plus Olsztyn',
    date: '27.02.2023',
    link: 'https://www.radioplus.pl/olsztyn/jada-na-rowerach-by-promowac-historie-aa-Hs5c-jA7z-nmeD.html',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Rowerowa wyprawa harcerzy',
    publisher: 'TVK Macrosat',
    date: '01.03.2023',
    link: 'https://www.facebook.com/macrosatPL/posts/pfbid033T5cmwr1Gt7AiVzjdPkpibkUfwCahxy8rBJubEwF9LH2tgWo2KE5h6tR5zqgGqAMl',
    cta: 'Oglądaj materiał'
  },
  {
    title: 'دوچرخه‌سواران لهستانی',
    publisher: 'Foolad Mobarakeh Sepahan Club',
    date: '09.03.2023',
    link: 'https://www.sepahansc.com/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1/%D8%B3%D9%BE%D8%A7%D9%87%D8%A7%D9%86-%D9%85%DB%8C%D8%B2%D8%A8%D8%A7%D9%86-%D8%AF%D9%88%DA%86%D8%B1%D8%AE%D9%87%D8%B3%D9%88%D8%A7%D8%B1%D8%A7%D9%86-%D9%84%D9%87%D8%B3%D8%AA%D8%A7%D9%86%DB%8C',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Strefa Młodych – Harcerze śladami Armii Andersa cz.2',
    publisher: 'Radio Zachód',
    date: '13.03.2023',
    link: 'https://zachod.pl/821392/strefa-mlodych-jednosladami-andersa-cz-2',
    cta: 'Słuchaj audycji'
  },
  {
    title: 'Spotkanie z uczestnikami projektu "JednoŚladami Andersa"',
    publisher: 'Spotkanie z uczestnikami projektu "JednoŚladami Andersa"',
    date: '23.03.2023',
    link: 'https://www.gov.pl/web/jordania/spotkal-sie-zspotkanie-z-uczestnikami-projektu-jednosladami-andersa',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Amb. @LucjanKarpinski  spotkał się z uczestnikami projektu...',
    publisher: 'Embassy of Poland in Jordan',
    date: '30.03.2023',
    link: 'https://twitter.com/plinjordan/status/1641346470342283264?s=46&t=GHZeXz5QIFPuqFxOft4iZA',
    cta: 'Czytaj post'
  },
  {
    title: 'Rowerami przez Uzbekistan 2023',
    publisher: 'MCK Czarnków',
    date: '06.04.2023',
    link: 'https://mck.czarnkow.pl/aktualnosci/rowerami-przez-uzbekistan-2023.html',
    cta: 'Czytaj artykuł'
  },
  {
    title: '"JednoŚladami Andersa"',
    publisher: 'GCKSiR w Krośniewicach',
    date: '23.04.2023',
    link: 'http://krosniewice.net/index.php/anderswka/2925-jednosladami-andersa',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Z Krośniewic do Włoch pojadą rowerami!',
    publisher: 'kutno.net.pl',
    date: '24.04.2023',
    link: 'https://kutno.net.pl/wydarzenia/z-krosniewic-do-wloch-pojada-rowerami/6a6ktIsmgRwuNrdxJiZg',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Z „Andersówki” pod Monte Cassino rowerem!',
    publisher: 'eKutno.pl',
    date: '24.04.2023',
    link: 'https://ekutno.pl/pl/11_wiadomosci/53328_z-andersowki-pod-monte-cassino-rowerem.html',
    cta: 'Czytaj artykuł'
  },
  {
    title: '"JednoŚladami Andersa". Harcerska sztafeta rowerowa pojedzie na Monte Cassino',
    publisher: 'Radio Łódź',
    date: '25.04.2023',
    link: 'https://radiolodz.pl/jednosladami-andersa-harcerska-sztafeta-rowerowa-pojedzie-na-monte-cassino,231484',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Projekt "Jednośladami Andersa". Propozycja spotkania z włoską Polonią.',
    publisher: 'Polacy we Włoszech',
    date: '25.04.2023',
    link: 'https://www.polacywewloszech.com/2023/04/25/projekt-jednosladami-andersa-propozycja-spotkania-z-wloska-polonia',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'ROZMOWY W SZAFIE #4 Dorota Limontas',
    publisher: 'Szafa Nagrań',
    date: '25.04.2023',
    link: 'https://youtu.be/hH75XYJH3vM',
    cta: 'Oglądaj materiał'
  },
  {
    title: '"JednoŚladami Andersa"',
    publisher: 'teleexpress',
    date: '27.04.2023',
    link: 'https://teleexpress.tvp.pl/69479578/jednosladami-andersa',
    cta: 'Oglądaj materiał'
  },
  {
    title: 'Dwa kółka to niezależność',
    publisher: 'Posłaniec Warmiński',
    date: '',
    link: '/files/poslaniec-warminski.jpg',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Hanno fatto tappa a Potenza gli scout polacchi sulle orme del generale Anders, protagonista della liberazione d’Italia',
    publisher: 'Ufficio Stampa Basilicata',
    date: '12.05.2023',
    link: 'https://www.ufficiostampabasilicata.it/eventi/hanno-fatto-tappa-a-potenza-gli-scout-polacchi-sulle-orme-del-generale-anders-protagonista-della-liberazione-ditalia',
    cta: 'Czytaj artykuł'
  },
  {
    title: '"JednoŚladami Andersa"',
    publisher: 'TVP3 Gdańsk',
    date: '08.07.2023',
    link: 'https://gdansk.tvp.pl/71161013/jednosladami-andersa',
    cta: 'Oglądaj materiał'
  },
  {
    title: 'Harcerska sztafeta "JednoŚladami Andersa" ukończona. Rowerzyści pokonali 15 tys. kilometrów',
    publisher: 'Radio Gdańsk',
    date: '08.07.2023',
    link: 'https://radiogdansk.pl/wiadomosci/region/trojmiasto/2023/07/08/harcerska-sztafeta-jednosladami-andersa-ukonczona-rowerzysci-pokonali-15-tys-kilometrow/',
    cta: 'Czytaj artykuł'
  },
  {
    title: ' Sztafeta Rowerowa "JednoŚladami Andersa" dotarła do Gdańska',
    publisher: 'wybrzeże24.pl',
    date: '08.07.2023',
    link: 'https://wybrzeze24.pl/aktualnosci/sztafeta-rowerowa-jednosladami-andersa-dotarla-do-gdanska',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Poprzez łąki, poprzez pola...',
    publisher: 'ZHP Edynburg',
    date: '08.07.2023',
    link: 'https://www.facebook.com/story.php?story_fbid=pfbid0xS7KuqFsD2oBB5yyfpsaCcZ4kCeuwubf8rneDx6K5gUaLXyQYXDuSSmCJCo1sWdUl&id=100064587733881',
    cta: 'Czytaj post'
  },
  {
    title: '🚵‍♀️8 lipca uczestniczyliśmy w wyjątkowym...',
    publisher: 'Szkoła bez Granic im. Niedźwiedzia Wojtka',
    date: '09.07.2023',
    link: 'https://www.facebook.com/story.php?story_fbid=pfbid0dct8vmwnwaZjRoNVAPUSAy7sQPGLta6eJ2DD4xp6eau4psdS1b1iST9PQBHyuLqml&id=100054229521552',
    cta: 'Czytaj post'
  },
  {
    title: 'Following the route of General Anders on bikes',
    publisher: 'Erskine Logan Photography',
    date: '09.07.2023',
    link: 'https://www.facebook.com/media/set/?set=a.850155713311495',
    cta: 'Czytaj post'
  },
  {
    title: 'Szkocja: W Edynburgu zakończyła się Harcerska Sztafeta Rowerowa "JednoŚladami Andersa"',
    publisher: 'TVP Polonia',
    date: '10.07.2023',
    link: 'https://twojapolonia.tvp.pl/71197015/szkocja-w-edynburgu-zakonczyla-sie-harcerska-sztafeta-rowerowa-jednosladami-andersa',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Przejechali rowerami szlak armii gen. Andersa 15 000 km!',
    publisher: 'Polonijna Agencja Informacyjna',
    date: '10.07.2023',
    link: 'http://www.pai.media.pl/pai_wiadomosci.php?id=27898',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Przejechali rowerami szlak armii gen. Andersa 15 000 km!',
    publisher: 'Polonijna Agencja Informacyjna',
    date: '13.07.2023',
    link: 'https://www.facebook.com/story.php?story_fbid=pfbid02f8UDeGYPFtxuRCWeDmDEoiv78KtmoZWuDPjMTmiv5XbojuVmBdKkg7rPqxj3Afvvl&id=100072381157661',
    cta: 'Czytaj post'
  },
  {
    title: 'Harcerska Sztafeta Rowerowa "JednoŚladami Andersa" na mecie!',
    publisher: 'Związek Harcerstwa Polskiego',
    date: '13.07.2023',
    link: 'https://zhp.pl/2023/harcerska-sztafeta-rowerowa-jednosladami-andersa-na-mecie',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'NAGRODZENI I WYRÓŻNIENI NA KOLOSACH (ZA ROK) 2023',
    publisher: 'kolosy.pl',
    date: '24.03.2024',
    link: 'https://kolosy.pl/nagrodzeni-i-wyroznieni-na-kolosach-za-rok-2023',
    cta: 'Czytaj Artykuł'
  },
  {
    title: '26. Kolosy zakończone. Do zobaczenia za rok!',
    publisher: 'gdynia.pl',
    date: '24.03.2024',
    link: 'https://www.gdynia.pl/mieszkaniec/co-nowego,2774/26-kolosy-zakonczone-do-zobaczenia-za-rok,580603',
    cta: 'Czytaj Artykuł'
  },
  {
    title: 'Podróżnicze nagrody i Kolosy za 2023 rok przyznane!',
    publisher: 'zawsze Pomorze',
    date: '24.03.2024',
    link: 'https://www.zawszepomorze.pl/artykul/12955,podroznicze-nagrody-i-kolosy-za-2023-rok-przyznane',
    cta: 'Czytaj Artykuł'
  },
  {
    title: 'Gdynia: Przyznano Kolosy - najważniejsze polskie nagrody podróżnicze',
    publisher: 'wnp.pl | Portal Gospodarczy',
    date: '24.03.2024',
    link: 'https://www.wnp.pl/parlamentarny/wydarzenia/gdynia-przyznano-kolosy-najwazniejsze-polskie-nagrody-podroznicze,817872.html',
    cta: 'Czytaj Artykuł'
  },
  {
    title: 'Kolosy',
    publisher: 'gdynia.pl',
    date: '24.03.2024',
    link: 'https://www.gdynia.pl/storage/uzytkownicy/galeriagdynia@gmail.com/!2024/FILMY/03%20marzec/2024-03-24%20Kolosy%20zako%C5%84czenie/kolosy%20zakonczenie.mp4',
    cta: 'Oglądaj materiał'
  },
  {
    title: 'Harcerska Sztafeta Rowerowa otrzymała nagrodę specjalną Kolosów! ',
    publisher: 'zhp.pl',
    date: '29.03.2024',
    link: 'https://zhp.pl/harcerska-sztafeta-rowerowa-otrzymala-nagrode-specjalna-kolosow/',
    cta: 'Czytaj artykuł'
  },
  {
    title: 'Łódzkie Wiadomości Dnia [16:45]',
    publisher: 'TVP Łódź',
    date: '10.04.2024',
    link: 'https://lodz.tvp.pl/787149/lwd',
    cta: 'Oglądaj materiał'
  }
]

export default articles
