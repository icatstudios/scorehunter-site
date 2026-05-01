import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentPl() {
  return (
    <>
      <p>
        Przed rozpoczęciem korzystania z aplikacji mobilnej ScoreHunter
        (&quot;Aplikacja&quot;, &quot;Usługa&quot;) prosimy o uważne
        zapoznanie się z niniejszymi Warunkami użytkowania
        (&quot;Warunki&quot;). Pobierając i używając Aplikacji, akceptujesz
        niniejsze Warunki. Jeśli się z nimi nie zgadzasz, prosimy nie
        korzystać z Aplikacji.
      </p>

      <Divider />

      <Section title="1. Definicje">
        <List
          items={[
            <>
              <Strong>Aplikacja</Strong>: aplikacja mobilna ScoreHunter i
              powiązane strony internetowe
            </>,
            <>
              <Strong>Deweloper / My / Nas / Nasz</Strong>: iCat Studios
            </>,
            <>
              <Strong>Użytkownik / Ty / Twój</Strong>: osoba korzystająca
              z Aplikacji
            </>,
            <>
              <Strong>Usługa</Strong>: wszystkie funkcje i treści
              oferowane przez Aplikację
            </>,
            <>
              <Strong>Treść</Strong>: dane meczów, listy typów, rankingi,
              trofea, profile użytkowników i wszelkie inne dane wewnątrz
              Aplikacji
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Charakter Usługi — WAŻNE">
        <SubHeading>2.1 ScoreHunter nie jest aplikacją hazardową</SubHeading>
        <p>
          ScoreHunter jest{" "}
          <Strong>
            aplikacją typujczo-rozrywkową opartą na wiedzy o piłce
            nożnej
          </Strong>
          . Poniższe punkty stanowią fundamentalny charakter Aplikacji i
          muszą być jasno rozumiane przez użytkowników:
        </p>
        <List
          items={[
            <>
              Aplikacja jest{" "}
              <Strong>grą opartą na umiejętnościach</Strong>, NIE grą
              losową
            </>,
            <>
              Aplikacja NIE zawiera{" "}
              <Strong>terminologii bukmacherskiej</Strong> (kupon, kursy,
              handicap, marża, jackpot)
            </>,
            <>
              W Aplikacji nie są oferowane <Strong>kursy zakładów</Strong>{" "}
              ani <Strong>mnożniki wygranych</Strong> dla żadnego meczu
            </>,
            <>
              Wszystkie mecze są{" "}
              <Strong>tak samo wartościowe</Strong> dla celów typowania —
              żaden mecz nie jest „cenniejszy" od innego
            </>,
            <>
              Aplikacja pozwala kibicom rywalizować w przyjaznym środowisku,
              wykorzystując wiedzę i intuicję
            </>,
            <>
              Główne cele to{" "}
              <Strong>
                rozrywka, kultura piłkarska, budowanie społeczności i
                dzielenie się wiedzą
              </Strong>
            </>,
          ]}
        />

        <SubHeading>2.2 Brak wpłat ani nagród pieniężnych</SubHeading>
        <List
          items={[
            <>
              <Strong>NIE jest wymagane</Strong> wydawanie prawdziwych
              pieniędzy, aby grać w Aplikacji lub brać udział w
              konkursach
            </>,
            <>
              Aplikacja <Strong>NIE</Strong> zawiera funkcji{" "}
              <Strong>obstawiania zakładów za prawdziwe pieniądze</Strong>{" "}
              ani <Strong>hazardu</Strong>
            </>,
            <>
              Aplikacja <Strong>NIE obiecuje</Strong> zwycięzcom{" "}
              <Strong>prawdziwych nagród pieniężnych</Strong>
            </>,
            <>
              Aplikacja{" "}
              <Strong>
                NIE zawiera elementów hazardu, gier losowych, loterii ani
                zakładów
              </Strong>
            </>,
            <>
              Wszyscy użytkownicy uczestniczą w konkursach na{" "}
              <Strong>równych warunkach</Strong>
            </>,
            <>
              Płatne funkcje, takie jak członkostwo Pro,{" "}
              <Strong>
                nie wpływają na wyniki konkursów
              </Strong>{" "}
              — oferują jedynie dodatkowe funkcje poprawiające
              doświadczenie
            </>,
          ]}
        />

        <SubHeading>2.3 Nagrody promocyjne</SubHeading>
        <p>
          Deweloper według własnego uznania może okazjonalnie przyznawać{" "}
          <Strong>nagrody o charakterze promocyjnym</Strong> (koszulki,
          piłki, cyfrowe karty podarunkowe, drobne upominki itp.)
          najlepszym użytkownikom. Do takich nagród mają zastosowanie
          następujące warunki:
        </p>
        <List
          items={[
            <>
              Nagrody mają{" "}
              <Strong>charakter promocyjny</Strong> i mają na celu
              zachęcenie do aktywności użytkowników
            </>,
            <>
              Nagrody <Strong>NIE są gwarantowane</Strong> — przyznawane
              są wyłącznie w ramach kampanii ogłoszonych przez Dewelopera
            </>,
            <>
              Nagrody <Strong>NIE są wypłacane w gotówce</Strong> — są
              dostarczane wyłącznie jako prezenty fizyczne lub cyfrowe
            </>,
            <>
              Przyznawanie, dystrybucja i dostawa nagród leży{" "}
              <Strong>
                wyłącznie po stronie Dewelopera
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC oraz Google Play
                Store nie ponoszą żadnej odpowiedzialności za te nagrody
              </Strong>
            </>,
            <>
              Adres, dane tożsamości lub inne informacje mogą być żądane
              od zwycięzców przez Dewelopera wyłącznie w celu dostarczenia
              nagrody
            </>,
          ]}
        />

        <SubHeading>2.4 Ograniczenie wiekowe</SubHeading>
        <p>
          Aplikacja jest przeznaczona dla użytkowników{" "}
          <Strong>w wieku powyżej 13 lat</Strong>. Osoby poniżej 13. roku
          życia nie mogą korzystać z Aplikacji. Korzystając z Aplikacji,
          użytkownik oświadcza, że ma ukończone 13 lat.
        </p>
      </Section>

      <Divider />

      <Section title="3. Tworzenie i korzystanie z konta">
        <SubHeading>3.1 Tworzenie konta</SubHeading>
        <p>
          Aby korzystać z niektórych funkcji Aplikacji, musisz utworzyć
          konto za pomocą Zaloguj się przez Apple lub Zaloguj się przez
          Google. Podczas tworzenia konta:
        </p>
        <List
          items={[
            "Musisz podać dokładne i aktualne informacje",
            "Musisz prawidłowo podać datę urodzenia",
            "Nie wolno tworzyć konta przy użyciu cudzej tożsamości",
            "Nie wolno tworzyć konta z fałszywymi lub wprowadzającymi w błąd informacjami",
            <>
              Jedna osoba może mieć tylko <Strong>jedno konto</Strong>
            </>,
          ]}
        />

        <SubHeading>3.2 Bezpieczeństwo konta</SubHeading>
        <p>
          Ponosisz <Strong>wyłączną odpowiedzialność</Strong> za
          wszystkie działania na swoim koncie. Aby utrzymać bezpieczeństwo:
        </p>
        <List
          items={[
            "Chroń swoje Apple ID lub konto Google",
            "Nie udostępniaj dostępu do konta innym osobom",
            "Niezwłocznie poinformuj Dewelopera o podejrzanej aktywności",
          ]}
        />

        <SubHeading>3.3 Zakończenie konta</SubHeading>
        <p>
          Deweloper zastrzega sobie prawo do{" "}
          <Strong>
            zawieszenia lub zakończenia konta bez uprzedzenia
          </Strong>{" "}
          w następujących przypadkach:
        </p>
        <List
          items={[
            "Naruszenie niniejszych Warunków",
            "Oszustwo, oszukiwanie lub wprowadzanie w błąd",
            "Nękanie, obraźliwe zachowania lub mowa nienawiści wobec innych użytkowników",
            "Tworzenie wielu kont",
            "Korzystanie z automatycznego oprogramowania, botów lub narzędzi do oszukiwania",
            "Zachowanie sprzeczne z obowiązującym prawem",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Akceptowalne korzystanie">
        <SubHeading>4.1 Zachowania zabronione</SubHeading>
        <p>
          Podczas korzystania z Aplikacji <Strong>zabrania się</Strong>:
        </p>
        <List
          items={[
            "Tworzenia fałszywych kont lub podszywania się pod inne osoby",
            "Korzystania z narzędzi automatyzujących (botów, skryptów) do typowania",
            <>
              Stosowania{" "}
              <Strong>
                niewłaściwych nazw użytkownika, wulgaryzmów, obraźliwych
                wyrażeń, nękania, treści rasistowskich, seksistowskich lub
                nawołujących do nienawiści
              </Strong>{" "}
              wobec innych użytkowników
            </>,
            "Prób obchodzenia mechanizmów zabezpieczeń Aplikacji",
            "Inżynierii wstecznej, dekompilacji lub deasemblacji Aplikacji",
            "Kopiowania, dystrybucji lub komercyjnego wykorzystywania treści Aplikacji bez zezwolenia",
            "Udostępniania spamu, reklam lub treści promocyjnych (w nazwach lig, użytkowników itp.)",
            "Działań przeciążających serwery lub zakłócających Usługę",
          ]}
        />

        <SubHeading>4.2 Sankcje</SubHeading>
        <p>
          W razie wykrycia takich zachowań Deweloper zastrzega sobie
          prawo do zawieszenia konta użytkownika, usunięcia z rankingów
          lub trwałego usunięcia konta bez uprzedzenia.
        </p>
      </Section>

      <Divider />

      <Section title="5. Prawa własności intelektualnej">
        <SubHeading>5.1 Własność Aplikacji</SubHeading>
        <p>
          Nazwa ScoreHunter, logo, materiały wizualne, projekt, kod
          źródłowy, treści oraz wszelkie prawa własności intelektualnej{" "}
          <Strong>należą do iCat Studios</Strong>. Treści te chronione
          są przez:
        </p>
        <List
          items={[
            "Prawo autorskie",
            "Rejestrację znaków towarowych",
            "Tajemnice handlowe",
            "Inne obowiązujące prawa własności intelektualnej",
          ]}
        />

        <SubHeading>
          5.2 Treści osób trzecich i znaki towarowe
        </SubHeading>
        <p>
          Aplikacja wyświetla treści osób trzecich, w tym między innymi
          dane meczów piłkarskich, nazwy klubów i lig, nazwiska zawodników
          oraz materiały wizualne, takie jak logotypy klubów i lig. Treści
          te są dostarczane za pośrednictwem naszego partnera
          API-Football i są własnością odpowiednich uprawnionych — w tym
          klubów, lig, federacji oraz innych podmiotów uprawnionych.
          ScoreHunter nie rości sobie praw do żadnych znaków towarowych,
          logotypów ani materiałów chronionych prawem autorskim osób
          trzecich wyświetlanych w Aplikacji.
        </p>
        <p>
          ScoreHunter{" "}
          <Strong>
            nie jest powiązany, popierany, sponsorowany ani oficjalnie
            związany z żadną ligą, federacją, klubem, zawodami ani
            organizacją prezentowanymi w Aplikacji
          </Strong>
          . Wszystkie nazwy, logotypy i znaki towarowe osób trzecich są
          używane wyłącznie w celach identyfikacji i opisu (uczciwe
          użycie nominatywne).
        </p>
        <p>Akceptujesz, że:</p>
        <List
          items={[
            <>
              <Strong>nie</Strong> będziesz wyodrębniać, kopiować,
              redystrybuować ani w inny sposób ponownie wykorzystywać
              treści osób trzecich wyświetlanych w Aplikacji poza zwykłym
              użytkiem osobistym;
            </>,
            <>
              <Strong>nie</Strong> będziesz używać Aplikacji do
              naruszania praw własności intelektualnej osób trzecich;
            </>,
            <>
              wszelkie <Strong>komercyjne wykorzystanie</Strong> treści
              osób trzecich wyświetlanych w Aplikacji wymaga uzyskania
              przez Ciebie własnej licencji lub zgody bezpośrednio od
              właściwego uprawnionego.
            </>,
          ]}
        />
        <p>
          Jeśli jesteś podmiotem uprawnionym i chcesz zgłosić nieuprawnione
          użycie znaku towarowego lub materiałów chronionych prawem
          autorskim w Aplikacji, skontaktuj się z nami pod adresem{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Odpowiemy na uzasadnione żądania usunięcia treści w ciągu{" "}
          <Strong>trzydziestu (30) dni</Strong> i, w stosownych
          przypadkach, usuniemy lub zastąpimy zakwestionowane treści.
        </p>

        <SubHeading>5.3 Treści użytkownika</SubHeading>
        <p>
          Treści tworzone przez Ciebie podczas korzystania z Aplikacji
          (listy typów, nazwy lig, nazwa użytkownika, dane profilu)
          stanowią Twoją własność. Korzystając z Aplikacji, udzielasz
          jednak Deweloperowi{" "}
          <Strong>
            bezpłatnego, nieograniczonego i zbywalnego prawa
          </Strong>{" "}
          do wyświetlania, przechowywania i udostępniania tych treści w
          Aplikacji oraz innym użytkownikom.
        </p>
      </Section>

      <Divider />

      <Section title="6. Wyłączenie odpowiedzialności">
        <SubHeading>
          6.1 Usługa udostępniana &quot;tak jak jest&quot;
        </SubHeading>
        <p>
          Aplikacja jest udostępniana &quot;<Strong>tak jak jest</Strong>
          &quot; oraz &quot;<Strong>w miarę dostępności</Strong>&quot;.
          Deweloper nie udziela <Strong>żadnych gwarancji</Strong>, że:
        </p>
        <List
          items={[
            "Aplikacja będzie działać bezbłędnie, bez przerw lub w pełni bezpiecznie",
            <>
              dane meczów, wyniki lub statystyki będą{" "}
              <Strong>zawsze dokładne i aktualne</Strong>
            </>,
            <>
              wyniki typów lub naliczanie punktów będą{" "}
              <Strong>zawsze realizowane na czas</Strong>
            </>,
            "nie wystąpią przerwy w działaniu serwerów",
            "Aplikacja będzie działać na konkretnym urządzeniu lub systemie",
          ]}
        />

        <SubHeading>6.2 Dane meczów i treści osób trzecich</SubHeading>
        <p>
          Dane meczów, wyniki, składy, minuty i statystyki pochodzą z{" "}
          <Strong>
            zewnętrznej usługi API (API-Football)
          </Strong>
          . Deweloper{" "}
          <Strong>nie ponosi odpowiedzialności</Strong> za dokładność,
          aktualność ani kompletność tych danych. Korzystając z Aplikacji,
          użytkownik akceptuje, że mogą wystąpić opóźnienia, błędy lub
          braki.
        </p>
        <p>
          W maksymalnym zakresie dozwolonym przez prawo ScoreHunter i
          iCat Studios nie udzielają <Strong>żadnej gwarancji</Strong> co
          do dokładności, kompletności lub terminowości danych meczów,
          informacji o drużynach, statystyk i innych treści osób trzecich
          wyświetlanych w Aplikacji. Wszystkie takie treści są
          dostarczane &quot;<Strong>tak jak są</Strong>&quot; za
          pośrednictwem naszych partnerów; ScoreHunter nie ponosi
          odpowiedzialności za błędy, braki ani opóźnienia.
        </p>

        <SubHeading>6.3 Ograniczenie odpowiedzialności</SubHeading>
        <p>
          Deweloper{" "}
          <Strong>
            nie odpowiada za szkody bezpośrednie, pośrednie, uboczne,
            specjalne ani następcze
          </Strong>{" "}
          wynikające z lub związane z korzystaniem z Aplikacji. Obejmuje
          to między innymi:
        </p>
        <List
          items={[
            "Utratę danych",
            "Szkody majątkowe lub niematerialne",
            "Utratę potencjalnych trofeów, nagród lub miejsc w rankingach",
            "Awarie urządzeń",
            "Przerwy w usługach osób trzecich",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Wyłączenia Apple i Google">
        <SubHeading>7.1 W odniesieniu do Apple Inc.</SubHeading>
        <p>
          Aplikacja jest dystrybuowana w wersji iOS przez Apple App Store.
          W tym kontekście:
        </p>
        <List
          items={[
            <>
              <Strong>
                Apple Inc. NIE ponosi żadnej odpowiedzialności za tę
                Aplikację ani jej zawartość
              </Strong>
            </>,
            "Apple nie odpowiada za awarie, błędy, niedostarczenie nagród ani jakiekolwiek inne kwestie",
            <>
              Apple Inc. nie ma <Strong>żadnych zobowiązań</Strong> w
              przypadku naruszenia niniejszych Warunków przez Aplikację
            </>,
            <>
              Konserwacja, wsparcie i obsługa użytkowników Aplikacji
              należą{" "}
              <Strong>
                wyłącznie do iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Wszelkie nagrody, konkursy, kampanie lub promocje w
                Aplikacji są niezależne od Apple Inc.
              </Strong>{" "}
              — Apple w żaden sposób nie jest sponsorem, organizatorem
              ani administratorem tych działań
            </>,
            "Apple Inc. jest zwolnione z odpowiedzialności za kwestie prawne lub roszczenia powstałe w Aplikacji",
            "Aplikacja i jej treści muszą respektować prawa własności intelektualnej Apple",
            <>
              Użytkownicy Aplikacji{" "}
              <Strong>
                nie mogą kierować roszczeń bezpośrednio do Apple Inc.
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc. jest beneficjentem trzecim niniejszych
                Warunków
              </Strong>{" "}
              i może je egzekwować, gdy to konieczne
            </>,
          ]}
        />

        <SubHeading>7.2 W odniesieniu do Google LLC</SubHeading>
        <p>
          Aplikacja jest dystrybuowana w wersji Android przez Google Play
          Store. W tym kontekście:
        </p>
        <List
          items={[
            <>
              <Strong>
                Google LLC NIE ponosi żadnej odpowiedzialności za tę
                Aplikację ani jej zawartość
              </Strong>
            </>,
            "Google nie odpowiada za awarie, błędy, niedostarczenie nagród ani jakiekolwiek inne kwestie",
            <>
              Konserwacja, wsparcie i obsługa użytkowników Aplikacji
              należą{" "}
              <Strong>
                wyłącznie do iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Wszelkie nagrody, konkursy, kampanie lub promocje w
                Aplikacji są niezależne od Google LLC
              </Strong>{" "}
              — Google w żaden sposób nie jest sponsorem, organizatorem
              ani administratorem tych działań
            </>,
            "Google Play Store jest jedynie platformą dystrybucji Aplikacji i nie ponosi odpowiedzialności za jej treść ani działanie",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In i Google Sign-In</SubHeading>
        <p>
          Aplikacja korzysta z Apple Sign-In i Google Sign-In do
          uwierzytelniania. Działanie, konserwacja i bezpieczeństwo tych
          usług należą do odpowiednich dostawców. Deweloper nie ponosi
          odpowiedzialności za przerwy lub problemy z tymi usługami.
        </p>
      </Section>

      <Divider />

      <Section title="8. Funkcje płatne i subskrypcje">
        <p>
          Aplikacja może oferować funkcje płatne (&quot;Członkostwo
          Pro&quot; lub podobne). Po dodaniu funkcji płatnych:
        </p>
        <List
          items={[
            <>
              Wszystkie płatności są realizowane przez{" "}
              <Strong>Apple App Store</Strong> lub{" "}
              <Strong>Google Play Store</Strong>
            </>,
            "Płatności, zwroty i zarządzanie subskrypcją podlegają polityce odpowiedniej platformy",
            <>
              <Strong>
                Wnioski o zwrot należy składać do Apple lub Google
              </Strong>{" "}
              — nie można ich kierować bezpośrednio do Dewelopera
            </>,
            <>
              Funkcje płatne zapewniają użytkownikowi jedynie{" "}
              <Strong>dodatkowe doświadczenie</Strong> — nie wpływają na
              wyniki konkursów ani rankingi
            </>,
            <>
              Funkcje płatne{" "}
              <Strong>nie gwarantują wygranej</Strong> — wszyscy
              użytkownicy są równi w konkursach
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Reguły gry i mechanika">
        <p>
          Aktualne reguły gry, mechaniki punktacji, opisy minigier oraz
          metody obliczania rankingów są wyświetlane{" "}
          <Strong>wewnątrz Aplikacji</Strong>. Deweloper zastrzega sobie
          prawo do{" "}
          <Strong>
            zmiany reguł gry bez wcześniejszego powiadomienia
          </Strong>
          . Istotne zmiany ogłaszane są poprzez powiadomienia w
          Aplikacji.
        </p>
      </Section>

      <Divider />

      <Section title="10. Zmiana lub zakończenie Usługi">
        <p>Deweloper w dowolnym momencie i z dowolnego powodu może:</p>
        <List
          items={[
            "Modyfikować, dodawać lub usuwać funkcje Aplikacji",
            "Tymczasowo zawiesić Aplikację",
            "Całkowicie zakończyć działanie Aplikacji",
            "Zawiesić Usługę w określonych regionach",
          ]}
        />
        <p>
          Użytkownicy nie mogą rościć sobie żadnych roszczeń w związku z
          tymi zmianami.
        </p>
      </Section>

      <Divider />

      <Section title="11. Zmiany niniejszych Warunków">
        <p>
          Deweloper zastrzega sobie prawo do{" "}
          <Strong>aktualizacji niniejszych Warunków w dowolnym
          momencie</Strong>. Istotne zmiany:
        </p>
        <List
          items={[
            "Zostaną opublikowane na tej stronie",
            <>
              Spowodują aktualizację daty &quot;Ostatnia aktualizacja&quot;
              u góry
            </>,
            "Mogą zostać przesłane jako powiadomienia w Aplikacji",
          ]}
        />
        <p>
          Dalsze korzystanie z Aplikacji po opublikowaniu zmian oznacza
          akceptację zaktualizowanych Warunków.
        </p>
      </Section>

      <Divider />

      <Section title="12. Prawo właściwe i jurysdykcja">
        <p>
          Niniejsze Warunki podlegają{" "}
          <Strong>prawu Republiki Türkiye</Strong>. Wszelkie spory
          wynikające z lub związane z niniejszymi Warunkami będą
          rozstrzygane przez{" "}
          <Strong>
            sądy i biura egzekucyjne w Stambule
          </Strong>
          .
        </p>
      </Section>

      <Divider />

      <Section title="13. Kontakt">
        <p>W sprawach dotyczących niniejszych Warunków użytkowania:</p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Deweloper</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Strona</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
      </Section>
    </>
  );
}
