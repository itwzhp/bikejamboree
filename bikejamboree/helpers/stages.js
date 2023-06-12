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
    lat: 41.3810,
    lon: 60.3375,
    city: 'khiva',
    country: 'uzbekistan',
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
    lat: 31.9517,
    lon: 35.924,
    city: 'amman',
    country: 'jordan',
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
    lat: 50.2986,
    lon: 18.9545,
    city: 'chorzow',
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
  {
    lat: 37.47193,
    lon: 57.30352,
    city: 'bojnord',
    country: 'iran',
    type: 'regular',
  }
]

// export const extraPoint = {
//   lat: 41.3125,
//   lon: 69.2787,
//   city: 'termez',
//   country: 'uzbekistan',
//   type: 'regular',
// }

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
        photo: 'lilla-bilinska.webp',
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
        photo: 'beata-szczepanska.webp',
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
        name: 'Piotr Sztybór',
        photo: 'piotr-sztybor-2.webp',
        isLeader: false,
        bio: 'Instruktor harcerski w ZHR w Płocku. Przyroda, ognisko, służba dla drugiego człowieka, Bóg to wartości, bez których trudno byłoby mu żyć. Prywatnie prowadzi własną firmę, dzięki której po zakończeniu zlecenia zwiedza miejsca, do których dotarł. Uwielbia wyprawy w „niecywilizowane” miejsca. Jak już jechać na daleką wyprawę to nie na tydzień, ale minimum na trzy tygodnie. Dlatego do Kazachstanu jedzie na dwa etapy i łącznie ponad dwa miesiące Jego pasją jest też fotografia, z każdego miejsca w świecie przywozi setki zdjęć. Morze-góry!? ZDECYDOWNIE góry! ale nie Krupówki tylko intensywny wypoczynek. Lubi zimę – przy kominku rowerowo-zimowa wyprawa będzie jego pierwszą. Chce się sprawdzić, chce doświadczyć czegoś nowego. Z drugiej strony chciałby kiedyś pojechać na Antarktydę i tam spędzić z trzy miesiące choćby, jako pomoc kuchenna w stacji polarnej. Uczestniczył w poprzednich dwóch projektach – przemierzał rowerem Chiny i Rosję.'
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
      { lat: 41.3459, lon: 61.3811 }
      // { lat: 41.3810, lon: 60.3375 }
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
    startPoint: stopsData[16],
    startDate: new Date(2023, 0, 21),
    finishPoint: stopsData[4],
    finishDate: new Date(2023, 1, 10),
    distance: '900 km',
    leader: 'Dorota Młynarczyk',
    previousStages: [2],
    nextStages: [4],
    points: [
      { lat: 36.83172, lon: 54.37704 },
    ],
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
      },
      {
        name: 'Leszek Fidelus',
        photo: 'leszek-fidelus.webp',
        isLeader: false,
        bio: 'Urodzony w Beskidzie Makowskim, miłośnik i propagator tych terenów. Uczestnik dwóch poprzednich edycji Bike Jamboree i sztafety rowerowej przez Afrykę, śladami Wielkiego Podróżnika Kazimierza Nowaka. Triathlonista, ultramaratończyk, taternik. Miłośnik i obrońca zabytkowych wind, utworzył dla nich muzeum w Krakowie. Współzałożyciel Stowarzyszenia Chrzanowskich Cyklistów i drużyny rowerowej w Chrzanowie. Mocno zaangażowany ekolog. Inicjator akcji Stop Wycince Puszczy Dulowskiej i biegu 12-godzinnego w jej obronie. Winiarz amator, ciągle doskonalący się w niezwykle pasjonującym procesie produkcji wina. Pracuje na etacie i prowadzi swój biznes. Życie w ciągłym biegu - stosuje dosłownie i w przenośni.'
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
        name: 'Adam Dąbrowski',
        photo: 'adam-dabrowski.webp',
        isLeader: true,
        bio: 'Po raz drugi zakłada liderską koszulkę Bike Jamboree, poprzednią spocił na Syberii. Domowy zwierz, który musi czasem wyruszyć w drogę. Wymagającą, bez wygód, daleką. Ceni w podróży prostotę, naturę i cel. Szczególnie, kiedy celem jest przekazanie pałeczki sztafetowej.'
      },
      {
        name: 'Grzesiek Trzcionkowski',
        photo: 'grzegorz-trzcionkowski.webp',
        isLeader: false,
        bio: 'Zafascynowany Iranem, po pierwszej podróży systematycznie odwiedzający ten kraj - pełen kontrastów i sprzeczności. W każdej podróży odkrywa inne oblicze Persji. Szczególnie zainteresowany historią polskich tułaczy w Iranie, stara się w każdej podróży odszukać ich ślady w różnych miastach. Życie planuje od wyjazdu do wyjazdu, za kierunek obiera Wschód i Bałkany, najchętniej nieprzetartymi szlakami. Miłośnik kotów, wędrówek górskich i jazdy autostopem. Amator fotografii, marzyciel ciągle szukający przygód.'
      },
      {
        name: 'Emil Kaczor',
        photo: 'emil-kaczor.webp',
        isLeader: false,
        bio: 'Pochodzący z Suchedniowa entuzjasta sportów rowerowych i amator spotkań towarzyskich uwielbiający rozmowy, ludzi i historię. Na co dzień mieszka i pracuje w Krakowie. Od kilkunastu lat zajmuje się profesjonalną sprzedażą artykułów wykończenia wnętrz. Szukając nowych wrażeń i doświadczeń przyłączył się do lidera V etapu rajdu mając nadzieję na przeżycie przygody, poznanie fascynującej historii, zobaczenie i zrozumienie kultury Iranu. Zawsze otwarty i pomocny. Uwielbia gotować i jeść. Ciekawy nowych smaków i historii ma nadzieję zakosztować ich na Bliskim Wschodzie.'
      },
      {
        name: 'Seweryn Klęk',
        photo: 'seweryn-klek.webp',
        isLeader: false,
        bio: 'Przykładny rowerzysta. W pracy myśli ciepło o rowerze, a po pracy... to wiadomo - jeździ i jeździ. No bo po prostu lubi. Jego superbohaterem jest Pan Samochodzik (choć czasem w myślach lubi nazywać go Pan Rowerek), muzealnik, społecznik i łowca przygód. Jako zuch należał do zastępu Bajkowi Przyjaciele, czy mógł więc pozostać obojętny na przygodę Bike Jamboree? No nie mógł!'
      },
      {
        name: 'Julia Szefler',
        photo: 'julia-szefler.webp',
        isLeader: false,
        bio: 'Rodowita poznanianka, ale tak naprawdę typowy z niej włóczykij - zdarła niejedne buty podczas harcerskich wędrówek, spała pod gołym niebem na śródziemnomorskich plażach, a każdy wolny weekend spędza w polskich górach. Skończyła Politechnikę Poznańską na Wydziale Architektury, łącząc zamiłowania do technicznego aspektu projektowania z wrażliwością na piękno sztuki. Choć uprawiała prawie każdy możliwy sport, to rower od zawsze ma specjalne miejsce w jej sercu, zwłaszcza odkąd ostatniego lata dotarła na nim aż do Barcelony.'
      },
      {
        name: 'Adam Panczocha',
        photo: 'adam-panczocha.webp',
        isLeader: false,
        bio: 'W harcerstwie od prawie 20 lat. Obecnie członek Komendy Chorągwi Opolskiej i CSI ZHP, w przeszłości drużynowy drużyny wielopoziomowej o silnych tradycjach związanych z 2 Korpusem. Orędownik współpracy między ZHP a Gruzińską Organizacją Skautową. Uczestnik i organizator kilku zagranicznych projektów skautowych. Z wykształcenia logistyk, zawodowo związany z branżą IT. Prywatnie podróżnik-amator, wspinacz i żeglarz. Szczególnym zainteresowaniem darzy Bliski Wschód i Azję Mniejszą.'
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
    points: [
      { lat: 35.28662, lon: 46.95615 },
      { lat: 35.46040, lon: 44.28434 },
      { lat: 33.31165, lon: 44.27350 },
      { lat: 33.03606, lon: 40.27300 }
    ],
    members: [
      {
        name: 'Marcin Dałkiewicz',
        photo: 'marcin-dalkiewicz.webp',
        isLeader: true,
        bio: 'Pracuje na co dzień z metalami szlachetnymi. Zapalony miłośnik podróżowania różnymi środkami transportu. Najbardziej jednak lubi podróżować stopem, ponieważ może wtedy spotkać ciekawych ludzi. Jednym z jego zainteresowań i celów podróży są kraje byłego ZSRR oraz opuszczone miasta i postindustrialne krajobrazy takie jak Czarnobyl. W wolnej chwili wskakuje na rower i przemierza nim wiele kilometrów. W zimie i w lecie odwiedza góry, przez które maszeruje lub zjeżdża na desce. Zdecydowanie woli upał od zimna. Brał udział w VI etapie projektu Rowerowe Jamboree z Polski do Japonii oraz I, IV oraz XV etapie w projekcie sztafety rowerowej dookoła świata Bike Jambore w którym był również odpowiedzialny za prowadzenie magazynu i sprzęt. W projekcie JednoŚladami Andersa lider etapu VI oraz odpowiedzialny za prowadzenie magazynu i sprzęt.'
      },
      {
        name: 'Magdalena Suchan',
        photo: 'magdalena-suchan.webp',
        isLeader: false,
        bio: 'To uosobienie ADHD. Jest instruktorką ZHP od ponad 20 lat. Harcersko jest członkinią Rady Chorągwi Łódzkiej oraz przewodniczącą Hufcowej Komisji Rewizyjnej i szefową chorągwianego programu #lodzkadbaozdrowie. Wyznawca praktykujący EKO i FIT. Uwielbia gotować, jeść zdrowo i jest turbo aktywna sportowo. Tańczy, żegluje po morzu, nurkuje, wspina się, wchodzi na góry wysokie i bardzo wysokie, trenuje (m.in. kalistenikę) i trenuje innych, stara się czasem jogować i rollować, biega, w tym przeszkodowo. Absolutnie kocha podróże! W wolnych chwilach - działacz i starter pozaharcerskich inicjatyw społecznych lokalnych i ogólnopolskich. '
      },
      {
        name: 'Dorota Limontas',
        photo: 'dorota-limontas.webp',
        isLeader: false,
        bio: ' Z powołania nauczycielka przedszkola, gdzie realizuje wszystkie swoje szalone pomysły i często przy nich bawi się lepiej niż dzieci. Od małego harcerka, gdzie przeszła wszystkie funkcje od zastępowej aż do komendantki hufca, a ostatnio zastępczyni komendanta chorągwi. Harcerstwo to wyzwania, które przekłada na wszystkie dziedziny swojego życia. Nie umie siedzieć w miejscu, uwielbia podróże te dalekie, ale bardziej docenia te bliskie, gdzie poznaje swój ukochany region - Warmię. W wolnych chwilach biega, ćwicząc przed maratonem, jeździ na rowerze szukając ciągle to nowych ciekawych miejsc, morsuje hartując swoje ciało. Najlepiej czuje się w bliskim kontakcie z naturą, jest kolekcjonerką zachodów słońca, dużo spaceruje i wędruje po lesie. Nie wyobraża sobie wakacji bez obozu, wieczoru bez ogniska z gitarą, weekendu bez wycieczki pod namiot czy wypadu na żagle. Umysł wycisza podczas medytacji i jogi. Humor poprawia sobie namiętnie słuchając disco polo :) Angażuje się w wiele działań społecznych- jest członkinią Rady Organizacji Pozarządowych Miasta Olsztyna, charytatywnych- od wielu lat wspiera WOŚP, Szlachetną Paczkę, oddaję krew. Kiedy tylko może ucieka na południe w góry, którym oddaje się bez pamięci. Była uczestniczką etapu 34 Bike Jamboree dookoła świata pokonując trasę Barcelona- Genewa. W projekcie “jednoŚLADAMI Andersa” odpowiada za działania programowe.'
      },
      {
        name: 'Bartosz Małłek',
        photo: 'bartosz-mallek.webp',
        isLeader: false,
        bio: 'Podharcmistrz, podróżnik, pilot wycieczek, genealog, amator historii i archeologii. Komendant Kręgu Instruktorów i Starszyny „Azymut”, hufiec Opole, chorągiew opolska. Kocha rower, bieganie i góry. Zawsze znajdzie gdzieś gitarę i coś tam zaśpiewa. Posiada umiejętność zaśnięcia w każdych warunkach. Zmarźluch, dlatego morsuje ;) Kocha jeść! Organizator opolskich spotkań z gitarą oraz podróżniczych.'
      },
      {
        name: 'Katarzyna Wilk',
        photo: 'katarzyna-wilk.webp',
        isLeader: false,
        bio: 'Trenerka i metodyczka zdalnego nauczania, ratowniczka czytelnictwa, turystka rowerowa. Projektuje i prowadzi e-szkolenia dla dorosłych, przede wszystkim w zakresie kompetencji cyfrowych i społecznościowego uczenia się. Oswaja nauczycieli z wolnymi licencjami i otwartymi zasobami edukacyjnymi. Entuzjastka design thinking i zwinnego zarządzania projektami w środowisku edukacyjnym. Członkini zespołu koordynującego program Ratownicy Czytelnictwa oraz wolontariuszka w grupie Polska Czytająca. Wierna sympatyczka grupy Obszar Warowny „Śląsk” na Rowerze. Ulubione trasy rowerowe: długie, dużo pod górkę, najlepiej w nieznane i najchętniej nocą przez las.'
      },
      {
        name: 'Robert Janus',
        photo: 'robert-janus.webp',
        isLeader: false,
        bio: 'Zawodowo pomaga budować systemy informacji przestrzennej. Introwertyk chętnie spoglądający w niebo. To bliskie – atmosferyczne i to odległe – astronomiczne. Szukający tam piękna, które można zobaczyć i zachwycający się wiedzą, którą ludzkość ciągle odkrywa. Miłośnik wędrowania przez karty książek, by poznawać losy ludzi prawdziwych, zwiedzać światy wymyślone, przekonywać się wciąż, jak wiele świat ma do zaoferowania. Czasami zastanowić się również, dlaczego..? Łączący historię i rower dzięki przyjaciołom z Obszaru Warownego „Śląsk” na Rowerze i wspólnym rowerowym przejazdom z historią w tle. Do Ekipy JednoŚladami Andersa trafił z miłości, w pogoni za marzeniami inspirowanymi lekturą książek podróżniczych o rowerowych wyprawach.'
      }
    ]
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
      { lat: 31.5008, lon: 35.9160 },
      { lat: 30.8334, lon: 35.6004 },
      { lat: 30.3241, lon: 35.4488 },
      { lat: 30.0944, lon: 35.5218 },
      { lat: 29.5084, lon: 35.3362 },
      { lat: 29.5587, lon: 34.9506 },
      { lat: 30.0492, lon: 35.0262 },
      { lat: 30.6111, lon: 34.8019 },
      { lat: 31.1529, lon: 35.3651 },
      { lat: 31.4525, lon: 35.3849 },
      { lat: 31.3203, lon: 34.8708 },
      { lat: 31.7780, lon: 35.2259 },
      { lat: 32.0853, lon: 34.7832 },
      { lat: 32.8185, lon: 34.9983 },
      { lat: 32.7069, lon: 35.3052 },
      { lat: 32.4184, lon: 35.6700 }
    ],
    members: [
      {
        name: 'Dariusz Zajączkowski',
        photo: 'dariusz-zajaczkowski.webp',
        isLeader: false,
        bio: 'Na co dzień kierownik serwisu usług w firmie zajmującej się produkcją przyrządów pomiarowych. Instruktor harcerski od ponad 35 lat, obecnie w stopniu harcmistrza. Pełnił różne funkcje - m.in. drużynowego, komendanta hufca Zielona Góra, skarbnika Chorągwi Ziemi Lubuskiej, członka Rady Naczelnej ZHP. Wieloletni kształceniowiec liderów zespołów. Oficer rezerwy Wojska Polskiego. W wolnych chwilach chodzi po górach, jeździ rowerem (głównie MTB, ale od kilku lat także z sakwami). Instruktor narciarstwa i indoor cycling. Pasjonat podglądania przyrody i biwakowania pod gołym niebem. Uczestnik etapu 27B “Bike Jamboree” z Fargo (USA) do Thunder Bay (Kanada). Członek Rady Fundacji “Światowe Jamboree”. W projekcie “JednoŚladami Andersa” odpowiedzialny za koordynację współpracy pomiędzy organizacjami harcerskimi oraz lider etapu 7 z Ammanu (Jordania) do Port Said (Egipt).'
      },
      {
        name: 'Michał Murgrabia',
        photo: 'michal-murgrabia.webp',
        isLeader: false,
        bio: 'Psycholog, założyciel i prezes platformy ePsycholodzy.pl - miejsca, które łączy psychologów i psychoterapeutów z osobami, które czują, że w ich życiu dzieje się coś trudnego, czego nie mogą zrozumieć lub z czym nie są w stanie sobie same poradzić. Instruktor Związku Harcerstwa Polskiego, gdzie obecnie głównie zajmuje się kształceniem obecnych i przyszłych instruktorów. W wolnym czasie lubi podróżować, poznawać nowych ludzi i miejsca, odkrywać nowe smaki, które inspirują go do własnego kucharzenia :)'
      },
      {
        name: 'Monika Pawelec',
        photo: 'monika-pawelec.webp',
        isLeader: false,
        bio: 'Okolice Wielunia/Warszawa. Na co dzień spełnia się jako chemik kontrolujący jakość leków, jednak poczucie wolności daje jej poznawanie świata – szczególnie z perspektywy siodełka rowerowego. Jest uzależniona - nie wyobraża sobie dnia bez muzyki, tygodnia bez dobrej książki, miesiąca bez chodzenia po górach oraz życia bez roweru, tańca i podróży. Poszukiwaczka dobrego smaku, również we własnej kuchni. Sopran warszawskiej grupy wokalnej. Nigdy sie nie nudzi. Kocha zwierzęta. Uczestniczka 26 etapu Bike Jamboree. Amatorka czerpania z życia pełnymi garściami oraz ambitnych, ciekawych i wartościowych projektów podróżniczych co przywiodło ją na szlak JednoŚladów Andersa.'
      },
      {
        name: 'Tomasz Szudrowicz',
        photo: 'tomasz-szudrowicz.webp',
        isLeader: false,
        bio: 'Podharcmistrz z Hufca Rzeszów, nurek, spadochroniarz, rekonstruktor historyczny, przewodnik SKPB Rzeszów, skiturowiec, wspinacz. Zawodowo: instruktor narciarstwa, pilot wycieczek, kierownik górskich obozów wędrownych. Lubi być wszędzie - pracował na Alasce, w Holandii, Francji; podróżował Transsibem. Remontuje przedwojenną chałupę i przerabia 30-letnią terenówkę na kampera. Chodzi po wszelakich górach, jeździ z sakwami rowerem. Uwielbia "Mistrza i Małgorzatę". Stanowczo przedkłada wieczór z gitarą w schronisku ponad imprezę masową. Podróżuje by żyć, żyje by podróżować.'
      },
      {
        name: 'Jola Kreczmańska',
        photo: 'jola-kreczmanska.webp',
        isLeader: false,
        bio: 'Harcmistrzyni ZHP, entuzjastka harcerstwa jako ruchu wychowawczego niezależnie od organizacji, z pasji podróżniczka choć częściej bez roweru, przedsiębiorca i dyrektor zarządzająca w wielooddziałowej firmie handlowej. Uczestniczka i liderka etapu 27B  Bike Jamboree (USA-Kanada).  Wielbicielka własnej rodziny, mieszkania w lesie i spotkań z przyjaciółmi.  Tym razem w zespole projektu niemal w ostatniej chwili.'
      },
      {
        name: 'Sylwia Zuzia Skoczylas-Leżoń',
        photo: 'sylwia-zuzia-skoczylas-lezon.webp',
        isLeader: false,
        bio: 'Podharcmistrzyni ZHP, instruktorka podwarszawskiego hufca Piastów. Biolożka molekularna pracująca na co dzień jako manager w branży klinicznej. W pracy ceni sobie nieprzewidywalność i międzynarodowe środowisko. Po studiach zapałała pasją do kwiatów. W swoim mieszkaniu ma ponad 50 roślin. Uwielbia być w ruchu, zarówno daleko jak i blisko od domu. Ulubiony rodzaj podróży to taki, gdzie nie wie w jakim miejscu będzie spała następnego dnia. Miłośniczka Skandynawii. Uwielbia robić rzeczy samemu - swetry, bluzki, skarpetki, sukienki. Szyje, szydełkuje, robi na drutach, gotuje i piecze. Wszędzie się spieszy i zawsze jest wszędzie za wcześnie. Chodzi po górach, lubi się wspinać, jeździć na rowerze. Kiedy potrzebuje spokoju zaczytuje się reportażach. Najbardziej ceni więzi rodzinne, przyjaciół i dobrą kawę.'
      },
      {
        name: 'Kamil Kopyść',
        photo: 'kamil-kopysc.webp',
        isLeader: false,
        bio: 'Z wykształcenia inżynier budownictwa, dotychczas uczestniczył przede wszystkim w realizacji różnych projektów budowlanych, lecz obecnie chce skupić się zdecydowanie bardziej na realizacji projektów podróżniczych.  Lubi aktywnie spędzać czas w szczególności podczas górskich trekkingów, przejażdżek rowerowych i biegania w terenie. Udziałem w projekcie "JednoŚladami Andersa" chce rozpocząć dłuższą przygodę rowerowych podróży z sakwami po Świecie. Zamiłowanie do podróżowania na dobre odkrył w sobie podczas wyjazdów z plecakiem do Ameryki Południowej i Azji Południowo-Wschodniej. W podróżach lubi korzystać z różnych środków lokomocji, lecz rower jest jednym z jego ulubionych, który pozwala na bliski kontakt z otoczeniem, pozwala dostrzegać i odczuwać to co nie jest osiągalne zza szyby… W okolicach, które odwiedza zdecydowanie częściej wybiera mniej utarte szlaki chcąc lepiej poznać prawdziwe życie zwyczajnych ludzi, zasmakować lokalnej kuchni oraz przebywać w bliskości przyrody. Jego marzeniem jest podróż przez wszystkie kontynenty, a w życiu towarzyszy mu motto… "Nigdy, przenigdy się nie poddawaj w realizacji marzeń"'
      }
    ]
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
    startDate: new Date(2023, 4, 6),
    finishPoint: stopsData[9],
    finishDate: new Date(2023, 4, 18),
    distance: '500 km',
    points: [
      { lat: 40.6341, lon: 17.0364 },
      { lat: 40.9568, lon: 16.9205 },
      { lat: 40.6655, lon: 16.6100 },
      { lat: 40.7475, lon: 15.8801 },
      { lat: 40.6573, lon: 15.4033 },
      { lat: 40.6791, lon: 14.7601 },
      { lat: 40.7518, lon: 14.4906 },
      { lat: 40.8358, lon: 14.2484 },
      { lat: 41.0823, lon: 14.3348 },
      { lat: 41.2513, lon: 14.0683 },
      { lat: 41.4926, lon: 13.8302 },
      { lat: 41.4983, lon: 13.7529 }
    ],
    leader: 'Dorota Limontas',
    previousStages: [7],
    nextStages: [9],
    members: [
      {
        name: 'Dorota Limontas',
        photo: 'dorota-limontas.webp',
        isLeader: true,
        bio: ' Z powołania nauczycielka przedszkola, gdzie realizuje wszystkie swoje szalone pomysły i często przy nich bawi się lepiej niż dzieci. Od małego harcerka, gdzie przeszła wszystkie funkcje od zastępowej aż do komendantki hufca, a ostatnio zastępczyni komendanta chorągwi. Harcerstwo to wyzwania, które przekłada na wszystkie dziedziny swojego życia. Nie umie siedzieć w miejscu, uwielbia podróże te dalekie, ale bardziej docenia te bliskie, gdzie poznaje swój ukochany region - Warmię. W wolnych chwilach biega, ćwicząc przed maratonem, jeździ na rowerze szukając ciągle to nowych ciekawych miejsc, morsuje hartując swoje ciało. Najlepiej czuje się w bliskim kontakcie z naturą, jest kolekcjonerką zachodów słońca, dużo spaceruje i wędruje po lesie. Nie wyobraża sobie wakacji bez obozu, wieczoru bez ogniska z gitarą, weekendu bez wycieczki pod namiot czy wypadu na żagle. Umysł wycisza podczas medytacji i jogi. Humor poprawia sobie namiętnie słuchając disco polo :) Angażuje się w wiele działań społecznych- jest członkinią Rady Organizacji Pozarządowych Miasta Olsztyna, charytatywnych- od wielu lat wspiera WOŚP, Szlachetną Paczkę, oddaję krew. Kiedy tylko może ucieka na południe w góry, którym oddaje się bez pamięci. Była uczestniczką etapu 34 Bike Jamboree dookoła świata pokonując trasę Barcelona- Genewa. W projekcie “jednoŚLADAMI Andersa” odpowiada za działania programowe.'
      },
      {
        name: 'Marcin Dałkiewicz',
        photo: 'marcin-dalkiewicz.webp',
        isLeader: false,
        bio: 'Pracuje na co dzień z metalami szlachetnymi. Zapalony miłośnik podróżowania różnymi środkami transportu. Najbardziej jednak lubi podróżować stopem, ponieważ może wtedy spotkać ciekawych ludzi. Jednym z jego zainteresowań i celów podróży są kraje byłego ZSRR oraz opuszczone miasta i postindustrialne krajobrazy takie jak Czarnobyl. W wolnej chwili wskakuje na rower i przemierza nim wiele kilometrów. W zimie i w lecie odwiedza góry, przez które maszeruje lub zjeżdża na desce. Zdecydowanie woli upał od zimna. Brał udział w VI etapie projektu Rowerowe Jamboree z Polski do Japonii oraz I, IV oraz XV etapie w projekcie sztafety rowerowej dookoła świata Bike Jambore w którym był również odpowiedzialny za prowadzenie magazynu i sprzęt. W projekcie JednoŚladami Andersa lider etapu VI oraz odpowiedzialny za prowadzenie magazynu i sprzęt.'
      },
      {
        name: 'Magdalena Suchan',
        photo: 'magdalena-suchan.webp',
        isLeader: false,
        bio: 'To uosobienie ADHD. Jest instruktorką ZHP od ponad 20 lat. Harcersko jest członkinią Rady Chorągwi Łódzkiej oraz przewodniczącą Hufcowej Komisji Rewizyjnej i szefową chorągwianego programu #lodzkadbaozdrowie. Wyznawca praktykujący EKO i FIT. Uwielbia gotować, jeść zdrowo i jest turbo aktywna sportowo. Tańczy, żegluje po morzu, nurkuje, wspina się, wchodzi na góry wysokie i bardzo wysokie, trenuje (m.in. kalistenikę) i trenuje innych, stara się czasem jogować i rollować, biega, w tym przeszkodowo. Absolutnie kocha podróże! W wolnych chwilach - działacz i starter pozaharcerskich inicjatyw społecznych lokalnych i ogólnopolskich.'
      },
      {
        name: 'Emilia Maliszak',
        photo: 'emilia-maliszak.webp',
        isLeader: false,
        bio: 'Instruktorka Hufca ZHP Wrocław Północ. Od 19 lat w harcerstwie, od 27 lat na rowerze, od zawsze bez kawy. Całą swoją energię zużywa na wędrówki górskie, jazdę na dwóch kółkach, kształcenie harcerzy i szukanie miejsc, gdzie jeszcze jej nie było, a być by chciała. Uczestniczyła w 21-szym etapie sztafety rowerowej Bike Jamboree i postanowiła, że w kolejnym projekcie również nie może jej zabraknąć.'
      },
      {
        name: 'Mikołaj Zawiślak',
        photo: 'mikolaj-zawislak.webp',
        isLeader: false,
        bio: 'Z pochodzenia i w sercu rzeszowianin, z zamieszkania warszawski student UW, który zamiast szlifować magisterkę jedzie do Włoch. Instruktor ZHP - niegdyś wieloletni drużynowy gromady zuchowej, obecnie dumny Karp tj. członek WGKA "Carpe Noctum". W wolnym czasie ceni sobie aktywny wypoczynek, czyli bierze plecak i wyrusza na szlak, czasami bardzo długi.'
      },
      {
        name: 'Irmina Jagielska',
        photo: 'irmina-jagielska.webp',
        isLeader: false,
        bio: 'Czasem niebezpiecznie jest wyjść z domu, gdy staniesz na drodze, nigdy nie wiadomo, dokąd cię nogi poniosą.’ J.R.R. Tolkien Na nogach, na dwóch kółkach, nad morzem, w górach, czy w lesie, byle aktywnie i na łonie natury. To moja recepta na najskuteczniejszy reset i poczucie największej satysfakcji.'
      }
    ]
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
    points: [
      { lat: 42.4697, lon: 14.2066 },
      { lat: 43.6182, lon: 13.5161 },
      { lat: 44.0608, lon: 12.5673 },
      { lat: 44.1370, lon: 12.2436 },
      { lat: 44.2239, lon: 12.0407 },
      { lat: 44.3555, lon: 11.7169 },
      { lat: 44.4944, lon: 11.3406 },
      { lat: 44.6473, lon: 10.9242 },
      { lat: 44.8021, lon: 10.3306 },
      { lat: 45.0542, lon: 9.6910 },
      { lat: 45.3140, lon: 9.5030 }
    ],
    members: [
      {
        name: 'Anna Popowska',
        photo: 'anna-popowska.webp',
        isLeader: true,
        bio: 'Pochodzę z Augustowa, myślę ,że dlatego ukochałam sobie jeziora. Bez bliskości wody trudno byłoby mi żyć. Jestem mamą ,żoną -rodzina daje mi grunt na którym się mocno trzymam. Pracuję w Wolnej Szkole Harmonia, jestem psychologiem dziecięcym i fizjoterapeutką, towarzyszę dzieciom w ich drodze do poznawania siebie i świata sama a sama nabywam przy tym wciąż nowej wiedzy i zasobów. Byłam uczestniczką III etapu Bj przez Kaukaz i liderką XXXVII etapu z Gniezna do Gdańska z najmłodszymi uczestnikami, którzy dowieźli na metę pałeczkę sztafetową. Dzięki BJ rozsmakowałam się w jeżdżeniu na rowerze. Uwielbiam literaturę faktu , dobrą literaturę dziecięcą, historię. Zachwyciła mnie historia armii stworzonej przez Generała Władysława Andersa i stąd pomysł ,by na jeden z etapów zabrać młodych ludzi i zainspirować ich Szlakiem Nadziei.'
      },
      {
        name: 'Zbigniew Popowski',
        photo: 'zbigniew-popowski.webp',
        isLeader: false,
        bio: 'W harcerstwie aktywny od ponad dwudziestu pięciu lat. Był m.in. drużynowym, instruktorem i komendantem hufca Augustów, członkiem Rady Naczelnej ZHP, członkiem komend kontyngentów polskich na 18. Światowe Jamboree Skautowe w Holandii oraz 21. Światowe Jamboree Skautowe w Wielkiej Brytanii, skarbnikiem ZHP i członkiem Głównej Kwatery ZHP (2007-2009) oraz członkiem Rady Fundacji Harcerstwa Polskiego Schronisko „Głodówka” (2008-2016). Od 2006 roku kieruje Fundacją Światowe Jamboree zajmującą się projektami zagranicznymi dla młodzieży. Z zawodu ekonomista i bankowiec ze specjalizacją z finansowania handlu zagranicznego, ekspert Centrum Stosunków Międzynarodowych oraz członek Rady Ekspertów polskiego ThinkTank. Od blisko 7 lat kieruje firmą oferującą kompleksowe doradztwo w finansach oraz handlu zagranicznym. Szczęśliwy ojciec 2 dzieci oraz mąż. W nielicznych wolnych chwilach gra na gitarze i harmonijce, chodzi po górach, jeździ na wyprawy rowerowe oraz ślizga się na nartach wodnych.'
      },
      {
        name: 'Robert Popowski',
        photo: 'robert-popowski.webp',
        isLeader: false,
        bio: 'Jestem uczniem Wolnego Liceum im Olka Doby. Lubię gry komputerowe, koty. Lubię podróżować. Bylem uczestnikiem Rowerowego Jamboree , przejechałem zimą Turcję. W projekcie BJ uczestniczyłem w dwóch etapach III przez Kaukaz i ostatnim z Gniezna do Gdańska. Chciałabym odwiedzić wszystkie kontynenty, niekoniecznie na rowerze.'
      },
      {
        name: 'Zuzia Ptaszyńska',
        photo: 'zuzia-ptaszynska.webp',
        isLeader: false,
        bio: 'Hej, Jestem Zuzia. Mam prawie 15 lat. Lubię podróżować, chodzić po górach, jeździć na rowerze i pływać kajakiem. Jestem fanką różnych kreatywnych zajęć takich jak plecenie makramy, czy lepienie z gliny. Wydaje mi się, że jestem osobą z wyobraźnią, a jeśli nie, to na pewno z lekką dozą szaleństwa. Może nie do końca widać to na zdjęciu, ale mam kolorowe włosy. Uwielbiam kolory! Nie przepadam za wyblakłymi odcieniami. Wolę mieć na sobie tęczę i wyróżniać się z szarego tłumu...'
      },
      {
        name: 'Weronika Kaczor',
        photo: 'weronika-kaczor.webp',
        isLeader: false,
        bio: 'Na co dzień chodzę boso. Uwielbiam żeglować, czytać książki i pisać. Interesuje mnie Norwegia oraz psychologia zaburzeń. No i zdecydowanie wolę łódkę od roweru... Byłam uczestniczą XXXVII etapu BJ z Gniezna do Gdańska.'
      },
      {
        name: 'Julek Bączkowski',
        photo: 'julek-baczkowski.webp',
        isLeader: false,
        bio: 'Mam 14 lat i mieszkam w Strzeniówce. Chodzę do dwóch liceów. Jednego muzycznego a drugiego podstawowego. Lubię muzykę, jazdę na deskorolce oraz na rowerze , kręcenie filmów i robienie zdjęć i rysowanie.'
      },
      {
        name: 'Gosia Błeńska',
        photo: 'gosia-blenska.webp',
        isLeader: false,
        bio: 'Mama Kuby i Janka. Młode lata spędziła w harcerstwie, które ją ukształtowało. Od kilku lat zaangażowana w realizację projektu Bezpieczny Kazbek oraz działania fundacji Medyk Rescue Team. Lubi odwiedzać nowe miejsca i wcale nie muszą one być daleko od domu. Zawsze z muzyką w serduchu. Najgłośniej potrafi śpiewać w samochodzie, ale świetnie sobie radzi też przy kominku, ognisku, w górskim schronisku czy gdziekolwiek indziej, ważne by ktoś zaczął ;) Jak ma do wyboru morze albo góry to niezależnie od pory roku zawsze wybierze górskie szlaki. Nie trzeba jej też dwa razy zapraszać na planszówki. Zawsze chętnie rozegra partyjkę pod warunkiem, że gra jest bez kostek. Jechała ostatni etap Bike Jamboree kończąc rowerową sztafetę dookoła świata.'
      },
      {
        name: 'Jakub Błeński',
        photo: 'jakub-blenski.webp',
        isLeader: false,
        bio: 'Drugi rok jest uczniem wolnego liceum, które odmieniło jego życie. Od dziecka uwielbia sport - zarówno uprawiać jak i wiedzieć o nim jak najwięcej. Jakiś czas temu rakietę tenisową zamienił na pałeczki perkusyjne i obecnie nie daje o sobie zapomnieć domownikom waląc w "gary". Ostatnio próbuje swoich sił również na basie. Lubi podróże, zwłaszcza zagraniczne. Od prawie dwóch lat samodzielnie uczy się języka fińskiego udowadniając swoją zawziętość i konsekwencję. Był uczestnikiem ostatniego etapu Bike Jamboree dowożąc pałeczkę sztafetową na metę.'
      },
      {
        name: 'Janek Błeński',
        photo: 'janek-blenski.webp',
        isLeader: false,
        bio: 'Uczeń warszawskiej podstawówki, choć szkoła mogłaby dla niego nie istnieć. Najciekawszym zajęciem w szkole jest rysowanie, do czego zdecydowanie ma talent. Najlepiej odnajduje się w postaciach komiksowych. Miłośnik gier komputerowych i kotów. Od dziecka jego marzeniem był "żywy kotek - nie pluszak" - obecnie opiekun Pazura i Leona. W wolnych chwilach spotyka się z kolegami i wspólnie łapią Pokemony lub grają "w kosza". Lubi również grać w gry karciane i planszowe czym zaraża swoich rówieśników. Jako najmłodszy, 10-letni uczestnik ostatniego etapu Bike Jamboree musiał nadrabiać pedałowaniem na mniejszym rowerze dzielnie kończąc sztafetę dookoła świata.'
      }
    ]
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
    members: [
      {
        name: 'Wojciech Wrześniak',
        photo: 'wojciech-wrzesniak.webp',
        idLeader: true,
        bio: 'Od dziecka spędza wolny czas na rowerze włócząc się po okolicy. Jednak dopiero po studiach wkręcił się w rowerowy świat; zaczynał od lokalnych maratonów MTB, z poznaną na trasie ekipą Mark the Spot objechał kawał Polski, wkręcił się mocno w ultramaraton Wisła 1200 - ukończył go czterokrotnie, by w 5 edycji stanąć po drugiej stronie i pomóc przy jej organizacji. Z Bike Jamboree w etapie 20 przemierzył zimą, a nie latem Kanadyjskie góry Skaliste oraz gorące Maroko w etapie 32. Z wykształcenia geodeta, a zawodowo sprawdza się jako logistyk. W ‘JednoŚladach’ debiutuje w odpowiedzialnej roli lidera etapu.'
      },
      {
        name: 'Grzegorz Baworowski',
        photo: 'grzegorz-baworowski.webp',
        idLeader: false,
        bio: 'Od kiedy dostał pierwszy rower na komunię zrozumiał, że będzie to jego ulubiony środek lokomocji oraz przepustka do niesamowitych przygód. Uwielbia jeździć w wolnym czasie na rowerze. Prawie każdy wakacyjny urlop spędza na długodystansowych wyprawach rowerowych. Podczas swoich zagranicznych wojaży z sakwami odwiedził między innymi Bornholm, Kopenhagę, Monachium i Pragę. W Polsce przejechał m.in. szlaki Greenvelo, wzdłuż Odry i Wisły. Ostatnio odkrywa tajniki bikepackingu. Ponadto pasjonat fotografii, szczególnie krajobrazowej i ulicznej. Jest współzałożycielem i członkiem Zielonogórskiego Towarzystwa Fotograficznego.'
      },
      {
        name: 'Barbara Sobańska',
        photo: 'barbara-sobanska.webp',
        idLeader: false,
        bio: 'Rower to od najmłodszych lat jej największy sprzymierzeniec w przemierzaniu leśnej i miejskiej dżungli. Dojeżdżała nim m.in. do dwujęzycznych klas gimnazjum i liceum, gdzie przez sześć lat doskonaliła swoje francuskojęzyczne kwalifikacje. Teraz w końcu może podjąć rowerowo-językowe wyzwanie, jakim jest X etap ‘JednoŚladami Andersa’ na trasie Mediolan - Paryż. Na codzień jest studentką fizjoterapii na Akademii Wychowania Fizycznego w Poznaniu, przyboczną w gromadzie 89 JGZ ‘Wesołe Krasnale’ i pasjonatką triathlonu.'
      },
      {
        name: 'Aleksandra Duliban',
        photo: 'aleksandra-duliban.webp',
        idLeader: false,
        bio: 'Harcerka całym serduszkiem - w ZHP spędziła już połowę swojego życia. Wędrowniczka, działa w promocji swojego hufca i pełni funkcję komendantki kręgu instruktorskiego. Jej życie prywatne podąża w reklamowo / marketingowo / graficznym kierunku. Pochodzi z Radomia, aktualnie mieszka w ukochanej stolicy i poznaje ją za pomocą dwóch kółek. Członkini ekipy promo w sztafecie JednoŚladami Andersa. Właściwie to dopiero teraz zaczyna przygodę z profesjonalnym kolarstwem - ale wie, że w naszym etapie znajdzie ludzi gotowych podzielić się doświadczeniem.'
      },
      {
        name: 'Julia Woźniak',
        photo: 'julia-wozniak.webp',
        isLeader: false,
        bio: 'Od 15 lat niezmiennie w związku… Harcerstwa Polskiego. Instruktorka, jak to często bywa - wielofunkcyjna, ale perełką w jej głowie jest drużyna Wędrownicza, której jest drużynową. Poza harcerstwem studentka grafiki i uczennica szkoły muzycznej. A w międzyczasie? Miłośniczka wędrówek i nocy spędzonych w lesie oraz tradycyjnych sztuk plastycznych. Pozytywna marzycielka, która uwielbia próbować nowych aktywności, ale też usiąść z herbatą (koniecznie z cytryną) przy dobrej książce.'
      },
      {
        name: 'Emilia Maliszak',
        photo: 'emilia-maliszak.webp',
        isLeader: false,
        bio: 'Instruktorka Hufca ZHP Wrocław Północ. Od 19 lat w harcerstwie, od 27 lat na rowerze, od zawsze bez kawy. Całą swoją energię zużywa na wędrówki górskie, jazdę na dwóch kółkach, kształcenie harcerzy i szukanie miejsc, gdzie jeszcze jej nie było, a być by chciała. Uczestniczyła w 21-szym etapie sztafety rowerowej Bike Jamboree i postanowiła, że w kolejnym projekcie również nie może jej zabraknąć.'
      }
    ]
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
    members: [
      {
        name: 'Piotr Wojtaszek',
        photo: 'piotr-wojtaszek.webp',
        isLeader: true,
        bio: 'Cześć, witam, czołem, pytacie skąd się wziąłem? Jestem wesoły Piotrek, mam zawsze pomysłów worek. Na rowerze dużo jeżdżę, na którym głowę wietrzę. Uwielbiam także górskie wędrówki. I nóżką potupać, jak są potańcówki. Podróże to moja największa pasja, Byle gdzie to jedyna racja. Odwiedzam parki, pałace i małe wioski, i wszędzie opowiadam różne ciekawostki. Jak zostaję w domu, to nic nie szkodzi, Gdyż mieszkam w mojej ukochanej Łodzi. Tutaj co dzień pracuje i w ZHP harcuje. Z żoną dzielę życie, a mój pies woli wycie. W Bike Jamboree biorę udział po raz trzeci, ten czas między sztafetami tak szybko leci'
      },
      {
        name: 'Agnieszka Rytel',
        photo: 'agnieszka-rytel.webp',
        isLeader: false,
        bio: 'Historyczka, turystka, harcmistrzyni, podejmująca się wielu zadań w życiu zawodowym. Właśnie kupiła sobie rower i postanowiła się nauczyć na nim jeździć. Kiedyś słyszała, że tego się nie zapomina, więc może i nauka przychodzi łatwo. Stąd pomysł by wziąć udział w Bike Jamboree. Wybrała etap w Europie zachodniej, bo ceni sobie dostęp do internetu. Niestety Brexit pokrzyżował jej plany.'
      },
      {
        name: 'Mateusz Boczkowski',
        photo: 'mateusz-boczkowski.webp',
        isLeader: false,
        bio: 'Dzień dobry, nazywam się Mateusz i uwielbiam jeździć na rowerze, gotować i układać kostki Rubika. Według mnie najważniejsze w życiu jest poznawanie nowych osób i przeżywanie przygód dlatego zdecydowałem się wziąć udział w projekcie „Bike Jamboree JednoŚladami Andersa”. Etap XI wydawał się najfajniejszy i najbardziej przystępny, ze względu na sytuacje polityczne w tych obu regionach. Harcersko jestem przybocznym w Drużynie Wędrowniczej, a zawodowo kelnerem.'
      },
      {
        name: 'Hania Bączkowska',
        photo: 'hania-baczkowska.webp',
        isLeader: false,
        bio: 'Cześć nazywam się Hania Bączkowska. Sztafeta Jednośladami Andersa to już drugi projekt w jakim biorę udział, więc można powiedzieć że pedałowanie jest moją pasją. Dodatkowo uwielbiam zwiedzać świat w niestandardowy sposób, dlatego właśnie wybrałam etap Europejski, by jeszcze raz wytyczyć ścieżki na tych wydeptanych terenach. Na codzień uwielbiam czytać książki oraz rysować, czym mam nadzieje w najbliższej przyszłości będę się mogła zajmować się na studiach. Interesuje się również mitologiami europejskimi, kinematografią i fotografią'
      },
      {
        name: 'Justyna Chada',
        photo: 'justyna-chada.webp',
        isLeader: false,
        bio: 'Nauczycielka z pasji, podharcmistrzyni, włóczykij od zawsze. Od zawsze uwielbiam się włóczyć, a najlepiej to robić na rowerze. Ten etap jest dla mnie, gdyż Wielka Brytania to zdecydowanie moje miejsce na ziemi i lubię tam wracać co roku.'
      },
      {
        name: 'Michał Werner',
        photo: 'michal-werner.webp',
        isLeader: false,
        bio: 'Od 13 lat jest instruktorem Związku Harcerstwa Polskiego w Hufcu Łódź-Polesie. A od zawsze związany ze sportem i aktywnością. Z ochotą podejmuje się wyzwań, lubi kiedy jest intensywnie. W wolnych chwilach biega, wybiegał już trzykrotnie maraton. Rowerem przejechał Polskę wszerz w niecałe 8 dni, uczestniczył w XXX etapie Bike Jamboree Around the World, wspinał się i popularyzował wspinaczkę w założonym przez siebie Harcerskim Klubie Wspinaczkowym. Wspina się z resztą nie tylko sportowo, ale i zawodowo, jako arborysta zajmując się pielęgnacją i wycinką drzew w dostępie linowym.  W życiu podąża za swoimi pasjami, ukończył psychologię, w pracy spełnia chłopięce marzenia biegając po drzewach, a jego najnowszą zajawką jest acroyoga.'
      }
    ]
  },
  {
    name: 'stage_x_east',
    id: 'etap-x-east',
    startPoint: stopsData[10],
    startDate: new Date(2023, 5, 3),
    finishPoint: stopsData[13],
    finishDate: new Date(2023, 5, 15),
    distance: '800 km',
    leader: 'Miłosz Bączkowski',
    previousStages: [9],
    nextStages: [13],
    members: [
      {
        name: 'Miłosz Bączkowski',
        photo: 'milosz-baczkowski.webp',
        isLeader: true,
        bio: 'Największą pasją są i zawsze były podróże. Od najmłodszych lat podróżowałem najpierw jako harcerz później jako członek klubu biegów na orientację, a ostatecznie organizując samodzielnie wyjazdy w odległe i nieskomercjalizowane zakątki świata.  Uwielbiam przebywać z naturą i czuję się jej częścią dlatego ekologia jest dla mnie bardzo ważna. Choć nigdy nie uprawiałem wyczynowo żadnej dyscypliny to wiele z nich przez lata zdążyłem poznać, od wspinaczki skałkowej i wysokogórskiej, żeglarstwa, do biegów górskich ultra. Od niedawna rower szosowy i możliwość zwiedzania świata na dwóch kółkach rozpala moją wyobraźnię. Do tego uwielbiam obce smaki, które pozwalają mi realizować się kulinarnie, a także ludzi, stroje i nieznane mi dotąd instrumenty muzyczne. Odwiedzanie ciekawych, mało uczęszczanych miejsc jest moim paliwem, a każda metoda dotarcia tam i przebywania z fajnymi ludźmi dodatkową zachętą. Z zawodu ekonomista, Product Owner aplikacji multichannelcommerce b2b, a także absolwent szkoły fotograficznej przy Polskim Związku Artystów Fotografików. Ojciec trójki dzieci kochających podróżowanie jak nikt inny.'
      },
      {
        name: 'Olga Antczak',
        photo: 'olga-antczak.webp',
        isLeader: false,
        bio: 'Nie może usiedzieć w miejscu” - to zdanie, które idealnie mnie opisuje. Uwielbiam podróże, zwłaszcza te w otoczeniu natury. Obecnie mieszkanka Poznania, w którym pije dużo kawy i uwielbiam miejscowe kawiarnie, biegam ze świetnymi dziewczynami z Kobiety Biegają, jeżdżę na gravelu po okolicy a latem pływam na SUPie na podmiejskich jeziorach. Zawodowo zajmuje się prowadzeniem projektów jako Product Manager. Myśle, ze odwagi do poznawania nowych miejsc, umiejętności planowania oraz łatwosc poznawania nowych ludzi nauczyło mnie harcerstwo, w którym działałam przez 13 lat. Dlatego w projekcie zajmuje się m.in kontaktem ze skautami.'
      },
      {
        name: 'Karol Jędrzejewski',
        photo: 'karol-jedrzejewski.webp',
        isLeader: false,
        bio: 'Karol, mieszkaniec Poznania i były harcerz, to prawdziwy pasjonat podróży i dwóch kółek. Codziennie przemierza miasto rowerem, zarówno w drodze do pracy, jak i w weekendowe wyprawy. Jego dusza odkrywcy nieustannie pragnie przygód, a rower stanowi dla niego jednocześnie środek transportu i wehikuł do wolności. Pełen entuzjazmu i uroku, zaraża innych swoją pasją, inspirując ich do odkrywania piękna świata na dwóch kółkach. Nieustannie pragnie odkrywać nowe miejsca, spotykać ciekawych ludzi i doświadczać przygód.'
      }
    ]
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
    points: [
      { lat: 48.9745, lon: 14.4743 },
      { lat: 49.2234, lon: 14.4212 },
      { lat: 49.6047, lon: 14.2776 },
      { lat: 50.0873, lon: 14.4230 },
      { lat: 50.1611, lon: 14.7491 },
      { lat: 50.1868, lon: 15.0415 },
      { lat: 50.0267, lon: 15.1968 },
      { lat: 50.0385, lon: 15.7812 },
      { lat: 50.2100, lon: 15.8299 },
      { lat: 50.3555, lon: 15.9178 },
      { lat: 50.4423, lon: 16.2424 },
      { lat: 50.5071, lon: 16.7396 },
      { lat: 50.4742, lon: 17.3320 },
      { lat: 50.3895, lon: 17.6605 },
      { lat: 50.4753, lon: 17.9669 },
      { lat: 50.4861, lon: 18.4115 },
      { lat: 50.6092, lon: 18.4797 },
      { lat: 50.6707, lon: 18.6826 },
      { lat: 50.5641, lon: 18.8855 }
    ],
    members: [
      {
        name: 'Artur Kulesza',
        photo: 'artur-kulesza.webp',
        isLeader: true,
        bio: 'Z wykształcenia ekonomista, na co dzień menedżer w dużej korporacji, więc w tygodniu wsiada na ukochany rower tylko w drodze do i z banku, i to przy sprzyjającej pogodzie. Za to co weekend stara się aktywnie spędzać czas na rowerze, samotnie lub w gronie skołowanych przyjaciół. A śnieżną zimą uwielbia biegówki, dobre uzupełnienie roweru, dzięki którym rozmiłował się ostatnio w okolicach Jeleniej Góry, Karkonoszy i Gór Izerskich. Dodatkowo miłośnik historii, szczególnie tej najnowszej XX wieku, ale także rodzimej Warszawy i Mazowsza. Lubi odkrywać nieznane miejsca i spotykać nowych ludzi. W projekcie JednoŚladami Andersa lider etapu XI East, łączącego Austrię i Polskę przez przepiękne Czechy, które jeszcze nie są dla niego odkryte. Wyczekuje z dużą ochotą na rozpoczęcie nowej przygody w gronie interesujących osób.'
      },
      {
        name: 'Katarzyna Pyrka',
        photo: 'katarzyna-pyrka.webp',
        isLeader: false,
        bio: 'Pochodzi z Zielonej Góry, najlepiej czuje się w Solecznikach na Wileńszczyźnie i na praskim Žižkovie. Z wykształcenia socjolożka i kulturoznawczyni – bywa jej to przydatne w działaniach w ramach Fundacji Pobliża, która zajmuje się współpracą z państwami sąsiadującymi z Polską. Licencję akwanautki zdobyła wcześniej niż prawo jazdy. Nurkuje, pływa (także zwałkowo - kajakiem), morsuje, chodzi po górach, a na rowerze jeździ bez względu na porę roku i pogodę. Sport to dla niej sposób na odkrywanie świata i szukanie przygód, a nie rywalizacja. Do udziału w projekcie skłoniła ją fascynacja nie tyle szlakiem bojowym Armii Andersa, co czysto ludzkim wymiarem tej historii. Cieszy się, że trasa etapu biegnie wdłuż Wełtawy i prowadzi od (niemal) jej źródeł na Szumawie do (niemal) ujścia do Łaby – wszak jak pisała Olga Tokarczuk: “To właśnie rzeki są jednymi z rzadkich niezmiennych zjawisk na świecie, i w czasie, i w przestrzeni. Czuję wyraźnie, że to tę samą rzekę mam w pamięci i w komórkach własnego ciała. Nie czas i przestrzeń rządzą rzeką, ale ona nimi – ustala kojącą ciągłość, utrzymuje cała krainę w stałym bezpiecznym miejscu.”'
      },
      {
        name: 'Jirka Blažek',
        photo: 'jirka-blazek.webp',
        isLeader: false,
        bio: 'Urodzony w Czechach, w pagórkowatym regionie Wysoczyny w Dolinie Sazawy, gdzie od najmłodszych lat uczył się jeździć na rowerze po górach. Obecnie mieszka w historycznym dwumieście Brandýs nad Łabą – Stará Boleslav. (Stará Boleslav jest tradycyjnym miejscem pielgrzymek, związanym z męczeńską śmiercią św. Wacława). Z zawodu jest chemikiem. Poszukiwacz przygód, kolarz, skaut, ekolog, podróżnik… nigdy nie odmówi dobrej zabawy. Dogada się się rękami i nogami, a oprócz tego po angielsku, rosyjsku i w esperanto (stworzonym przez Polaka - Ludwika Zamenhofa). Lubi języki obce, przyrodę, pływanie, nurkowanie, saunowanie i morsowanie. Interesuje się numizmatyką i fotografią. Wolny czas spędza aktywnie na świeżym powietrzu i chętnie podejmuje nowe wyzwania. Stara się być pomocny i uczyć się nowych rzeczy. Entuzjazm do projektu Bike Jamboree zaszczepiło w nim ubiegłoroczne spotkanie w Pradze z Dorotą Limontas. (Generał Anders najwyraźniej rzucił na niego urok!). Marzył o przejechaniu irańskiego odcinka sztafety, ale nie zawahał się, gdy nadeszła propozycja współorganizacji 11. etapu biegnącego przez jego ukochaną ojczyznę. W życiu kieruje się mottem: „Co cię nie zabije, to cię wzmocni”. Wciąż pamięta słowa zmarłego tragicznie oddanego przyjaciela i kolarza, który mawiał: „Tam, gdzie inni kończą, my zaczynamy”.'
      }
    ]
  },
  {
    name: 'stage_xii_east',
    id: 'etap-xii-east',
    startPoint: stopsData[14],
    startDate: new Date(2023, 5, 27),
    finishPoint: stopsData[15],
    finishDate: new Date(2023, 6, 8),
    distance: '550 km',
    previousStages: [13],
    points: [
      { lat: 50.8097, lon: 19.1222 },
      { lat: 52.2652894, lon: 19.1650943 },
      { lat: 53.0145, lon: 18.6014 },
    ],
    leader: 'Łukasz Tomala',
    members: [
      {
        name: 'Łukasz Tomala',
        photo: 'lukasz-tomala.webp',
        isLeader: true,
        bio: 'Instruktor harcerski - członek Komendy Hufca ZHP Radom-Miasto. W sztafecie Bike Jamboree był uczestnikiem etapu 6. Kazachstan - Rosja i liderem  etapu 29. Retro w USA. W projekcie "JednoŚladami Andersa" pełni rolę lidera etapu XII East. Dodatkowo jest twórcą i administratorem strony internetowej www.bikejamboree.pl.'
      },
      {
        name: 'Dorota Teodorczyk',
        photo: 'dorota-teodorczyk.webp',
        isLeader: false,
        bio: 'Z wykształcenia, zawodu i pasji pilot wycieczek, niezależnie ile na torcie ma świeczek. Uwielbia podróże - zarówno małe, jak i duże. Lubi jeździć stopem, nie martwiąc się co będzie potem. Kocha poznawać miejscową kulturę, niezależnie w jaką trafi dziurę. Chętnie integruje się z lokalsami - Dorota i jej rower nigdy nie zostają sami. Jest to jej ulubiony środek lokomocji, choć nie najlepiej zna się na locji. W kartografię potrafi świetnie, nawet w kopalni uranu w Kletnie. Uwielbia kąpiele każdą porą, nawet te zimowe nie są żadną zmorą. Dlatego cieszy się, że jedzie w kierunku morza i ma nadzieję, że etapowi ukaże się zorza!'
      },
      {
        name: 'Krzysztof Batycki',
        photo: 'krzysztof-batycki.webp',
        isLeader: false,
        bio: 'Na co dzień twardo stąpający po ziemi lekarz, wykładowca Uniwersytetu Technologiczno-Humanistycznego w Radomiu, który każdą wolną chwilę wykorzystuje do bujania w obłokach. Potrójny zdobywca morza Bałtyckiego: raz objechał je dookoła na rowerze, drugi raz – przepłynął w poprzek kajakiem, trzeci raz - zdobył najwyższy szczyt położony na wyspie na Bałtyku. W czasie wolnym od wyczynów podróżniczych "kolekcjonuje" wyspy na Bałtyku, objeżdżając je rowerem dookoła (obecnie w swojej kolekcji posiada ich 10). Szczególnie upodobał sobie podróże w czasie – zwłaszcza do średniowiecznych zamków północnej Europy i miejsc związanych z wojnami Rzeczypospolitej o dominium Maris Baltici. Jako wehikuł czasu wykorzystuje swój rower. Radomianin z dziada pradziada, wielki miłośnik swojego rodzinnego miasta.'
      },
      {
        name: 'Cyryl Kurpiel',
        photo: 'cyryl-kurpiel.webp',
        isLeader: false,
        bio: 'Pochodzi z Nowego Sącza, gdzie w dzieciństwie podejmował pierwsze próby jeżdżenia na rowerze na dłuższe dystanse. Stary, dobry rower górski służył mu przez kilka lat, nawet jeśli w pewnym momencie stał się odrobinę za mały. Następnie po latach typowo siedzącego trybu życia, w większości poświęconego na studiowanie w Warszawie, na nowo zapałał miłością do różnego rodzaju aktywności sportowej. Najpierw bieganie, potem siłownia, chodzenie po górach, a obecnie powrót do dawnych marzeń - pokonania długiej trasy rowerem. Do tego możliwość połączenia wyprawy z tematyką historyczną - jego kolejną pasją - sprawiła, że decyzja o wzięciu udziału w projekcie stała się oczywista.'
      }
    ]
  },
]

export default {}
