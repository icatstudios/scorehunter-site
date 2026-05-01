import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentSv() {
  return (
    <>
      <p>
        Läs dessa Användarvillkor (&quot;Villkor&quot;) noggrant innan du
        använder mobilappen ScoreHunter (&quot;Appen&quot;,
        &quot;Tjänsten&quot;). Genom att ladda ner och använda Appen
        godkänner du att vara bunden av dessa Villkor. Om du inte
        godkänner Villkoren, använd inte Appen.
      </p>

      <Divider />

      <Section title="1. Definitioner">
        <List
          items={[
            <>
              <Strong>App</Strong>: mobilappen ScoreHunter och
              relaterade webbplatser
            </>,
            <>
              <Strong>Utvecklare / Vi / Oss / Vår</Strong>: iCat Studios
            </>,
            <>
              <Strong>Användare / Du / Din</Strong>: personen som
              använder Appen
            </>,
            <>
              <Strong>Tjänst</Strong>: alla funktioner och allt innehåll
              som Appen erbjuder
            </>,
            <>
              <Strong>Innehåll</Strong>: matchdata, tipplistor,
              topplistor, troféer, användarprofiler och alla övriga data i
              Appen
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Tjänstens karaktär — VIKTIGT">
        <SubHeading>2.1 ScoreHunter är inte en spelapp om pengar</SubHeading>
        <p>
          ScoreHunter är en{" "}
          <Strong>
            kunskapsbaserad fotbollstipps- och underhållningsapp
          </Strong>
          . Följande punkter beskriver Appens grundläggande karaktär och
          måste vara tydliga för användarna:
        </p>
        <List
          items={[
            <>
              Appen är ett <Strong>färdighetsbaserat spel</Strong>, INTE
              ett hasardspel
            </>,
            <>
              Appen innehåller INGEN{" "}
              <Strong>spelterminologi</Strong> (kupong, odds, handicap,
              marginal, jackpot)
            </>,
            <>
              Det erbjuds inga <Strong>spelodds</Strong> eller{" "}
              <Strong>vinstmultiplikatorer</Strong> för någon match i
              Appen
            </>,
            <>
              Alla matcher är{" "}
              <Strong>likvärda</Strong> för tippsändamål — ingen match är
              &quot;mer värd&quot; än någon annan
            </>,
            <>
              Appen låter fotbollsfans tävla med kunskap och intuition i
              en rolig miljö
            </>,
            <>
              Huvudsyftet är{" "}
              <Strong>
                underhållning, fotbollskultur, gemenskapsbyggande och
                kunskapsdelning
              </Strong>
            </>,
          ]}
        />

        <SubHeading>2.2 Inga insättningar eller pengapriser</SubHeading>
        <List
          items={[
            <>
              Det är <Strong>INTE NÖDVÄNDIGT</Strong> att använda riktiga
              pengar för att spela Appen eller delta i tävlingar
            </>,
            <>
              Appen innehåller <Strong>INGA</Strong> funktioner för{" "}
              <Strong>vadslagning med riktiga pengar</Strong> eller{" "}
              <Strong>spel om pengar</Strong>
            </>,
            <>
              Appen lovar{" "}
              <Strong>INGA riktiga kontantpriser</Strong> till vinnare
            </>,
            <>
              Appen innehåller{" "}
              <Strong>
                INGA inslag av spel om pengar, hasardspel, lotterier eller
                vadslagning
              </Strong>
            </>,
            <>
              Alla användare deltar på{" "}
              <Strong>lika villkor</Strong> i tävlingarna
            </>,
            <>
              Betalda funktioner som Pro-medlemskap{" "}
              <Strong>påverkar inte tävlingsresultat</Strong> — de
              erbjuder bara extra funktioner som förbättrar
              användarupplevelsen
            </>,
          ]}
        />

        <SubHeading>2.3 Kampanjbelöningar</SubHeading>
        <p>
          Utvecklaren kan efter eget gottfinnande ibland tilldela{" "}
          <Strong>kampanjpriser</Strong> (tröjor, fotbollar, digitala
          presentkort, symboliska gåvor m.m.) till de bäst presterande
          användarna. Följande villkor gäller:
        </p>
        <List
          items={[
            <>
              Priserna har{" "}
              <Strong>kampanjkaraktär</Strong> och syftar till att främja
              användarengagemang
            </>,
            <>
              Priser är <Strong>INTE garanterade</Strong> — de delas ut
              endast inom kampanjer som Utvecklaren tillkännager
            </>,
            <>
              Priser delas <Strong>INTE ut som kontanter</Strong> — endast
              som fysiska eller digitala gåvor
            </>,
            <>
              Tilldelning, distribution och leverans av priser är{" "}
              <Strong>
                helt och hållet Utvecklarens ansvar
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC och Google Play
                Store har inget ansvar för dessa priser
              </Strong>
            </>,
            <>
              Adress, identitet eller annan information kan begäras från
              vinnarna av Utvecklaren enbart i syfte att leverera priset
            </>,
          ]}
        />

        <SubHeading>2.4 Åldersgräns</SubHeading>
        <p>
          Appen är avsedd för användare{" "}
          <Strong>över 13 år</Strong>. Personer under 13 år får inte
          använda Appen. Genom användning intygar användaren att hen är
          över 13 år.
        </p>
      </Section>

      <Divider />

      <Section title="3. Skapa och använda konto">
        <SubHeading>3.1 Skapa ett konto</SubHeading>
        <p>
          För att använda vissa funktioner måste du skapa ett konto via
          Logga in med Apple eller Logga in med Google. Vid kontoskapandet:
        </p>
        <List
          items={[
            "Ska du ange korrekta och aktuella uppgifter",
            "Ska du ange din födelsedag korrekt",
            "Får du inte skapa konto med någon annans identitet",
            "Får du inte skapa konto med falska eller vilseledande uppgifter",
            <>
              En person får bara ha <Strong>ett konto</Strong>
            </>,
          ]}
        />

        <SubHeading>3.2 Kontosäkerhet</SubHeading>
        <p>
          Du är <Strong>ensamt ansvarig</Strong> för all aktivitet på ditt
          konto. För att upprätthålla säkerheten:
        </p>
        <List
          items={[
            "Skydda ditt Apple ID eller Google-konto",
            "Låt inte andra få tillgång till ditt konto",
            "Informera Utvecklaren omedelbart vid misstänkt aktivitet",
          ]}
        />

        <SubHeading>3.3 Avslutning av konto</SubHeading>
        <p>
          Utvecklaren förbehåller sig rätten att{" "}
          <Strong>utan förvarning stänga av eller avsluta</Strong> en
          användares konto i följande fall:
        </p>
        <List
          items={[
            "Brott mot dessa Villkor",
            "Bedrägeri, fusk eller vilseledande beteende",
            "Trakasserier, förolämpningar eller hatpropaganda mot andra användare",
            "Skapande av flera konton",
            "Användning av automatiserad mjukvara, botar eller fuskverktyg",
            "Beteende i strid med tillämplig lag",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Acceptabel användning">
        <SubHeading>4.1 Förbjudet beteende</SubHeading>
        <p>
          Följande är <Strong>förbjudet</Strong> vid användning av Appen:
        </p>
        <List
          items={[
            "Skapa falska konton eller utge sig för att vara någon annan",
            "Använda automatiserade verktyg (botar, skript) för att tippa",
            <>
              Använda{" "}
              <Strong>
                olämpliga användarnamn, svordomar, förolämpningar,
                trakasserier, rasistiskt, sexistiskt eller hatfullt språk
              </Strong>{" "}
              mot andra användare
            </>,
            "Försöka kringgå Appens säkerhetsmekanismer",
            "Reverse engineering, dekompilering eller demontering av Appen",
            "Kopiera, distribuera eller kommersiellt utnyttja Appens innehåll utan tillstånd",
            "Sprida spam, reklam eller marknadsföringsinnehåll (i liganamn, användarnamn osv.)",
            "Vidta åtgärder som överbelastar servrar eller stör Tjänsten",
          ]}
        />

        <SubHeading>4.2 Sanktioner</SubHeading>
        <p>
          Om sådant beteende upptäcks förbehåller sig Utvecklaren rätten
          att utan förvarning stänga av användarens konto, ta bort
          användaren från topplistor eller permanent radera kontot.
        </p>
      </Section>

      <Divider />

      <Section title="5. Immateriella rättigheter">
        <SubHeading>5.1 Ägandet av Appen</SubHeading>
        <p>
          Namnet ScoreHunter, logotypen, det visuella, designen,
          källkoden, innehållet och alla immateriella rättigheter{" "}
          <Strong>tillhör iCat Studios</Strong>. Innehållet skyddas av:
        </p>
        <List
          items={[
            "Upphovsrätt",
            "Varumärkesregistrering",
            "Affärshemligheter",
            "Andra tillämpliga immateriella rättigheter",
          ]}
        />

        <SubHeading>5.2 Tredjepartsinnehåll och varumärken</SubHeading>
        <p>
          Appen visar tredjepartsinnehåll, inklusive men inte begränsat
          till matchdata, lag- och liganamn, spelarnamn samt visuella
          tillgångar som lag- och ligalogotyper. Innehållet tillhandahålls
          via vår datapartner API-Football och tillhör respektive ägare —
          klubbar, ligor, förbund och andra rättighetsinnehavare.
          ScoreHunter gör inte anspråk på äganderätt till några
          tredjeparts varumärken, logotyper eller upphovsrättsskyddat
          material som visas i Appen.
        </p>
        <p>
          ScoreHunter är{" "}
          <Strong>
            inte ansluten till, godkänd av, sponsrad av eller på något
            sätt officiellt kopplad till någon liga, förbund, klubb,
            tävling eller organisation som visas i Appen
          </Strong>
          . Alla namn, logotyper och varumärken från tredje part används
          endast för identifiering och beskrivning (nominativ skälig
          användning).
        </p>
        <p>Du godkänner att:</p>
        <List
          items={[
            <>
              du <Strong>inte</Strong> kommer att extrahera, kopiera,
              distribuera om eller på annat sätt återanvända
              tredjepartsinnehåll i Appen utöver normal personlig
              användning;
            </>,
            <>
              du <Strong>inte</Strong> kommer att använda Appen för att
              kränka tredje parts immateriella rättigheter;
            </>,
            <>
              all <Strong>kommersiell användning</Strong> av tredje parts
              innehåll i Appen kräver att du själv erhåller licens eller
              tillstånd direkt från relevant rättighetsinnehavare.
            </>,
          ]}
        />
        <p>
          Om du är rättighetsinnehavare och vill rapportera obehörig
          användning av ditt varumärke eller upphovsrättsskyddade
          material i Appen, kontakta oss på{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Vi besvarar berättigade borttagningsbegäran inom{" "}
          <Strong>trettio (30) dagar</Strong> och tar bort eller ersätter
          innehållet där det är lämpligt.
        </p>

        <SubHeading>5.3 Användarinnehåll</SubHeading>
        <p>
          Innehåll du skapar vid användning av Appen (tipplistor,
          liganamn, användarnamn, profilinformation) tillhör dig. Genom
          att använda Appen ger du dock Utvecklaren en{" "}
          <Strong>
            kostnadsfri, obegränsad och överlåtbar användningsrätt
          </Strong>{" "}
          att visa, lagra och dela detta innehåll i Appen och med andra
          användare.
        </p>
      </Section>

      <Divider />

      <Section title="6. Friskrivning">
        <SubHeading>
          6.1 Tjänsten tillhandahålls &quot;i befintligt skick&quot;
        </SubHeading>
        <p>
          Appen tillhandahålls &quot;<Strong>i befintligt skick</Strong>
          &quot; och &quot;<Strong>i mån av tillgång</Strong>&quot;.
          Utvecklaren lämnar <Strong>inga garantier</Strong> för att:
        </p>
        <List
          items={[
            "Appen kommer att fungera felfritt, utan avbrott eller säkert",
            <>
              matchdata, resultat eller statistik{" "}
              <Strong>alltid är korrekta och uppdaterade</Strong>
            </>,
            <>
              tippresultat eller poängberäkning{" "}
              <Strong>alltid sker i tid</Strong>
            </>,
            "det inte kommer att ske serveravbrott",
            "Appen kommer att fungera på en specifik enhet eller operativsystem",
          ]}
        />

        <SubHeading>6.2 Matchdata och tredjepartsinnehåll</SubHeading>
        <p>
          Matchdata, resultat, laguppställningar, minuter och statistik
          hämtas från en{" "}
          <Strong>
            tredjeparts API-tjänst (API-Football)
          </Strong>
          . Utvecklaren{" "}
          <Strong>kan inte hållas ansvarig</Strong> för korrekthet,
          aktualitet eller fullständighet i dessa data. Genom att använda
          Appen godtar användaren att fördröjningar, fel eller utelämnanden
          kan förekomma.
        </p>
        <p>
          Inom den fulla utsträckning som lagen tillåter ger ScoreHunter
          och iCat Studios <Strong>inga garantier</Strong> avseende
          korrektheten, fullständigheten eller aktualiteten av matchdata,
          laginformation, statistik eller annat tredjepartsinnehåll i
          Appen. Allt sådant innehåll tillhandahålls &quot;
          <Strong>i befintligt skick</Strong>&quot; via våra
          datapartners; ScoreHunter ansvarar inte för fel, utelämnanden
          eller fördröjningar.
        </p>

        <SubHeading>6.3 Ansvarsbegränsning</SubHeading>
        <p>
          Utvecklaren är{" "}
          <Strong>
            inte ansvarig för direkta, indirekta, oavsiktliga, särskilda
            eller följdskador
          </Strong>{" "}
          som uppstår på grund av eller i samband med användning av
          Appen. Detta omfattar bland annat:
        </p>
        <List
          items={[
            "Dataförlust",
            "Materiell eller ideell skada",
            "Förlust av potentiella troféer, priser eller placeringar",
            "Enhetsfel",
            "Avbrott i tredjepartstjänster",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Apple- och Google-friskrivning">
        <SubHeading>7.1 Avseende Apple Inc.</SubHeading>
        <p>
          Denna App distribueras för iOS via Apple App Store. I detta
          sammanhang:
        </p>
        <List
          items={[
            <>
              <Strong>
                Apple Inc. har INGET ansvar för denna App eller dess
                innehåll
              </Strong>
            </>,
            "Apple kan inte hållas ansvarig för fel, brister, utebliven leverans av priser eller andra ärenden",
            <>
              Apple Inc. har <Strong>inga skyldigheter</Strong> om Appen
              bryter mot dessa Villkor
            </>,
            <>
              Underhåll, support och användartjänster för Appen är{" "}
              <Strong>iCat Studios&apos; ensamma ansvar</Strong>
            </>,
            <>
              <Strong>
                Eventuella priser, tävlingar, kampanjer eller
                marknadsföring i Appen är oberoende av Apple Inc.
              </Strong>{" "}
              — Apple är på inget sätt sponsor, organisatör eller
              administratör
            </>,
            "Apple Inc. är fritaget från ansvar för rättsliga frågor eller anspråk som uppstår i Appen",
            "Appen och dess innehåll måste respektera Apples immateriella rättigheter",
            <>
              Användare av Appen{" "}
              <Strong>
                kan inte rikta krav direkt mot Apple Inc.
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc. är tredjepartsförmånstagare av dessa Villkor
              </Strong>{" "}
              och kan vid behov verkställa dem
            </>,
          ]}
        />

        <SubHeading>7.2 Avseende Google LLC</SubHeading>
        <p>
          Denna App distribueras för Android via Google Play Store. I
          detta sammanhang:
        </p>
        <List
          items={[
            <>
              <Strong>
                Google LLC har INGET ansvar för denna App eller dess
                innehåll
              </Strong>
            </>,
            "Google kan inte hållas ansvarig för fel, brister, utebliven leverans av priser eller andra ärenden",
            <>
              Underhåll, support och användartjänster för Appen är{" "}
              <Strong>iCat Studios&apos; ensamma ansvar</Strong>
            </>,
            <>
              <Strong>
                Eventuella priser, tävlingar, kampanjer eller
                marknadsföring i Appen är oberoende av Google LLC
              </Strong>{" "}
              — Google är på inget sätt sponsor, organisatör eller
              administratör
            </>,
            "Google Play Store är endast en distributionsplattform och har inget ansvar för innehållet eller driften av Appen",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In och Google Sign-In</SubHeading>
        <p>
          Appen använder Apple Sign-In och Google Sign-In för
          autentisering. Dessa tjänsters drift, underhåll och säkerhet
          ligger hos respektive leverantör. Utvecklaren ansvarar inte för
          avbrott eller problem med dessa tjänster.
        </p>
      </Section>

      <Divider />

      <Section title="8. Betalda funktioner och prenumerationer">
        <p>
          Appen kan erbjuda betalda funktioner
          (&quot;Pro-medlemskap&quot; eller liknande). När betalda
          funktioner läggs till:
        </p>
        <List
          items={[
            <>
              Alla betalningar behandlas via{" "}
              <Strong>Apple App Store</Strong> eller{" "}
              <Strong>Google Play Store</Strong>
            </>,
            "Betalning, återbetalning och prenumerationshantering följer respektive plattforms policy",
            <>
              <Strong>
                Återbetalningsförfrågningar måste skickas till Apple eller
                Google
              </Strong>{" "}
              — inte direkt till Utvecklaren
            </>,
            <>
              Betalda funktioner ger användaren endast{" "}
              <Strong>extra upplevelse</Strong> — de påverkar inte
              tävlingsresultat eller placeringar
            </>,
            <>
              Betalda funktioner{" "}
              <Strong>garanterar inte vinst</Strong> — alla användare är
              jämbördiga i tävlingarna
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Spelregler och mekanik">
        <p>
          Appens aktuella spelregler, poängmekanik, beskrivningar av
          minispel och rangordningsmetoder visas{" "}
          <Strong>inne i Appen</Strong>. Utvecklaren förbehåller sig
          rätten att{" "}
          <Strong>ändra spelreglerna utan förvarning</Strong>. Väsentliga
          ändringar tillkännages via in-app-aviseringar.
        </p>
      </Section>

      <Divider />

      <Section title="10. Ändring eller upphörande av Tjänsten">
        <p>Utvecklaren kan när som helst och av valfritt skäl:</p>
        <List
          items={[
            "Ändra, lägga till eller ta bort funktioner i Appen",
            "Tillfälligt avbryta Appen",
            "Avsluta Appen helt",
            "Avbryta Tjänsten i vissa regioner",
          ]}
        />
        <p>
          Användare kan inte göra anspråk på ersättning på grund av sådana
          ändringar.
        </p>
      </Section>

      <Divider />

      <Section title="11. Ändringar av dessa Villkor">
        <p>
          Utvecklaren förbehåller sig rätten att{" "}
          <Strong>uppdatera dessa Användarvillkor när som helst</Strong>.
          Väsentliga ändringar kommer att:
        </p>
        <List
          items={[
            "Publiceras på denna sida",
            <>
              Uppdatera datumet &quot;Senast uppdaterad&quot; överst
            </>,
            "Kunna skickas som in-app-aviseringar",
          ]}
        />
        <p>
          Genom att fortsätta använda Appen efter publicering av
          ändringarna godkänner du de uppdaterade Villkoren.
        </p>
      </Section>

      <Divider />

      <Section title="12. Tillämplig lag och behörig domstol">
        <p>
          Dessa Villkor regleras av{" "}
          <Strong>Republiken Türkiyes lagar</Strong>. Tvister som uppstår
          ur eller i samband med dessa Villkor avgörs av{" "}
          <Strong>Istanbuls domstolar och kronofogdemyndigheter</Strong>.
        </p>
      </Section>

      <Divider />

      <Section title="13. Kontakt">
        <p>För frågor om dessa Användarvillkor:</p>
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
      </Section>
    </>
  );
}
