import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentPl() {
  return (
    <>
      <p>
        W iCat Studios (&quot;my&quot;, &quot;nasz&quot;) szanujemy
        prywatność użytkowników (&quot;Ty&quot;, &quot;Twój&quot;)
        aplikacji mobilnej ScoreHunter (&quot;Aplikacja&quot;). Niniejsza
        Polityka prywatności wyjaśnia, jakie dane osobowe gromadzimy, w
        jaki sposób je wykorzystujemy, z kim je udostępniamy oraz jakie
        prawa Ci przysługują podczas korzystania z naszej Aplikacji.
      </p>
      <p>
        Korzystając z Aplikacji, akceptujesz niniejszą Politykę prywatności.
      </p>

      <Divider />

      <Section title="1. Gromadzone dane">
        <SubHeading>1.1 Informacje o koncie</SubHeading>
        <p>
          Gdy używasz funkcji Zaloguj się przez Apple lub Zaloguj się przez
          Google, otrzymujemy następujące informacje od Apple lub Google:
        </p>
        <List
          items={[
            <>
              <Strong>Adres e-mail</Strong> (Apple udostępnia adres
              przekazujący, jeśli wybierzesz &quot;Ukryj mój e-mail&quot;)
            </>,
            <>
              <Strong>Imię i nazwisko</Strong> (Apple udostępnia je tylko
              przy pierwszym logowaniu; Google przy każdym logowaniu)
            </>,
            <>
              <Strong>Provider User ID</Strong> — unikalny identyfikator
              używany do rozpoznawania konta
            </>,
          ]}
        />

        <SubHeading>1.2 Dane profilu</SubHeading>
        <p>Informacje, które podajesz bezpośrednio w Aplikacji:</p>
        <List
          items={[
            <>
              <Strong>Nazwa użytkownika</Strong> (nazwa wyświetlana —
              widoczna w rankingach)
            </>,
            <>
              <Strong>Kraj</Strong>
            </>,
            <>
              <Strong>Ulubiona drużyna piłkarska</Strong>
            </>,
            <>
              <Strong>Data urodzenia</Strong>
            </>,
            <>
              <Strong>Płeć</Strong> (opcjonalnie — dostępna opcja
              &quot;wolę nie podawać&quot;)
            </>,
            <>
              <Strong>Status subskrypcji Pro</Strong> — czy posiadasz
              aktywne członkostwo Pro i jego datę wygaśnięcia
            </>,
          ]}
        />

        <SubHeading>1.3 Dane użytkowania</SubHeading>
        <p>Dane generowane podczas korzystania z Aplikacji:</p>
        <List
          items={[
            <>
              <Strong>Listy typów</Strong> (wybrane mecze i typy w trybie
              Score Hunt oraz minigrach)
            </>,
            <>
              <Strong>Ligi, do których dołączasz</Strong>
            </>,
            <>
              <Strong>Zdobyte trofea i osiągnięcia</Strong>
            </>,
            <>
              <Strong>Punkty w rankingach tygodniowych i sezonowych</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Informacje o urządzeniu i Aplikacji</SubHeading>
        <List
          items={[
            <>
              <Strong>Identyfikator urządzenia</Strong> (do anonimowej
              obsługi sesji)
            </>,
            <>
              <Strong>System operacyjny</Strong> (wersja iOS/Android)
            </>,
            <>
              <Strong>Wersja Aplikacji i platforma</Strong> (kod wersji,
              nazwa wersji oraz iOS lub Android) — wykorzystywane do
              świadczenia wsparcia specyficznego dla wersji oraz
              identyfikowania problemów ze zgodnością
            </>,
            <>
              <Strong>Token powiadomień push</Strong> — unikalny token
              wystawiany przez Apple Push Notification service (APNs) lub
              Firebase Cloud Messaging (FCM), abyśmy mogli wysyłać
              przypomnienia o meczach, powiadomienia o nagrodach oraz
              ważne ogłoszenia. Powiadomienia push możesz wyłączyć w
              dowolnym momencie w ustawieniach urządzenia.
            </>,
          ]}
        />

        <SubHeading>1.5 Identyfikator reklamowy</SubHeading>
        <p>
          Aplikacja może gromadzić Twój{" "}
          <Strong>identyfikator reklamowy</Strong> (IDFA na iOS, GAID/
          identyfikator reklam na Androidzie),{" "}
          <Strong>wyłącznie za Twoją wyraźną zgodą</Strong>:
        </p>
        <List
          items={[
            <>
              Na <Strong>iOS</Strong> przy pierwszym uruchomieniu
              Aplikacji wyświetli się okno{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>. Jeśli
              wybierzesz &quot;Poproś aplikację, aby mnie nie
              śledziła&quot;, IDFA nie jest gromadzony, a nasi partnerzy
              reklamowi otrzymują wyłącznie informacje chroniące prywatność
              za pośrednictwem SKAdNetwork firmy Apple.
            </>,
            <>
              Na <Strong>Androidzie</Strong> GAID jest gromadzony, chyba
              że zrezygnujesz przez{" "}
              <Strong>
                Ustawienia → Google → Reklamy → Usuń identyfikator reklam
              </Strong>
              .
            </>,
            <>
              Po zgromadzeniu identyfikator reklamowy jest udostępniany
              naszym partnerom reklamowym wymienionym w sekcji 3.4 w celu
              atrybucji reklam i ograniczenia częstotliwości wyświetleń.
            </>,
          ]}
        />

        <SubHeading>1.6 Dane gromadzone automatycznie</SubHeading>
        <List
          items={[
            <>
              <Strong>Adres IP</Strong> — używany do celów bezpieczeństwa,
              w tym ograniczania liczby zapytań w punktach uwierzytelniania
              (np. do 15 prób logowania na minutę z jednego IP) oraz
              przeciwdziałania nadużyciom. Nie wykorzystujemy adresów IP do
              tworzenia profili reklamowych.
            </>,
            <>
              <Strong>Raporty błędów i awarii</Strong> — używane do
              monitorowania stabilności Aplikacji. Raporty są filtrowane,
              aby wykluczyć dane umożliwiające identyfikację osoby.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Jak wykorzystujemy Twoje dane">
        <p>Zebrane dane wykorzystujemy w następujących celach:</p>
        <List
          items={[
            <>
              <Strong>Tworzenie i obsługa konta</Strong>: aby umożliwić Ci
              zalogowanie się i korzystanie z Aplikacji
            </>,
            <>
              <Strong>Doświadczenie gry</Strong>: aby zapisywać Twoje listy
              typów, obliczać punkty i tworzyć rankingi
            </>,
            <>
              <Strong>Personalizacja</Strong>: aby wyświetlać Twoją
              ulubioną drużynę i kraj w rankingach
            </>,
            <>
              <Strong>Zarządzanie subskrypcją Pro</Strong>: aby zweryfikować
              status subskrypcji i przyznać dostęp do funkcji Pro
            </>,
            <>
              <Strong>Komunikacja</Strong>: aby wysyłać ważne aktualizacje,
              ogłoszenia, powiadomienia o nagrodach oraz powiadomienia push
              dotyczące Aplikacji
            </>,
            <>
              <Strong>Dostarczenie nagród</Strong>: aby wysyłać nagrody
              fizyczne lub cyfrowe zwycięzcom konkursów (wymaga imienia,
              nazwiska i adresu e-mail)
            </>,
            <>
              <Strong>Bezpieczeństwo konta</Strong>: aby zapobiegać
              fałszywym kontom, weryfikować tożsamość i ograniczać
              podejrzaną aktywność
            </>,
            <>
              <Strong>Reklama</Strong>: aby wyświetlać reklamy w Aplikacji
              i mierzyć ich skuteczność — szczegóły w sekcji 8
            </>,
            <>
              <Strong>Analiza i ulepszenia</Strong>: aby anonimowo
              analizować statystyki użytkowania i ulepszać Aplikację
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Komu udostępniamy Twoje dane">
        <p>
          ScoreHunter{" "}
          <Strong>
            nie sprzedaje ani nie wynajmuje Twoich danych osobowych osobom
            trzecim
          </Strong>
          . Dane udostępniamy jedynie zaufanym dostawcom usług i partnerom
          reklamowym wymienionym poniżej i tylko w zakresie niezbędnym do
          działania Aplikacji.
        </p>

        <SubHeading>3.1 Dostawcy usług</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — hosting
              serwerów i bazy danych (Frankfurt, Niemcy)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — usługa zewnętrzna dostarczająca dane meczów, informacje
              o drużynach i ligach oraz powiązane zasoby wizualne (loga i
              obrazy). Z API-Football nie są udostępniane żadne dane
              osobowe. ScoreHunter nie posiada praw do logotypów i znaków
              towarowych dostarczanych przez tę usługę; szczegóły w sekcji
              11.
            </>,
            <>
              <Strong>Apple</Strong> — uwierzytelnianie Apple Sign-In
            </>,
            <>
              <Strong>Google</Strong> — uwierzytelnianie Google Sign-In
              oraz Firebase Cloud Messaging (powiadomienia push na
              Androidzie)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — przetwarza zakupy i
              odnowienia subskrypcji Pro na iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — przetwarza zakupy i
              odnowienia subskrypcji Pro na Androidzie
            </>,
            <>
              <Strong>Sentry</Strong> — monitorowanie błędów po stronie
              backendu. Filtrowanie danych umożliwiających identyfikację
              osoby jest włączone (do Sentry nie są wysyłane adresy
              e-mail, imiona ani treści użytkownika).
            </>,
          ]}
        />
        <p>
          Dostawcy usług przetwarzają dane wyłącznie w naszym imieniu i
          zgodnie z naszymi instrukcjami.
        </p>

        <SubHeading>3.2 Wymagania prawne</SubHeading>
        <p>
          Twoje dane mogą być udostępnione organom państwowym w odpowiedzi
          na nakaz sądowy, postępowanie prawne lub zobowiązanie ustawowe.
        </p>

        <SubHeading>3.3 Informacje widoczne dla innych użytkowników</SubHeading>
        <p>
          Następujące informacje są{" "}
          <Strong>widoczne dla innych użytkowników</Strong> w rankingach i
          na stronach profilu:
        </p>
        <List
          items={[
            "Twoja nazwa użytkownika (nazwa wyświetlana)",
            "Twoja flaga kraju",
            "Twoja ulubiona drużyna",
            "Zdobyte trofea",
            "Twoje punkty typów i statystyki",
            "Odznaka członkostwa Pro przy aktywnej subskrypcji",
          ]}
        />
        <p>
          Następujące informacje{" "}
          <Strong>nigdy nie są wyświetlane w Aplikacji</Strong>:
        </p>
        <List
          items={[
            "Twój adres e-mail",
            "Twoje prawdziwe imię i nazwisko",
            "Twoja data urodzenia",
            "Twoja płeć",
            "Informacje o Twoim urządzeniu",
            "Twój identyfikator reklamowy",
            "Data wygaśnięcia Twojej subskrypcji",
          ]}
        />

        <SubHeading>3.4 Partnerzy reklamowi</SubHeading>
        <p>
          Aplikacja wyświetla reklamy poprzez kilka sieci reklamowych
          (czasami określanych jako <em>mediation</em>). Po wyrażeniu zgody
          na śledzenie Twój identyfikator reklamowy oraz ograniczone dane
          techniczne mogą być udostępniane wymienionym poniżej partnerom w
          celu emisji reklam, atrybucji oraz ograniczania częstotliwości
          wyświetleń. Każdy partner posiada własną politykę prywatności:
        </p>
        <List
          items={[
            <>
              <Strong>Google AdMob</Strong> &amp; Google User Messaging
              Platform —{" "}
              <Anchor href="https://policies.google.com/privacy">
                policies.google.com/privacy
              </Anchor>
            </>,
            <>
              <Strong>AppLovin</Strong> —{" "}
              <Anchor href="https://www.applovin.com/privacy/">
                applovin.com/privacy
              </Anchor>
            </>,
            <>
              <Strong>Liftoff (Vungle)</Strong> —{" "}
              <Anchor href="https://liftoff.io/privacy-policy/">
                liftoff.io/privacy-policy
              </Anchor>
            </>,
            <>
              <Strong>IronSource</Strong> —{" "}
              <Anchor href="https://developers.is.com/ironsource-mobile/general/privacy-information/">
                developers.is.com/ironsource-mobile/general/privacy-information
              </Anchor>
            </>,
            <>
              <Strong>Unity Ads</Strong> —{" "}
              <Anchor href="https://unity.com/legal/game-player-and-app-user-privacy-policy">
                unity.com/legal/game-player-and-app-user-privacy-policy
              </Anchor>
            </>,
            <>
              <Strong>Meta Audience Network</Strong> —{" "}
              <Anchor href="https://www.facebook.com/about/privacy">
                facebook.com/about/privacy
              </Anchor>
            </>,
            <>
              <Strong>InMobi</Strong> —{" "}
              <Anchor href="https://www.inmobi.com/privacy-policy">
                inmobi.com/privacy-policy
              </Anchor>
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Gdzie i jak długo przechowujemy Twoje dane">
        <SubHeading>4.1 Lokalizacja przechowywania</SubHeading>
        <p>
          Wszystkie dane użytkowników są przechowywane w centrach danych{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . Jako usługę bazy danych wykorzystujemy Amazon RDS PostgreSQL.
        </p>

        <SubHeading>4.2 Okres przechowywania</SubHeading>
        <List
          items={[
            <>
              <Strong>Konta aktywne</Strong>: dane są przechowywane tak
              długo, jak Twoje konto pozostaje aktywne
            </>,
            <>
              <Strong>Konta nieaktywne</Strong>: konta bez logowania przez
              2 lata są automatycznie usuwane
            </>,
            <>
              <Strong>Konta usunięte</Strong>: po usunięciu konta dane
              osobowe są trwale usuwane w ciągu 30 dni (w tym kopie
              zapasowe)
            </>,
            <>
              <Strong>Statystyki anonimowe</Strong>: anonimowe statystyki
              zbiorcze mogą być przechowywane po usunięciu konta (nie
              zawierają danych osobowych)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Twoje prawa">
        <p>
          Zgodnie z RODO (UE) i KVKK (Turcja) przysługują Ci następujące
          prawa:
        </p>
        <List
          items={[
            <>
              <Strong>Prawo dostępu</Strong>: poznanie zakresu danych,
              które przetwarzamy na Twój temat
            </>,
            <>
              <Strong>Prawo do sprostowania</Strong>: żądanie korekty
              nieprawidłowych lub niekompletnych danych
            </>,
            <>
              <Strong>
                Prawo do usunięcia (&quot;prawo do bycia zapomnianym&quot;)
              </Strong>
              : żądanie usunięcia Twoich danych
            </>,
            <>
              <Strong>Prawo do ograniczenia przetwarzania</Strong>:
              ograniczenie sposobu przetwarzania Twoich danych
            </>,
            <>
              <Strong>Prawo do przenoszenia danych</Strong>: otrzymanie
              danych w formacie nadającym się do odczytu maszynowego
            </>,
            <>
              <Strong>Prawo sprzeciwu</Strong>: sprzeciwienie się
              przetwarzaniu danych
            </>,
            <>
              <Strong>Prawo do wycofania zgody</Strong> (śledzenie
              reklamowe): w dowolnym momencie możesz cofnąć zgodę ATT na
              iOS w menu{" "}
              <Strong>
                Ustawienia → Prywatność i ochrona → Śledzenie
              </Strong>
              , a na Androidzie zresetować lub usunąć identyfikator
              reklamowy
            </>,
          ]}
        />

        <SubHeading>Jak usunąć konto</SubHeading>
        <p>Konto możesz usunąć na trzy sposoby:</p>
        <OrderedList
          items={[
            <>
              <Strong>W aplikacji</Strong>: strona profilu → ustawienia
              konta → usuń konto
            </>,
            <>
              <Strong>Przez stronę WWW</Strong>:{" "}
              <Anchor href="/pl/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>E-mailem</Strong>: wyślij prośbę na adres podany
              poniżej
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Prywatność dzieci">
        <p>
          ScoreHunter{" "}
          <Strong>
            nie jest przeznaczony dla użytkowników poniżej 13. roku życia
          </Strong>
          . Świadomie nie gromadzimy danych osobowych dzieci poniżej 13. roku
          życia. Jeśli dowiemy się, że zebraliśmy dane osobowe dziecka
          poniżej 13. roku życia, usuniemy je tak szybko, jak to możliwe.
        </p>
        <p>
          Użytkownikom w wieku od 13 do 18 lat zalecamy zapoznanie się z
          niniejszą Polityką wraz z rodzicem lub opiekunem. Reklamy
          wyświetlane w Aplikacji są skonfigurowane z{" "}
          <Strong>
            ustawieniami niespersonalizowanymi / przyjaznymi rodzinie
          </Strong>{" "}
          dla użytkowników, którzy na podstawie podanej daty urodzenia są
          uznawani za niepełnoletnich.
        </p>
        <p>
          Rodzice lub opiekunowie, którzy uważają, że ich dziecko korzysta
          z Aplikacji, mogą skontaktować się z nami.
        </p>
      </Section>

      <Divider />

      <Section title="7. Bezpieczeństwo danych">
        <p>
          Stosujemy branżowe środki bezpieczeństwa, aby chronić Twoje dane:
        </p>
        <List
          items={[
            <>
              <Strong>Szyfrowanie HTTPS</Strong>: cały ruch sieciowy jest
              szyfrowany przy użyciu SSL/TLS
            </>,
            <>
              <Strong>Uwierzytelnianie bez hasła</Strong>: nie
              przechowujemy haseł; wszystkie logowania odbywają się przez
              Apple i Google
            </>,
            <>
              <Strong>Zarządzanie sesją na podstawie JWT</Strong>: sesje są
              obsługiwane za pomocą bezpiecznych, tymczasowych tokenów
            </>,
            <>
              <Strong>Ograniczanie liczby zapytań</Strong>: punkty
              uwierzytelniania i wrażliwe są ograniczane na poziomie IP, aby
              zapobiec atakom brute-force i nadużyciom
            </>,
            <>
              <Strong>Kontrola dostępu</Strong>: dostęp do bazy danych jest
              ograniczony do autoryzowanych kont systemowych
            </>,
            <>
              <Strong>Regularne aktualizacje bezpieczeństwa</Strong>: nasze
              systemy są na bieżąco aktualizowane
            </>,
          ]}
        />
        <p>
          Pamiętaj jednak, że żadna metoda transmisji w internecie nie jest
          w 100% bezpieczna.
        </p>
      </Section>

      <Divider />

      <Section title="8. Reklamy i śledzenie">
        <SubHeading>8.1 Reklamy w Aplikacji</SubHeading>
        <p>
          ScoreHunter jest częściowo wspierany przez reklamy. Aplikacja
          wyświetla reklamy poprzez <Strong>Google AdMob</Strong> oraz
          dodatkowe sieci za pośrednictwem mediation (AppLovin,
          Liftoff/Vungle, IronSource, Unity Ads, Meta Audience Network,
          InMobi). Pełną listę partnerów znajdziesz w sekcji 3.4.
        </p>
        <p>
          Reklamy mogą występować w formie banera, interstitial oraz
          rewarded. Członkowie Pro mogą doświadczać mniejszej liczby reklam
          lub ich braku, w zależności od poziomu subskrypcji.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          Na iOS 14.5 i nowszych Apple wymaga, byśmy poprosili o Twoją
          zgodę przed śledzeniem Cię między aplikacjami i witrynami. Przy
          pierwszym uruchomieniu Aplikacji zobaczysz okno{" "}
          <Strong>App Tracking Transparency</Strong>:
        </p>
        <List
          items={[
            <>
              Wybranie <Strong>&quot;Zezwól&quot;</Strong> oznacza, że
              Twój IDFA może być udostępniony naszym partnerom reklamowym
              do reklam spersonalizowanych, atrybucji oraz ograniczania
              częstotliwości wyświetleń.
            </>,
            <>
              Wybranie{" "}
              <Strong>
                &quot;Poproś aplikację, aby mnie nie śledziła&quot;
              </Strong>{" "}
              oznacza, że IDFA nie jest gromadzony. Do atrybucji
              wykorzystujemy chroniący prywatność framework{" "}
              <Strong>SKAdNetwork</Strong> firmy Apple, a wyświetlane
              reklamy są niespersonalizowane.
            </>,
          ]}
        />
        <p>
          Decyzję możesz zmienić w dowolnym momencie w{" "}
          <Strong>
            Ustawienia → Prywatność i ochrona → Śledzenie
          </Strong>
          .
        </p>

        <SubHeading>8.3 Identyfikator reklam Androida</SubHeading>
        <p>
          Na Androidzie Twój identyfikator reklamowy Google (GAID) może
          być wykorzystywany przez naszych partnerów. Możesz go w dowolnym
          momencie <Strong>zresetować</Strong> lub <Strong>usunąć</Strong>{" "}
          w{" "}
          <Strong>Ustawienia → Google → Reklamy</Strong>. Po usunięciu
          wyświetlane reklamy są niespersonalizowane.
        </p>

        <SubHeading>8.4 Pliki cookie</SubHeading>
        <p>
          Aplikacja mobilna ScoreHunter{" "}
          <Strong>nie używa plików cookie przeglądarki</Strong>. Śledzenie
          na urządzeniach mobilnych regulują opisane wyżej mechanizmy
          platformowe, a nie pliki cookie.
        </p>
      </Section>

      <Divider />

      <Section title="9. Międzynarodowe transfery danych">
        <p>
          Twoje dane mogą być przetwarzane poza krajem zamieszkania (AWS
          Frankfurt — Unia Europejska oraz centra danych naszych partnerów
          reklamowych wymienionych w sekcji 3.4, które mogą znajdować się
          poza UE). Transfery te spełniają standardy bezpieczeństwa
          wymagane przez RODO i KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Zmiany w niniejszej Polityce">
        <p>
          Możemy okresowo aktualizować niniejszą Politykę prywatności.
          Zmiany wchodzą w życie po publikacji na tej stronie, a data
          &quot;Ostatnia aktualizacja&quot; u góry zostaje odświeżona.
          Istotne zmiany ogłaszamy poprzez powiadomienie w aplikacji.
        </p>
      </Section>

      <Divider />

      <Section title="11. Treści osób trzecich i znaki towarowe">
        <p>
          ScoreHunter wyświetla dane meczów piłkarskich, nazwy drużyn i
          lig, nazwiska zawodników oraz zasoby wizualne (logotypy drużyn i
          lig) pochodzące od naszego dostawcy danych API-Football. Te
          nazwy, logotypy i znaki towarowe są własnością ich odpowiednich
          właścicieli — w tym klubów, lig, federacji i innych podmiotów
          uprawnionych.
        </p>
        <p>
          ScoreHunter{" "}
          <Strong>
            nie jest powiązany, popierany, sponsorowany ani oficjalnie
            związany z żadną ligą sportową, federacją, klubem,
            organizacją ani turniejem prezentowanym w Aplikacji
          </Strong>
          . Wszystkie nazwy, logotypy i znaki towarowe stron trzecich są
          używane wyłącznie w celach identyfikacyjnych i opisowych
          (uczciwe użycie nominatywne), aby pomóc użytkownikom rozpoznać
          mecze i drużyny, które chcą śledzić.
        </p>
        <p>
          Jeżeli jesteś podmiotem uprawnionym i uważasz, że Twój znak
          towarowy lub materiał chroniony prawem autorskim jest używany w
          Aplikacji nieprawidłowo, skontaktuj się z nami pod adresem{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Zapoznamy się ze zgłoszeniem i niezwłocznie odpowiemy oraz, w
          uzasadnionych przypadkach, usuniemy lub zastąpimy treść.
        </p>
      </Section>

      <Divider />

      <Section title="12. Kontakt">
        <p>
          W sprawach dotyczących niniejszej Polityki prywatności lub żądań
          związanych z przetwarzaniem danych:
        </p>
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
        <p>
          Wnioski na podstawie RODO lub KVKK można składać pod powyższym
          adresem e-mail lub listownie. Odpowiadamy w ciągu{" "}
          <Strong>30 dni</Strong>.
        </p>
      </Section>
    </>
  );
}
