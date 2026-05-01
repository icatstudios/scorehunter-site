import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentDa() {
  return (
    <>
      <p>
        Hos iCat Studios (&quot;vi&quot;, &quot;os&quot;, &quot;vores&quot;)
        respekterer vi privatlivet for brugerne (&quot;du&quot;,
        &quot;din&quot;) af mobilappen ScoreHunter (&quot;Appen&quot;).
        Denne privatlivspolitik forklarer, hvilke personoplysninger vi
        indsamler, hvordan vi bruger dem, hvem vi deler dem med, og dine
        rettigheder ved brug af Appen.
      </p>
      <p>
        Ved at bruge Appen accepterer du denne privatlivspolitik.
      </p>

      <Divider />

      <Section title="1. Data vi indsamler">
        <SubHeading>1.1 Kontooplysninger</SubHeading>
        <p>
          Når du bruger Log ind med Apple eller Log ind med Google, modtager
          vi følgende oplysninger fra Apple eller Google:
        </p>
        <List
          items={[
            <>
              <Strong>E-mailadresse</Strong> (Apple oplyser en relæ-e-mail,
              hvis du vælger &quot;Skjul min e-mail&quot;)
            </>,
            <>
              <Strong>Fornavn og efternavn</Strong> (Apple kun ved første
              login; Google ved hvert login)
            </>,
            <>
              <Strong>Provider User ID</Strong> — en unik identifikator til
              at genkende din konto
            </>,
          ]}
        />

        <SubHeading>1.2 Profiloplysninger</SubHeading>
        <p>Oplysninger, du angiver direkte i Appen:</p>
        <List
          items={[
            <>
              <Strong>Brugernavn</Strong> (visningsnavn — synligt i
              ranglister)
            </>,
            <>
              <Strong>Land</Strong>
            </>,
            <>
              <Strong>Yndlingsfodboldhold</Strong>
            </>,
            <>
              <Strong>Fødselsdato</Strong>
            </>,
            <>
              <Strong>Køn</Strong> (valgfrit — &quot;ønsker ikke at
              oplyse&quot; er en mulighed)
            </>,
            <>
              <Strong>Pro-abonnementsstatus</Strong> — om du har et aktivt
              Pro-medlemskab og udløbsdatoen
            </>,
          ]}
        />

        <SubHeading>1.3 Brugsdata</SubHeading>
        <p>Data der genereres ved brug af Appen:</p>
        <List
          items={[
            <>
              <Strong>Forudsigelseslister</Strong> (valgte kampe og
              forudsigelser for Score Hunt og minispil)
            </>,
            <>
              <Strong>Ligaer du deltager i</Strong>
            </>,
            <>
              <Strong>Optjente trofæer og bedrifter</Strong>
            </>,
            <>
              <Strong>Ugentlige og sæsonbestemte rangordningspoint</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Enheds- og appoplysninger</SubHeading>
        <List
          items={[
            <>
              <Strong>Enheds-ID</Strong> (til anonym sessionhåndtering)
            </>,
            <>
              <Strong>Operativsystem</Strong> (iOS-/Android-version)
            </>,
            <>
              <Strong>Appversion og platform</Strong> (versionskode,
              versionsnavn samt om du bruger iOS eller Android) — bruges til
              at yde versionsspecifik support og identificere
              kompatibilitetsproblemer
            </>,
            <>
              <Strong>Push-notifikationstoken</Strong> — et unikt token
              udstedt af Apple Push Notification service (APNs) eller
              Firebase Cloud Messaging (FCM), så vi kan levere
              kamperindringer, præmie­meddelelser og vigtige beskeder. Du
              kan deaktivere push-notifikationer når som helst i enhedens
              indstillinger.
            </>,
          ]}
        />

        <SubHeading>1.5 Annonceidentifikator</SubHeading>
        <p>
          Appen kan indsamle din <Strong>annonceidentifikator</Strong> (IDFA
          på iOS, GAID/Annoncerings-id på Android),{" "}
          <Strong>kun med dit udtrykkelige samtykke</Strong>:
        </p>
        <List
          items={[
            <>
              På <Strong>iOS</Strong> ses en{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>-prompt ved
              første start af Appen. Hvis du vælger &quot;Bed appen om ikke
              at spore mig&quot;, indsamles IDFA ikke, og vores
              annoncepartnere modtager kun privatlivsbevarende oplysninger
              via Apples SKAdNetwork.
            </>,
            <>
              På <Strong>Android</Strong> indsamles GAID, medmindre du
              fravælger den via{" "}
              <Strong>
                Indstillinger → Google → Annoncer → Slet annonce-id
              </Strong>
              .
            </>,
            <>
              Når den indsamles, deles annonceidentifikatoren med
              annoncepartnerne anført i afsnit 3.4 til annonceattribution og
              frekvensbegrænsning.
            </>,
          ]}
        />

        <SubHeading>1.6 Automatisk indsamlede data</SubHeading>
        <List
          items={[
            <>
              <Strong>IP-adresse</Strong> — bruges til
              sikkerhedsformål, herunder hastighedsbegrænsning på
              autentifikationsendpoints (fx op til 15 loginforsøg pr. minut
              pr. IP) og misbrugsforebyggelse. Vi bruger ikke IP-adresser
              til at oprette annonceprofiler.
            </>,
            <>
              <Strong>Fejl- og crashrapporter</Strong> — bruges til at
              overvåge appens stabilitet. Rapporterne filtreres for at
              udelukke personhenførbare oplysninger.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Hvordan vi bruger dine data">
        <p>Vi bruger de indsamlede data til følgende formål:</p>
        <List
          items={[
            <>
              <Strong>Kontoopretelse og -administration</Strong>: så du kan
              logge ind og bruge Appen
            </>,
            <>
              <Strong>Spiloplevelse</Strong>: til at gemme dine
              forudsigelses­lister, beregne dine point og opbygge ranglister
            </>,
            <>
              <Strong>Personalisering</Strong>: til at vise dit
              yndlingshold og land i ranglister
            </>,
            <>
              <Strong>Pro-abonnementsadministration</Strong>: til at
              verificere din abonnementsstatus og give adgang til
              Pro-funktioner
            </>,
            <>
              <Strong>Kommunikation</Strong>: til at sende vigtige
              opdateringer, meddelelser, præmiemeddelelser og
              push-notifikationer om Appen
            </>,
            <>
              <Strong>Præmielevering</Strong>: til at sende fysiske eller
              digitale præmier til konkurrencevindere (kræver navn og
              e-mail)
            </>,
            <>
              <Strong>Kontosikkerhed</Strong>: til at forhindre svigagtige
              konti, verificere brugeridentitet og begrænse mistænkelig
              aktivitet
            </>,
            <>
              <Strong>Annoncering</Strong>: til at vise annoncer i Appen og
              måle deres effektivitet — se afsnit 8 for detaljer
            </>,
            <>
              <Strong>Analyse og forbedring</Strong>: til at analysere
              brugsstatistik anonymt og forbedre Appen
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Hvem vi deler dine data med">
        <p>
          ScoreHunter{" "}
          <Strong>
            sælger eller udlejer ikke dine personoplysninger til tredjeparter
          </Strong>
          . Vi deler kun data med de pålidelige tjenesteudbydere og
          annoncepartnere anført nedenfor og kun i det omfang, det er
          nødvendigt for at drive Appen.
        </p>

        <SubHeading>3.1 Tjenesteudbydere</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — server- og
              databasehosting (Frankfurt, Tyskland)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — tredjepartstjeneste, der leverer kampdata, hold- og
              ligaoplysninger samt tilhørende visuelle aktiver (logoer og
              billeder). Ingen personoplysninger deles med API-Football.
              ScoreHunter ejer ikke rettighederne til logoer eller varemærker
              leveret via denne tjeneste; se afsnit 11 for detaljer.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In-godkendelse
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In-godkendelse og
              Firebase Cloud Messaging (push-notifikationer på Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — håndterer Pro-abonnementskøb
              og fornyelser på iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — håndterer
              Pro-abonnementskøb og fornyelser på Android
            </>,
            <>
              <Strong>Sentry</Strong> — backend-fejlovervågning. Filtrering
              af personhenførbare oplysninger er aktiveret (ingen
              e-mailadresse, navn eller brugerindhold sendes til Sentry).
            </>,
          ]}
        />
        <p>
          Disse tjenesteudbydere behandler kun data på vores vegne og efter
          vores instrukser.
        </p>

        <SubHeading>3.2 Lovmæssige krav</SubHeading>
        <p>
          Dine data kan deles med myndighederne på baggrund af en retskendelse,
          juridisk efterforskning eller lovmæssig forpligtelse.
        </p>

        <SubHeading>3.3 Oplysninger synlige for andre brugere</SubHeading>
        <p>
          Følgende oplysninger er{" "}
          <Strong>synlige for andre brugere</Strong> i ranglister og
          profilsider:
        </p>
        <List
          items={[
            "Dit brugernavn (visningsnavn)",
            "Dit landflag",
            "Dit yndlingshold",
            "Optjente trofæer",
            "Dine forudsigelsespoint og statistikker",
            "Et Pro-medlemskabsmærke ved aktivt abonnement",
          ]}
        />
        <p>
          Følgende oplysninger vises{" "}
          <Strong>aldrig i Appen</Strong>:
        </p>
        <List
          items={[
            "Din e-mailadresse",
            "Dit rigtige fornavn og efternavn",
            "Din fødselsdato",
            "Dit køn",
            "Dine enhedsoplysninger",
            "Din annonceidentifikator",
            "Udløbsdatoen for dit abonnement",
          ]}
        />

        <SubHeading>3.4 Annoncepartnere</SubHeading>
        <p>
          Appen viser annoncer via flere annoncenetværk (af og til kaldet{" "}
          <em>mediation</em>). Når du har givet samtykke til sporing, kan din
          annonceidentifikator og begrænsede tekniske data deles med
          partnerne nedenfor til annoncelevering, attribution og
          frekvensbegrænsning. Hver partner har sin egen privatlivspolitik:
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

      <Section title="4. Hvor og hvor længe vi opbevarer dine data">
        <SubHeading>4.1 Opbevaringssted</SubHeading>
        <p>
          Alle brugerdata opbevares i datacentrene{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . Som databasetjeneste anvender vi Amazon RDS PostgreSQL.
        </p>

        <SubHeading>4.2 Opbevaringsperiode</SubHeading>
        <List
          items={[
            <>
              <Strong>Aktive konti</Strong>: dine data opbevares, så længe
              din konto er aktiv
            </>,
            <>
              <Strong>Inaktive konti</Strong>: konti uden login i 2 år
              slettes automatisk
            </>,
            <>
              <Strong>Slettede konti</Strong>: ved sletning slettes dine
              personoplysninger permanent inden for 30 dage (inklusive
              sikkerhedskopier)
            </>,
            <>
              <Strong>Anonym statistik</Strong>: anonyme aggregerede
              statistikker kan opbevares efter sletning (uden
              personoplysninger)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Dine rettigheder">
        <p>
          Under GDPR (EU) og KVKK (Tyrkiet) har du følgende rettigheder:
        </p>
        <List
          items={[
            <>
              <Strong>Indsigtsret</Strong>: at få at vide hvilke data vi
              behandler om dig
            </>,
            <>
              <Strong>Ret til berigtigelse</Strong>: at anmode om rettelse
              af unøjagtige eller ufuldstændige data
            </>,
            <>
              <Strong>
                Ret til sletning (&quot;retten til at blive glemt&quot;)
              </Strong>
              : at anmode om sletning af dine data
            </>,
            <>
              <Strong>Ret til begrænsning af behandling</Strong>: at
              begrænse hvordan dine data behandles
            </>,
            <>
              <Strong>Ret til dataportabilitet</Strong>: at modtage dine
              data i et maskinlæsbart format
            </>,
            <>
              <Strong>Ret til indsigelse</Strong>: at gøre indsigelse mod
              databehandling
            </>,
            <>
              <Strong>Ret til at trække samtykke tilbage</Strong>{" "}
              (annoncesporing): du kan tilbagekalde ATT-tilladelsen på iOS
              når som helst via{" "}
              <Strong>
                Indstillinger → Anonymitet og sikkerhed → Sporing
              </Strong>
              , eller nulstille/slette dit annonce-id på Android når som
              helst
            </>,
          ]}
        />

        <SubHeading>Sådan sletter du din konto</SubHeading>
        <p>Du kan slette din konto på tre måder:</p>
        <OrderedList
          items={[
            <>
              <Strong>I appen</Strong>: profilside → kontoindstillinger →
              slet konto
            </>,
            <>
              <Strong>På nettet</Strong>:{" "}
              <Anchor href="/da/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Via e-mail</Strong>: send en anmodning til
              kontaktadressen nedenfor
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Børns privatliv">
        <p>
          ScoreHunter er{" "}
          <Strong>ikke beregnet til brugere under 13 år</Strong>. Vi indsamler
          ikke bevidst personoplysninger fra børn under 13 år. Hvis vi bliver
          opmærksomme på, at vi har indsamlet personoplysninger fra et barn
          under 13 år, sletter vi dem hurtigst muligt.
        </p>
        <p>
          For brugere mellem 13 og 18 år anbefaler vi at gennemgå denne
          privatlivspolitik sammen med en forælder eller værge. Annoncer i
          Appen konfigureres med{" "}
          <Strong>
            ikke-personlige / familievenlige indstillinger
          </Strong>{" "}
          for brugere, der baseret på den oplyste fødselsdato fremstår som
          mindreårige.
        </p>
        <p>
          Forældre eller værger, der mener, at deres barn bruger Appen, kan
          kontakte os.
        </p>
      </Section>

      <Divider />

      <Section title="7. Datasikkerhed">
        <p>
          Vi anvender branchestandard sikkerhedsforanstaltninger til at
          beskytte dine data:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS-kryptering</Strong>: al netværkstrafik krypteres
              via SSL/TLS
            </>,
            <>
              <Strong>Adgangskodefri godkendelse</Strong>: vi opbevarer ikke
              adgangskoder; alle logins går via Apple og Google
            </>,
            <>
              <Strong>JWT-baseret sessionsstyring</Strong>: sessioner
              håndteres med sikre, midlertidige tokens
            </>,
            <>
              <Strong>Hastighedsbegrænsning</Strong>:
              autentifikations- og følsomme endpoints er IP-baseret
              begrænset for at forhindre brute-force og misbrug
            </>,
            <>
              <Strong>Adgangskontrol</Strong>: databaseadgang er begrænset
              til autoriserede systemkonti
            </>,
            <>
              <Strong>Regelmæssige sikkerhedsopdateringer</Strong>: vores
              systemer holdes ajour
            </>,
          ]}
        />
        <p>
          Bemærk dog, at ingen transmissionsmetode over internettet er 100%
          sikker.
        </p>
      </Section>

      <Divider />

      <Section title="8. Annoncering og sporing">
        <SubHeading>8.1 Annoncering i Appen</SubHeading>
        <p>
          ScoreHunter er delvist understøttet af annoncering. Appen viser
          annoncer via <Strong>Google AdMob</Strong> samt yderligere netværk
          via mediation (AppLovin, Liftoff/Vungle, IronSource, Unity Ads,
          Meta Audience Network, InMobi). Se afsnit 3.4 for den fulde
          partnerliste.
        </p>
        <p>
          Annoncer kan være banner-, interstitial- eller rewarded-formater.
          Pro-medlemmer kan, afhængigt af abonnementsniveau, opleve færre
          eller ingen annoncer.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          På iOS 14.5 og nyere kræver Apple, at vi beder om dit samtykke,
          før vi sporer dig på tværs af apps og websites. Ved første start af
          Appen ses{" "}
          <Strong>App Tracking Transparency</Strong>-prompten:
        </p>
        <List
          items={[
            <>
              Hvis du vælger <Strong>&quot;Tillad&quot;</Strong>, kan din
              IDFA blive delt med vores annoncepartnere til personlig
              annoncering, attribution og frekvensbegrænsning.
            </>,
            <>
              Hvis du vælger{" "}
              <Strong>
                &quot;Bed appen om ikke at spore mig&quot;
              </Strong>
              , indsamles IDFA ikke. Til attribution bruger vi Apples
              privatlivsbevarende{" "}
              <Strong>SKAdNetwork</Strong>-rammeværk, og de viste annoncer
              vil være ikke-personlige.
            </>,
          ]}
        />
        <p>
          Du kan ændre dit valg når som helst i{" "}
          <Strong>
            Indstillinger → Anonymitet og sikkerhed → Sporing
          </Strong>
          .
        </p>

        <SubHeading>8.3 Android-annonce-id</SubHeading>
        <p>
          På Android kan vores annoncepartnere bruge dit Google Advertising
          ID (GAID). Du kan <Strong>nulstille</Strong> eller{" "}
          <Strong>slette</Strong> dit annonce-id når som helst via{" "}
          <Strong>Indstillinger → Google → Annoncer</Strong>. Når det er
          slettet, vises kun ikke-personlige annoncer.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          Mobilappen ScoreHunter{" "}
          <Strong>bruger ikke browsercookies</Strong>. Sporing på mobil
          styres af de ovenfor beskrevne mekanismer på platformsniveau,
          ikke af cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Internationale dataoverførsler">
        <p>
          Dine data kan blive behandlet uden for dit hjemland (AWS
          Frankfurt — EU, samt datacentrene hos vores annoncepartnere
          anført i afsnit 3.4, der kan være placeret uden for EU). Disse
          overførsler overholder de sikkerhedsstandarder, der kræves af GDPR
          og KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Ændringer i denne politik">
        <p>
          Vi kan opdatere denne privatlivspolitik fra tid til anden. Ændringer
          træder i kraft, når de offentliggøres på denne side, og datoen
          &quot;Sidst opdateret&quot; øverst opdateres. Væsentlige ændringer
          annonceres via en in-app-meddelelse.
        </p>
      </Section>

      <Divider />

      <Section title="11. Tredjepartsindhold og varemærker">
        <p>
          ScoreHunter viser fodboldkampdata, holdnavne, liganavne,
          spillernavne og visuelle aktiver (såsom hold- og ligalogoer)
          leveret af vores dataudbyder API-Football. Disse navne, logoer og
          varemærker tilhører de respektive ejere — herunder klubber, ligaer,
          forbund og andre rettighedshavere.
        </p>
        <p>
          ScoreHunter er{" "}
          <Strong>
            ikke tilknyttet, godkendt, sponsoreret eller officielt forbundet
            med nogen sportsliga, forbund, klub, organisation eller
            konkurrence vist i Appen
          </Strong>
          . Alle tredjeparts navne, logoer og varemærker bruges udelukkende
          til identifikations- og beskrivelsesformål (nominativ rimelig
          brug), for at hjælpe brugerne med at genkende de kampe og hold,
          de ønsker at følge.
        </p>
        <p>
          Hvis du er rettighedshaver og mener, at dit varemærke eller
          ophavsretligt beskyttede materiale anvendes forkert i Appen,
          kontakt os på{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Vi gennemgår anmodningen og svarer hurtigt; hvor det er passende,
          fjerner eller erstatter vi indholdet.
        </p>
      </Section>

      <Divider />

      <Section title="12. Kontakt">
        <p>
          Spørgsmål om denne privatlivspolitik eller anmodninger om
          databehandling:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Udvikler</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Hjemmeside</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Anmodninger under GDPR eller KVKK kan sendes til ovenstående
          e-mailadresse eller med post. Vi svarer inden for{" "}
          <Strong>30 dage</Strong>.
        </p>
      </Section>
    </>
  );
}
