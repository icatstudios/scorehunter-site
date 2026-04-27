import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentDe() {
  return (
    <>
      <p>
        Bei iCat Studios (&quot;wir&quot;, &quot;uns&quot;,
        &quot;unser&quot;) respektieren wir die Privatsphäre der Nutzer
        (&quot;du&quot;, &quot;dein&quot;) der mobilen Anwendung
        ScoreHunter (&quot;die App&quot;). Diese Datenschutzerklärung
        beschreibt, welche personenbezogenen Daten wir erfassen, wie wir
        sie verwenden, mit wem wir sie teilen und welche Rechte du bei
        der Nutzung unserer App hast.
      </p>
      <p>
        Mit der Nutzung der App erklärst du dich mit dieser
        Datenschutzerklärung einverstanden.
      </p>

      <Divider />

      <Section title="1. Daten, die wir erfassen">
        <SubHeading>1.1 Kontoinformationen</SubHeading>
        <p>
          Wenn du &quot;Mit Apple anmelden&quot; oder &quot;Mit Google
          anmelden&quot; verwendest, erhalten wir die folgenden
          Informationen von Apple oder Google:
        </p>
        <List
          items={[
            <>
              <Strong>E-Mail-Adresse</Strong> (Apple stellt eine
              Relay-E-Mail-Adresse bereit, wenn du &quot;Meine E-Mail
              verbergen&quot; auswählst)
            </>,
            <>
              <Strong>Vor- und Nachname</Strong> (Apple übermittelt diese
              nur bei der ersten Anmeldung; Google bei jeder Anmeldung)
            </>,
            <>
              <Strong>Provider User ID</Strong> — eine eindeutige Kennung
              zur Wiedererkennung deines Kontos
            </>,
          ]}
        />

        <SubHeading>1.2 Profilinformationen</SubHeading>
        <p>Informationen, die du direkt in der App angibst:</p>
        <List
          items={[
            <>
              <Strong>Benutzername</Strong> (Anzeigename — sichtbar in
              Bestenlisten)
            </>,
            <>
              <Strong>Land</Strong>
            </>,
            <>
              <Strong>Lieblingsverein</Strong>
            </>,
            <>
              <Strong>Geburtsdatum</Strong>
            </>,
            <>
              <Strong>Geschlecht</Strong> (optional — Option &quot;Keine
              Angabe&quot; verfügbar)
            </>,
            <>
              <Strong>Pro-Abonnementstatus</Strong> — ob du eine aktive
              Pro-Mitgliedschaft hast und deren Ablaufdatum
            </>,
          ]}
        />

        <SubHeading>1.3 Nutzungsdaten</SubHeading>
        <p>Daten, die bei der Nutzung der App entstehen:</p>
        <List
          items={[
            <>
              <Strong>Tipplisten</Strong> (ausgewählte Spiele und für
              Score Hunt sowie Mini-Spiele abgegebene Tipps)
            </>,
            <>
              <Strong>Beigetretene Ligen</Strong>
            </>,
            <>
              <Strong>Erspielte Trophäen und Erfolge</Strong>
            </>,
            <>
              <Strong>Wöchentliche und saisonale Punktestände</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Geräte- und App-Informationen</SubHeading>
        <List
          items={[
            <>
              <Strong>Geräte-ID</Strong> (für anonymes Sitzungsmanagement)
            </>,
            <>
              <Strong>Betriebssystem</Strong> (iOS-/Android-Version)
            </>,
            <>
              <Strong>App-Version und Plattform</Strong> (Versionscode,
              Versionsname und ob du iOS oder Android nutzt) — wird
              verwendet, um versionsspezifischen Support zu bieten und
              Kompatibilitätsprobleme zu erkennen
            </>,
            <>
              <Strong>Push-Benachrichtigungs-Token</Strong> — ein
              eindeutiges Token, ausgegeben vom Apple Push Notification
              Service (APNs) oder Firebase Cloud Messaging (FCM), damit
              wir Spielerinnerungen, Gewinnbenachrichtigungen und
              wichtige Mitteilungen zustellen können. Du kannst
              Push-Benachrichtigungen jederzeit in deinen
              Geräteeinstellungen deaktivieren.
            </>,
          ]}
        />

        <SubHeading>1.5 Werbe-ID</SubHeading>
        <p>
          Die App kann deine <Strong>Werbe-ID</Strong> (IDFA auf iOS,
          GAID/Werbe-ID auf Android){" "}
          <Strong>nur mit deiner ausdrücklichen Einwilligung</Strong>{" "}
          erfassen:
        </p>
        <List
          items={[
            <>
              Auf <Strong>iOS</Strong> wird beim ersten App-Start eine{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>-Abfrage
              angezeigt. Wählst du &quot;App bitten, mich nicht zu
              verfolgen&quot;, wird die IDFA nicht erfasst und unsere
              Werbepartner erhalten lediglich datenschutzfreundliche
              Informationen über Apples SKAdNetwork.
            </>,
            <>
              Auf <Strong>Android</Strong> wird die GAID erfasst, sofern
              du dich nicht über{" "}
              <Strong>
                Einstellungen → Google → Werbung → Werbe-ID löschen
              </Strong>{" "}
              abmeldest.
            </>,
            <>
              Bei Erfassung wird die Werbe-ID an die in Abschnitt 3.4
              aufgeführten Werbepartner zur Werbe-Attribution und
              Frequenzbegrenzung weitergegeben.
            </>,
          ]}
        />

        <SubHeading>1.6 Automatisch erfasste Daten</SubHeading>
        <List
          items={[
            <>
              <Strong>IP-Adresse</Strong> — wird zu Sicherheitszwecken
              verwendet, einschließlich Rate Limiting an
              Authentifizierungs-Endpunkten (z. B. bis zu 15
              Anmeldeversuche pro Minute pro IP) und zur Missbrauchsabwehr.
              Wir verwenden IP-Adressen nicht zur Erstellung von
              Werbeprofilen.
            </>,
            <>
              <Strong>Fehler- und Absturzberichte</Strong> — zur
              Überwachung der App-Stabilität. Berichte werden gefiltert,
              um personenbezogene Informationen auszuschließen.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Wie wir deine Daten verwenden">
        <p>Wir verwenden die erfassten Daten zu folgenden Zwecken:</p>
        <List
          items={[
            <>
              <Strong>Kontoerstellung und -verwaltung</Strong>: Damit du
              dich anmelden und die App nutzen kannst
            </>,
            <>
              <Strong>Spielerlebnis</Strong>: Zum Speichern deiner
              Tipplisten, zur Berechnung deiner Punkte und zum Aufbau der
              Bestenlisten
            </>,
            <>
              <Strong>Personalisierung</Strong>: Zur Anzeige deines
              Lieblingsvereins und Landes in den Bestenlisten
            </>,
            <>
              <Strong>Verwaltung des Pro-Abonnements</Strong>: Zur
              Überprüfung deines Abonnementstatus und zur Freischaltung
              der Pro-Funktionen
            </>,
            <>
              <Strong>Kommunikation</Strong>: Zum Versand wichtiger
              Updates, Ankündigungen, Gewinnbenachrichtigungen und
              Push-Mitteilungen zur App
            </>,
            <>
              <Strong>Preisversand</Strong>: Zum Versand physischer oder
              digitaler Preise an Wettbewerbsgewinner (erfordert Name und
              E-Mail)
            </>,
            <>
              <Strong>Kontosicherheit</Strong>: Zur Verhinderung
              betrügerischer Konten, zur Identitätsprüfung und
              Begrenzung verdächtiger Aktivitäten
            </>,
            <>
              <Strong>Werbung</Strong>: Zur Auslieferung von Werbung in
              der App und zur Messung ihrer Performance — siehe
              Abschnitt 8 für Details
            </>,
            <>
              <Strong>Analyse und Verbesserung</Strong>: Zur anonymen
              Auswertung von Nutzungsstatistiken und zur Weiterentwicklung
              der App
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Mit wem wir deine Daten teilen">
        <p>
          ScoreHunter{" "}
          <Strong>
            verkauft oder vermietet deine personenbezogenen Daten nicht
            an Dritte
          </Strong>
          . Wir geben Daten nur an die unten aufgeführten vertrauenswürdigen
          Dienstleister und Werbepartner weiter und nur in dem Umfang,
          der für den Betrieb der App erforderlich ist.
        </p>

        <SubHeading>3.1 Dienstleister</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — Server- und
              Datenbank-Hosting (Frankfurt, Deutschland)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — Drittanbieterdienst, der Spieldaten,
              Mannschafts- und Liga-Informationen sowie zugehörige
              visuelle Inhalte (Logos und Bilder) bereitstellt. Es werden
              keine personenbezogenen Daten an API-Football weitergegeben.
              ScoreHunter besitzt keine Rechte an den über diesen Dienst
              bereitgestellten Logos oder Marken; siehe Abschnitt 11 für
              Details.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In Authentifizierung
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In Authentifizierung
              und Firebase Cloud Messaging (Push-Benachrichtigungen unter
              Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — Verarbeitet Pro-Abonnement-
              Käufe und Verlängerungen unter iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — Verarbeitet
              Pro-Abonnement-Käufe und Verlängerungen unter Android
            </>,
            <>
              <Strong>Sentry</Strong> — Backend-Fehler- und
              Exception-Monitoring. Filterung personenbezogener Daten ist
              aktiviert (es werden keine E-Mail-Adressen, Namen oder
              Nutzerinhalte an Sentry gesendet).
            </>,
          ]}
        />
        <p>
          Diese Dienstleister verarbeiten Daten ausschließlich in unserem
          Auftrag und nach unseren Weisungen.
        </p>

        <SubHeading>3.2 Gesetzliche Anforderungen</SubHeading>
        <p>
          Deine Daten können auf Grundlage einer gerichtlichen Anordnung,
          einer rechtlichen Untersuchung oder einer gesetzlichen
          Verpflichtung an Behörden weitergegeben werden.
        </p>

        <SubHeading>
          3.3 Für andere Nutzer sichtbare Informationen
        </SubHeading>
        <p>
          Die folgenden Informationen sind für{" "}
          <Strong>andere Nutzer sichtbar</Strong> in Bestenlisten und auf
          Profilseiten:
        </p>
        <List
          items={[
            "Dein Benutzername (Anzeigename)",
            "Deine Länderflagge",
            "Dein Lieblingsverein",
            "Erspielte Trophäen",
            "Deine Tippergebnisse und Statistiken",
            "Ein Pro-Mitgliedschaft-Abzeichen, sofern ein aktives Abonnement besteht",
          ]}
        />
        <p>
          Die folgenden Informationen werden{" "}
          <Strong>niemals in der App angezeigt</Strong>:
        </p>
        <List
          items={[
            "Deine E-Mail-Adresse",
            "Dein echter Vor- und Nachname",
            "Dein Geburtsdatum",
            "Dein Geschlecht",
            "Deine Geräteinformationen",
            "Deine Werbe-ID",
            "Das Ablaufdatum deines Abonnements",
          ]}
        />

        <SubHeading>3.4 Werbepartner</SubHeading>
        <p>
          Die App zeigt Werbung über mehrere Werbenetzwerke (manchmal{" "}
          <em>Mediation</em> genannt). Wenn du dem Tracking zugestimmt
          hast, können deine Werbe-ID und begrenzte technische Daten an
          die unten aufgeführten Partner zur Werbeauslieferung,
          Attribution und Frequenzbegrenzung weitergegeben werden. Jeder
          Partner verfügt über eine eigene Datenschutzerklärung:
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

      <Section title="4. Wo und wie lange wir deine Daten speichern">
        <SubHeading>4.1 Speicherort</SubHeading>
        <p>
          Alle Nutzerdaten werden in den Rechenzentren von{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>{" "}
          gespeichert. Als Datenbankdienst verwenden wir Amazon RDS
          PostgreSQL.
        </p>

        <SubHeading>4.2 Speicherdauer</SubHeading>
        <List
          items={[
            <>
              <Strong>Aktive Konten</Strong>: Deine Daten werden gespeichert,
              solange dein Konto aktiv ist
            </>,
            <>
              <Strong>Inaktive Konten</Strong>: Konten, bei denen seit 2
              Jahren keine Anmeldung erfolgt ist, werden automatisch
              gelöscht
            </>,
            <>
              <Strong>Gelöschte Konten</Strong>: Wenn du dein Konto
              löschst, werden deine personenbezogenen Daten innerhalb von
              30 Tagen dauerhaft gelöscht (einschließlich Backups)
            </>,
            <>
              <Strong>Anonyme Statistiken</Strong>: Anonyme aggregierte
              Statistiken können nach der Löschung weiter aufbewahrt
              werden (enthalten keine personenbezogenen Informationen)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Deine Rechte">
        <p>
          Nach DSGVO (Europa) und KVKK (Türkei) hast du folgende Rechte:
        </p>
        <List
          items={[
            <>
              <Strong>Auskunftsrecht</Strong>: Erfahre, welche Daten wir
              über dich verarbeiten
            </>,
            <>
              <Strong>Recht auf Berichtigung</Strong>: Korrektur
              ungenauer oder unvollständiger Daten verlangen
            </>,
            <>
              <Strong>
                Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;)
              </Strong>
              : Löschung deiner Daten verlangen
            </>,
            <>
              <Strong>
                Recht auf Einschränkung der Verarbeitung
              </Strong>
              : Beschränke, wie deine Daten verarbeitet werden
            </>,
            <>
              <Strong>Recht auf Datenübertragbarkeit</Strong>: Erhalte
              deine Daten in einem maschinenlesbaren Format
            </>,
            <>
              <Strong>Widerspruchsrecht</Strong>: Widerspruch gegen die
              Datenverarbeitung
            </>,
            <>
              <Strong>Recht auf Widerruf der Einwilligung</Strong>{" "}
              (Werbe-Tracking): Du kannst die ATT-Berechtigung auf iOS
              jederzeit unter{" "}
              <Strong>
                Einstellungen → Datenschutz &amp; Sicherheit → Tracking
              </Strong>{" "}
              widerrufen oder deine Werbe-ID auf Android zurücksetzen
              bzw. löschen
            </>,
          ]}
        />

        <SubHeading>So löschst du dein Konto</SubHeading>
        <p>Du kannst dein Konto auf drei Wegen löschen:</p>
        <OrderedList
          items={[
            <>
              <Strong>In der App</Strong>: Profilseite → Kontoeinstellungen
              → Konto löschen
            </>,
            <>
              <Strong>Im Web</Strong>:{" "}
              <Anchor href="/de/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Per E-Mail</Strong>: Sende eine Anfrage an die
              unten genannte Kontaktadresse
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Kinderdatenschutz">
        <p>
          ScoreHunter ist{" "}
          <Strong>nicht für Nutzer unter 13 Jahren bestimmt</Strong>. Wir
          erheben wissentlich keine personenbezogenen Daten von Kindern
          unter 13 Jahren. Sollten wir Kenntnis davon erlangen, dass wir
          personenbezogene Daten eines Kindes unter 13 erfasst haben,
          werden wir diese so schnell wie möglich löschen.
        </p>
        <p>
          Für Nutzer zwischen 13 und 18 Jahren empfehlen wir, diese
          Datenschutzerklärung gemeinsam mit einem Elternteil oder
          Erziehungsberechtigten zu lesen. In der App ausgespielte
          Werbung wird mit{" "}
          <Strong>
            nicht personalisierten / familienfreundlichen Einstellungen
          </Strong>{" "}
          konfiguriert, sofern Nutzer aufgrund des angegebenen
          Geburtsdatums als minderjährig erscheinen.
        </p>
        <p>
          Eltern oder Erziehungsberechtigte, die vermuten, dass ihr Kind
          die App nutzt, können uns kontaktieren.
        </p>
      </Section>

      <Divider />

      <Section title="7. Datensicherheit">
        <p>
          Wir setzen branchenübliche Sicherheitsmaßnahmen zum Schutz
          deiner Daten ein:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS-Verschlüsselung</Strong>: Der gesamte
              Netzwerkverkehr wird via SSL/TLS verschlüsselt
            </>,
            <>
              <Strong>Passwortlose Authentifizierung</Strong>: Wir
              speichern keine Passwörter; alle Anmeldungen erfolgen über
              Apple und Google
            </>,
            <>
              <Strong>JWT-basiertes Sitzungsmanagement</Strong>: Sitzungen
              werden mit sicheren, temporären Tokens verwaltet
            </>,
            <>
              <Strong>Rate Limiting</Strong>: Authentifizierungs- und
              sensible Endpunkte werden pro IP begrenzt, um Brute-Force-
              und Missbrauchsangriffe zu verhindern
            </>,
            <>
              <Strong>Zugriffskontrolle</Strong>: Datenbankzugriff ist
              auf autorisierte Systemkonten beschränkt
            </>,
            <>
              <Strong>Regelmäßige Sicherheitsupdates</Strong>: Unsere
              Systeme werden auf dem neuesten Stand gehalten
            </>,
          ]}
        />
        <p>
          Bitte beachte jedoch, dass keine Übertragungsmethode im
          Internet zu 100 % sicher ist.
        </p>
      </Section>

      <Divider />

      <Section title="8. Werbung und Tracking">
        <SubHeading>8.1 Werbung in der App</SubHeading>
        <p>
          ScoreHunter wird teilweise durch Werbung finanziert. Die App
          zeigt Werbung über <Strong>Google AdMob</Strong> sowie
          zusätzliche Netzwerke per Mediation (AppLovin, Liftoff/Vungle,
          IronSource, Unity Ads, Meta Audience Network, InMobi). Die
          vollständige Partnerliste findest du in Abschnitt 3.4.
        </p>
        <p>
          Werbung kann in Form von Bannern, Interstitials oder
          Rewarded-Ads erscheinen. Pro-Mitglieder können je nach
          Abonnementstufe ein reduziertes oder werbefreies Erlebnis
          haben.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          Unter iOS 14.5 und neuer verlangt Apple, dass wir vor einem
          App- und Website-übergreifenden Tracking deine Einwilligung
          einholen. Beim ersten Start der App wird eine{" "}
          <Strong>App Tracking Transparency</Strong>-Abfrage angezeigt:
        </p>
        <List
          items={[
            <>
              Wählst du <Strong>&quot;Erlauben&quot;</Strong>, kann
              deine IDFA an unsere Werbepartner für personalisierte
              Werbung, Attribution und Frequenzbegrenzung weitergegeben
              werden.
            </>,
            <>
              Wählst du{" "}
              <Strong>&quot;App bitten, nicht zu verfolgen&quot;</Strong>
              , wird die IDFA nicht erfasst. Wir verwenden Apples
              datenschutzfreundliches{" "}
              <Strong>SKAdNetwork</Strong>-Framework zur Attribution,
              und die ausgespielte Werbung ist nicht personalisiert.
            </>,
          ]}
        />
        <p>
          Du kannst deine Entscheidung jederzeit unter{" "}
          <Strong>
            Einstellungen → Datenschutz &amp; Sicherheit → Tracking
          </Strong>{" "}
          ändern.
        </p>

        <SubHeading>8.3 Android-Werbe-ID</SubHeading>
        <p>
          Auf Android kann deine Google-Werbe-ID (GAID) von unseren
          Werbepartnern verwendet werden. Du kannst deine Werbe-ID
          jederzeit über{" "}
          <Strong>Einstellungen → Google → Werbung</Strong>{" "}
          <Strong>zurücksetzen</Strong> oder{" "}
          <Strong>löschen</Strong>. Nach dem Löschen werden nur
          nicht-personalisierte Anzeigen ausgespielt.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          Die mobile ScoreHunter-Anwendung{" "}
          <Strong>verwendet keine Browser-Cookies</Strong>. Tracking
          erfolgt mobil über die oben beschriebenen Plattformmechanismen,
          nicht über Cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Internationale Datenübertragungen">
        <p>
          Deine Daten können außerhalb deines Wohnsitzlandes verarbeitet
          werden (AWS Frankfurt — Europäische Union sowie die
          Rechenzentren der in Abschnitt 3.4 aufgeführten Werbepartner,
          die sich außerhalb der EU befinden können). Diese
          Übermittlungen erfüllen die von DSGVO und KVKK geforderten
          Sicherheitsstandards.
        </p>
      </Section>

      <Divider />

      <Section title="10. Änderungen dieser Erklärung">
        <p>
          Wir können diese Datenschutzerklärung von Zeit zu Zeit
          aktualisieren. Änderungen treten mit der Veröffentlichung auf
          dieser Seite in Kraft, und das Datum &quot;Zuletzt
          aktualisiert&quot; oben wird entsprechend angepasst.
          Wesentliche Änderungen werden per In-App-Benachrichtigung
          angekündigt.
        </p>
      </Section>

      <Divider />

      <Section title="11. Inhalte Dritter und Marken">
        <p>
          ScoreHunter zeigt Fußballspieldaten, Mannschaftsnamen,
          Liganamen, Spielernamen und visuelle Inhalte (z. B.
          Mannschafts- und Liga-Logos), die von unserem Datenanbieter
          API-Football bezogen werden. Diese Namen, Logos und Marken
          sind Eigentum ihrer jeweiligen Inhaber — einschließlich
          Vereinen, Ligen, Verbänden und anderen Rechteinhabern.
        </p>
        <p>
          ScoreHunter ist{" "}
          <Strong>
            mit keiner in der App dargestellten Liga, Föderation, keinem
            Verein, keiner Organisation oder keinem Wettbewerb
            verbunden, von ihnen unterstützt, gesponsert oder offiziell
            verbunden
          </Strong>
          . Alle Drittanbieter-Namen, -Logos und -Marken werden
          ausschließlich zu Identifikations- und Beschreibungszwecken
          (Nominative Fair Use) verwendet, um Nutzern die Erkennung der
          gewünschten Spiele und Mannschaften zu erleichtern.
        </p>
        <p>
          Wenn du Rechteinhaber bist und der Meinung bist, dass deine
          Marke oder dein urheberrechtlich geschütztes Material
          unzulässig in der App verwendet wird, wende dich bitte an{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Wir prüfen die Anfrage zeitnah und entfernen oder ersetzen
          den Inhalt, sofern erforderlich.
        </p>
      </Section>

      <Divider />

      <Section title="12. Kontakt">
        <p>
          Bei Fragen zu dieser Datenschutzerklärung oder Anfragen zur
          Datenverarbeitung:
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
        <p>
          Anfragen nach DSGVO oder KVKK können an die oben genannte
          E-Mail-Adresse oder per Post gerichtet werden. Wir antworten
          innerhalb von <Strong>30 Tagen</Strong>.
        </p>
      </Section>
    </>
  );
}
