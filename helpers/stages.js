export const stopsData = [
  {
    lat: 51.1762,
    lon: 71.5048,
    city: 'astana',
    country: 'kazakhstan',
    type: 'start',
  },
  {
    lat: 46.8002,
    lon: 61.6654,
    city: 'aral',
    country: 'kazakhstan',
    type: 'regular',
  },
  {
    lat: 41.3125,
    lon: 69.2787,
    city: 'tashkent',
    country: 'uzbekistan',
    type: 'regular',
  },
  {
    lat: 37.9406,
    lon: 58.3823,
    city: 'ashgabat',
    country: 'turkmenistan',
    type: 'regular',
  },
  {
    lat: 35.6935,
    lon: 51.369,
    city: 'teheran',
    country: 'iran',
    type: 'regular',
  },
  {
    lat: 34.4905,
    lon: 46.7563,
    city: 'kermanshah',
    country: 'iran',
    type: 'regular',
  },
  {
    lat: 31.9517,
    lon: 35.924,
    city: 'amman',
    country: 'jordan',
    type: 'regular',
  },
  {
    lat: 31.2386,
    lon: 32.2501,
    city: 'port_said',
    country: 'egypt',
    type: 'regular',
  },
  {
    lat: 40.4613,
    lon: 17.2450,
    city: 'taranto',
    country: 'italy',
    type: 'regular',
  },
  {
    lat: 41.49093,
    lon: 13.81383,
    city: 'monte_cassino',
    country: 'italy',
    type: 'regular',
  },
  {
    lat: 45.4613,
    lon: 9.1595,
    city: 'milan',
    country: 'italy',
    type: 'regular',
  },
  {
    lat: 48.8589,
    lon: 2.3469,
    city: 'paris',
    country: 'france',
    type: 'regular',
  },
  {
    lat: 55.9537,
    lon: -3.1884,
    city: 'edinburgh',
    country: 'united_kingdom',
    type: 'finish',
  },
  {
    lat: 48.3062,
    lon: 14.2862,
    city: 'linz',
    country: 'austria',
    type: 'regular',
  },
  {
    lat: 50.214,
    lon: 19.008,
    city: 'katowice',
    country: 'poland',
    type: 'regular',
  },
  {
    lat: 54.3275,
    lon: 18.8645,
    city: 'gdansk',
    country: 'poland',
    type: 'finish',
  },
]

