import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentDa() {
  return (
    <>
      <p>
        Læs disse Brugsbetingelser (&quot;Betingelser&quot;) omhyggeligt,
        før du bruger mobilappen ScoreHunter (&quot;Appen&quot;,
        &quot;Tjenesten&quot;). Ved at downloade og bruge Appen
        accepterer du at være bundet af disse Betingelser. Hvis du ikke
        accepterer Betingelserne, så undlad venligst at bruge Appen.
      </p>

      <Divider />

      <Section title="1. Definitioner">
        <List
          items={[
            <>
              <Strong>App</Strong>: mobilappen ScoreHunter og tilhørende
              websteder
            </>,
            <>
              <Strong>Udvikler / Vi / Os / Vores</Strong>: iCat Studios
            </>,
            <>
              <Strong>Bruger / Du / Din</Strong>: personen der bruger
              Appen
            </>,
            <>
              <Strong>Tjeneste</Strong>: alle funktioner og indhold som
              Appen tilbyder
            </>,
            <>
              <Strong>Indhold</Strong>: kampdata, forudsigelseslister,
              ranglister, trofæer, brugerprofiler og alle øvrige data i
              Appen
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Tjenestens karakter — VIGTIGT">
        <SubHeading>2.1 ScoreHunter er ikke en gambling-app</SubHeading>
        <p>
          ScoreHunter er en{" "}
          <Strong>
            forudsigelses- og underholdningsapp baseret på fodboldviden
          </Strong>
          . Følgende punkter beskriver Appens grundlæggende karakter og
          skal stå klart for brugerne:
        </p>
        <List
          items={[
            <>
              Appen er et <Strong>færdighedsbaseret spil</Strong>, IKKE et
              hasardspil
            </>,
            <>
              Appen indeholder INGEN{" "}
              <Strong>spilterminologi</Strong> (kupon, odds, handicap,
              margin, jackpot)
            </>,
            <>
              Der tilbydes ingen <Strong>spil-odds</Strong> eller{" "}
              <Strong>gevinstmultiplikatorer</Strong> for nogen kamp i
              Appen
            </>,
            <>
              Alle kampe er{" "}
              <Strong>lige meget værd</Strong> for forudsigelser — ingen
              kamp er &quot;mere værd&quot; end andre
            </>,
            <>
              Appen lader fodboldfans dyste med viden og intuition i et
              underholdende miljø
            </>,
            <>
              Hovedformålet er{" "}
              <Strong>
                underholdning, fodboldkultur, fællesskabsopbygning og
                vidensdeling
              </Strong>
            </>,
          ]}
        />

        <SubHeading>2.2 Ingen indskud eller pengepræmier</SubHeading>
        <List
          items={[
            <>
              Det er <Strong>IKKE NØDVENDIGT</Strong> at bruge rigtige
              penge for at spille i Appen eller deltage i konkurrencer
            </>,
            <>
              Appen indeholder <Strong>INGEN</Strong> funktioner til{" "}
              <Strong>at spille om rigtige penge</Strong> eller{" "}
              <Strong>gambling</Strong>
            </>,
            <>
              Appen lover{" "}
              <Strong>INGEN rigtige pengepræmier</Strong> til vindere
            </>,
            <>
              Appen indeholder{" "}
              <Strong>
                INGEN elementer af gambling, hasardspil, lotterier eller
                væddemål
              </Strong>
            </>,
            <>
              Alle brugere deltager på{" "}
              <Strong>lige vilkår</Strong> i konkurrencerne
            </>,
            <>
              Betalte funktioner som Pro-medlemskab{" "}
              <Strong>påvirker ikke konkurrenceresultater</Strong> — de
              tilbyder kun ekstra funktioner, der forbedrer
              brugeroplevelsen
            </>,
          ]}
        />

        <SubHeading>2.3 Promoveringspræmier</SubHeading>
        <p>
          Udvikleren kan efter eget skøn fra tid til anden tildele de
          bedst præsterende brugere{" "}
          <Strong>promoveringspræmier</Strong> (trøjer, fodbolde, digitale
          gavekort, symbolske gaver osv.). Følgende vilkår gælder for
          sådanne præmier:
        </p>
        <List
          items={[
            <>
              Præmierne er{" "}
              <Strong>af promoveringskarakter</Strong> og er beregnet til
              at fremme brugerengagement
            </>,
            <>
              Præmier er <Strong>IKKE garanterede</Strong> — de tildeles
              kun inden for kampagner, som Udvikleren annoncerer
            </>,
            <>
              Præmier udbetales <Strong>IKKE som kontanter</Strong> — kun
              som fysiske eller digitale gaver
            </>,
            <>
              Tildeling, distribution og levering af præmier er{" "}
              <Strong>
                udelukkende Udviklerens ansvar
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC og Google Play
                Store har intet ansvar for disse præmier
              </Strong>
            </>,
            <>
              Udvikleren kan anmode om adresse, identitet eller andre
              oplysninger fra præmiemodtagere udelukkende med henblik på
              levering af præmien
            </>,
          ]}
        />

        <SubHeading>2.4 Aldersgrænse</SubHeading>
        <p>
          Appen er beregnet til brugere{" "}
          <Strong>over 13 år</Strong>. Personer under 13 må ikke bruge
          Appen. Ved brug af Appen erklærer brugeren at være over 13 år.
        </p>
      </Section>

      <Divider />

      <Section title="3. Oprettelse og brug af konto">
        <SubHeading>3.1 Oprettelse af konto</SubHeading>
        <p>
          For at bruge visse funktioner skal du oprette en konto med Log
          ind med Apple eller Log ind med Google. Når du opretter en
          konto:
        </p>
        <List
          items={[
            "Skal du give nøjagtige og opdaterede oplysninger",
            "Skal du angive din fødselsdato korrekt",
            "Må du ikke oprette en konto under en andens identitet",
            "Må du ikke oprette en konto med falske eller vildledende oplysninger",
            <>
              En person må kun have <Strong>én konto</Strong>
            </>,
          ]}
        />

        <SubHeading>3.2 Kontosikkerhed</SubHeading>
        <p>
          Du er <Strong>eneansvarlig</Strong> for alle aktiviteter, der
          finder sted på din konto. For at opretholde sikkerheden:
        </p>
        <List
          items={[
            "Beskyt dit Apple ID eller din Google-konto",
            "Lad ikke andre få adgang til din konto",
            "Underret straks Udvikleren om mistænkelig aktivitet",
          ]}
        />

        <SubHeading>3.3 Opsigelse af konto</SubHeading>
        <p>
          Udvikleren forbeholder sig retten til{" "}
          <Strong>uden varsel at suspendere eller opsige</Strong> en
          brugers konto i følgende tilfælde:
        </p>
        <List
          items={[
            "Brud på disse Betingelser",
            "Svig, snyd eller vildledende adfærd",
            "Chikane, fornærmelser eller hadefuld tale mod andre brugere",
            "Oprettelse af flere konti",
            "Brug af automatiseret software, bots eller snydeværktøjer",
            "Adfærd i strid med gældende love",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Acceptabel brug">
        <SubHeading>4.1 Forbudt adfærd</SubHeading>
        <p>
          Følgende er <Strong>forbudt</Strong> ved brug af Appen:
        </p>
        <List
          items={[
            "Oprettelse af falske konti eller udgive sig for at være andre",
            "Brug af automatiserede værktøjer (bots, scripts) til forudsigelser",
            <>
              Brug af{" "}
              <Strong>
                upassende brugernavne, bandeord, fornærmelser, chikane,
                racistisk, sexistisk eller hadefuldt sprog
              </Strong>{" "}
              mod andre brugere
            </>,
            "Forsøg på at omgå Appens sikkerhedsmekanismer",
            "Reverse engineering, dekompilering eller adskillelse af Appen",
            "Kopiering, distribution eller kommerciel udnyttelse af Appens indhold uden tilladelse",
            "Deling af spam, reklamer eller promoveringsindhold (i liganavne, brugernavne osv.)",
            "Handlinger der overbelaster servere eller forstyrrer Tjenesten",
          ]}
        />

        <SubHeading>4.2 Sanktioner</SubHeading>
        <p>
          Hvis sådan adfærd opdages, forbeholder Udvikleren sig retten til
          uden varsel at suspendere brugerens konto, fjerne vedkommende
          fra ranglister eller permanent slette kontoen.
        </p>
      </Section>

      <Divider />

      <Section title="5. Immaterielle rettigheder">
        <SubHeading>5.1 Ejerskab af Appen</SubHeading>
        <p>
          Navnet ScoreHunter, logoet, det visuelle design, kildekoden,
          indholdet og alle immaterielle rettigheder{" "}
          <Strong>tilhører iCat Studios</Strong>. Disse er beskyttet af:
        </p>
        <List
          items={[
            "Ophavsret",
            "Varemærkeregistrering",
            "Forretningshemmeligheder",
            "Andre relevante immaterielle rettigheder",
          ]}
        />

        <SubHeading>5.2 Tredjepartsindhold og varemærker</SubHeading>
        <p>
          Appen viser tredjepartsindhold, herunder, men ikke begrænset
          til, fodboldkampdata, hold- og liganavne, spillernavne samt
          visuelle aktiver som hold- og ligalogoer. Indholdet leveres
          gennem vores datapartner API-Football og er ejet af de
          respektive ejere — klubber, ligaer, forbund og andre
          rettighedshavere. ScoreHunter gør ikke krav på ejendomsret over
          tredjeparts varemærker, logoer eller ophavsretligt beskyttet
          materiale, der vises i Appen.
        </p>
        <p>
          ScoreHunter er{" "}
          <Strong>
            ikke tilknyttet, godkendt af, sponsoreret af eller officielt
            forbundet med nogen liga, forbund, klub, konkurrence eller
            organisation, der vises eller refereres til i Appen
          </Strong>
          . Alle navne, logoer og varemærker tilhørende tredjeparter
          bruges udelukkende til identifikations- og beskrivelsesformål
          (nominativ rimelig brug).
        </p>
        <p>Du accepterer, at:</p>
        <List
          items={[
            <>
              du <Strong>ikke</Strong> vil udtrække, kopiere,
              redistribuere eller på anden måde genbruge tredjepartsindhold
              vist i Appen ud over normal personlig brug;
            </>,
            <>
              du <Strong>ikke</Strong> vil bruge Appen til at krænke
              tredjeparters immaterielle rettigheder;
            </>,
            <>
              enhver <Strong>kommerciel brug</Strong> af tredjepartsindhold
              i Appen kræver, at du selv indhenter en licens eller
              tilladelse direkte fra den relevante rettighedshaver.
            </>,
          ]}
        />
        <p>
          Hvis du er rettighedshaver og ønsker at indberette uautoriseret
          brug af dit varemærke eller ophavsretligt beskyttede materiale i
          Appen, så kontakt os på{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Vi besvarer legitime fjernelsesanmodninger inden for{" "}
          <Strong>tredive (30) dage</Strong> og fjerner eller erstatter
          indholdet, hvor det er passende.
        </p>

        <SubHeading>5.3 Brugerindhold</SubHeading>
        <p>
          Indhold du opretter under brug af Appen
          (forudsigelseslister, liganavne, brugernavn, profiloplysninger)
          tilhører dig. Ved brug af Appen giver du dog Udvikleren en{" "}
          <Strong>
            gratis, ubegrænset og overdragelig brugsret
          </Strong>{" "}
          til at vise, opbevare og dele dette indhold i Appen og med
          andre brugere.
        </p>
      </Section>

      <Divider />

      <Section title="6. Ansvarsfraskrivelse">
        <SubHeading>
          6.1 Tjenesten leveres &quot;som den er&quot;
        </SubHeading>
        <p>
          Appen leveres &quot;<Strong>som den er</Strong>&quot; og
          &quot;<Strong>efter tilgængelighed</Strong>&quot;. Udvikleren
          giver <Strong>ingen garantier</Strong> for, at:
        </p>
        <List
          items={[
            "Appen vil køre fejlfrit, uden afbrydelser eller sikkert",
            <>
              kampdata, scoringer eller statistik{" "}
              <Strong>altid er nøjagtige og opdaterede</Strong>
            </>,
            <>
              forudsigelsesresultater eller pointberegning{" "}
              <Strong>altid sker rettidigt</Strong>
            </>,
            "der ikke vil være serverafbrydelser",
            "Appen vil fungere på en bestemt enhed eller styresystem",
          ]}
        />

        <SubHeading>6.2 Kampdata og tredjepartsindhold</SubHeading>
        <p>
          Kampdata, scoringer, opstillinger, minutter og statistik
          modtages fra en{" "}
          <Strong>
            tredjeparts API-tjeneste (API-Football)
          </Strong>
          . Udvikleren{" "}
          <Strong>kan ikke holdes ansvarlig</Strong> for nøjagtigheden,
          aktualiteten eller fuldstændigheden af disse data. Ved brug af
          Appen accepterer brugeren, at der kan forekomme forsinkelser,
          fejl eller udeladelser i data.
        </p>
        <p>
          I videst muligt omfang i henhold til loven giver ScoreHunter og
          iCat Studios <Strong>ingen garanti</Strong> for nøjagtigheden,
          fuldstændigheden eller aktualiteten af kampdata, holdoplysninger,
          statistik eller andet tredjepartsindhold, der vises i Appen.
          Alt sådant indhold leveres &quot;<Strong>som det er</Strong>
          &quot; via vores datapartnere; ScoreHunter er ikke ansvarlig
          for fejl, udeladelser eller forsinkelser.
        </p>

        <SubHeading>6.3 Ansvarsbegrænsning</SubHeading>
        <p>
          Udvikleren er{" "}
          <Strong>
            ikke ansvarlig for direkte, indirekte, hændelige, særlige
            eller følgeskader
          </Strong>{" "}
          som følge af eller i forbindelse med brugen af Appen. Dette
          inkluderer, men er ikke begrænset til:
        </p>
        <List
          items={[
            "Tab af data",
            "Materielle eller immaterielle skader",
            "Tab af potentielle trofæer, præmier eller placeringer",
            "Enhedsfejl",
            "Afbrydelser i tredjepartstjenester",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Apple- og Google-fraskrivelse">
        <SubHeading>7.1 Vedrørende Apple Inc.</SubHeading>
        <p>
          Appen distribueres til iOS via Apple App Store. I denne
          sammenhæng:
        </p>
        <List
          items={[
            <>
              <Strong>
                Apple Inc. har INTET ansvar for denne App eller dens
                indhold
              </Strong>
            </>,
            "Apple kan ikke gøres ansvarlig for app-fejl, mangler, manglende levering af præmier eller andre forhold",
            <>
              Apple Inc. har <Strong>ingen forpligtelser</Strong>, hvis
              Appen overtræder disse Betingelser
            </>,
            <>
              Vedligeholdelse, support og brugerservices for Appen er{" "}
              <Strong>iCat Studios&apos; eneansvar</Strong>
            </>,
            <>
              <Strong>
                Eventuelle præmier, konkurrencer, kampagner eller
                kampagnetilbud i Appen er uafhængige af Apple Inc.
              </Strong>{" "}
              — Apple er på ingen måde sponsor, arrangør eller
              administrator
            </>,
            "Apple Inc. er fritaget for ansvar for retlige spørgsmål eller krav, der måtte opstå i Appen",
            "Appen og dens indhold skal respektere Apples immaterielle rettigheder",
            <>
              Appens brugere{" "}
              <Strong>
                kan ikke rette krav direkte mod Apple Inc.
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc. er tredjepartsbegunstiget af disse Betingelser
              </Strong>{" "}
              og kan om nødvendigt håndhæve dem
            </>,
          ]}
        />

        <SubHeading>7.2 Vedrørende Google LLC</SubHeading>
        <p>
          Appen distribueres til Android via Google Play Store. I denne
          sammenhæng:
        </p>
        <List
          items={[
            <>
              <Strong>
                Google LLC har INTET ansvar for denne App eller dens
                indhold
              </Strong>
            </>,
            "Google kan ikke gøres ansvarlig for app-fejl, mangler, manglende levering af præmier eller andre forhold",
            <>
              Vedligeholdelse, support og brugerservices for Appen er{" "}
              <Strong>iCat Studios&apos; eneansvar</Strong>
            </>,
            <>
              <Strong>
                Eventuelle præmier, konkurrencer, kampagner eller
                kampagnetilbud i Appen er uafhængige af Google LLC
              </Strong>{" "}
              — Google er på ingen måde sponsor, arrangør eller
              administrator
            </>,
            "Google Play Store er udelukkende en distributionsplatform og har intet ansvar for indholdet eller driften af Appen",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In og Google Sign-In</SubHeading>
        <p>
          Appen anvender Apple Sign-In og Google Sign-In til godkendelse.
          Drift, vedligeholdelse og sikkerhed af disse tjenester ligger
          hos de respektive udbydere. Udvikleren kan ikke holdes ansvarlig
          for forstyrrelser eller problemer med disse tjenester.
        </p>
      </Section>

      <Divider />

      <Section title="8. Betalte funktioner og abonnementer">
        <p>
          Appen kan tilbyde betalte funktioner
          (&quot;Pro-medlemskab&quot; eller lignende). Når der tilføjes
          betalte funktioner:
        </p>
        <List
          items={[
            <>
              Alle betalinger behandles via{" "}
              <Strong>Apple App Store</Strong> eller{" "}
              <Strong>Google Play Store</Strong>
            </>,
            "Betaling, refusion og abonnementsadministration er underlagt politikkerne for den pågældende platform",
            <>
              <Strong>
                Refusionsanmodninger skal fremsendes til Apple eller Google
              </Strong>{" "}
              — ikke direkte til Udvikleren
            </>,
            <>
              Betalte funktioner giver brugeren kun{" "}
              <Strong>en ekstra oplevelse</Strong> — de påvirker ikke
              konkurrenceresultater eller placeringer
            </>,
            <>
              Betalte funktioner{" "}
              <Strong>giver ingen sejrsgaranti</Strong> — alle brugere er
              lige i konkurrencerne
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Spilleregler og mekanik">
        <p>
          Appens aktuelle spilleregler, scoremekanismer,
          minispilbeskrivelser og metoder til ranglisteberegning vises{" "}
          <Strong>inde i Appen</Strong>. Udvikleren forbeholder sig
          retten til at{" "}
          <Strong>ændre spilleregler uden forudgående varsel</Strong>.
          Betydelige ændringer annonceres via in-app-meddelelser.
        </p>
      </Section>

      <Divider />

      <Section title="10. Ændring eller ophør af Tjenesten">
        <p>
          Udvikleren kan til enhver tid og af enhver grund:
        </p>
        <List
          items={[
            "Ændre, tilføje eller fjerne funktioner i Appen",
            "Suspendere Appen midlertidigt",
            "Afslutte Appen helt",
            "Indstille Tjenesten i bestemte regioner",
          ]}
        />
        <p>
          Brugere kan ikke gøre krav på erstatning som følge af sådanne
          ændringer.
        </p>
      </Section>

      <Divider />

      <Section title="11. Ændringer af disse Betingelser">
        <p>
          Udvikleren forbeholder sig retten til{" "}
          <Strong>til enhver tid at opdatere disse Betingelser</Strong>.
          Betydelige ændringer vil:
        </p>
        <List
          items={[
            "Blive offentliggjort på denne side",
            <>
              Opdatere datoen &quot;Sidst opdateret&quot; øverst
            </>,
            "Kunne sendes som in-app-meddelelser",
          ]}
        />
        <p>
          Hvis du fortsætter med at bruge Appen efter offentliggørelse af
          ændringerne, accepterer du de opdaterede Betingelser.
        </p>
      </Section>

      <Divider />

      <Section title="12. Lovvalg og værneting">
        <p>
          Disse Betingelser er underlagt{" "}
          <Strong>Republikken Türkiyes lovgivning</Strong>. Tvister, der
          måtte opstå i forbindelse med disse Betingelser, afgøres af{" "}
          <Strong>domstolene og fogedretterne i Istanbul</Strong>.
        </p>
      </Section>

      <Divider />

      <Section title="13. Kontakt">
        <p>For spørgsmål om disse Brugsbetingelser:</p>
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
      </Section>
    </>
  );
}
