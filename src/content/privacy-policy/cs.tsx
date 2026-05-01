import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentCs() {
  return (
    <>
      <p>
        My ve společnosti iCat Studios (&quot;my&quot;, &quot;nás&quot;,
        &quot;naše&quot;) respektujeme soukromí uživatelů
        (&quot;vy&quot;, &quot;váš&quot;) mobilní aplikace ScoreHunter
        (&quot;Aplikace&quot;). Tyto zásady ochrany osobních údajů
        vysvětlují, jaké osobní údaje shromažďujeme, jak je používáme, s kým
        je sdílíme a jaká jsou vaše práva při používání Aplikace.
      </p>
      <p>
        Používáním Aplikace souhlasíte s těmito zásadami ochrany osobních
        údajů.
      </p>

      <Divider />

      <Section title="1. Údaje, které shromažďujeme">
        <SubHeading>1.1 Informace o účtu</SubHeading>
        <p>
          Když použijete Přihlášení přes Apple nebo Přihlášení přes Google,
          obdržíme od společnosti Apple nebo Google následující informace:
        </p>
        <List
          items={[
            <>
              <Strong>E-mailovou adresu</Strong> (Apple posílá přepojovací
              e-mail, pokud zvolíte &quot;Skrýt můj e-mail&quot;)
            </>,
            <>
              <Strong>Jméno a příjmení</Strong> (Apple pouze při prvním
              přihlášení; Google při každém přihlášení)
            </>,
            <>
              <Strong>Provider User ID</Strong> — jedinečný identifikátor
              pro rozpoznání vašeho účtu
            </>,
          ]}
        />

        <SubHeading>1.2 Informace o profilu</SubHeading>
        <p>Informace, které zadáváte přímo v Aplikaci:</p>
        <List
          items={[
            <>
              <Strong>Uživatelské jméno</Strong> (zobrazované jméno —
              viditelné v žebříčcích)
            </>,
            <>
              <Strong>Země</Strong>
            </>,
            <>
              <Strong>Oblíbený fotbalový tým</Strong>
            </>,
            <>
              <Strong>Datum narození</Strong>
            </>,
            <>
              <Strong>Pohlaví</Strong> (volitelné — &quot;nepřeji si
              uvádět&quot; je možnost)
            </>,
            <>
              <Strong>Stav předplatného Pro</Strong> — zda máte aktivní
              členství Pro a datum jeho ukončení
            </>,
          ]}
        />

        <SubHeading>1.3 Údaje o používání</SubHeading>
        <p>Údaje generované při používání Aplikace:</p>
        <List
          items={[
            <>
              <Strong>Tipovací kupóny</Strong> (vybrané zápasy a tipy pro
              Score Hunt a minihry)
            </>,
            <>
              <Strong>Ligy, ke kterým se připojíte</Strong>
            </>,
            <>
              <Strong>Získané trofeje a úspěchy</Strong>
            </>,
            <>
              <Strong>Týdenní a sezónní skóre v žebříčcích</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Informace o zařízení a aplikaci</SubHeading>
        <List
          items={[
            <>
              <Strong>ID zařízení</Strong> (pro anonymní správu relace)
            </>,
            <>
              <Strong>Operační systém</Strong> (verze iOS/Android)
            </>,
            <>
              <Strong>Verze aplikace a platforma</Strong> (kód verze, název
              verze a zda používáte iOS nebo Android) — používá se k
              poskytování podpory specifické pro verzi a k identifikaci
              problémů s kompatibilitou
            </>,
            <>
              <Strong>Token push notifikací</Strong> — jedinečný token od
              služby Apple Push Notification service (APNs) nebo Firebase
              Cloud Messaging (FCM) pro doručování připomenutí zápasů,
              oznámení o cenách a důležitých upozornění. Push notifikace
              můžete kdykoli vypnout v nastavení zařízení.
            </>,
          ]}
        />

        <SubHeading>1.5 Reklamní identifikátory</SubHeading>
        <p>
          Aplikace může shromažďovat váš{" "}
          <Strong>reklamní identifikátor</Strong> (IDFA na iOS, GAID/Reklamní
          ID na Androidu),{" "}
          <Strong>pouze s vaším výslovným souhlasem</Strong>:
        </p>
        <List
          items={[
            <>
              Na <Strong>iOS</Strong> se při prvním spuštění zobrazí výzva{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>. Pokud
              zvolíte &quot;Požádat aplikaci, aby mě nesledovala&quot;,
              IDFA se neshromažďuje a naši reklamní partneři získávají
              pouze informace zachovávající soukromí prostřednictvím
              SKAdNetwork společnosti Apple.
            </>,
            <>
              Na <Strong>Androidu</Strong> se GAID shromažďuje, pokud se z
              něj neodhlásíte v{" "}
              <Strong>
                Nastavení → Google → Reklamy → Smazat reklamní ID
              </Strong>
              .
            </>,
            <>
              Pokud je shromažďován, je reklamní identifikátor sdílen s
              našimi reklamními partnery uvedenými v sekci 3.4 pro účely
              atribuce reklam a omezení frekvence zobrazování.
            </>,
          ]}
        />

        <SubHeading>1.6 Automaticky shromažďované údaje</SubHeading>
        <List
          items={[
            <>
              <Strong>IP adresa</Strong> — používá se pro bezpečnostní
              účely, včetně omezení rychlosti na autentizačních koncových
              bodech (např. až 15 pokusů o přihlášení za minutu na IP) a
              prevence zneužití. IP adresy nepoužíváme k vytváření
              reklamních profilů.
            </>,
            <>
              <Strong>Hlášení chyb a pádů</Strong> — používá se k
              monitorování stability aplikace. Hlášení jsou filtrována, aby
              se vyloučily osobně identifikovatelné údaje.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Jak používáme vaše údaje">
        <p>Shromážděné údaje používáme pro následující účely:</p>
        <List
          items={[
            <>
              <Strong>Vytvoření a správa účtu</Strong>: abyste se mohli
              přihlásit a používat Aplikaci
            </>,
            <>
              <Strong>Herní zážitek</Strong>: pro uložení vašich tipovacích
              kupónů, výpočet skóre a sestavení žebříčků
            </>,
            <>
              <Strong>Personalizace</Strong>: pro zobrazení vašeho oblíbeného
              týmu a země v žebříčcích
            </>,
            <>
              <Strong>Správa předplatného Pro</Strong>: pro ověření stavu
              předplatného a udělení přístupu k funkcím Pro
            </>,
            <>
              <Strong>Komunikace</Strong>: pro zasílání důležitých
              aktualizací, oznámení, zpráv o cenách a push notifikací
              týkajících se Aplikace
            </>,
            <>
              <Strong>Doručení cen</Strong>: pro zasílání fyzických nebo
              digitálních cen vítězům soutěží (vyžaduje jméno a e-mail)
            </>,
            <>
              <Strong>Bezpečnost účtu</Strong>: pro prevenci podvodných
              účtů, ověření totožnosti uživatele a omezení podezřelých
              aktivit
            </>,
            <>
              <Strong>Reklama</Strong>: pro zobrazování reklam v Aplikaci a
              měření jejich výkonu — podrobnosti viz sekce 8
            </>,
            <>
              <Strong>Analýza a vylepšování</Strong>: pro anonymní analýzu
              statistik používání a vylepšování Aplikace
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. S kým sdílíme vaše údaje">
        <p>
          ScoreHunter{" "}
          <Strong>
            neprodává ani nepronajímá vaše osobní údaje třetím stranám
          </Strong>
          . Údaje sdílíme pouze s důvěryhodnými poskytovateli služeb a
          reklamními partnery uvedenými níže, a to pouze v rozsahu nezbytném
          pro provoz Aplikace.
        </p>

        <SubHeading>3.1 Poskytovatelé služeb</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — hosting serverů
              a databází (Frankfurt, Německo)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — služba třetí strany poskytující údaje o zápasech, informace
              o týmech a ligách a související vizuální prostředky (loga a
              obrázky). S API-Football nejsou sdíleny žádné osobní údaje.
              ScoreHunter nevlastní práva k logům ani ochranným známkám
              dodávaným prostřednictvím této služby; podrobnosti viz sekce 11.
            </>,
            <>
              <Strong>Apple</Strong> — autentizace Apple Sign-In
            </>,
            <>
              <Strong>Google</Strong> — autentizace Google Sign-In a
              Firebase Cloud Messaging (push notifikace na Androidu)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — zpracovává nákupy a obnovení
              předplatného Pro na iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — zpracovává nákupy a
              obnovení předplatného Pro na Androidu
            </>,
            <>
              <Strong>Sentry</Strong> — backendové sledování chyb. Filtrování
              osobně identifikovatelných údajů je aktivováno (do Sentry se
              neodesílá žádná e-mailová adresa, jméno ani uživatelský obsah).
            </>,
          ]}
        />
        <p>
          Tito poskytovatelé služeb zpracovávají údaje pouze naším jménem a
          podle našich pokynů.
        </p>

        <SubHeading>3.2 Zákonné požadavky</SubHeading>
        <p>
          Vaše údaje mohou být sdíleny s úřady v reakci na soudní příkazy,
          právní vyšetřování nebo zákonné povinnosti.
        </p>

        <SubHeading>3.3 Informace viditelné pro ostatní uživatele</SubHeading>
        <p>
          Následující informace jsou{" "}
          <Strong>viditelné pro ostatní uživatele</Strong> v žebříčcích a na
          stránkách profilu:
        </p>
        <List
          items={[
            "Vaše uživatelské jméno (zobrazované jméno)",
            "Vaše vlajka země",
            "Váš oblíbený tým",
            "Získané trofeje",
            "Vaše tipovací skóre a statistiky",
            "Odznak členství Pro při aktivním předplatném",
          ]}
        />
        <p>
          Následující informace se{" "}
          <Strong>nikdy v Aplikaci nezobrazují</Strong>:
        </p>
        <List
          items={[
            "Vaše e-mailová adresa",
            "Vaše skutečné jméno a příjmení",
            "Vaše datum narození",
            "Vaše pohlaví",
            "Informace o vašem zařízení",
            "Váš reklamní identifikátor",
            "Datum ukončení vašeho předplatného",
          ]}
        />

        <SubHeading>3.4 Reklamní partneři</SubHeading>
        <p>
          Aplikace zobrazuje reklamy prostřednictvím několika reklamních
          sítí (někdy nazývaných <em>mediation</em>). Po udělení souhlasu se
          sledováním může být váš reklamní identifikátor a omezené technické
          údaje sdíleny s níže uvedenými partnery pro účely doručování
          reklam, atribuce a omezení frekvence zobrazování. Každý partner
          má vlastní zásady ochrany osobních údajů:
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

      <Section title="4. Kde a jak dlouho uchováváme vaše údaje">
        <SubHeading>4.1 Místo uložení</SubHeading>
        <p>
          Veškeré uživatelské údaje jsou uloženy v datových centrech{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>
          . Jako databázovou službu používáme Amazon RDS PostgreSQL.
        </p>

        <SubHeading>4.2 Doba uchovávání</SubHeading>
        <List
          items={[
            <>
              <Strong>Aktivní účty</Strong>: vaše údaje jsou uchovávány po
              dobu, kdy je váš účet aktivní
            </>,
            <>
              <Strong>Neaktivní účty</Strong>: účty bez přihlášení po dobu 2
              let jsou automaticky smazány
            </>,
            <>
              <Strong>Smazané účty</Strong>: když smažete svůj účet, vaše
              osobní údaje jsou trvale odstraněny do 30 dnů (včetně záloh)
            </>,
            <>
              <Strong>Anonymní statistiky</Strong>: anonymní agregované
              statistiky mohou být uchovávány i po smazání (bez osobních
              údajů)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Vaše práva">
        <p>
          Podle GDPR (EU) a KVKK (Turecko) máte následující práva:
        </p>
        <List
          items={[
            <>
              <Strong>Právo na přístup</Strong>: zjistit, jaké údaje o vás
              zpracováváme
            </>,
            <>
              <Strong>Právo na opravu</Strong>: požádat o opravu nesprávných
              nebo neúplných údajů
            </>,
            <>
              <Strong>
                Právo na výmaz (&quot;právo být zapomenut&quot;)
              </Strong>
              : požádat o smazání vašich údajů
            </>,
            <>
              <Strong>Právo na omezení zpracování</Strong>: omezit, jak jsou
              vaše údaje zpracovávány
            </>,
            <>
              <Strong>Právo na přenositelnost údajů</Strong>: získat vaše
              údaje ve strojově čitelném formátu
            </>,
            <>
              <Strong>Právo vznést námitku</Strong>: vznést námitku proti
              zpracování údajů
            </>,
            <>
              <Strong>Právo odvolat souhlas</Strong>{" "}
              (sledování pro reklamy): kdykoli můžete odvolat povolení ATT
              na iOS prostřednictvím{" "}
              <Strong>
                Nastavení → Soukromí a zabezpečení → Sledování
              </Strong>
              , nebo kdykoli resetovat či smazat své reklamní ID na Androidu
            </>,
          ]}
        />

        <SubHeading>Jak smazat svůj účet</SubHeading>
        <p>Svůj účet můžete smazat třemi způsoby:</p>
        <OrderedList
          items={[
            <>
              <Strong>V aplikaci</Strong>: stránka profilu → nastavení účtu
              → smazat účet
            </>,
            <>
              <Strong>Na webu</Strong>:{" "}
              <Anchor href="/cs/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>E-mailem</Strong>: zašlete žádost na níže uvedenou
              kontaktní adresu
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Soukromí dětí">
        <p>
          ScoreHunter{" "}
          <Strong>není určen pro uživatele mladší 13 let</Strong>. Vědomě
          neshromažďujeme osobní údaje od dětí mladších 13 let. Pokud
          zjistíme, že jsme shromáždili osobní údaje od dítěte mladšího 13
          let, smažeme je co nejrychleji.
        </p>
        <p>
          U uživatelů ve věku 13 až 18 let doporučujeme prostudovat tyto
          zásady ochrany osobních údajů společně s rodičem nebo opatrovníkem.
          Reklamy v Aplikaci jsou nakonfigurovány s{" "}
          <Strong>
            nepersonalizovaným / rodinně přívětivým nastavením
          </Strong>{" "}
          pro uživatele, kteří se na základě uvedeného data narození jeví
          jako nezletilí.
        </p>
        <p>
          Rodiče nebo opatrovníci, kteří se domnívají, že jejich dítě
          používá Aplikaci, nás mohou kontaktovat.
        </p>
      </Section>

      <Divider />

      <Section title="7. Bezpečnost údajů">
        <p>
          Přijímáme bezpečnostní opatření odpovídající průmyslovým standardům
          k ochraně vašich údajů:
        </p>
        <List
          items={[
            <>
              <Strong>Šifrování HTTPS</Strong>: veškerý síťový provoz je
              šifrován pomocí SSL/TLS
            </>,
            <>
              <Strong>Bezheslová autentizace</Strong>: neukládáme žádná
              hesla; všechna přihlášení probíhají přes Apple a Google
            </>,
            <>
              <Strong>Správa relací založená na JWT</Strong>: relace jsou
              spravovány pomocí bezpečných, dočasných tokenů
            </>,
            <>
              <Strong>Omezení rychlosti</Strong>: autentizační a citlivé
              koncové body jsou omezeny podle IP, aby se zabránilo útokům
              hrubou silou a zneužití
            </>,
            <>
              <Strong>Řízení přístupu</Strong>: přístup k databázi je omezen
              na oprávněné systémové účty
            </>,
            <>
              <Strong>Pravidelné bezpečnostní aktualizace</Strong>: naše
              systémy jsou udržovány aktualizované
            </>,
          ]}
        />
        <p>
          Vezměte však na vědomí, že žádný způsob přenosu přes internet není
          100% bezpečný.
        </p>
      </Section>

      <Divider />

      <Section title="8. Reklama a sledování">
        <SubHeading>8.1 Reklama v Aplikaci</SubHeading>
        <p>
          ScoreHunter je částečně podporován reklamou. Aplikace zobrazuje
          reklamy prostřednictvím <Strong>Google AdMob</Strong> a dalších
          sítí pomocí mediation (AppLovin, Liftoff/Vungle, IronSource, Unity
          Ads, Meta Audience Network, InMobi). Úplný seznam partnerů viz
          sekce 3.4.
        </p>
        <p>
          Reklamy mohou být ve formátu banner, interstitial nebo rewarded.
          Členové Pro mohou v závislosti na úrovni předplatného zaznamenat
          méně reklam nebo žádné.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          Na iOS 14.5 a novějších Apple vyžaduje, abychom vás požádali o
          povolení, než vás budeme sledovat napříč aplikacemi a webovými
          stránkami. Při prvním spuštění Aplikace se zobrazí výzva{" "}
          <Strong>App Tracking Transparency</Strong>:
        </p>
        <List
          items={[
            <>
              Pokud zvolíte <Strong>&quot;Povolit&quot;</Strong>, vaše IDFA
              může být sdílena s našimi reklamními partnery pro
              personalizované reklamy, atribuci a omezení frekvence
              zobrazování.
            </>,
            <>
              Pokud zvolíte{" "}
              <Strong>&quot;Požádat aplikaci, aby mě nesledovala&quot;</Strong>
              , IDFA se neshromažďuje. Pro atribuci používáme rámec{" "}
              <Strong>SKAdNetwork</Strong> společnosti Apple zachovávající
              soukromí a reklamy budou nepersonalizované.
            </>,
          ]}
        />
        <p>
          Svou volbu můžete kdykoli změnit v{" "}
          <Strong>
            Nastavení → Soukromí a zabezpečení → Sledování
          </Strong>
          .
        </p>

        <SubHeading>8.3 Reklamní ID Androidu</SubHeading>
        <p>
          Na Androidu mohou naši reklamní partneři používat vaše Google
          Advertising ID (GAID). Své reklamní ID můžete kdykoli{" "}
          <Strong>resetovat</Strong> nebo <Strong>smazat</Strong>{" "}
          prostřednictvím{" "}
          <Strong>Nastavení → Google → Reklamy</Strong>. Po smazání budou
          reklamy nepersonalizované.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          Mobilní aplikace ScoreHunter{" "}
          <Strong>nepoužívá žádné prohlížečové cookies</Strong>. Sledování
          na mobilu je řízeno výše uvedenými mechanismy platformy, nikoli
          cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Mezinárodní přenosy údajů">
        <p>
          Vaše údaje mohou být zpracovávány mimo vaši domovskou zemi (AWS
          Frankfurt — EU, jakož i datová centra našich reklamních partnerů
          uvedených v sekci 3.4, která mohou být umístěna mimo EU). Tyto
          přenosy splňují bezpečnostní požadavky stanovené GDPR a KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Změny těchto zásad">
        <p>
          Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat.
          Změny vstupují v platnost, jakmile jsou zveřejněny na této
          stránce, a datum &quot;Naposledy aktualizováno&quot; v horní části
          se obnoví. Podstatné změny budou oznámeny prostřednictvím
          oznámení v aplikaci.
        </p>
      </Section>

      <Divider />

      <Section title="11. Obsah třetích stran a ochranné známky">
        <p>
          ScoreHunter zobrazuje data o fotbalových zápasech, názvy týmů,
          názvy lig, jména hráčů a vizuální prostředky (jako jsou loga týmů
          a lig), které pocházejí od našeho poskytovatele dat API-Football.
          Tyto názvy, loga a ochranné známky patří jejich příslušným
          vlastníkům — včetně klubů, lig, federací a dalších držitelů práv.
        </p>
        <p>
          ScoreHunter{" "}
          <Strong>
            není přidružen, schválen, sponzorován ani jakkoli oficiálně
            spojen s žádnou sportovní ligou, federací, klubem, organizací
            ani soutěží zobrazenou v Aplikaci
          </Strong>
          . Veškeré názvy, loga a ochranné známky třetích stran jsou
          používány pouze pro identifikaci a popis (nominativní fair use),
          aby uživatelům pomohly rozpoznat zápasy a týmy, které chtějí
          sledovat.
        </p>
        <p>
          Pokud jste držitelem práv a domníváte se, že vaše ochranná známka
          nebo materiál chráněný autorským právem je v Aplikaci používán
          neoprávněně, kontaktujte nás na{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Žádost prozkoumáme a urychleně odpovíme; tam, kde je to vhodné,
          obsah odstraníme nebo nahradíme.
        </p>
      </Section>

      <Divider />

      <Section title="12. Kontakt">
        <p>
          Pro dotazy ohledně těchto zásad ochrany osobních údajů nebo žádostí
          týkajících se zpracování údajů:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Vývojář</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Webová stránka</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Žádosti podle GDPR nebo KVKK lze zaslat na výše uvedenou
          e-mailovou adresu nebo poštou. Odpovídáme do{" "}
          <Strong>30 dnů</Strong>.
        </p>
      </Section>
    </>
  );
}
