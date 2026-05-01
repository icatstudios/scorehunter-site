import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentSv() {
  return (
    <>
      <p>
        På iCat Studios (&quot;vi&quot;, &quot;oss&quot;, &quot;vår&quot;)
        respekterar vi integriteten för användarna (&quot;du&quot;,
        &quot;din&quot;) av mobilappen ScoreHunter (&quot;Appen&quot;).
        Denna integritetspolicy förklarar vilka personuppgifter vi samlar
        in, hur vi använder dem, med vem vi delar dem och dina rättigheter
        när du använder Appen.
      </p>
      <p>
        Genom att använda Appen samtycker du till denna integritetspolicy.
      </p>

      <Divider />

      <Section title="1. Data vi samlar in">
        <SubHeading>1.1 Kontoinformation</SubHeading>
        <p>
          När du använder Logga in med Apple eller Logga in med Google får
          vi följande information från Apple eller Google:
        </p>
        <List
          items={[
            <>
              <Strong>E-postadress</Strong> (Apple skickar en relä-e-post
              om du väljer &quot;Dölj min e-post&quot;)
            </>,
            <>
              <Strong>För- och efternamn</Strong> (Apple endast vid första
              inloggningen; Google vid varje inloggning)
            </>,
            <>
              <Strong>Provider User ID</Strong> — en unik identifierare för
              att känna igen ditt konto
            </>,
          ]}
        />

        <SubHeading>1.2 Profilinformation</SubHeading>
        <p>Information du anger direkt i Appen:</p>
        <List
          items={[
            <>
              <Strong>Användarnamn</Strong> (visningsnamn — synligt i
              topplistor)
            </>,
            <>
              <Strong>Land</Strong>
            </>,
            <>
              <Strong>Favoritfotbollslag</Strong>
            </>,
            <>
              <Strong>Födelsedatum</Strong>
            </>,
            <>
              <Strong>Kön</Strong> (valfritt — &quot;vill ej uppge&quot;
              är ett alternativ)
            </>,
            <>
              <Strong>Pro-prenumerationsstatus</Strong> — om du har ett
              aktivt Pro-medlemskap och dess utgångsdatum
            </>,
          ]}
        />

        <SubHeading>1.3 Användningsdata</SubHeading>
        <p>Data som genereras vid användning av Appen:</p>
        <List
          items={[
            <>
              <Strong>Tipplistor</Strong> (utvalda matcher och tipps för
              Score Hunt och minispel)
            </>,
            <>
              <Strong>Ligor du går med i</Strong>
            </>,
            <>
              <Strong>Vunna troféer och prestationer</Strong>
            </>,
            <>
              <Strong>Vecko- och säsongspoäng i topplistor</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Enhets- och appinformation</SubHeading>
        <List
          items={[
            <>
              <Strong>Enhets-ID</Strong> (för anonym sessionshantering)
            </>,
            <>
              <Strong>Operativsystem</Strong> (iOS-/Android-version)
            </>,
            <>
              <Strong>Appversion och plattform</Strong> (versionskod,
              versionsnamn samt om du använder iOS eller Android) — används
              för att tillhandahålla versionsspecifik support och
              identifiera kompatibilitetsproblem
            </>,
            <>
              <Strong>Push-notistoken</Strong> — en unik token från Apple
              Push Notification service (APNs) eller Firebase Cloud
              Messaging (FCM) för att leverera matchpåminnelser,
              prismeddelanden och viktiga aviseringar. Du kan stänga av
              push-notiser när som helst i enhetens inställningar.
            </>,
          ]}
        />

        <SubHeading>1.5 Annonseringsidentifierare</SubHeading>
        <p>
          Appen kan samla in din <Strong>annonseringsidentifierare</Strong>{" "}
          (IDFA på iOS, GAID/Annonserings-ID på Android),{" "}
          <Strong>endast med ditt uttryckliga samtycke</Strong>:
        </p>
        <List
          items={[
            <>
              På <Strong>iOS</Strong> visas en{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>-prompt vid
              första start. Om du väljer &quot;Be appen att inte spåra
              mig&quot; samlas IDFA inte in, och våra annonspartners får
              endast integritetsbevarande information via Apples
              SKAdNetwork.
            </>,
            <>
              På <Strong>Android</Strong> samlas GAID in om du inte väljer
              bort den via{" "}
              <Strong>
                Inställningar → Google → Annonser → Ta bort annonserings-ID
              </Strong>
              .
            </>,
            <>
              När den samlas in delas annonseringsidentifieraren med våra
              annonspartners i avsnitt 3.4 för annonsattribution och
              frekvensbegränsning.
            </>,
          ]}
        />

        <SubHeading>1.6 Automatiskt insamlade data</SubHeading>
        <List
          items={[
            <>
              <Strong>IP-adress</Strong> — används för säkerhetsändamål,
              inklusive hastighetsbegränsning på autentiseringsendpunkter
              (t.ex. upp till 15 inloggningsförsök per minut per IP) samt
              missbruksförebyggande. Vi använder inte IP-adresser för att
              bygga annonsprofiler.
            </>,
            <>
              <Strong>Fel- och kraschrapporter</Strong> — används för att
              övervaka appens stabilitet. Rapporterna filtreras för att
              utesluta personidentifierbar information.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Hur vi använder dina data">
        <p>Vi använder de insamlade uppgifterna för följande ändamål:</p>
        <List
          items={[
            <>
              <Strong>Skapa och hantera konto</Strong>: så att du kan logga
              in och använda Appen
            </>,
            <>
              <Strong>Spelupplevelse</Strong>: för att spara dina
              tipplistor, beräkna poäng och bygga topplistor
            </>,
            <>
              <Strong>Personlig anpassning</Strong>: för att visa ditt
              favoritlag och land i topplistor
            </>,
            <>
              <Strong>Hantering av Pro-prenumeration</Strong>: för att
              verifiera prenumerationsstatus och bevilja åtkomst till
              Pro-funktioner
            </>,
            <>
              <Strong>Kommunikation</Strong>: för att skicka viktiga
              uppdateringar, meddelanden, prismeddelanden och push-notiser
              om Appen
            </>,
            <>
              <Strong>Prisleverans</Strong>: för att skicka fysiska eller
              digitala priser till tävlingsvinnare (kräver namn och e-post)
            </>,
            <>
              <Strong>Kontosäkerhet</Strong>: för att förhindra bedrägliga
              konton, verifiera användaridentitet och begränsa misstänkta
              aktiviteter
            </>,
            <>
              <Strong>Annonsering</Strong>: för att visa annonser i Appen
              och mäta deras prestanda — se avsnitt 8 för detaljer
            </>,
            <>
              <Strong>Analys och förbättring</Strong>: för att analysera
              användningsstatistik anonymt och förbättra Appen
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Med vem vi delar dina data">
        <p>
          ScoreHunter{" "}
          <Strong>
            säljer eller hyr inte ut dina personuppgifter till tredje part
          </Strong>
          . Vi delar endast data med de pålitliga tjänsteleverantörer och
          annonspartners som anges nedan, och endast i den utsträckning som
          är nödvändig för att driva Appen.
        </p>

        <SubHeading>3.1 Tjänsteleverantörer</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — server- och
              databashosting (Frankfurt, Tyskland)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — tredjepartstjänst som tillhandahåller matchdata, lag- och
              ligainformation samt tillhörande visuella tillgångar (logotyper
              och bilder). Inga personuppgifter delas med API-Football.
              ScoreHunter äger inte rättigheterna till logotyper eller
              varumärken som levereras via denna tjänst; se avsnitt 11 för
              detaljer.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In-autentisering
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In-autentisering och
              Firebase Cloud Messaging (push-notiser på Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — hanterar köp och
              förnyelser av Pro-prenumeration på iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — hanterar köp och
              förnyelser av Pro-prenumeration på Android
            </>,
            <>
              <Strong>Sentry</Strong> — backend-felövervakning. Filtrering
              av personidentifierbar information är aktiverad (ingen
              e-postadress, namn eller användarinnehåll skickas till
              Sentry).
            </>,
          ]}
        />
        <p>
          Dessa tjänsteleverantörer behandlar endast data å våra vägnar och
          enligt våra instruktioner.
        </p>

        <SubHeading>3.2 Lagkrav</SubHeading>
        <p>
          Dina data kan delas med myndigheter som svar på domstolsbeslut,
          rättslig utredning eller laglig skyldighet.
        </p>

        <SubHeading>3.3 Information synlig för andra användare</SubHeading>
        <p>
          Följande information är{" "}
          <Strong>synlig för andra användare</Strong> i topplistor och på
          profilsidor:
        </p>
        <List
          items={[
            "Ditt användarnamn (visningsnamn)",
            "Din landsflagga",
            "Ditt favoritlag",
            "Vunna troféer",
            "Dina tipspoäng och statistik",
            "Ett Pro-medlemskapsmärke vid aktiv prenumeration",
          ]}
        />
        <p>
          Följande information visas{" "}
          <Strong>aldrig i Appen</Strong>:
        </p>
        <List
          items={[
            "Din e-postadress",
            "Ditt riktiga för- och efternamn",
            "Ditt födelsedatum",
            "Ditt kön",
            "Din enhetsinformation",
            "Din annonseringsidentifierare",
            "Utgångsdatum för din prenumeration",
          ]}
        />

        <SubHeading>3.4 Annonspartners</SubHeading>
        <p>
          Appen visar annonser via flera annonsnätverk (ibland kallat{" "}
          <em>mediation</em>). När du har samtyckt till spårning kan din
          annonseringsidentifierare och begränsade tekniska data delas med
          partnerna nedan för annonsleverans, attribution och
          frekvensbegränsning. Varje partner har sin egen integritetspolicy:
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

      <Section title="4. Var och hur länge vi lagrar dina data">
        <SubHeading>4.1 Lagringsplats</SubHeading>
        <p>
          All användardata lagras i datacentren{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . Som databastjänst använder vi Amazon RDS PostgreSQL.
        </p>

        <SubHeading>4.2 Lagringsperiod</SubHeading>
        <List
          items={[
            <>
              <Strong>Aktiva konton</Strong>: dina data sparas så länge
              ditt konto är aktivt
            </>,
            <>
              <Strong>Inaktiva konton</Strong>: konton utan inloggning på
              2 år raderas automatiskt
            </>,
            <>
              <Strong>Raderade konton</Strong>: när du raderar ditt konto
              raderas dina personuppgifter permanent inom 30 dagar
              (inklusive säkerhetskopior)
            </>,
            <>
              <Strong>Anonym statistik</Strong>: anonym aggregerad
              statistik kan behållas efter radering (utan personuppgifter)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Dina rättigheter">
        <p>
          Enligt GDPR (EU) och KVKK (Turkiet) har du följande rättigheter:
        </p>
        <List
          items={[
            <>
              <Strong>Rätt till tillgång</Strong>: få veta vilka data vi
              behandlar om dig
            </>,
            <>
              <Strong>Rätt till rättelse</Strong>: begära korrigering av
              felaktiga eller ofullständiga data
            </>,
            <>
              <Strong>
                Rätt till radering (&quot;rätten att bli glömd&quot;)
              </Strong>
              : begära radering av dina data
            </>,
            <>
              <Strong>Rätt till begränsning av behandling</Strong>:
              begränsa hur dina data behandlas
            </>,
            <>
              <Strong>Rätt till dataportabilitet</Strong>: få dina data i
              ett maskinläsbart format
            </>,
            <>
              <Strong>Rätt att invända</Strong>: invända mot databehandling
            </>,
            <>
              <Strong>Rätt att återkalla samtycke</Strong>{" "}
              (annonseringsspårning): du kan när som helst återkalla
              ATT-tillståndet på iOS via{" "}
              <Strong>
                Inställningar → Integritet och säkerhet → Spårning
              </Strong>
              , eller återställa/radera ditt annonserings-ID på Android när
              som helst
            </>,
          ]}
        />

        <SubHeading>Så raderar du ditt konto</SubHeading>
        <p>Du kan radera ditt konto på tre sätt:</p>
        <OrderedList
          items={[
            <>
              <Strong>I appen</Strong>: profilsidan → kontoinställningar →
              radera konto
            </>,
            <>
              <Strong>På webben</Strong>:{" "}
              <Anchor href="/sv/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Via e-post</Strong>: skicka en begäran till
              kontaktadressen nedan
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Barns integritet">
        <p>
          ScoreHunter är{" "}
          <Strong>inte avsedd för användare under 13 år</Strong>. Vi samlar
          inte medvetet in personuppgifter från barn under 13 år. Om vi får
          kännedom om att vi har samlat in personuppgifter från ett barn
          under 13 år raderar vi dem så snabbt som möjligt.
        </p>
        <p>
          För användare mellan 13 och 18 år rekommenderar vi att gå igenom
          denna integritetspolicy tillsammans med en förälder eller
          vårdnadshavare. Annonser i Appen konfigureras med{" "}
          <Strong>
            icke-personliga / familjevänliga inställningar
          </Strong>{" "}
          för användare som baserat på det angivna födelsedatumet förefaller
          vara minderåriga.
        </p>
        <p>
          Föräldrar eller vårdnadshavare som tror att deras barn använder
          Appen kan kontakta oss.
        </p>
      </Section>

      <Divider />

      <Section title="7. Datasäkerhet">
        <p>
          Vi vidtar branschstandard säkerhetsåtgärder för att skydda dina
          data:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS-kryptering</Strong>: all nätverkstrafik
              krypteras via SSL/TLS
            </>,
            <>
              <Strong>Lösenordslös autentisering</Strong>: vi lagrar inga
              lösenord; alla inloggningar går via Apple och Google
            </>,
            <>
              <Strong>JWT-baserad sessionshantering</Strong>: sessioner
              hanteras med säkra, tillfälliga tokens
            </>,
            <>
              <Strong>Hastighetsbegränsning</Strong>:
              autentiserings- och känsliga endpunkter är IP-begränsade för
              att förhindra brute-force och missbruk
            </>,
            <>
              <Strong>Åtkomstkontroll</Strong>: databasåtkomst är begränsad
              till behöriga systemkonton
            </>,
            <>
              <Strong>Regelbundna säkerhetsuppdateringar</Strong>: våra
              system hålls uppdaterade
            </>,
          ]}
        />
        <p>
          Observera dock att ingen överföringsmetod över internet är 100%
          säker.
        </p>
      </Section>

      <Divider />

      <Section title="8. Annonsering och spårning">
        <SubHeading>8.1 Annonsering i Appen</SubHeading>
        <p>
          ScoreHunter stöds delvis av annonsering. Appen visar annonser via{" "}
          <Strong>Google AdMob</Strong> och ytterligare nätverk via
          mediation (AppLovin, Liftoff/Vungle, IronSource, Unity Ads, Meta
          Audience Network, InMobi). Se avsnitt 3.4 för fullständig
          partnerlista.
        </p>
        <p>
          Annonser kan vara banner-, interstitial- eller rewarded-format.
          Pro-medlemmar kan, beroende på prenumerationsnivå, uppleva färre
          eller inga annonser.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          På iOS 14.5 och senare kräver Apple att vi ber om ditt tillstånd
          innan vi spårar dig mellan appar och webbplatser. Vid första start
          av Appen visas en{" "}
          <Strong>App Tracking Transparency</Strong>-prompt:
        </p>
        <List
          items={[
            <>
              Om du väljer <Strong>&quot;Tillåt&quot;</Strong> kan din IDFA
              delas med våra annonspartners för personliga annonser,
              attribution och frekvensbegränsning.
            </>,
            <>
              Om du väljer{" "}
              <Strong>&quot;Be appen att inte spåra mig&quot;</Strong>{" "}
              samlas IDFA inte in. För attribution använder vi Apples
              integritetsbevarande{" "}
              <Strong>SKAdNetwork</Strong>-ramverk, och annonserna kommer
              att vara icke-personliga.
            </>,
          ]}
        />
        <p>
          Du kan ändra ditt val när som helst i{" "}
          <Strong>
            Inställningar → Integritet och säkerhet → Spårning
          </Strong>
          .
        </p>

        <SubHeading>8.3 Android-annonserings-ID</SubHeading>
        <p>
          På Android kan vår annonspartners använda ditt Google Advertising
          ID (GAID). Du kan <Strong>återställa</Strong> eller{" "}
          <Strong>radera</Strong> ditt annonserings-ID när som helst via{" "}
          <Strong>Inställningar → Google → Annonser</Strong>. När det är
          raderat blir annonserna icke-personliga.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          Mobilappen ScoreHunter{" "}
          <Strong>använder inga webbläsarcookies</Strong>. Spårning på mobil
          styrs av plattformsmekanismerna ovan, inte av cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Internationella dataöverföringar">
        <p>
          Dina data kan behandlas utanför ditt hemland (AWS Frankfurt — EU,
          samt datacentren hos våra annonspartners som anges i avsnitt 3.4
          och som kan ligga utanför EU). Dessa överföringar uppfyller de
          säkerhetskrav som GDPR och KVKK ställer.
        </p>
      </Section>

      <Divider />

      <Section title="10. Ändringar i denna policy">
        <p>
          Vi kan uppdatera denna integritetspolicy då och då. Ändringar
          träder i kraft när de publiceras på denna sida och datumet
          &quot;Senast uppdaterad&quot; överst förnyas. Väsentliga
          ändringar tillkännages via in-app-aviseringar.
        </p>
      </Section>

      <Divider />

      <Section title="11. Innehåll från tredje part och varumärken">
        <p>
          ScoreHunter visar fotbollsmatchdata, lagnamn, liganamn, spelarnamn
          och visuella tillgångar (såsom lag- och ligalogotyper) som
          kommer från vår dataleverantör API-Football. Dessa namn,
          logotyper och varumärken tillhör sina respektive ägare —
          inklusive klubbar, ligor, förbund och andra rättighetsinnehavare.
        </p>
        <p>
          ScoreHunter är{" "}
          <Strong>
            inte ansluten till, godkänd av, sponsrad av eller på något sätt
            officiellt kopplad till någon idrottsliga, förbund, klubb,
            organisation eller tävling som visas i Appen
          </Strong>
          . Alla namn, logotyper och varumärken från tredje part används
          endast för identifiering och beskrivning (nominativ skälig
          användning), för att hjälpa användare att känna igen de matcher
          och lag de vill följa.
        </p>
        <p>
          Om du är rättighetsinnehavare och anser att ditt varumärke eller
          upphovsrättsskyddade material används felaktigt i Appen,
          kontakta oss på{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Vi granskar begäran och svarar snabbt; där det är lämpligt
          tar vi bort eller ersätter innehållet.
        </p>
      </Section>

      <Divider />

      <Section title="12. Kontakt">
        <p>
          För frågor om denna integritetspolicy eller förfrågningar om
          databehandling:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-post</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Utvecklare</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Webbplats</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Förfrågningar enligt GDPR eller KVKK kan skickas till
          ovanstående e-postadress eller via post. Vi svarar inom{" "}
          <Strong>30 dagar</Strong>.
        </p>
      </Section>
    </>
  );
}