export const stagesData = [
  {
    name: 'stage_i',
    id: 'etap-i',
    startPoint: stopsData[0],
    startDate: new Date(2022, 10, 12),
    finishPoint: stopsData[1],
    finishDate: new Date(2022, 11, 9),
    distance: '1500 km',
    leader: 'Zbigniew Sas',
    nextStages: [1],
    points: [
      { lat: 51.6262, lon: 69.8618 },
      { lat: 51.9760, lon: 66.4029 },
      { lat: 50.3229, lon: 66.9115 },
      { lat: 48.6695, lon: 61.2609 }
    ],
    members: [
      {
        name: 'Zbigniew Sas',
        photo: 'zbigniew-sas.webp',
        isLeader: true,
        bio: 'Zawodowo zajmuje się pilotowaniem wycieczek rowerowych. Zaangażowany w duże projekty podróżnicze. Współorganizator Afryki Nowaka, Rowerowego Jamboree 2015, Bike Jamboree 2017-2019 - wypraw, które każdemu uczestnikowi przyniosły przygodę, nowe przyjaźnie i zaskakujące doświadczenia. Zafascynowany Afryką i państwami poradzieckimi. Miłośnik mikroprzygód - weekendowych wypadów w najbliższą okolicę. Laureat prestiżowych nagród podróżniczych m.in. wyróżnienia na Kolosach za rowerową wyprawę na Madagaskar, nagrody Travellera w kategorii "Podróż Roku" za pionierską wyprawę wzdłuż rzeki Antanambalana również na Madagaskarze. Z zawodu rybak morski i przedsiębiorca. W projekcie JednoŚladami Andersa odpowiedzialny za koordynację całego przedsięwzięcia oraz trasę, sprzęt i logistykę. '
      },
      {
        name: 'Lilla Bilińska',
        photo: 'empty.webp',
        isLeader: false,
        bio: 'Otwarta na przygody i nowe wyzwania. Czas wolny spędza aktywnie na świeżym powietrzu lub pod ciepłym kocykiem w domu z książką i jazzem. Kocha góry i rower, ale też nurkuje, biega. Już prawie ćwierć wieku temu odkryła, że najszybciej regeneruje się w saunie , od której jest na swój sposób uzależniona. Dzień zaczyna od zdania „ Najpierw kawa. Potem życie”. Zawodowo zajmuje się doradztwem techniczno handlowym w przemyśle metalurgicznym w zakresie ceramiki.'
      },
      {
        name: 'Bogumił Koszałka',
        photo: 'bogumil-koszalka.webp',
        isLeader: false,
        bio: 'Wrocławianin. Matematyk z wykształcenia, rowerzysta z pasji. Lubi jazdę na rowerze w każdej postaci zarówno rowerami tradycyjnymi jak i monocyklem. Wraz z przyjaciółmi regularnie gra w BikePolo - polo na rowerach. Miłośnik górskich wędrówek i wspinaczki. JednoŚladami Andersa łączy wszystkie jego pasje: rower, podróże, poznawanie historii i miejsc.'
      },
      {
        name: 'Wojtek Kuciński',
        photo: 'wojciech-kucinski.webp',
        isLeader: false,
        bio: 'Łodzianin, instruktor ZHP, wegetarianin. Z wykształcenia kulturoznawca, a z zawodu od 30 lat kiniarz. Miłośnik jednośladów zarówno tych warczących jak i tych cichych, a jako Łowca Niewygód kieruje się zasadą: „im trudniej tym lepiej”. Choć siwizna pokryła mu głowę to uwielbia taplać się w błocie i z zuchami, i z motocyklem. Jak się zmęczy to sadzi drzewa, ratuje zwierzęta lub skacze ze spadochronem. Zimowa wyprawa do Kazachstanu z JednoŚladami Andersa to wyzwanie, które rozpala mu radością serducho. Umie ugotować coś z niczego nawet gdy w lodówce jest tylko światło, a rozwiązania problemów ma poupychane w kieszeniach. Zawsze przytuli i pomoże.'
      },
      {
        name: 'Piotr Sztybór',
        photo: 'piotr-sztybor.webp',
        isLeader: false,
        bio: 'Instruktor harcerski w ZHR w Płocku. Przyroda, ognisko, służba dla drugiego człowieka, Bóg to wartości, bez których trudno byłoby mu żyć. Prywatnie prowadzi własną firmę, dzięki której po zakończeniu zlecenia zwiedza miejsca, do których dotarł. Uwielbia wyprawy w „niecywilizowane” miejsca. Jak już jechać na daleką wyprawę to nie na tydzień, ale minimum na trzy tygodnie. Dlatego do Kazachstanu jedzie na dwa etapy i łącznie ponad dwa miesiące Jego pasją jest też fotografia, z każdego miejsca w świecie przywozi setki zdjęć. Morze-góry!? ZDECYDOWNIE góry! ale nie Krupówki tylko intensywny wypoczynek. Lubi zimę – przy kominku rowerowo-zimowa wyprawa będzie jego pierwszą. Chce się sprawdzić, chce doświadczyć czegoś nowego. Z drugiej strony chciałby kiedyś pojechać na Antarktydę i tam spędzić z trzy miesiące choćby, jako pomoc kuchenna w stacji polarnej. Uczestniczył w poprzednich dwóch projektach – przemierzał rowerem Chiny i Rosję.'
      },
      {
        name: 'Beata Szczepańska',
        photo: 'empty.webp',
        isLeader: false,
        bio: 'Szczecinianka. Brałam udział w13. Etapie projeku Bike Jamboree dookoła świata i to było jedno ze wspanialszych doświadczeń w moim życiu. Robię w życiu mnóstwo rzeczy: brydż, książki. Moje miejsce na ziemi to mała wioska w Borach Tucholskich nad jeziorem Ostrawite. Najważniejsi ludzie w moim życiu, to moja rodzina. Prawnik czynny w zawodzie.'
      }
    ]
  },
  {
    name: 'stage_ii',
    id: 'etap-ii',
    startPoint: stopsData[1],
    startDate: new Date(2022, 11, 10),
    finishPoint: stopsData[2],
    finishDate: new Date(2022, 11, 30),
    distance: '1400 km',
    leader: 'Bartłomiej Walkowski',
    previousStages: [0],
    nextStages: [2],
    points: [
      { lat: 45.6295, lon: 63.3162 },
      { lat: 44.8482, lon: 65.4877 },
      { lat: 42.3440, lon: 69.5888 },
      { lat: 42.3440, lon: 69.5888 }
    ],
    members: [
      {
        name: 'Bartłomiej Walkowski',
        photo: 'bartlomiej-walkowski.webp',
        isLeader: true,
        bio: 'Komendant Chorągwi Ziemi Lubuskiej Związku Harcerstwa Polskiego. Pochodzi z Zielonej Góry i po wielu latach to właśnie jego rodzinne miasto stało się tym ukochanym. Na co dzień pracuje w profesjonalnym radiu, a doświadczenie dziennikarskie zbierał przez wiele lat w redakcjach gazet oraz radiu internetowym, które sam stworzył. Uwielbia słuchać jazzu i bluesa, a obok koniecznie musi stać mała czarna bez której nie wyobraża sobie dnia. Zawodowo Bartek jest również konferansjerem. Chęć poznania nowego i połączenia tego ze zgłębianiem historii jest tym co zawiodło Bartka do projektu Jednośladami Andersa.'
      },
      {
        name: 'Katarzyna Kurowska',
        photo: 'katarzyna-kurowska.webp',
        isLeader: false,
        bio: 'Choć w życiu stara się mieć wiele rzeczy zaplanowanych i przemyślanych, to z ciekawością wchodzi w nowe projekty i wyzwania, które pojawiają się na jej drodze. Z natury ma otwarte serce i umysł, dlatego po próbach studiów prawniczych, ostatecznie skończyła jako doktor antropologii kulturowej i obecnie pracuje w Muzeum Etnograficznym w Zielonej Górze-Ochli. Od kilkunastu jest także aktywną instruktorką ZHP, zaangażowaną w działania na wszystkich szczeblach organizacji. Z urodzenia łodzianka, z wyboru zielonogórzanka. Uczestniczka 29 etapu Bike Jamboree. Poza rowerem, który towarzyszy jej od najmłodszych lat, uwielbia koty, kawę, literaturę i długie jesienne spacery, a w nielicznych wolnych chwilach także gotowanie.'
      },
      {
        name: 'Aleksandra Jędryka',
        photo: 'aleksandra-jedryka.webp',
        isLeader: false,
        bio: 'Wieloletnia harcerka i instruktorka Związku Harcerstwa Polskiego, aktualnie związana z Chorągwią Opolską Związku Harcerstwa Polskiego w obszarach kształcenie i promocja. Zawodowo zajmuje się pracą kreatywną, absolwentka krakowskiej Akademii Sztuk Pięknych, graficzka i architektka wnętrz, prowadząca własne biuro. Pochodzi z małej miejscowości, Buczek (pow. łaski, woj. łódzkie), i określa się jako lokalna patriotka. Zarówno z biznesie jak i w działaniach społecznych stara się podkreślać, że lokalność ma olbrzymią moc i potencjał, o które trzeba dbać. Pasjonatka historii (zwłaszcza lokalnej) oraz alternatywnych sposobów na jej poznawanie, stąd udział w sztafecie JednoŚladami Andersa! Uwielbia odkrywać nowe, być w ciągłym ruchu, skąd miłość do pływania. Niepoprawna miłośniczka kotów.'
      },
      {
        name: 'Piotr Żyta',
        photo: 'piotr-zyta.webp',
        isLeader: false,
        bio: 'Wiecznie poszukujący nowych wrażeń, daje ujście swoim potrzebom w coraz to nowych sposobach na podróże i samorozwój. Na co dzień pracuje w branży IT, lecz jego zainteresowania wykraczają poza tą sferę i krążą wokół ekonomii i rynków finansowych. Jest instruktorem Związku Harcerstwa Polskiego wywodzącym się z Hufca ZHP Jarosław na Podkarpaciu. Aktualnie, mieszkając w Krakowie amatorsko realizuje się w tańcu będąc tancerzem Teatru Tańca Terpsychora. Poznaje świat z różnych perspektyw, autostopem, pieszo, rowerem, kajakiem, oraz pod żaglami jachtu lub żaglowca. W życiu ceni sobie przede wszystkim możliwość poznawania i bycia z ludźmi. Do sztafety JednoŚladami Andersa skierowała go pasja do podróży oraz platforma do rozmów o historii, którą daje ten projekt.'
      },
      {
        name: 'Anna Wilk',
        photo: 'anna-wilk.webp',
        isLeader: false,
        bio: 'Na gdyńskich Kolosach dostrzegła plakat, promujący projekt "JednoŚladami Andersa". Zapragnęła dowiedzieć się więcej. Wypatrzyła kogoś w koszulce Bike Jamboree. Zadała kilka pytań. Wysłała maila ze zgłoszeniem. Udało się! Dołączyła do ekipy II etapu. Pomysł podążania szlakiem Armii Andersa (gest hołdu, promowanie i poznawanie wybitnych życiorysów, a także podróż w głąb siebie) zakiełkował w szkole średniej. Później przerodził się w marzenie. Teraz nadarza się znakomita okazja by je ziścić. Od dzieciństwa w jej życie wpleciona jest aktywność. Ciekawi ją świat a najbardziej ludzie i ich historie. Uwielbia wyzwania; zarówno zmagania z ograniczeniami umysłu jak ciała. Bardzo lubi rozmawiać. Zadaje wiele pytań (i sobie, i innym). Żyje minimalistycznie. Obcowanie ze sztuką dostarcza jej ogrom radości. Góry wraz z morzem są jej ukochanym połączeniem. Żaglowce są jej pasją. Studiuję. Pracuje też jako pilot. Jest instruktorem narciarstwa. Mnóstwo frajdy dostarcza jej jazda na monocyklu. Dwa koła towarzyszą jej już od dwóch dekad. Z wypiekami na twarzy wyczekuje kazachstańskich stepów, spotkań z tamtejszymi ludźmi i spełnienia marzenia!'
      }
    ]
  },
  {
    name: 'stage_iii',
    id: 'etap-iii',
    startPoint: stopsData[2],
    startDate: new Date(2022, 11, 31),
    finishPoint: stopsData[3],
    finishDate: new Date(2023, 0, 20),
    distance: '1400 km',
    leader: 'Arkadiusz Kościelski',
    previousStages: [1],
    nextStages: [3],
    points: [
      { lat: 40.8939, lon: 68.6789 },
      { lat: 40.6267, lon: 68.7239 },
      { lat: 40.5018, lon: 68.5390 },
      { lat: 40.5636, lon: 68.3743 },
      { lat: 39.2179, lon: 66.2372 },
      { lat: 39.0378, lon: 66.5849 },
      { lat: 39.1162, lon: 66.8654 },
      { lat: 38.6069, lon: 66.2607 },
      { lat: 39.7721, lon: 64.4491 },
      { lat: 41.3459, lon: 61.3811 },
      { lat: 41.3810, lon: 60.3375 }
    ],
    members: [
      {
        name: 'Arkadiusz Kościelski',
        photo: 'arek-koscielski.webp',
        isLeader: true,
        bio: 'Z zamiłowania i zawodu informatyk, miłośnik fotografowania, wędrówek małych i dużych oraz miasta Czarnków. Niezmiennie zakochany mąż Beaty, tata Halszki i Szymona. Czynny harcerz. Lubi czytać książki, przede wszystkim historyczne, kiedyś o przygodach Tomka Wilmowskiego. Uwielbia szwendać się z mapą i kompasem. Uczestnik XVII etapu Bike Jamboree z Homer do Fairbanks na Alasce. W projekcie JednoŚladami Andersa odpowiedzialny za archiwizację materiałów fotograficznych oraz filmowych.'
      },
      {
        name: 'Beata Kościelska',
        photo: 'beata-koscielska.webp',
        isLeader: false,
        bio: 'Z wykształcenia i zamiłowania biolog-mikrobiolog-epidemiolog, w zawodowej rzeczywistości kluczy pomiędzy zawiłościami przepisów prawnych i wytycznych urzędowych. Żona Arka, mama Halszki i Szymona, z którymi najbardziej na świecie lubi spędzać czas. Zaangażowana w działalność Hufca ZHP Trzcianka jako członek Kręgu Instruktorskiego “Ogień” i w różne społeczne aktywności. Uczestniczka XVII etapu Bike Jamboree z Homer do Fairbanks na Alasce. W projekcie JednoŚladami Andersa odpowiedzialna za pracę wirtualnego biura.'
      },
      {
        name: 'Małgorzata Chwalisz',
        photo: 'malgorzata-chwalisz.webp',
        isLeader: false,
        bio: 'Szczęśliwa mama dwóch córek oraz babcia ukochanej Julci, która wierzy, że nigdy nie jest zbyt późno na realizację marzeń. Kocha fotografię i obcowanie z naturą z dala od miast i zgiełku - czym bardziej dziko, tym lepiej. Do ZHP wstąpiła w pierwszej klasie szkoły podstawowej oddając się harcerstwu na 100%. Od kilku lat tworzy festiwal muzyczny Łagodne Granie w Łomnicy (Piła leży obok Łomnicy), dzięki któremu zaspakaja wewnętrzną potrzebę działania i organizowania. W etapie odpowiedzialna za promocję.'
      },
      {
        name: 'Krzysztof Helwich',
        photo: 'krzysztof-helwich.webp',
        isLeader: false,
        bio: 'Z wykształcenia geograf i etnolog. Ciekawość świata i kultur ma wpisaną w krew. Mąż i ojciec dwójki dzieci. Lokalny działacz na rzecz społeczności swojej okolicy. W małym Lubaszu położonym w północnej części Wielkopolski zorganizował dla dzieci szereg zajęć i warsztatów na pograniczu ekologii, bushcraftu i twórczego majsterkowania. Góry, skały, kajaki, ale i kawa zaparzona na palniku pod namiotem nadaje sens jego życiu. Wyprawy lub mikrowyprawy - byle w ruchu. W sztafecie marzył mu się gorący Iran, ale nie zawahał się przy zaproszeniu na zimowy odcinek w Uzbekistanie. Uważa, że wynalazca roweru powinien zostać odznaczony nagrodą pokroju Nobla.'
      },
      {
        name: 'Halszka Kościelska',
        photo: 'halszka-koscielska.webp',
        isLeader: false,
        bio: 'Studentka kognitywistyki na Uniwersytecie im. Adama Mickiewicza w Poznaniu i czynna harcerka działająca w Hufcu ZHP Trzcianka w Czarnkowie. Uwielbia rysować, od form tradycyjnych po digital. Od dziecka śpiewa, była członkinią zespołu Na Piątym Progu z nurtu piosenki turystycznej i poezji śpiewanej. Obecnie poszukuje nowych wyzwań.'
      },
      {
        name: 'Szymon Kościelski',
        photo: 'szymon-koscielski.webp',
        isLeader: false,
        bio: 'Nieśmiały, ale gotów eksplorować świat, zainteresowany krajobrazami różnych krajów. Uczeń Zespołu Szkół im. Józefa Nojego w Czarnkowie, ale to nie jedyne miejsce, w którym się udziela. Zainteresowany grafiką komputerową, którą zajmuje się od ponad 2 lat i nie zamierza zatrzymać się w tym temacie. Lubi kontakty z innymi ludźmi, lecz potrzebuje trochę odwagi. Kocha swoją rodzinę i z chęcią pojedzie z nimi w sztafecie.'
      }
    ]
  },
  {
    name: 'stage_iv',
    id: 'etap-iv',
    startPoint: stopsData[3],
    startDate: new Date(2023, 0, 21),
    finishPoint: stopsData[4],
    finishDate: new Date(2023, 1, 10),
    distance: '1300 km',
    leader: 'Dorota Młynarczyk',
    previousStages: [2],
    nextStages: [4],
    members: [
      {
        name: 'Dorota Młynarczyk',
        photo: 'dorota-mlynarczyk.webp',
        isLeader: true,
        bio: 'Na co dzień szuka matematycznego opisu świata, a przynajmniej jakiegoś jego skrawka. W podróżach i w życiu uważa, że najważniejsza jest sama droga, niekoniecznie osiągnięcie celu. Dlatego najbardziej lubi długie i niespieszne włóczęgi, najlepiej z plecakiem i namiotem. Podróże rowerem zaczęła od udziału w 15. etapie sztafety Bike Jamboree, jadąc z Jakucka do Magadanu. Autostopem przejechała ponad 40,000 kilometrów na trzech kontynentach. Do życia potrzebuje dużo słońca.'
      },
      {
        name: 'Daniel Brożek',
        photo: 'daniel-brozek.webp',
        isLeader: false,
        bio: 'Uwielbia obcować z naturą, podróżować rowerem, pływać łodzią pychówką, spać w namiocie, oglądać gwiazdy. Fan motoryzacji, znawca klasyków, konstruktor kampera. Zawsze znajdzie patent, żeby naprawić coś, co się niespodziewanie zepsuło, a w sakwach zmieści jakiś instrument muzyczny. Na co dzień szczęśliwy mąż i przedsiębiorca.'
      },
      {
        name: 'Zbigniew Sas',
        photo: 'zbigniew-sas.webp',
        isLeader: false,
        bio: 'Zawodowo zajmuje się pilotowaniem wycieczek rowerowych. Zaangażowany w duże projekty podróżnicze. Współorganizator Afryki Nowaka, Rowerowego Jamboree 2015, Bike Jamboree 2017-2019 - wypraw, które każdemu uczestnikowi przyniosły przygodę, nowe przyjaźnie i zaskakujące doświadczenia. Zafascynowany Afryką i państwami poradzieckimi. Miłośnik mikroprzygód - weekendowych wypadów w najbliższą okolicę. Laureat prestiżowych nagród podróżniczych m.in. wyróżnienia na Kolosach za rowerową wyprawę na Madagaskar, nagrody Travellera w kategorii "Podróż Roku" za pionierską wyprawę wzdłuż rzeki Antanambalana również na Madagaskarze. Z zawodu rybak morski i przedsiębiorca. W projekcie JednoŚladami Andersa odpowiedzialny za koordynację całego przedsięwzięcia oraz trasę, sprzęt i logistykę. '
      },
      {
        name: 'Marcin Błeński',
        photo: 'marcin-blenski.webp',
        isLeader: false,
        bio: 'Ratownik i szkoleniowiec. Od ponad 20 lat związany zawodowo z ratownictwem. Pomysłodawca projektu Bezpieczny Kazbek i twórca Medyk Rescue Team. W projekcie Jednośladami Andersa, tak samo jak w poprzednich projektach Bike Jamboree, odpowiada za bezpieczeństwo i szkolenie medyczne.'
      },
      {
        name: 'Anna Śledzińska',
        photo: 'anna-sledzinska.webp',
        isLeader: false,
        bio: 'Instruktorka ZHP, ostatnio na funkcji szefowej hufcowego klubu żeglarskiego w Elblągu. W zarządzie Fundacji Światowe Jamboree od 2016 roku, współtworzy już trzecią sztafetę rowerową. Nie gardzi żadnym środkiem lokomocji, ale najczęściej zasiada na rowerowym siodełku albo za sterem jachtu. W projekcie Jednośladami Andersa odpowiedzialna za współkoordynację całego przedsięwzięcia oraz organizację pracy, pozyskiwanie partnerów i zarządzanie kasą.'
      },
      {
        name: 'Rafał Śledziński',
        photo: 'rafal-sledzinski.webp',
        isLeader: false,
        bio: 'Na co dzień ratownik medyczny, w chwili wolnej od pracy chwyta się wszystkiego, na co nie ma czasu. Miłośnik przygód oraz wyzwań. W ramach aktywności chętnie pójdzie pod górę i z góry na nartach, po wodzie na żaglach, a po drodze rowerem. Pochodzi z Elbląga.'
      }
    ]
  },
  {
    name: 'stage_v',
    id: 'etap-v',
    startPoint: stopsData[4],
    startDate: new Date(2023, 1, 11),
    finishPoint: stopsData[5],
    finishDate: new Date(2023, 2, 3),
    distance: '1000 km',
    leader: 'Adam Dąbrowski',
    previousStages: [3],
    nextStages: [5],
    points: [
      { lat: 34.6504, lon: 50.8417 },
      { lat: 32.6627, lon: 51.6955 },
      { lat: 33.4994, lon: 49.053 },
      { lat: 33.8973, lon: 48.7516 },
    ],
    members: [
      {
        name: '',
        photo: '',
        isLeader: false,
        bio: ''
      },
      {
        name: '',
        photo: '',
        isLeader: false,
        bio: ''
      },
      {
        name: '',
        photo: '',
        isLeader: false,
        bio: ''
      },
      {
        name: '',
        photo: '',
        isLeader: false,
        bio: ''
      },
      {
        name: '',
        photo: '',
        isLeader: false,
        bio: ''
      },
      {
        name: '',
        photo: '',
        isLeader: false,
        bio: ''
      }
    ]
  },
  {
    name: 'stage_vi',
    id: 'etap-vi',
    startPoint: stopsData[5],
    startDate: new Date(2023, 2, 4),
    finishPoint: stopsData[6],
    finishDate: new Date(2023, 2, 24),
    distance: '1400 km',
    leader: 'Marcin Dałkiewicz',
    previousStages: [4],
    nextStages: [6],
  },
  {
    name: 'stage_vii',
    id: 'etap-vii',
    startPoint: stopsData[6],
    startDate: new Date(2023, 2, 25),
    finishPoint: stopsData[7],
    finishDate: new Date(2023, 3, 21),
    distance: '1800 km',
    leader: 'Dariusz Zajączkowski',
    previousStages: [5],
    nextStages: [7],
    points: [
      { lat: 32.7045, lon: 35.2898 },
      { lat: 32.8184, lon: 34.9885 },
      { lat: 31.9257, lon: 34.868 },
      { lat: 31.8953, lon: 34.8105 },
      { lat: 31.7884, lon: 35.2068 },
      { lat: 31.7072, lon: 35.2029 },
      { lat: 31.6076, lon: 34.896 },
      { lat: 31.2986, lon: 34.9349 },
      { lat: 31.2588, lon: 35.2133 },
      { lat: 31.3156, lon: 35.3537 },
      { lat: 31.2588, lon: 35.2133 },
      { lat: 30.8516, lon: 34.7826 },
      { lat: 29.5581, lon: 34.9482 },
      { lat: 29.3142, lon: 34.7408 },
      { lat: 29.035, lon: 34.6619 },
      { lat: 28.5676, lon: 33.9536 },
      { lat: 28.7144, lon: 33.3305 },
      { lat: 29.9737, lon: 32.5263 },
      { lat: 30.6318, lon: 31.9393 },
    ],
  },
  {
    name: 'stage_vii_sea',
    id: 'etap-vii-sea',
    startPoint: stopsData[7],
    startDate: new Date(2023, 3, 22),
    finishPoint: stopsData[8],
    finishDate: new Date(2023, 4, 7),
    distance: '970 Mm',
    leader: 'Anna Śledzińska',
    previousStages: [6],
    nextStages: [8],
  },
  {
    name: 'stage_viii',
    id: 'etap-viii',
    startPoint: stopsData[8],
    startDate: new Date(2023, 4, 8),
    finishPoint: stopsData[9],
    finishDate: new Date(2023, 4, 19),
    distance: '400 km',
    points: [
      { lat: 40.637, lon: 17.026 },
      { lat: 40.956, lon: 16.911 },
      { lat: 40.706, lon: 16.082 },
      { lat: 40.674, lon: 14.751 },
      { lat: 40.746, lon: 14.473 },
      { lat: 40.853, lon: 14.160 },
      { lat: 41.087, lon: 14.314 },
      { lat: 41.248, lon: 13.705 },
      { lat: 41.321, lon: 13.652 },
      { lat: 41.484, lon: 13.806 },
    ],
    leader: 'Dorota Limontas',
    previousStages: [7],
    nextStages: [9],
  },
  {
    name: 'stage_ix',
    id: 'etap-ix',
    startPoint: stopsData[9],
    startDate: new Date(2023, 4, 20),
    finishPoint: stopsData[10],
    finishDate: new Date(2023, 5, 2),
    distance: '800 km',
    leader: 'Anna Popowska',
    previousStages: [8],
    nextStages: [10, 12],
  },
  {
    name: 'stage_x_west',
    id: 'etap-x-west',
    startPoint: stopsData[10],
    startDate: new Date(2023, 5, 3),
    finishPoint: stopsData[11],
    finishDate: new Date(2023, 5, 16),
    distance: '900 km',
    leader: 'Wojciech Wrześniak',
    previousStages: [9],
    nextStages: [11],
  },
  {
    name: 'stage_xi_west',
    id: 'etap-xi-west',
    startPoint: stopsData[11],
    startDate: new Date(2023, 5, 17),
    finishPoint: stopsData[12],
    finishDate: new Date(2023, 6, 8),
    distance: '1200 km',
    points: [
      { lat: 49.9202, lon: 1.084 },
      { lat: 50.868, lon: 0.6099 },
      { lat: 51.4895, lon: -0.3282 },
      { lat: 53.7976, lon: -1.5436 },
    ],
    leader: 'Piotr Wojtaszek',
    previousStages: [10],
  },
  {
    name: 'stage_x_east',
    id: 'etap-x-east',
    startPoint: stopsData[10],
    startDate: new Date(2023, 5, 3),
    finishPoint: stopsData[13],
    finishDate: new Date(2023, 5, 15),
    distance: '800 km',
    leader: 'Piotr Sudoł',
    previousStages: [9],
    nextStages: [13],
  },
  {
    name: 'stage_xi_east',
    id: 'etap-xi-east',
    startPoint: stopsData[13],
    startDate: new Date(2023, 5, 16),
    finishPoint: stopsData[14],
    finishDate: new Date(2023, 5, 26),
    distance: '800 km',
    previousStages: [12],
    nextStages: [14],
    leader: 'Artur Kulesza',
  },
  {
    name: 'stage_xii_east',
    id: 'etap-xii-east',
    startPoint: stopsData[14],
    startDate: new Date(2023, 5, 27),
    finishPoint: stopsData[15],
    finishDate: new Date(2023, 6, 8),
    distance: '650 km',
    previousStages: [13],
    points: [
      { lat: 50.8097, lon: 19.1222 },
      { lat: 52.2652894, lon: 19.1650943 },
      { lat: 53.0145, lon: 18.6014 },
    ],
    leader: 'Łukasz Tomala',
  },
]

export default {}
