import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentNl() {
  return (
    <>
      <p>
        Bij iCat Studios (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;)
        respecteren wij de privacy van de gebruikers (&quot;jij&quot;,
        &quot;jouw&quot;) van de mobiele applicatie ScoreHunter (&quot;de
        App&quot;). Dit privacybeleid legt uit welke persoonsgegevens wij
        verzamelen, hoe wij ze gebruiken, met wie wij ze delen en welke
        rechten je hebt bij het gebruik van onze App.
      </p>
      <p>Door de App te gebruiken ga je akkoord met dit privacybeleid.</p>

      <Divider />

      <Section title="1. Welke gegevens we verzamelen">
        <SubHeading>1.1 Accountinformatie</SubHeading>
        <p>
          Wanneer je &quot;Inloggen met Apple&quot; of &quot;Inloggen met
          Google&quot; gebruikt, ontvangen we de volgende informatie van
          Apple of Google:
        </p>
        <List
          items={[
            <>
              <Strong>E-mailadres</Strong> (Apple geeft een relais-e-mail als
              je &quot;Verberg mijn e-mail&quot; selecteert)
            </>,
            <>
              <Strong>Voor- en achternaam</Strong> (Apple verstrekt deze
              alleen bij de eerste aanmelding; Google bij elke aanmelding)
            </>,
            <>
              <Strong>Provider User ID</Strong> — een unieke identificatie om
              je account te herkennen
            </>,
          ]}
        />

        <SubHeading>1.2 Profielinformatie</SubHeading>
        <p>Informatie die je rechtstreeks in de App opgeeft:</p>
        <List
          items={[
            <>
              <Strong>Gebruikersnaam</Strong> (weergavenaam — zichtbaar in
              ranglijsten)
            </>,
            <>
              <Strong>Land</Strong>
            </>,
            <>
              <Strong>Favoriete voetbalclub</Strong>
            </>,
            <>
              <Strong>Geboortedatum</Strong>
            </>,
            <>
              <Strong>Geslacht</Strong> (optioneel — &quot;zeg ik
              liever niet&quot; is beschikbaar)
            </>,
            <>
              <Strong>Pro-abonnementsstatus</Strong> — of je een actief
              Pro-lidmaatschap hebt en de vervaldatum
            </>,
          ]}
        />

        <SubHeading>1.3 Gebruiksgegevens</SubHeading>
        <p>Gegevens die ontstaan tijdens het gebruik van de App:</p>
        <List
          items={[
            <>
              <Strong>Voorspellingslijsten</Strong> (geselecteerde
              wedstrijden en voorspellingen voor Score Hunt en mini-games)
            </>,
            <>
              <Strong>Competities waaraan je deelneemt</Strong>
            </>,
            <>
              <Strong>Behaalde trofeeën en prestaties</Strong>
            </>,
            <>
              <Strong>Wekelijkse en seizoensranglijstpunten</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Apparaat- en app-informatie</SubHeading>
        <List
          items={[
            <>
              <Strong>Apparaat-ID</Strong> (voor anoniem sessiebeheer)
            </>,
            <>
              <Strong>Besturingssysteem</Strong> (iOS-/Android-versie)
            </>,
            <>
              <Strong>App-versie en platform</Strong> (versiecode,
              versienaam en of je iOS of Android gebruikt) — wordt gebruikt
              om versie-specifieke ondersteuning te bieden en
              compatibiliteitsproblemen op te sporen
            </>,
            <>
              <Strong>Push-notificatietoken</Strong> — een unieke token,
              uitgegeven door Apple Push Notification service (APNs) of
              Firebase Cloud Messaging (FCM), waarmee we
              wedstrijdherinneringen, prijsmeldingen en belangrijke
              aankondigingen kunnen bezorgen. Je kunt push-notificaties op
              elk moment uitzetten via de instellingen van je apparaat.
            </>,
          ]}
        />

        <SubHeading>1.5 Reclame-identificator</SubHeading>
        <p>
          De App kan je <Strong>reclame-identificator</Strong> verzamelen
          (IDFA op iOS, GAID/Reclame-ID op Android),{" "}
          <Strong>uitsluitend met je uitdrukkelijke toestemming</Strong>:
        </p>
        <List
          items={[
            <>
              Op <Strong>iOS</Strong> zie je bij de eerste start van de App
              een venster van <Strong>App Tracking Transparency (ATT)</Strong>
              . Als je &quot;Vraag App om mij niet te volgen&quot; kiest,
              wordt de IDFA niet verzameld en ontvangen onze
              advertentiepartners alleen privacy-vriendelijke informatie via
              Apple&apos;s SKAdNetwork.
            </>,
            <>
              Op <Strong>Android</Strong> wordt de GAID verzameld tenzij je
              je afmeldt via{" "}
              <Strong>
                Instellingen → Google → Advertenties → Reclame-ID
                verwijderen
              </Strong>
              .
            </>,
            <>
              Wanneer verzameld, wordt de reclame-identificator gedeeld met
              de advertentiepartners genoemd in sectie 3.4 voor
              advertentie-attributie en frequentielimiet.
            </>,
          ]}
        />

        <SubHeading>1.6 Automatisch verzamelde gegevens</SubHeading>
        <List
          items={[
            <>
              <Strong>IP-adres</Strong> — wordt gebruikt voor
              beveiligingsdoeleinden, waaronder snelheidslimieten op
              authenticatie-eindpunten (bijv. tot 15 aanmeldpogingen per
              minuut per IP) en misbruikpreventie. We gebruiken IP-adressen
              niet om reclameprofielen op te bouwen.
            </>,
            <>
              <Strong>Fout- en crashrapporten</Strong> — gebruikt om de
              stabiliteit van de app te bewaken. De rapporten worden
              gefilterd om persoonlijk identificeerbare informatie uit te
              sluiten.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Hoe we je gegevens gebruiken">
        <p>We gebruiken de verzamelde gegevens voor de volgende doeleinden:</p>
        <List
          items={[
            <>
              <Strong>Account aanmaken en beheren</Strong>: zodat je kunt
              inloggen en de App gebruiken
            </>,
            <>
              <Strong>Spelervaring</Strong>: om je voorspellingslijsten op te
              slaan, je punten te berekenen en ranglijsten op te bouwen
            </>,
            <>
              <Strong>Personalisatie</Strong>: om je favoriete club en land
              in ranglijsten te tonen
            </>,
            <>
              <Strong>Beheer van Pro-abonnement</Strong>: om je
              abonnementsstatus te verifiëren en toegang tot Pro-functies te
              verlenen
            </>,
            <>
              <Strong>Communicatie</Strong>: om belangrijke updates,
              aankondigingen, prijsmeldingen en push-notificaties over de App
              te versturen
            </>,
            <>
              <Strong>Prijsbezorging</Strong>: om fysieke of digitale prijzen
              naar wedstrijdwinnaars te verzenden (vereist naam en e-mail)
            </>,
            <>
              <Strong>Accountbeveiliging</Strong>: om frauduleuze accounts te
              voorkomen, gebruikersidentiteit te verifiëren en verdachte
              activiteit te beperken
            </>,
            <>
              <Strong>Reclame</Strong>: om advertenties in de App te tonen en
              hun effectiviteit te meten — zie sectie 8 voor details
            </>,
            <>
              <Strong>Analyse en verbetering</Strong>: om gebruiksstatistieken
              anoniem te analyseren en de App te verbeteren
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Met wie we je gegevens delen">
        <p>
          ScoreHunter{" "}
          <Strong>
            verkoopt of verhuurt je persoonsgegevens niet aan derden
          </Strong>
          . We delen gegevens uitsluitend met de hieronder vermelde
          betrouwbare dienstverleners en advertentiepartners, en alleen voor
          zover dat nodig is om de App te laten functioneren.
        </p>

        <SubHeading>3.1 Dienstverleners</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — server- en
              databasehosting (Frankfurt, Duitsland)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — externe dienst die wedstrijddata, ploeg- en
              competitie-informatie en bijbehorende visuele assets (logo&apos;s
              en afbeeldingen) levert. Er worden geen persoonsgegevens met
              API-Football gedeeld. ScoreHunter bezit geen rechten op de
              logo&apos;s of merken die via deze dienst geleverd worden; zie
              sectie 11 voor details.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In-authenticatie
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In-authenticatie en
              Firebase Cloud Messaging (push-notificaties op Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — verwerkt aankopen en
              verlengingen van het Pro-abonnement op iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — verwerkt aankopen en
              verlengingen van het Pro-abonnement op Android
            </>,
            <>
              <Strong>Sentry</Strong> — backend foutmonitoring. Filtering
              van persoonlijk identificeerbare informatie is ingeschakeld
              (geen e-mailadres, naam of gebruikersinhoud wordt naar Sentry
              gestuurd).
            </>,
          ]}
        />
        <p>
          Deze dienstverleners verwerken gegevens uitsluitend namens ons en
          volgens onze instructies.
        </p>

        <SubHeading>3.2 Wettelijke verplichtingen</SubHeading>
        <p>
          Je gegevens kunnen op grond van een gerechtelijk bevel, juridisch
          onderzoek of wettelijke verplichting met autoriteiten worden
          gedeeld.
        </p>

        <SubHeading>3.3 Voor andere gebruikers zichtbare informatie</SubHeading>
        <p>
          De volgende informatie is{" "}
          <Strong>zichtbaar voor andere gebruikers</Strong> in ranglijsten en
          op profielpagina&apos;s:
        </p>
        <List
          items={[
            "Je gebruikersnaam (weergavenaam)",
            "Je landvlag",
            "Je favoriete club",
            "Behaalde trofeeën",
            "Je voorspellingsscores en statistieken",
            "Een Pro-lidmaatschapsbadge bij een actief abonnement",
          ]}
        />
        <p>
          De volgende informatie wordt{" "}
          <Strong>nooit in de App getoond</Strong>:
        </p>
        <List
          items={[
            "Je e-mailadres",
            "Je echte voor- en achternaam",
            "Je geboortedatum",
            "Je geslacht",
            "Je apparaatinformatie",
            "Je reclame-identificator",
            "De vervaldatum van je abonnement",
          ]}
        />

        <SubHeading>3.4 Advertentiepartners</SubHeading>
        <p>
          De App toont advertenties via meerdere advertentienetwerken (soms{" "}
          <em>mediation</em> genoemd). Wanneer je toestemming voor tracking
          hebt gegeven, kunnen je reclame-identificator en beperkte
          technische gegevens worden gedeeld met onderstaande partners voor
          advertentielevering, attributie en frequentielimiet. Elke partner
          hanteert een eigen privacybeleid:
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

      <Section title="4. Waar en hoe lang we je gegevens bewaren">
        <SubHeading>4.1 Opslaglocatie</SubHeading>
        <p>
          Alle gebruikersgegevens worden opgeslagen in de datacenters van{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . We gebruiken Amazon RDS PostgreSQL als databasedienst.
        </p>

        <SubHeading>4.2 Bewaartermijn</SubHeading>
        <List
          items={[
            <>
              <Strong>Actieve accounts</Strong>: je gegevens worden bewaard
              zolang je account actief is
            </>,
            <>
              <Strong>Inactieve accounts</Strong>: accounts zonder login
              gedurende 2 jaar worden automatisch verwijderd
            </>,
            <>
              <Strong>Verwijderde accounts</Strong>: bij verwijdering worden
              je persoonsgegevens binnen 30 dagen permanent gewist (inclusief
              back-ups)
            </>,
            <>
              <Strong>Anonieme statistieken</Strong>: anonieme geaggregeerde
              statistieken kunnen na verwijdering worden bewaard (zonder
              persoonsgegevens)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Jouw rechten">
        <p>Op grond van GDPR (EU) en KVKK (Turkije) heb je de volgende rechten:</p>
        <List
          items={[
            <>
              <Strong>Recht op inzage</Strong>: weten welke gegevens we over
              je verwerken
            </>,
            <>
              <Strong>Recht op rectificatie</Strong>: onjuiste of onvolledige
              gegevens laten corrigeren
            </>,
            <>
              <Strong>Recht op verwijdering (&quot;recht om vergeten te
              worden&quot;)</Strong>: verwijdering van je gegevens vragen
            </>,
            <>
              <Strong>Recht op beperking van verwerking</Strong>: bepalen hoe
              je gegevens worden verwerkt
            </>,
            <>
              <Strong>Recht op gegevensoverdraagbaarheid</Strong>: je
              gegevens in een machineleesbaar formaat ontvangen
            </>,
            <>
              <Strong>Recht van bezwaar</Strong>: bezwaar maken tegen
              gegevensverwerking
            </>,
            <>
              <Strong>Recht om toestemming in te trekken</Strong> (reclame-tracking):
              je kunt de ATT-toestemming op iOS op elk moment intrekken via{" "}
              <Strong>Instellingen → Privacy en beveiliging → Volgen</Strong>
              , of je reclame-ID op Android op elk moment resetten of
              verwijderen
            </>,
          ]}
        />

        <SubHeading>Je account verwijderen</SubHeading>
        <p>Je kunt je account op drie manieren verwijderen:</p>
        <OrderedList
          items={[
            <>
              <Strong>In de app</Strong>: profielpagina → accountinstellingen
              → account verwijderen
            </>,
            <>
              <Strong>Op het web</Strong>:{" "}
              <Anchor href="/nl/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Per e-mail</Strong>: stuur een verzoek naar het
              hieronder vermelde contactadres
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Privacy van kinderen">
        <p>
          ScoreHunter is{" "}
          <Strong>niet bedoeld voor gebruikers jonger dan 13 jaar</Strong>.
          We verzamelen niet bewust persoonsgegevens van kinderen onder de 13
          jaar. Als we ontdekken dat we persoonsgegevens van een kind onder
          de 13 hebben verzameld, verwijderen we deze zo snel mogelijk.
        </p>
        <p>
          Voor gebruikers tussen 13 en 18 jaar raden we aan dit privacybeleid
          samen met een ouder of voogd door te nemen. Reclame in de App wordt
          ingesteld met{" "}
          <Strong>
            niet-gepersonaliseerde / gezinsvriendelijke instellingen
          </Strong>{" "}
          voor gebruikers die op basis van de opgegeven geboortedatum
          minderjarig lijken.
        </p>
        <p>
          Ouders of voogden die vermoeden dat hun kind de App gebruikt,
          kunnen contact met ons opnemen.
        </p>
      </Section>

      <Divider />

      <Section title="7. Gegevensbeveiliging">
        <p>
          We treffen industriestandaard beveiligingsmaatregelen om je
          gegevens te beschermen:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS-encryptie</Strong>: al het netwerkverkeer wordt
              versleuteld via SSL/TLS
            </>,
            <>
              <Strong>Wachtwoordloze authenticatie</Strong>: we slaan geen
              wachtwoorden op; alle aanmeldingen lopen via Apple en Google
            </>,
            <>
              <Strong>JWT-gebaseerd sessiebeheer</Strong>: sessies worden
              beheerd met veilige, tijdelijke tokens
            </>,
            <>
              <Strong>Snelheidslimieten</Strong>:
              authenticatie- en gevoelige eindpunten zijn per IP gelimiteerd
              om brute-force en misbruik tegen te gaan
            </>,
            <>
              <Strong>Toegangscontrole</Strong>: databasetoegang is beperkt
              tot geautoriseerde systeemaccounts
            </>,
            <>
              <Strong>Regelmatige beveiligingsupdates</Strong>: onze systemen
              worden up-to-date gehouden
            </>,
          ]}
        />
        <p>
          Houd er echter rekening mee dat geen enkele
          transmissiemethode via het internet 100% veilig is.
        </p>
      </Section>

      <Divider />

      <Section title="8. Reclame en tracking">
        <SubHeading>8.1 Reclame in de App</SubHeading>
        <p>
          ScoreHunter wordt deels door reclame ondersteund. De App toont
          advertenties via <Strong>Google AdMob</Strong> en aanvullende
          netwerken via mediation (AppLovin, Liftoff/Vungle, IronSource,
          Unity Ads, Meta Audience Network, InMobi). Zie sectie 3.4 voor de
          volledige partnerlijst.
        </p>
        <p>
          Advertenties kunnen verschijnen als banner, interstitial of
          rewarded. Pro-leden kunnen, afhankelijk van het abonnementsniveau,
          minder of geen advertenties zien.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          Op iOS 14.5 en hoger moeten we van Apple om jouw toestemming vragen
          voordat we je tussen apps en websites kunnen volgen. Bij de eerste
          start van de App zie je het{" "}
          <Strong>App Tracking Transparency</Strong>-dialoogvenster:
        </p>
        <List
          items={[
            <>
              Als je <Strong>&quot;Sta toe&quot;</Strong> kiest, kan je
              IDFA worden gedeeld met onze advertentiepartners voor
              gepersonaliseerde reclame, attributie en frequentielimiet.
            </>,
            <>
              Als je{" "}
              <Strong>&quot;Vraag App om mij niet te volgen&quot;</Strong>{" "}
              kiest, wordt de IDFA niet verzameld. Voor attributie gebruiken
              we Apple&apos;s privacy-vriendelijke{" "}
              <Strong>SKAdNetwork</Strong>-framework, en de getoonde
              advertenties zijn niet-gepersonaliseerd.
            </>,
          ]}
        />
        <p>
          Je kunt je keuze op elk moment wijzigen via{" "}
          <Strong>Instellingen → Privacy en beveiliging → Volgen</Strong>.
        </p>

        <SubHeading>8.3 Android-reclame-ID</SubHeading>
        <p>
          Op Android kan onze advertentiepartner je Google
          Advertising ID (GAID) gebruiken. Je kunt je reclame-ID op elk
          moment <Strong>resetten</Strong> of <Strong>verwijderen</Strong>{" "}
          via <Strong>Instellingen → Google → Advertenties</Strong>. Na
          verwijdering zijn de getoonde advertenties niet-gepersonaliseerd.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          De mobiele applicatie ScoreHunter{" "}
          <Strong>gebruikt geen browsercookies</Strong>. Tracking op mobiel
          wordt geregeld door de bovengenoemde mechanismen op platformniveau,
          niet door cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Internationale gegevensoverdrachten">
        <p>
          Je gegevens kunnen buiten je woonland worden verwerkt (AWS
          Frankfurt — Europese Unie, en de datacenters van onze
          advertentiepartners genoemd in sectie 3.4, die buiten de EU kunnen
          zijn gevestigd). Deze overdrachten voldoen aan de
          beveiligingsstandaarden die door GDPR en KVKK worden vereist.
        </p>
      </Section>

      <Divider />

      <Section title="10. Wijzigingen in dit beleid">
        <p>
          We kunnen dit privacybeleid van tijd tot tijd bijwerken.
          Wijzigingen treden in werking zodra ze op deze pagina worden
          gepubliceerd, en de datum &quot;Laatst bijgewerkt&quot; bovenaan
          wordt vernieuwd. Belangrijke wijzigingen worden via een
          in-app-melding aangekondigd.
        </p>
      </Section>

      <Divider />

      <Section title="11. Inhoud van derden en handelsmerken">
        <p>
          ScoreHunter toont voetbalwedstrijddata, ploegnamen,
          competitienamen, spelersnamen en visuele assets (zoals ploeg- en
          competitielogo&apos;s) die afkomstig zijn van onze dataleverancier
          API-Football. Deze namen, logo&apos;s en handelsmerken zijn eigendom
          van hun respectievelijke eigenaren — clubs, competities, bonden en
          andere rechthebbenden.
        </p>
        <p>
          ScoreHunter is{" "}
          <Strong>
            niet gelieerd aan, ondersteund door, gesponsord door of officieel
            verbonden met enige sportcompetitie, bond, club, organisatie of
            wedstrijd die in de App is opgenomen
          </Strong>
          . Alle namen, logo&apos;s en handelsmerken van derden worden
          uitsluitend gebruikt voor identificatie en beschrijving (nominative
          fair use), om gebruikers te helpen de wedstrijden en ploegen te
          herkennen die ze willen volgen.
        </p>
        <p>
          Als je rechthebbende bent en denkt dat je handelsmerk of
          auteursrechtelijk beschermd materiaal in de App onjuist wordt
          gebruikt, neem dan contact op via{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . We bekijken het verzoek en reageren snel; waar passend wordt de
          inhoud verwijderd of vervangen.
        </p>
      </Section>

      <Divider />

      <Section title="12. Contact">
        <p>
          Voor vragen over dit privacybeleid of verzoeken over
          gegevensverwerking:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Ontwikkelaar</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Website</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Verzoeken op grond van GDPR of KVKK kunnen worden verzonden naar
          het bovenstaande e-mailadres of per post. We reageren binnen{" "}
          <Strong>30 dagen</Strong>.
        </p>
      </Section>
    </>
  );
}
