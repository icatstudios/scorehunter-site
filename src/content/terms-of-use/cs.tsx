import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentCs() {
  return (
    <>
      <p>
        Před použitím mobilní aplikace ScoreHunter (&quot;Aplikace&quot;,
        &quot;Služba&quot;) si pečlivě přečtěte tyto Podmínky použití
        (&quot;Podmínky&quot;). Stažením a používáním Aplikace souhlasíte s
        tím, že budete vázáni těmito Podmínkami. Pokud s Podmínkami
        nesouhlasíte, Aplikaci nepoužívejte.
      </p>

      <Divider />

      <Section title="1. Definice">
        <List
          items={[
            <>
              <Strong>Aplikace</Strong>: mobilní aplikace ScoreHunter a
              související webové stránky
            </>,
            <>
              <Strong>Vývojář / My / Nás / Naše</Strong>: iCat Studios
            </>,
            <>
              <Strong>Uživatel / Vy / Váš</Strong>: osoba, která Aplikaci
              používá
            </>,
            <>
              <Strong>Služba</Strong>: všechny funkce a veškerý obsah, který
              Aplikace nabízí
            </>,
            <>
              <Strong>Obsah</Strong>: data o zápasech, tipovací kupóny,
              žebříčky, trofeje, uživatelské profily a veškerá další data v
              Aplikaci
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Povaha Služby — DŮLEŽITÉ">
        <SubHeading>2.1 ScoreHunter není hazardní hra o peníze</SubHeading>
        <p>
          ScoreHunter je{" "}
          <Strong>
            znalostní fotbalová tipovací a zábavní aplikace
          </Strong>
          . Následující body popisují základní povahu Aplikace a musí být
          uživatelům jasné:
        </p>
        <List
          items={[
            <>
              Aplikace je <Strong>hra založená na dovednosti</Strong>, NE
              hazardní hra
            </>,
            <>
              Aplikace neobsahuje žádnou{" "}
              <Strong>terminologii sázení</Strong> (kupón, kurzy, handicap,
              marže, jackpot)
            </>,
            <>
              Pro žádný zápas v Aplikaci nejsou nabízeny žádné{" "}
              <Strong>sázkové kurzy</Strong> ani{" "}
              <Strong>výherní násobitelé</Strong>
            </>,
            <>
              Všechny zápasy jsou pro účely tipování{" "}
              <Strong>rovnocenné</Strong> — žádný zápas není
              &quot;cennější&quot; než jiný
            </>,
            <>
              Aplikace umožňuje fotbalovým fanouškům soutěžit znalostmi a
              intuicí v zábavném prostředí
            </>,
            <>
              Hlavním účelem je{" "}
              <Strong>
                zábava, fotbalová kultura, budování komunity a sdílení
                znalostí
              </Strong>
            </>,
          ]}
        />

        <SubHeading>2.2 Žádné vklady ani peněžní výhry</SubHeading>
        <List
          items={[
            <>
              Pro hraní Aplikace ani účast v soutěžích{" "}
              <Strong>NENÍ NUTNÉ</Strong> používat skutečné peníze
            </>,
            <>
              Aplikace neobsahuje <Strong>ŽÁDNÉ</Strong> funkce{" "}
              <Strong>sázení o skutečné peníze</Strong> ani{" "}
              <Strong>hazardní hry o peníze</Strong>
            </>,
            <>
              Aplikace neslibuje vítězům{" "}
              <Strong>ŽÁDNÉ skutečné peněžní výhry</Strong>
            </>,
            <>
              Aplikace neobsahuje{" "}
              <Strong>
                ŽÁDNÉ prvky hazardních her o peníze, hazardu, loterií ani
                sázení
              </Strong>
            </>,
            <>
              Všichni uživatelé se účastní soutěží za{" "}
              <Strong>rovných podmínek</Strong>
            </>,
            <>
              Placené funkce, jako je členství Pro,{" "}
              <Strong>neovlivňují výsledky soutěží</Strong> — nabízejí pouze
              další funkce, které vylepšují uživatelský zážitek
            </>,
          ]}
        />

        <SubHeading>2.3 Propagační odměny</SubHeading>
        <p>
          Vývojář může podle vlastního uvážení čas od času udělit{" "}
          <Strong>propagační ceny</Strong> (dresy, fotbalové míče, digitální
          dárkové karty, symbolické dárky atd.) nejlépe se umisťujícím
          uživatelům. Platí následující podmínky:
        </p>
        <List
          items={[
            <>
              Ceny mají{" "}
              <Strong>propagační charakter</Strong> a jsou určeny k podpoře
              zapojení uživatelů
            </>,
            <>
              Ceny <Strong>NEJSOU zaručeny</Strong> — jsou udělovány pouze
              v rámci kampaní, které Vývojář oznámí
            </>,
            <>
              Ceny <Strong>NEJSOU vypláceny v hotovosti</Strong> — pouze
              jako fyzické nebo digitální dárky
            </>,
            <>
              Udělování, distribuce a doručování cen jsou{" "}
              <Strong>
                výhradní odpovědností Vývojáře
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC a Google Play Store
                nenesou za tyto ceny žádnou odpovědnost
              </Strong>
            </>,
            <>
              Adresa, totožnost nebo jiné informace mohou být od vítězů
              vyžádány Vývojářem výhradně za účelem doručení ceny
            </>,
          ]}
        />

        <SubHeading>2.4 Věkové omezení</SubHeading>
        <p>
          Aplikace je určena uživatelům{" "}
          <Strong>starším 13 let</Strong>. Osoby mladší 13 let nesmí
          Aplikaci používat. Používáním uživatel potvrzuje, že je starší 13
          let.
        </p>
      </Section>

      <Divider />

      <Section title="3. Vytvoření a používání účtu">
        <SubHeading>3.1 Vytvoření účtu</SubHeading>
        <p>
          Pro použití některých funkcí si musíte vytvořit účet
          prostřednictvím Přihlášení přes Apple nebo Přihlášení přes Google.
          Při vytváření účtu:
        </p>
        <List
          items={[
            "Musíte uvést správné a aktuální údaje",
            "Musíte správně uvést své datum narození",
            "Nesmíte si vytvořit účet pod totožností někoho jiného",
            "Nesmíte si vytvořit účet s falešnými nebo zavádějícími údaji",
            <>
              Jedna osoba smí mít pouze <Strong>jeden účet</Strong>
            </>,
          ]}
        />

        <SubHeading>3.2 Bezpečnost účtu</SubHeading>
        <p>
          Jste <Strong>výhradně odpovědní</Strong> za veškerou aktivitu na
          svém účtu. Pro zachování bezpečnosti:
        </p>
        <List
          items={[
            "Chraňte své Apple ID nebo účet Google",
            "Nedovolte ostatním přístup ke svému účtu",
            "V případě podezřelé aktivity okamžitě informujte Vývojáře",
          ]}
        />

        <SubHeading>3.3 Ukončení účtu</SubHeading>
        <p>
          Vývojář si vyhrazuje právo{" "}
          <Strong>bez upozornění pozastavit nebo ukončit</Strong> účet
          uživatele v následujících případech:
        </p>
        <List
          items={[
            "Porušení těchto Podmínek",
            "Podvod, podvádění nebo zavádějící chování",
            "Obtěžování, urážky nebo nenávistné projevy vůči ostatním uživatelům",
            "Vytváření více účtů",
            "Použití automatizovaného softwaru, botů nebo podvodných nástrojů",
            "Chování v rozporu s platnými zákony",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Přijatelné použití">
        <SubHeading>4.1 Zakázané chování</SubHeading>
        <p>
          Při používání Aplikace je <Strong>zakázáno</Strong>:
        </p>
        <List
          items={[
            "Vytvářet falešné účty nebo se vydávat za někoho jiného",
            "Používat automatizované nástroje (boty, skripty) pro tipování",
            <>
              Používat{" "}
              <Strong>
                nevhodná uživatelská jména, vulgarismy, urážky, obtěžování,
                rasistický, sexistický nebo nenávistný jazyk
              </Strong>{" "}
              vůči ostatním uživatelům
            </>,
            "Pokoušet se obejít bezpečnostní mechanismy Aplikace",
            "Provádět reverzní inženýrství, dekompilaci nebo demontáž Aplikace",
            "Kopírovat, distribuovat nebo komerčně využívat obsah Aplikace bez povolení",
            "Šířit spam, reklamu nebo marketingový obsah (v názvech lig, uživatelských jménech atd.)",
            "Provádět akce, které přetěžují servery nebo narušují Službu",
          ]}
        />

        <SubHeading>4.2 Sankce</SubHeading>
        <p>
          Pokud bude takové chování zjištěno, vyhrazuje si Vývojář právo bez
          upozornění pozastavit účet uživatele, odstranit uživatele z
          žebříčků nebo účet trvale smazat.
        </p>
      </Section>

      <Divider />

      <Section title="5. Práva duševního vlastnictví">
        <SubHeading>5.1 Vlastnictví Aplikace</SubHeading>
        <p>
          Název ScoreHunter, logo, vizuální prvky, design, zdrojový kód,
          obsah a veškerá práva duševního vlastnictví{" "}
          <Strong>patří společnosti iCat Studios</Strong>. Obsah je chráněn:
        </p>
        <List
          items={[
            "Autorským právem",
            "Registrací ochranné známky",
            "Obchodním tajemstvím",
            "Dalšími platnými právy duševního vlastnictví",
          ]}
        />

        <SubHeading>5.2 Obsah a ochranné známky třetích stran</SubHeading>
        <p>
          Aplikace zobrazuje obsah třetích stran, mimo jiné včetně dat o
          zápasech, názvů týmů a lig, jmen hráčů a vizuálních prostředků,
          jako jsou loga týmů a lig. Obsah je poskytován prostřednictvím
          našeho datového partnera API-Football a patří příslušným
          vlastníkům — klubům, ligám, federacím a dalším držitelům práv.
          ScoreHunter si nečiní nárok na vlastnictví žádných ochranných
          známek, log nebo materiálů chráněných autorským právem třetích
          stran zobrazených v Aplikaci.
        </p>
        <p>
          ScoreHunter{" "}
          <Strong>
            není přidružen, schválen, sponzorován ani jakkoli oficiálně
            spojen s žádnou ligou, federací, klubem, soutěží nebo
            organizací zobrazenou v Aplikaci
          </Strong>
          . Veškeré názvy, loga a ochranné známky třetích stran jsou
          používány pouze pro identifikaci a popis (nominativní fair use).
        </p>
        <p>Souhlasíte s tím, že:</p>
        <List
          items={[
            <>
              <Strong>nebudete</Strong> extrahovat, kopírovat, redistribuovat
              ani jinak opětovně používat obsah třetích stran v Aplikaci
              nad rámec běžného osobního použití;
            </>,
            <>
              <Strong>nebudete</Strong> používat Aplikaci k porušování
              práv duševního vlastnictví třetích stran;
            </>,
            <>
              veškeré <Strong>komerční použití</Strong> obsahu třetích stran
              v Aplikaci vyžaduje, abyste si sami získali licenci nebo
              povolení přímo od příslušného držitele práv.
            </>,
          ]}
        />
        <p>
          Pokud jste držitelem práv a chcete nahlásit neoprávněné použití
          vaší ochranné známky nebo materiálu chráněného autorským právem
          v Aplikaci, kontaktujte nás na{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Na oprávněné žádosti o odstranění odpovídáme do{" "}
          <Strong>třiceti (30) dnů</Strong> a tam, kde je to vhodné, obsah
          odstraníme nebo nahradíme.
        </p>

        <SubHeading>5.3 Uživatelský obsah</SubHeading>
        <p>
          Obsah, který vytvoříte při používání Aplikace (tipovací kupóny,
          názvy lig, uživatelská jména, profilové informace), patří vám.
          Používáním Aplikace však udělujete Vývojáři{" "}
          <Strong>
            bezplatné, neomezené a převoditelné právo na použití
          </Strong>{" "}
          k zobrazení, ukládání a sdílení tohoto obsahu v Aplikaci a s
          ostatními uživateli.
        </p>
      </Section>

      <Divider />

      <Section title="6. Vyloučení odpovědnosti">
        <SubHeading>
          6.1 Služba je poskytována &quot;tak, jak je&quot;
        </SubHeading>
        <p>
          Aplikace je poskytována &quot;<Strong>tak, jak je</Strong>&quot; a
          &quot;<Strong>jak je k dispozici</Strong>&quot;. Vývojář
          neposkytuje <Strong>žádné záruky</Strong> ohledně toho, že:
        </p>
        <List
          items={[
            "Aplikace bude fungovat bez chyb, bez přerušení nebo bezpečně",
            <>
              data o zápasech, výsledky nebo statistiky{" "}
              <Strong>jsou vždy přesné a aktuální</Strong>
            </>,
            <>
              výsledky tipování nebo výpočet skóre{" "}
              <Strong>vždy probíhají včas</Strong>
            </>,
            "nedojde k přerušení serveru",
            "Aplikace bude fungovat na konkrétním zařízení nebo operačním systému",
          ]}
        />

        <SubHeading>6.2 Data o zápasech a obsah třetích stran</SubHeading>
        <p>
          Data o zápasech, výsledky, sestavy, minuty a statistiky jsou
          získávány z{" "}
          <Strong>
            API služby třetí strany (API-Football)
          </Strong>
          . Vývojář{" "}
          <Strong>nemůže být činěn odpovědným</Strong> za přesnost,
          aktuálnost ani úplnost těchto údajů. Používáním Aplikace uživatel
          přijímá, že může docházet ke zpožděním, chybám nebo opomenutím.
        </p>
        <p>
          V plném rozsahu povoleném zákonem ScoreHunter a iCat Studios
          neposkytují <Strong>žádné záruky</Strong> ohledně přesnosti,
          úplnosti nebo aktuálnosti dat o zápasech, informací o týmech,
          statistik ani jiného obsahu třetích stran v Aplikaci. Veškerý
          takový obsah je poskytován &quot;
          <Strong>tak, jak je</Strong>&quot; prostřednictvím našich datových
          partnerů; ScoreHunter neodpovídá za chyby, opomenutí ani zpoždění.
        </p>

        <SubHeading>6.3 Omezení odpovědnosti</SubHeading>
        <p>
          Vývojář{" "}
          <Strong>
            neodpovídá za přímé, nepřímé, náhodné, zvláštní ani následné
            škody
          </Strong>{" "}
          vzniklé v důsledku používání Aplikace nebo v souvislosti s ním.
          Patří sem mimo jiné:
        </p>
        <List
          items={[
            "Ztráta dat",
            "Materiální nebo nemateriální újma",
            "Ztráta potenciálních trofejí, cen nebo umístění",
            "Selhání zařízení",
            "Přerušení služeb třetích stran",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Vyloučení odpovědnosti Apple a Google">
        <SubHeading>7.1 Ohledně Apple Inc.</SubHeading>
        <p>
          Tato Aplikace je distribuována pro iOS prostřednictvím Apple App
          Store. V této souvislosti:
        </p>
        <List
          items={[
            <>
              <Strong>
                Apple Inc. nenese ŽÁDNOU odpovědnost za tuto Aplikaci ani
                její obsah
              </Strong>
            </>,
            "Apple nemůže být činěn odpovědným za chyby, nedostatky, nedoručení cen nebo jiné záležitosti",
            <>
              Apple Inc. nemá <Strong>žádné povinnosti</Strong>, pokud
              Aplikace porušuje tyto Podmínky
            </>,
            <>
              Údržba, podpora a uživatelské služby Aplikace jsou{" "}
              <Strong>výhradní odpovědností iCat Studios&apos;</Strong>
            </>,
            <>
              <Strong>
                Veškeré ceny, soutěže, kampaně nebo marketing v Aplikaci
                jsou nezávislé na Apple Inc.
              </Strong>{" "}
              — Apple v žádném smyslu není sponzorem, organizátorem ani
              administrátorem
            </>,
            "Apple Inc. je zproštěn odpovědnosti za právní záležitosti nebo nároky vznikající v Aplikaci",
            "Aplikace a její obsah musí respektovat práva duševního vlastnictví společnosti Apple",
            <>
              Uživatelé Aplikace{" "}
              <Strong>
                nemohou uplatňovat nároky přímo vůči Apple Inc.
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc. je oprávněnou třetí stranou těchto Podmínek
              </Strong>{" "}
              a v případě potřeby je může vymáhat
            </>,
          ]}
        />

        <SubHeading>7.2 Ohledně Google LLC</SubHeading>
        <p>
          Tato Aplikace je distribuována pro Android prostřednictvím Google
          Play Store. V této souvislosti:
        </p>
        <List
          items={[
            <>
              <Strong>
                Google LLC nenese ŽÁDNOU odpovědnost za tuto Aplikaci ani
                její obsah
              </Strong>
            </>,
            "Google nemůže být činěn odpovědným za chyby, nedostatky, nedoručení cen nebo jiné záležitosti",
            <>
              Údržba, podpora a uživatelské služby Aplikace jsou{" "}
              <Strong>výhradní odpovědností iCat Studios&apos;</Strong>
            </>,
            <>
              <Strong>
                Veškeré ceny, soutěže, kampaně nebo marketing v Aplikaci
                jsou nezávislé na Google LLC
              </Strong>{" "}
              — Google v žádném smyslu není sponzorem, organizátorem ani
              administrátorem
            </>,
            "Google Play Store je pouze distribuční platformou a nenese odpovědnost za obsah ani provoz Aplikace",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In a Google Sign-In</SubHeading>
        <p>
          Aplikace používá Apple Sign-In a Google Sign-In pro autentizaci.
          Provoz, údržba a bezpečnost těchto služeb spadají na příslušné
          poskytovatele. Vývojář neodpovídá za přerušení nebo problémy s
          těmito službami.
        </p>
      </Section>

      <Divider />

      <Section title="8. Placené funkce a předplatné">
        <p>
          Aplikace může nabízet placené funkce
          (&quot;Pro členství&quot; nebo podobně). Pokud jsou přidány placené
          funkce:
        </p>
        <List
          items={[
            <>
              Veškeré platby jsou zpracovávány prostřednictvím{" "}
              <Strong>Apple App Store</Strong> nebo{" "}
              <Strong>Google Play Store</Strong>
            </>,
            "Platba, vrácení peněz a správa předplatného se řídí pravidly příslušné platformy",
            <>
              <Strong>
                Žádosti o vrácení peněz musí být zaslány Apple nebo Googlu
              </Strong>{" "}
              — nikoli přímo Vývojáři
            </>,
            <>
              Placené funkce poskytují uživateli pouze{" "}
              <Strong>další zážitek</Strong> — neovlivňují výsledky soutěží
              ani umístění
            </>,
            <>
              Placené funkce{" "}
              <Strong>nezaručují výhru</Strong> — všichni uživatelé jsou v
              soutěžích rovnocenní
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Pravidla a mechaniky hry">
        <p>
          Aktuální pravidla hry, mechaniky bodování, popisy miniher a
          metody hodnocení Aplikace jsou zobrazeny{" "}
          <Strong>uvnitř Aplikace</Strong>. Vývojář si vyhrazuje právo{" "}
          <Strong>měnit pravidla hry bez upozornění</Strong>. Podstatné
          změny budou oznámeny prostřednictvím oznámení v aplikaci.
        </p>
      </Section>

      <Divider />

      <Section title="10. Změna nebo ukončení Služby">
        <p>Vývojář může kdykoli a z jakéhokoli důvodu:</p>
        <List
          items={[
            "Měnit, přidávat nebo odstraňovat funkce Aplikace",
            "Dočasně Aplikaci přerušit",
            "Aplikaci úplně ukončit",
            "Přerušit Službu v některých regionech",
          ]}
        />
        <p>
          Uživatelé nemohou uplatňovat nárok na náhradu škody z důvodu
          takových změn.
        </p>
      </Section>

      <Divider />

      <Section title="11. Změny těchto Podmínek">
        <p>
          Vývojář si vyhrazuje právo{" "}
          <Strong>kdykoli aktualizovat tyto Podmínky použití</Strong>.
          Podstatné změny budou:
        </p>
        <List
          items={[
            "Zveřejněny na této stránce",
            <>
              Aktualizovat datum &quot;Naposledy aktualizováno&quot; v horní
              části
            </>,
            "Mohou být zaslány jako oznámení v aplikaci",
          ]}
        />
        <p>
          Pokračováním v používání Aplikace po zveřejnění změn souhlasíte s
          aktualizovanými Podmínkami.
        </p>
      </Section>

      <Divider />

      <Section title="12. Rozhodné právo a příslušný soud">
        <p>
          Tyto Podmínky se řídí{" "}
          <Strong>zákony Turecké republiky</Strong>. Spory vzniklé z těchto
          Podmínek nebo v souvislosti s nimi budou řešeny{" "}
          <Strong>soudy a exekutorskými úřady v Istanbulu</Strong>.
        </p>
      </Section>

      <Divider />

      <Section title="13. Kontakt">
        <p>Pro dotazy ohledně těchto Podmínek použití:</p>
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
      </Section>
    </>
  );
}
