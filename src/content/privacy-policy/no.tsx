import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentNo() {
  return (
    <>
      <p>
        Hos iCat Studios (&quot;vi&quot;, &quot;oss&quot;, &quot;vår&quot;)
        respekterer vi personvernet til brukerne (&quot;du&quot;,
        &quot;din&quot;) av mobilappen ScoreHunter (&quot;Appen&quot;).
        Denne personvernerklæringen forklarer hvilke personopplysninger vi
        samler inn, hvordan vi bruker dem, hvem vi deler dem med og dine
        rettigheter når du bruker Appen.
      </p>
      <p>
        Ved å bruke Appen godtar du denne personvernerklæringen.
      </p>

      <Divider />

      <Section title="1. Data vi samler inn">
        <SubHeading>1.1 Kontoinformasjon</SubHeading>
        <p>
          Når du bruker Logg på med Apple eller Logg på med Google, mottar
          vi følgende informasjon fra Apple eller Google:
        </p>
        <List
          items={[
            <>
              <Strong>E-postadresse</Strong> (Apple oppgir en relé-e-post
              hvis du velger &quot;Skjul e-postadressen min&quot;)
            </>,
            <>
              <Strong>Fornavn og etternavn</Strong> (Apple oppgir kun ved
              første pålogging; Google oppgir ved hver pålogging)
            </>,
            <>
              <Strong>Provider User ID</Strong> — en unik identifikator som
              brukes for å gjenkjenne kontoen din
            </>,
          ]}
        />

        <SubHeading>1.2 Profilinformasjon</SubHeading>
        <p>Informasjon du oppgir direkte i Appen:</p>
        <List
          items={[
            <>
              <Strong>Brukernavn</Strong> (visningsnavn — synlig i
              ledertavler)
            </>,
            <>
              <Strong>Land</Strong>
            </>,
            <>
              <Strong>Favorittfotballklubb</Strong>
            </>,
            <>
              <Strong>Fødselsdato</Strong>
            </>,
            <>
              <Strong>Kjønn</Strong> (valgfritt — &quot;ønsker ikke å
              oppgi&quot; er tilgjengelig)
            </>,
            <>
              <Strong>Pro-abonnementsstatus</Strong> — om du har et aktivt
              Pro-medlemskap og utløpsdato
            </>,
          ]}
        />

        <SubHeading>1.3 Bruksdata</SubHeading>
        <p>Data som genereres mens du bruker Appen:</p>
        <List
          items={[
            <>
              <Strong>Tippelister</Strong> (kamper du har valgt og tipp
              avgitt for Score Hunt og minispill)
            </>,
            <>
              <Strong>Ligaer du blir med i</Strong>
            </>,
            <>
              <Strong>Pokaler og prestasjoner du har oppnådd</Strong>
            </>,
            <>
              <Strong>Ukentlige og sesongbaserte rangeringspoeng</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Enhets- og appinformasjon</SubHeading>
        <List
          items={[
            <>
              <Strong>Enhets-ID</Strong> (for anonym økthåndtering)
            </>,
            <>
              <Strong>Operativsystem</Strong> (iOS-/Android-versjon)
            </>,
            <>
              <Strong>Appversjon og plattform</Strong> (versjonskode,
              versjonsnavn og om du bruker iOS eller Android) — brukes for
              å gi versjonsspesifikk støtte og identifisere
              kompatibilitetsproblemer
            </>,
            <>
              <Strong>Push-varslingstoken</Strong> — en unik token utstedt
              av Apple Push Notification service (APNs) eller Firebase
              Cloud Messaging (FCM) slik at vi kan levere kamppåminnelser,
              premievarsler og viktige meldinger. Du kan deaktivere
              push-varslinger når som helst i enhetens innstillinger.
            </>,
          ]}
        />

        <SubHeading>1.5 Annonse-ID</SubHeading>
        <p>
          Appen kan samle inn <Strong>annonse-ID-en</Strong> din (IDFA på
          iOS, GAID/Annonserings-ID på Android){" "}
          <Strong>kun med ditt uttrykkelige samtykke</Strong>:
        </p>
        <List
          items={[
            <>
              På <Strong>iOS</Strong> vil du første gang du starter Appen
              se en{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>-forespørsel.
              Hvis du velger &quot;Be appen om å ikke spore meg&quot;,
              samles IDFA ikke inn, og våre annonsepartnere mottar kun
              personvernbevarende informasjon via Apples SKAdNetwork.
            </>,
            <>
              På <Strong>Android</Strong> samles GAID inn med mindre du
              reserverer deg via{" "}
              <Strong>
                Innstillinger → Google → Annonser → Slett annonse-ID
              </Strong>
              .
            </>,
            <>
              Når den samles inn, deles annonse-ID-en med våre
              annonsepartnere som er listet i avsnitt 3.4 for
              annonseattribusjon og frekvensbegrensning.
            </>,
          ]}
        />

        <SubHeading>1.6 Automatisk innsamlede data</SubHeading>
        <List
          items={[
            <>
              <Strong>IP-adresse</Strong> — brukes til
              sikkerhetsformål, inkludert hastighetsbegrensning på
              autentiseringsendepunkter (f.eks. inntil 15 påloggingsforsøk
              per minutt per IP) og forebygging av misbruk. Vi bruker ikke
              IP-adresser til å bygge annonseprofiler.
            </>,
            <>
              <Strong>Feil- og krasjrapporter</Strong> — brukes for å
              overvåke appstabilitet. Rapportene filtreres for å utelukke
              personlig identifiserbar informasjon.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Hvordan vi bruker dataene dine">
        <p>Vi bruker de innsamlede dataene til følgende formål:</p>
        <List
          items={[
            <>
              <Strong>Kontooppretting og -administrasjon</Strong>: for at
              du skal kunne logge på og bruke Appen
            </>,
            <>
              <Strong>Spillopplevelse</Strong>: for å lagre tippelister,
              beregne poeng og bygge ledertavler
            </>,
            <>
              <Strong>Personalisering</Strong>: for å vise favorittklubben
              og landet ditt i ledertavler
            </>,
            <>
              <Strong>Administrasjon av Pro-abonnement</Strong>: for å
              bekrefte abonnementsstatus og gi tilgang til Pro-funksjoner
            </>,
            <>
              <Strong>Kommunikasjon</Strong>: for å sende viktige
              oppdateringer, kunngjøringer, premievarsler og
              push-varslinger om Appen
            </>,
            <>
              <Strong>Premieutsending</Strong>: for å sende fysiske eller
              digitale premier til konkurransevinnere (krever navn og
              e-postadresse)
            </>,
            <>
              <Strong>Kontosikkerhet</Strong>: for å forhindre falske
              kontoer, verifisere brukerens identitet og begrense
              mistenkelig aktivitet
            </>,
            <>
              <Strong>Annonsering</Strong>: for å vise annonser i Appen og
              måle ytelsen — se avsnitt 8 for detaljer
            </>,
            <>
              <Strong>Analyse og forbedring</Strong>: for å analysere
              bruksstatistikk anonymt og forbedre Appen
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Hvem vi deler dataene dine med">
        <p>
          ScoreHunter{" "}
          <Strong>
            verken selger eller leier ut personopplysningene dine til
            tredjeparter
          </Strong>
          . Vi deler kun data med de pålitelige tjenesteleverandørene og
          annonsepartnerne som er listet nedenfor, og kun i den grad det
          er nødvendig for å drive Appen.
        </p>

        <SubHeading>3.1 Tjenesteleverandører</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — server- og
              databasevertstjenester (Frankfurt, Tyskland)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — tredjepartstjeneste som leverer kampdata, lag- og
              ligainformasjon samt tilhørende visuelle elementer (logoer
              og bilder). Ingen personopplysninger deles med API-Football.
              ScoreHunter eier ikke rettighetene til logoer eller
              varemerker som leveres via denne tjenesten; se avsnitt 11
              for detaljer.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In-autentisering
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In-autentisering og
              Firebase Cloud Messaging (push-varslinger på Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — behandler kjøp og
              fornyelser av Pro-abonnement på iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — behandler kjøp og
              fornyelser av Pro-abonnement på Android
            </>,
            <>
              <Strong>Sentry</Strong> — overvåking av feil og unntak i
              backend. Filtrering av personlig identifiserbar informasjon
              er aktivert (ingen e-postadresser, navn eller
              brukerinnhold sendes til Sentry).
            </>,
          ]}
        />
        <p>
          Disse tjenesteleverandørene behandler kun data på våre vegne og
          etter våre instrukser.
        </p>

        <SubHeading>3.2 Lovkrav</SubHeading>
        <p>
          Dataene dine kan deles med myndigheter som svar på en
          rettskjennelse, en juridisk etterforskning eller en juridisk
          forpliktelse.
        </p>

        <SubHeading>3.3 Informasjon synlig for andre brukere</SubHeading>
        <p>
          Følgende informasjon er <Strong>synlig for andre brukere</Strong>{" "}
          i ledertavler og profilsider:
        </p>
        <List
          items={[
            "Brukernavnet ditt (visningsnavn)",
            "Landflagget ditt",
            "Favorittklubben din",
            "Pokaler du har vunnet",
            "Tipppoengene og statistikken din",
            "Et Pro-medlemskapsmerke hvis du har et aktivt abonnement",
          ]}
        />
        <p>
          Følgende informasjon{" "}
          <Strong>vises aldri i Appen</Strong>:
        </p>
        <List
          items={[
            "E-postadressen din",
            "Det virkelige fornavnet og etternavnet ditt",
            "Fødselsdatoen din",
            "Kjønnet ditt",
            "Enhetsinformasjonen din",
            "Annonse-ID-en din",
            "Utløpsdatoen for abonnementet ditt",
          ]}
        />

        <SubHeading>3.4 Annonsepartnere</SubHeading>
        <p>
          Appen viser annonser via flere annonsenettverk (av og til kalt{" "}
          <em>mediation</em>). Når du har samtykket til sporing, kan
          annonse-ID-en din og begrenset teknisk informasjon deles med
          partnerne nedenfor for annonselevering, attribusjon og
          frekvensbegrensning. Hver partner har sin egen
          personvernerklæring:
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

      <Section title="4. Hvor og hvor lenge vi lagrer dataene dine">
        <SubHeading>4.1 Lagringssted</SubHeading>
        <p>
          Alle brukerdata lagres i datasentrene{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . Vi bruker Amazon RDS PostgreSQL som databasetjeneste.
        </p>

        <SubHeading>4.2 Lagringsperiode</SubHeading>
        <List
          items={[
            <>
              <Strong>Aktive kontoer</Strong>: dataene dine lagres så
              lenge kontoen din er aktiv
            </>,
            <>
              <Strong>Inaktive kontoer</Strong>: kontoer uten innlogging i
              2 år slettes automatisk
            </>,
            <>
              <Strong>Slettede kontoer</Strong>: når du sletter kontoen
              din, slettes personopplysningene permanent innen 30 dager
              (inkludert sikkerhetskopier)
            </>,
            <>
              <Strong>Anonym statistikk</Strong>: anonyme aggregerte
              statistikker kan beholdes etter sletting (inneholder ingen
              personopplysninger)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Dine rettigheter">
        <p>
          I henhold til GDPR (Europa) og KVKK (Tyrkia) har du følgende
          rettigheter:
        </p>
        <List
          items={[
            <>
              <Strong>Innsynsrett</Strong>: lære hvilke data vi behandler
              om deg
            </>,
            <>
              <Strong>Rett til retting</Strong>: be om korrigering av
              unøyaktige eller ufullstendige data
            </>,
            <>
              <Strong>
                Rett til sletting (&quot;retten til å bli glemt&quot;)
              </Strong>
              : be om sletting av dataene dine
            </>,
            <>
              <Strong>Rett til begrensning av behandling</Strong>:
              begrense hvordan dataene dine behandles
            </>,
            <>
              <Strong>Rett til dataportabilitet</Strong>: motta dataene
              dine i et maskinlesbart format
            </>,
            <>
              <Strong>Innsigelsesrett</Strong>: motsette deg
              databehandlingen
            </>,
            <>
              <Strong>Rett til å trekke tilbake samtykke</Strong>{" "}
              (annonsesporing): du kan tilbakekalle ATT-tillatelsen på
              iOS via{" "}
              <Strong>
                Innstillinger → Personvern og sikkerhet → Sporing
              </Strong>
              , eller tilbakestille/slette annonse-ID-en din på Android når
              som helst
            </>,
          ]}
        />

        <SubHeading>Slik sletter du kontoen din</SubHeading>
        <p>Du kan slette kontoen din på tre måter:</p>
        <OrderedList
          items={[
            <>
              <Strong>I appen</Strong>: profilside → kontoinnstillinger →
              slett konto
            </>,
            <>
              <Strong>På nett</Strong>:{" "}
              <Anchor href="/no/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Via e-post</Strong>: send en forespørsel til
              kontaktadressen nedenfor
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Barns personvern">
        <p>
          ScoreHunter er{" "}
          <Strong>
            ikke beregnet for brukere under 13 år
          </Strong>
          . Vi samler ikke bevisst inn personopplysninger fra barn under
          13 år. Hvis vi blir oppmerksomme på at vi har samlet inn
          personopplysninger fra et barn under 13 år, vil vi slette dem
          så raskt som mulig.
        </p>
        <p>
          For brukere mellom 13 og 18 år anbefaler vi å gjennomgå denne
          personvernerklæringen sammen med en forelder eller foresatt.
          Annonser som vises i Appen, konfigureres med{" "}
          <Strong>
            ikke-personaliserte / familievennlige innstillinger
          </Strong>{" "}
          for brukere som basert på oppgitt fødselsdato fremstår som
          mindreårige.
        </p>
        <p>
          Foreldre eller foresatte som tror at barnet deres bruker Appen,
          kan kontakte oss.
        </p>
      </Section>

      <Divider />

      <Section title="7. Datasikkerhet">
        <p>
          Vi tar bransjestandard sikkerhetstiltak for å beskytte dataene
          dine:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS-kryptering</Strong>: all nettverkstrafikk
              krypteres via SSL/TLS
            </>,
            <>
              <Strong>Passordfri autentisering</Strong>: vi lagrer ikke
              passord; alle innlogginger håndteres via Apple og Google
            </>,
            <>
              <Strong>JWT-basert økthåndtering</Strong>: økter
              administreres med sikre, midlertidige tokens
            </>,
            <>
              <Strong>Hastighetsbegrensning</Strong>: autentiserings- og
              sensitive endepunkter er hastighetsbegrenset per IP for å
              forhindre brute-force og misbruk
            </>,
            <>
              <Strong>Tilgangskontroll</Strong>: databasetilgang er
              begrenset til autoriserte systemkontoer
            </>,
            <>
              <Strong>Regelmessige sikkerhetsoppdateringer</Strong>:
              systemene våre holdes oppdatert
            </>,
          ]}
        />
        <p>
          Vær imidlertid oppmerksom på at ingen overføringsmetode over
          Internett er 100 % sikker.
        </p>
      </Section>

      <Divider />

      <Section title="8. Annonsering og sporing">
        <SubHeading>8.1 Annonsering i Appen</SubHeading>
        <p>
          ScoreHunter finansieres delvis av annonsering. Appen viser
          annonser gjennom <Strong>Google AdMob</Strong> og flere
          nettverk via mediation (AppLovin, Liftoff/Vungle, IronSource,
          Unity Ads, Meta Audience Network, InMobi). Se avsnitt 3.4 for
          full partnerliste.
        </p>
        <p>
          Annonsene kan vises som banner, interstitial og rewarded.
          Pro-medlemmer kan oppleve færre eller ingen annonser avhengig
          av abonnementsnivå.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          På iOS 14.5 og nyere krever Apple at vi ber om tillatelse før
          vi sporer deg på tvers av apper og nettsteder. Første gang du
          starter Appen vil du se en{" "}
          <Strong>App Tracking Transparency</Strong>-forespørsel:
        </p>
        <List
          items={[
            <>
              Hvis du velger <Strong>&quot;Tillat&quot;</Strong>, kan
              IDFA-en din deles med våre annonsepartnere for
              personaliserte annonser, attribusjon og
              frekvensbegrensning.
            </>,
            <>
              Hvis du velger{" "}
              <Strong>
                &quot;Be appen om å ikke spore meg&quot;
              </Strong>
              , samles IDFA ikke inn. For attribusjon bruker vi Apples
              personvernbevarende rammeverk{" "}
              <Strong>SKAdNetwork</Strong>, og annonsene du ser blir
              ikke-personaliserte.
            </>,
          ]}
        />
        <p>
          Du kan endre valget ditt når som helst i{" "}
          <Strong>
            Innstillinger → Personvern og sikkerhet → Sporing
          </Strong>
          .
        </p>

        <SubHeading>8.3 Annonse-ID på Android</SubHeading>
        <p>
          På Android kan vår annonsepartnere bruke Google Advertising ID
          (GAID). Du kan <Strong>tilbakestille</Strong> eller{" "}
          <Strong>slette</Strong> annonse-ID-en din når som helst via{" "}
          <Strong>Innstillinger → Google → Annonser</Strong>. Når den
          slettes, blir annonsene ikke-personaliserte.
        </p>

        <SubHeading>8.4 Informasjonskapsler</SubHeading>
        <p>
          Mobilappen ScoreHunter{" "}
          <Strong>bruker ikke informasjonskapsler i nettleseren</Strong>.
          På mobil reguleres sporing av plattformnivåmekanismene som er
          beskrevet ovenfor, ikke av informasjonskapsler.
        </p>
      </Section>

      <Divider />

      <Section title="9. Internasjonale dataoverføringer">
        <p>
          Dataene dine kan behandles utenfor hjemlandet ditt (AWS
          Frankfurt — Den europeiske union, og datasentrene til våre
          annonsepartnere som er listet i avsnitt 3.4, som kan ligge
          utenfor EU). Disse overføringene oppfyller
          sikkerhetsstandardene som kreves av GDPR og KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Endringer i denne erklæringen">
        <p>
          Vi kan oppdatere denne personvernerklæringen fra tid til
          annen. Endringer trer i kraft når de publiseres på denne
          siden, og datoen &quot;Sist oppdatert&quot; øverst vil
          oppdateres. Vesentlige endringer kunngjøres via varsling i
          appen.
        </p>
      </Section>

      <Divider />

      <Section title="11. Tredjepartsinnhold og varemerker">
        <p>
          ScoreHunter viser fotballkampdata, lagnavn, liganavn,
          spillernavn og visuelle elementer (som lag- og ligalogoer)
          hentet fra dataleverandøren vår API-Football. Disse navnene,
          logoene og varemerkene tilhører deres respektive eiere —
          inkludert klubber, ligaer, forbund og andre rettighetshavere.
        </p>
        <p>
          ScoreHunter er{" "}
          <Strong>
            ikke tilknyttet, godkjent, sponset eller offisielt knyttet
            til noen idrettsliga, forbund, klubb, organisasjon eller
            konkurranse som vises i Appen
          </Strong>
          . Alle tredjeparts navn, logoer og varemerker brukes utelukkende
          til identifikasjons- og beskrivelsesformål (nominativ rimelig
          bruk), for å hjelpe brukerne med å gjenkjenne kampene og
          lagene de ønsker å følge.
        </p>
        <p>
          Hvis du er rettighetshaver og mener at varemerket eller det
          opphavsrettsbeskyttede materialet ditt brukes feil i Appen,
          vennligst kontakt oss på{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Vi vil vurdere forespørselen og svare omgående, og fjerne
          eller erstatte innholdet der det er hensiktsmessig.
        </p>
      </Section>

      <Divider />

      <Section title="12. Kontakt">
        <p>
          For spørsmål om denne personvernerklæringen eller forespørsler
          om databehandling:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-post</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Utvikler</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Nettside</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Forespørsler under GDPR eller KVKK kan sendes til e-postadressen
          ovenfor eller per post. Vi vil svare innen{" "}
          <Strong>30 dager</Strong>.
        </p>
      </Section>
    </>
  );
}
