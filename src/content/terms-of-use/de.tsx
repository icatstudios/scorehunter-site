import {
  Section,
  SubHeading,
  List,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function TermsContentDe() {
  return (
    <>
      <p>
        Bitte lies diese Nutzungsbedingungen (&quot;Bedingungen&quot;)
        sorgfältig, bevor du die mobile Anwendung ScoreHunter
        (&quot;App&quot;, &quot;Dienst&quot;) nutzt. Mit dem
        Herunterladen und der Nutzung der App erklärst du dich mit
        diesen Bedingungen einverstanden. Wenn du diesen Bedingungen
        nicht zustimmst, nutze die App bitte nicht.
      </p>

      <Divider />

      <Section title="1. Begriffsbestimmungen">
        <List
          items={[
            <>
              <Strong>App</Strong>: Die mobile Anwendung ScoreHunter
              und die zugehörigen Websites
            </>,
            <>
              <Strong>Entwickler / wir / uns / unser</Strong>: iCat
              Studios
            </>,
            <>
              <Strong>Nutzer / du / dein</Strong>: Die Person, die
              die App nutzt
            </>,
            <>
              <Strong>Dienst</Strong>: Alle von der App angebotenen
              Funktionen und Inhalte
            </>,
            <>
              <Strong>Inhalte</Strong>: Spieldaten, Tipplisten,
              Bestenlisten, Trophäen, Nutzerprofile und alle weiteren
              In-App-Daten
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Art des Dienstes — WICHTIG">
        <SubHeading>
          2.1 ScoreHunter ist keine Glücksspiel-App
        </SubHeading>
        <p>
          ScoreHunter ist eine{" "}
          <Strong>
            wissensbasierte Fußball-Tipp- und Unterhaltungs-App
          </Strong>
          . Die folgenden Punkte beschreiben den grundlegenden
          Charakter der App und müssen für die Nutzer klar
          verständlich sein:
        </p>
        <List
          items={[
            <>
              Die App ist ein <Strong>kompetenzbasiertes Spiel</Strong>
              , KEIN Glücksspiel
            </>,
            <>
              Die App enthält KEINE{" "}
              <Strong>Wett-Terminologie</Strong> (Coupon, Quote,
              Handicap, Marge, Jackpot)
            </>,
            <>
              Es werden keine <Strong>Wettquoten</Strong> oder{" "}
              <Strong>Gewinnmultiplikatoren</Strong> für Spiele in
              der App angeboten
            </>,
            <>
              Alle Spiele sind in Bezug auf Tipps{" "}
              <Strong>gleichwertig</Strong> — kein Spiel ist
              &quot;wertvoller&quot; als ein anderes
            </>,
            <>
              Die App ermöglicht es Fußballbegeisterten, sich mit
              ihrem Wissen und ihrer Intuition in einer
              unterhaltsamen Umgebung zu messen
            </>,
            <>
              Hauptzweck sind{" "}
              <Strong>
                Unterhaltung, Fußballkultur, Community-Bildung und
                Wissensaustausch
              </Strong>
            </>,
          ]}
        />

        <SubHeading>
          2.2 Keine Geldeinzahlungen oder Geldgewinne
        </SubHeading>
        <List
          items={[
            <>
              Es ist <Strong>NICHT ERFORDERLICH</Strong>, echtes Geld
              auszugeben, um die App zu spielen oder an Wettbewerben
              teilzunehmen
            </>,
            <>
              Die App enthält <Strong>KEINE</Strong> Funktionen für{" "}
              <Strong>Wetten mit echtem Geld</Strong> oder{" "}
              <Strong>Glücksspiel</Strong>
            </>,
            <>
              Die App verspricht den Gewinnern{" "}
              <Strong>KEINE echten Geldpreise</Strong>
            </>,
            <>
              Die App enthält{" "}
              <Strong>
                KEINE Elemente von Glücksspiel, Glücksspielen,
                Lotterien oder Wetten
              </Strong>
            </>,
            <>
              Alle Nutzer nehmen{" "}
              <Strong>zu gleichen Bedingungen</Strong> an
              Wettbewerben teil
            </>,
            <>
              Kostenpflichtige Funktionen wie die Pro-Mitgliedschaft{" "}
              <Strong>
                beeinflussen die Wettbewerbsergebnisse nicht
              </Strong>{" "}
              — sie bieten lediglich zusätzliche Funktionen, die das
              Nutzererlebnis verbessern
            </>,
          ]}
        />

        <SubHeading>2.3 Promotion-Belohnungen</SubHeading>
        <p>
          Der Entwickler kann nach eigenem Ermessen gelegentlich
          besonders erfolgreichen Nutzern{" "}
          <Strong>Promotion-Preise</Strong> (Trikots, Fußbälle,
          digitale Geschenkkarten, symbolische Geschenke usw.)
          vergeben. Für solche Preise gelten folgende Bedingungen:
        </p>
        <List
          items={[
            <>
              Die Preise haben{" "}
              <Strong>Promotion-Charakter</Strong> und dienen der
              Förderung des Nutzerengagements
            </>,
            <>
              Die Preise sind <Strong>NICHT garantiert</Strong> — sie
              werden nur im Rahmen vom Entwickler angekündigter
              Kampagnen vergeben
            </>,
            <>
              Die Preise werden <Strong>NICHT als Bargeld</Strong>{" "}
              vergeben — sie werden nur als physische oder digitale
              Geschenke bereitgestellt
            </>,
            <>
              Die Vergabe, Verteilung und Lieferung der Preise liegt{" "}
              <Strong>
                ausschließlich in der Verantwortung des Entwicklers
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc., Apple App Store, Google LLC und Google
                Play Store übernehmen keinerlei Verantwortung für
                diese Preise
              </Strong>
            </>,
            <>
              Adress-, Identitäts- oder andere Informationen können
              vom Entwickler ausschließlich zum Zweck der
              Preislieferung von den Gewinnern angefordert werden
            </>,
          ]}
        />

        <SubHeading>2.4 Altersbeschränkung</SubHeading>
        <p>
          Die App ist für Nutzer{" "}
          <Strong>ab 13 Jahren</Strong> bestimmt. Personen unter 13
          Jahren dürfen die App nicht nutzen. Mit der Nutzung der App
          erklärt der Nutzer, dass er älter als 13 Jahre ist.
        </p>
      </Section>

      <Divider />

      <Section title="3. Kontoerstellung und -nutzung">
        <SubHeading>3.1 Konto erstellen</SubHeading>
        <p>
          Um bestimmte Funktionen der App zu nutzen, musst du ein
          Konto entweder mit &quot;Mit Apple anmelden&quot; oder
          &quot;Mit Google anmelden&quot; erstellen. Bei der
          Erstellung eines Kontos:
        </p>
        <List
          items={[
            "Du musst korrekte und aktuelle Informationen angeben",
            "Du musst dein Geburtsdatum korrekt angeben",
            "Du darfst kein Konto unter der Identität einer anderen Person erstellen",
            "Du darfst kein Konto mit falschen oder irreführenden Angaben erstellen",
            <>
              Eine Person darf nur <Strong>ein Konto</Strong> haben
            </>,
          ]}
        />

        <SubHeading>3.2 Kontosicherheit</SubHeading>
        <p>
          Du bist <Strong>allein verantwortlich</Strong> für alle
          Aktivitäten, die unter deinem Konto stattfinden. Um die
          Sicherheit deines Kontos zu wahren:
        </p>
        <List
          items={[
            "Schütze deine Apple-ID oder dein Google-Konto",
            "Erlaube anderen nicht den Zugriff auf dein Konto",
            "Informiere den Entwickler bei verdächtigen Aktivitäten unverzüglich",
          ]}
        />

        <SubHeading>3.3 Kontokündigung</SubHeading>
        <p>
          Der Entwickler behält sich das Recht vor, das Konto eines
          Nutzers in folgenden Fällen{" "}
          <Strong>ohne Vorankündigung zu sperren oder zu kündigen</Strong>
          :
        </p>
        <List
          items={[
            "Verstoß gegen diese Bedingungen",
            "Betrug, Manipulation oder irreführendes Verhalten",
            "Belästigung, Beleidigungen oder Hassrede gegen andere Nutzer",
            "Erstellung mehrerer Konten",
            "Nutzung automatisierter Software, Bots oder Cheating-Tools",
            "Verhalten, das gegen geltendes Recht verstößt",
          ]}
        />
      </Section>

      <Divider />

      <Section title="4. Akzeptable Nutzung">
        <SubHeading>4.1 Verbotenes Verhalten</SubHeading>
        <p>
          Folgende Verhaltensweisen sind bei der Nutzung der App{" "}
          <Strong>verboten</Strong>:
        </p>
        <List
          items={[
            "Erstellung gefälschter Konten oder Identitätsmissbrauch",
            "Nutzung automatisierter Tools (Bots, Skripte) zur Tippabgabe",
            <>
              Verwendung von{" "}
              <Strong>
                ungeeigneten Benutzernamen, Schimpfwörtern,
                Beleidigungen, Belästigung sowie rassistischer,
                sexistischer oder hasserfüllter Sprache
              </Strong>{" "}
              gegenüber anderen Nutzern
            </>,
            "Versuch, Sicherheitsmechanismen der App zu umgehen",
            "Reverse Engineering, Decompilieren oder Disassemblieren der App",
            "Kopieren, Verbreiten oder kommerzielles Verwerten von App-Inhalten ohne Erlaubnis",
            "Spam, Werbung oder Promotionsinhalte teilen (in Liganamen, Benutzernamen usw.)",
            "Aktionen, die Server überlasten oder den Dienst stören",
          ]}
        />

        <SubHeading>4.2 Sanktionen</SubHeading>
        <p>
          Werden solche Verhaltensweisen festgestellt, behält sich
          der Entwickler das Recht vor, das Konto des Nutzers ohne
          vorherige Ankündigung zu sperren, ihn aus den Bestenlisten
          zu entfernen oder das Konto dauerhaft zu löschen.
        </p>
      </Section>

      <Divider />

      <Section title="5. Rechte am geistigen Eigentum">
        <SubHeading>5.1 Eigentum an der App</SubHeading>
        <p>
          Der Name ScoreHunter, das Logo, die Grafiken, das Design,
          der Quellcode, die Inhalte und alle Rechte am geistigen
          Eigentum <Strong>gehören iCat Studios</Strong>. Diese
          Inhalte sind geschützt durch:
        </p>
        <List
          items={[
            "Urheberrecht",
            "Markenregistrierung",
            "Geschäftsgeheimnisse",
            "Sonstige geltende Rechte am geistigen Eigentum",
          ]}
        />

        <SubHeading>5.2 Inhalte Dritter und Marken</SubHeading>
        <p>
          Die App zeigt Inhalte Dritter, einschließlich – aber nicht
          beschränkt auf – Fußballspieldaten, Mannschafts- und
          Liganamen, Spielernamen sowie visuelle Inhalte wie
          Mannschafts- und Liga-Logos. Diese Inhalte werden über
          unseren Datenpartner API-Football bereitgestellt und sind
          Eigentum ihrer jeweiligen Inhaber — einschließlich Vereinen,
          Ligen, Verbänden und anderen Rechteinhabern. ScoreHunter
          beansprucht keinerlei Eigentum an in der App dargestellten
          Marken, Logos oder urheberrechtlich geschützten Inhalten
          Dritter.
        </p>
        <p>
          ScoreHunter ist{" "}
          <Strong>
            mit keiner in der App dargestellten Liga, Föderation,
            keinem Verein, Wettbewerb oder Organisation verbunden,
            von ihnen unterstützt, gesponsert oder offiziell verbunden
          </Strong>
          . Alle Drittanbieter-Namen, -Logos und -Marken werden
          ausschließlich zu Identifikations- und Beschreibungszwecken
          nach dem Grundsatz des Nominative Fair Use verwendet.
        </p>
        <p>Du erklärst dich damit einverstanden, dass:</p>
        <List
          items={[
            <>
              du Inhalte Dritter, die in der App angezeigt werden,
              außerhalb der normalen privaten Nutzung{" "}
              <Strong>nicht</Strong> extrahierst, kopierst,
              weitergibst oder anderweitig wiederverwendest;
            </>,
            <>
              du die App <Strong>nicht</Strong> dazu nutzt, die
              Rechte am geistigen Eigentum Dritter zu verletzen;
            </>,
            <>
              jede{" "}
              <Strong>kommerzielle Nutzung</Strong> in der App
              dargestellter Inhalte Dritter es erfordert, dass du
              eine eigene Lizenz oder Genehmigung direkt vom
              jeweiligen Rechteinhaber einholst.
            </>,
          ]}
        />
        <p>
          Wenn du Rechteinhaber bist und eine unberechtigte Nutzung
          deiner Marke oder deines urheberrechtlich geschützten
          Materials in der App melden möchtest, wende dich bitte an{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Wir reagieren auf legitime Takedown-Anfragen innerhalb
          von <Strong>dreißig (30) Tagen</Strong> und entfernen oder
          ersetzen den beanstandeten Inhalt, sofern erforderlich.
        </p>

        <SubHeading>5.3 Nutzerinhalte</SubHeading>
        <p>
          Inhalte, die du bei der Nutzung der App erstellst
          (Tipplisten, Liganamen, Benutzername, Profilinformationen),
          sind dein Eigentum. Mit der Nutzung der App räumst du dem
          Entwickler jedoch ein{" "}
          <Strong>kostenfreies, unbeschränktes und übertragbares
          Recht</Strong>{" "}
          ein, diese Inhalte innerhalb der App und gegenüber anderen
          Nutzern anzuzeigen, zu speichern und zu teilen.
        </p>
      </Section>

      <Divider />

      <Section title="6. Haftungsausschluss">
        <SubHeading>
          6.1 Bereitstellung des Dienstes &quot;wie er ist&quot;
        </SubHeading>
        <p>
          Die App wird &quot;<Strong>wie sie ist</Strong>&quot; und
          &quot;<Strong>wie verfügbar</Strong>&quot; bereitgestellt.
          Der Entwickler übernimmt{" "}
          <Strong>keine Gewährleistung</Strong> dafür, dass:
        </p>
        <List
          items={[
            "die App fehlerfrei, ununterbrochen oder sicher läuft",
            <>
              Spieldaten, Spielstände oder Statistiken{" "}
              <Strong>stets korrekt und aktuell</Strong> sind
            </>,
            <>
              Tippergebnisse oder Punkte{" "}
              <Strong>stets pünktlich berechnet</Strong> werden
            </>,
            "es keine Serverausfälle gibt",
            "die App auf einem bestimmten Gerät oder Betriebssystem läuft",
          ]}
        />

        <SubHeading>6.2 Spieldaten und Inhalte Dritter</SubHeading>
        <p>
          Spieldaten, Spielstände, Aufstellungen, Spielminuten und
          Statistiken stammen von einem{" "}
          <Strong>
            externen API-Dienst (API-Football)
          </Strong>
          . Der Entwickler{" "}
          <Strong>kann nicht haftbar gemacht werden</Strong> für die
          Genauigkeit, Aktualität oder Vollständigkeit dieser Daten.
          Mit der Nutzung der App akzeptiert der Nutzer, dass
          Verzögerungen, Fehler oder Auslassungen in den Daten
          auftreten können.
        </p>
        <p>
          Im größtmöglichen gesetzlich zulässigen Umfang übernehmen
          ScoreHunter und iCat Studios{" "}
          <Strong>keinerlei Gewährleistung</Strong> für die
          Genauigkeit, Vollständigkeit oder Aktualität von
          Spieldaten, Mannschaftsinformationen, Statistiken oder
          sonstigen in der App angezeigten Inhalten Dritter. Alle
          diese Inhalte werden &quot;<Strong>wie sie sind</Strong>
          &quot; über unsere Datenpartner bereitgestellt; ScoreHunter
          haftet nicht für Fehler, Auslassungen oder Verzögerungen
          in solchen Daten.
        </p>

        <SubHeading>6.3 Haftungsbeschränkung</SubHeading>
        <p>
          Der Entwickler haftet{" "}
          <Strong>
            nicht für direkte, indirekte, zufällige, besondere oder
            Folgeschäden
          </Strong>
          , die sich aus der Nutzung der App oder im Zusammenhang
          damit ergeben. Dies umfasst, ist aber nicht beschränkt auf:
        </p>
        <List
          items={[
            "Datenverlust",
            "Materielle oder immaterielle Schäden",
            "Verlust potenzieller Trophäen, Preise oder Platzierungen",
            "Gerätedefekte",
            "Ausfälle von Drittanbieterdiensten",
          ]}
        />
      </Section>

      <Divider />

      <Section title="7. Apple- und Google-Haftungsausschluss">
        <SubHeading>7.1 Bezüglich Apple Inc.</SubHeading>
        <p>
          Diese App wird in der iOS-Version über den Apple App Store
          vertrieben. In diesem Zusammenhang gilt:
        </p>
        <List
          items={[
            <>
              <Strong>
                Apple Inc. übernimmt keinerlei Verantwortung für
                diese App oder deren Inhalte
              </Strong>
            </>,
            "Apple kann nicht für Fehlfunktionen, Fehler, ausbleibende Preise oder andere Angelegenheiten der App haftbar gemacht werden",
            <>
              Apple Inc. trifft <Strong>keinerlei Verpflichtung</Strong>,
              falls die App gegen diese Nutzungsbedingungen verstößt
            </>,
            <>
              Wartung, Support und Nutzerdienste für diese App liegen{" "}
              <Strong>
                ausschließlich in der Verantwortung von iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Alle in der App angebotenen Preise, Wettbewerbe,
                Kampagnen oder Promotionen sind unabhängig von Apple
                Inc.
              </Strong>{" "}
              — Apple ist in keiner Weise Sponsor, Veranstalter oder
              Verwalter solcher Angelegenheiten
            </>,
            "Apple Inc. ist von jeglicher Haftung für rechtliche Probleme oder Ansprüche im Zusammenhang mit der App befreit",
            "Die App und ihre Inhalte müssen die geistigen Eigentumsrechte von Apple respektieren",
            <>
              Nutzer der App können{" "}
              <Strong>
                keinerlei Ansprüche direkt gegen Apple Inc. richten
              </Strong>
            </>,
            <>
              <Strong>
                Apple Inc. ist Drittbegünstigter dieser Bedingungen
              </Strong>{" "}
              und kann diese bei Bedarf durchsetzen
            </>,
          ]}
        />

        <SubHeading>7.2 Bezüglich Google LLC</SubHeading>
        <p>
          Diese App wird in der Android-Version über den Google Play
          Store vertrieben. In diesem Zusammenhang gilt:
        </p>
        <List
          items={[
            <>
              <Strong>
                Google LLC übernimmt keinerlei Verantwortung für
                diese App oder deren Inhalte
              </Strong>
            </>,
            "Google kann nicht für Fehlfunktionen, Fehler, ausbleibende Preise oder andere Angelegenheiten der App haftbar gemacht werden",
            <>
              Wartung, Support und Nutzerdienste für diese App liegen{" "}
              <Strong>
                ausschließlich in der Verantwortung von iCat Studios
              </Strong>
            </>,
            <>
              <Strong>
                Alle in der App angebotenen Preise, Wettbewerbe,
                Kampagnen oder Promotionen sind unabhängig von Google
                LLC
              </Strong>{" "}
              — Google ist in keiner Weise Sponsor, Veranstalter oder
              Verwalter solcher Angelegenheiten
            </>,
            "Der Google Play Store ist ausschließlich eine Vertriebsplattform für die App und übernimmt keine Verantwortung für deren Inhalt oder Betrieb",
          ]}
        />

        <SubHeading>7.3 Apple Sign-In und Google Sign-In</SubHeading>
        <p>
          Die App nutzt Apple Sign-In und Google Sign-In zur
          Authentifizierung. Betrieb, Wartung und Sicherheit dieser
          Dienste liegen bei den jeweiligen Anbietern. Der Entwickler
          haftet nicht für Störungen oder Probleme dieser Dienste.
        </p>
      </Section>

      <Divider />

      <Section title="8. Kostenpflichtige Funktionen und Abonnements">
        <p>
          Die App kann kostenpflichtige Funktionen
          (&quot;Pro-Mitgliedschaft&quot; oder ähnlich) anbieten.
          Sobald solche Funktionen verfügbar sind:
        </p>
        <List
          items={[
            <>
              Alle Zahlungen werden über den{" "}
              <Strong>Apple App Store</Strong> oder den{" "}
              <Strong>Google Play Store</Strong> abgewickelt
            </>,
            "Zahlung, Erstattung und Abonnementverwaltung unterliegen den Richtlinien der jeweiligen Plattform",
            <>
              <Strong>
                Erstattungsanträge müssen an Apple oder Google
                gerichtet werden
              </Strong>{" "}
              — Erstattungsanträge können nicht direkt an den
              Entwickler gestellt werden
            </>,
            <>
              Kostenpflichtige Funktionen bieten Nutzern lediglich{" "}
              <Strong>zusätzliche Erfahrungen</Strong> — sie
              beeinflussen weder Wettbewerbsergebnisse noch
              Platzierungen
            </>,
            <>
              Kostenpflichtige Funktionen{" "}
              <Strong>garantieren keinen Gewinn</Strong> — alle
              Nutzer sind in Wettbewerben gleichgestellt
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="9. Spielregeln und -mechaniken">
        <p>
          Die aktuellen Spielregeln, Punktemechanismen,
          Mini-Spiel-Beschreibungen und Methoden zur
          Ranglistenberechnung der App werden{" "}
          <Strong>innerhalb der App</Strong> angezeigt. Der Entwickler
          behält sich das Recht vor,{" "}
          <Strong>Spielregeln ohne vorherige Ankündigung zu ändern</Strong>
          . Wesentliche Änderungen werden per
          In-App-Benachrichtigungen kommuniziert.
        </p>
      </Section>

      <Divider />

      <Section title="10. Änderung oder Beendigung des Dienstes">
        <p>
          Der Entwickler kann jederzeit und aus beliebigem Grund:
        </p>
        <List
          items={[
            "App-Funktionen ändern, hinzufügen oder entfernen",
            "Die App vorübergehend aussetzen",
            "Die App vollständig beenden",
            "Den Dienst in bestimmten Regionen einstellen",
          ]}
        />
        <p>
          Nutzer können aus solchen Änderungen keine
          Entschädigungsansprüche herleiten.
        </p>
      </Section>

      <Divider />

      <Section title="11. Änderungen dieser Bedingungen">
        <p>
          Der Entwickler behält sich das Recht vor,{" "}
          <Strong>
            diese Nutzungsbedingungen jederzeit zu aktualisieren
          </Strong>
          . Wesentliche Änderungen werden:
        </p>
        <List
          items={[
            "auf dieser Seite veröffentlicht",
            <>
              das Datum &quot;Zuletzt aktualisiert&quot; oben
              aktualisieren
            </>,
            "können per In-App-Benachrichtigung kommuniziert werden",
          ]}
        />
        <p>
          Wenn du die App nach Veröffentlichung der Änderungen weiter
          nutzt, akzeptierst du die aktualisierten Bedingungen.
        </p>
      </Section>

      <Divider />

      <Section title="12. Anwendbares Recht und Gerichtsstand">
        <p>
          Diese Bedingungen unterliegen dem{" "}
          <Strong>Recht der Republik Türkei</Strong>. Streitigkeiten,
          die sich aus diesen Bedingungen ergeben oder mit ihnen
          zusammenhängen, werden von den{" "}
          <Strong>
            Gerichten und Vollstreckungsbehörden in Istanbul
          </Strong>{" "}
          entschieden.
        </p>
      </Section>

      <Divider />

      <Section title="13. Kontakt">
        <p>
          Bei Fragen zu diesen Nutzungsbedingungen:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-Mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Entwickler</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Webseite</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
      </Section>
    </>
  );
}
