import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentIt() {
  return (
    <>
      <p>
        In iCat Studios (&quot;noi&quot;, &quot;nostro&quot;)
        rispettiamo la privacy degli utenti (&quot;tu&quot;,
        &quot;tuo&quot;) dell&apos;applicazione mobile ScoreHunter
        (&quot;l&apos;App&quot;). La presente Informativa sulla privacy
        spiega quali dati personali raccogliamo, come li utilizziamo,
        con chi li condividiamo e quali sono i tuoi diritti durante
        l&apos;utilizzo della nostra App.
      </p>
      <p>
        Utilizzando l&apos;App, accetti la presente Informativa sulla
        privacy.
      </p>

      <Divider />

      <Section title="1. Dati che raccogliamo">
        <SubHeading>1.1 Informazioni sull&apos;account</SubHeading>
        <p>
          Quando utilizzi &quot;Accedi con Apple&quot; o &quot;Accedi
          con Google&quot;, riceviamo le seguenti informazioni da Apple
          o Google:
        </p>
        <List
          items={[
            <>
              <Strong>Indirizzo e-mail</Strong> (Apple fornisce un
              indirizzo e-mail di inoltro se selezioni &quot;Nascondi
              la mia e-mail&quot;)
            </>,
            <>
              <Strong>Nome e cognome</Strong> (Apple li fornisce solo al
              primo accesso; Google li fornisce a ogni accesso)
            </>,
            <>
              <Strong>Provider User ID</Strong> — un identificativo
              univoco utilizzato per riconoscere il tuo account
            </>,
          ]}
        />

        <SubHeading>1.2 Informazioni del profilo</SubHeading>
        <p>Informazioni che fornisci direttamente nell&apos;App:</p>
        <List
          items={[
            <>
              <Strong>Nome utente</Strong> (nome visualizzato — visibile
              nelle classifiche)
            </>,
            <>
              <Strong>Paese</Strong>
            </>,
            <>
              <Strong>Squadra di calcio preferita</Strong>
            </>,
            <>
              <Strong>Data di nascita</Strong>
            </>,
            <>
              <Strong>Genere</Strong> (facoltativo — opzione
              &quot;preferisco non specificare&quot; disponibile)
            </>,
            <>
              <Strong>Stato dell&apos;abbonamento Pro</Strong> — se hai
              un&apos;iscrizione Pro attiva e la sua data di scadenza
            </>,
          ]}
        />

        <SubHeading>1.3 Dati di utilizzo</SubHeading>
        <p>Dati generati durante l&apos;utilizzo dell&apos;App:</p>
        <List
          items={[
            <>
              <Strong>Liste di pronostici</Strong> (partite selezionate
              e pronostici effettuati per Score Hunt e i mini-giochi)
            </>,
            <>
              <Strong>Leghe a cui ti unisci</Strong>
            </>,
            <>
              <Strong>Trofei e obiettivi conquistati</Strong>
            </>,
            <>
              <Strong>Punteggi delle classifiche settimanali e
              stagionali</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Informazioni sul dispositivo e sull&apos;App</SubHeading>
        <List
          items={[
            <>
              <Strong>ID del dispositivo</Strong> (per la gestione
              anonima delle sessioni)
            </>,
            <>
              <Strong>Sistema operativo</Strong> (versione iOS/Android)
            </>,
            <>
              <Strong>Versione e piattaforma dell&apos;App</Strong>{" "}
              (codice di versione, nome della versione e iOS o Android)
              — utilizzati per fornire supporto specifico per la
              versione e individuare problemi di compatibilità
            </>,
            <>
              <Strong>Token per le notifiche push</Strong> — un token
              univoco rilasciato da Apple Push Notification service
              (APNs) o Firebase Cloud Messaging (FCM) per inviarti
              promemoria delle partite, notifiche dei premi e
              comunicazioni importanti. Puoi disattivare le notifiche
              push in qualsiasi momento dalle impostazioni del tuo
              dispositivo.
            </>,
          ]}
        />

        <SubHeading>1.5 Identificativo pubblicitario</SubHeading>
        <p>
          L&apos;App può raccogliere il tuo{" "}
          <Strong>Identificativo pubblicitario</Strong> (IDFA su iOS,
          GAID/Identificativo pubblicitario su Android){" "}
          <Strong>solo con il tuo consenso esplicito</Strong>:
        </p>
        <List
          items={[
            <>
              Su <Strong>iOS</Strong>, al primo avvio dell&apos;App
              comparirà un avviso di{" "}
              <Strong>App Tracking Transparency (ATT)</Strong>. Se
              scegli &quot;Chiedi all&apos;app di non tracciare&quot;,
              l&apos;IDFA non viene raccolto e i nostri partner
              pubblicitari ricevono solo informazioni che preservano la
              privacy tramite il framework SKAdNetwork di Apple.
            </>,
            <>
              Su <Strong>Android</Strong>, il GAID viene raccolto a
              meno che tu non lo disabiliti tramite{" "}
              <Strong>
                Impostazioni → Google → Annunci → Elimina ID
                pubblicitario
              </Strong>
              .
            </>,
            <>
              Quando viene raccolto, l&apos;Identificativo pubblicitario
              è condiviso con i partner pubblicitari elencati nella
              sezione 3.4 ai fini dell&apos;attribuzione e della
              limitazione della frequenza.
            </>,
          ]}
        />

        <SubHeading>1.6 Dati raccolti automaticamente</SubHeading>
        <List
          items={[
            <>
              <Strong>Indirizzo IP</Strong> — utilizzato per scopi di
              sicurezza, inclusa la limitazione di frequenza sugli
              endpoint di autenticazione (ad es. fino a 15 tentativi di
              accesso al minuto per IP) e la prevenzione degli abusi.
              Non utilizziamo gli indirizzi IP per creare profili
              pubblicitari.
            </>,
            <>
              <Strong>Report di errori e crash</Strong> — utilizzati per
              monitorare la stabilità dell&apos;App. I report sono
              filtrati per escludere informazioni personali
              identificabili.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Come utilizziamo i tuoi dati">
        <p>Utilizziamo i dati raccolti per le seguenti finalità:</p>
        <List
          items={[
            <>
              <Strong>Creazione e gestione dell&apos;account</Strong>:
              per consentirti di accedere e utilizzare l&apos;App
            </>,
            <>
              <Strong>Esperienza di gioco</Strong>: per salvare le tue
              liste di pronostici, calcolare i punteggi e creare le
              classifiche
            </>,
            <>
              <Strong>Personalizzazione</Strong>: per mostrare la tua
              squadra preferita e il tuo paese nelle classifiche
            </>,
            <>
              <Strong>Gestione dell&apos;abbonamento Pro</Strong>: per
              verificare lo stato dell&apos;abbonamento e abilitare le
              funzionalità Pro
            </>,
            <>
              <Strong>Comunicazione</Strong>: per inviare aggiornamenti
              importanti, annunci, notifiche dei premi e notifiche
              push relative all&apos;App
            </>,
            <>
              <Strong>Consegna dei premi</Strong>: per inviare premi
              fisici o digitali ai vincitori dei concorsi (richiede
              nome ed e-mail)
            </>,
            <>
              <Strong>Sicurezza dell&apos;account</Strong>: per
              prevenire account fraudolenti, verificare l&apos;identità
              e limitare le attività sospette
            </>,
            <>
              <Strong>Pubblicità</Strong>: per mostrare annunci
              all&apos;interno dell&apos;App e misurarne le performance
              — vedi la sezione 8 per i dettagli
            </>,
            <>
              <Strong>Analisi e miglioramento</Strong>: per analizzare
              in forma anonima le statistiche di utilizzo e migliorare
              l&apos;App
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Con chi condividiamo i tuoi dati">
        <p>
          ScoreHunter{" "}
          <Strong>
            non vende né affitta i tuoi dati personali a terzi
          </Strong>
          . Condividiamo i dati esclusivamente con i fornitori di
          servizi e i partner pubblicitari di fiducia indicati di
          seguito, e solo nella misura necessaria a far funzionare
          l&apos;App.
        </p>

        <SubHeading>3.1 Fornitori di servizi</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — hosting di
              server e database (Francoforte, Germania)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — servizio di terze parti che fornisce dati delle
              partite, informazioni su squadre e leghe e relativi
              contenuti visivi (loghi e immagini). Nessun dato personale
              viene condiviso con API-Football. ScoreHunter non possiede
              i diritti sui loghi o sui marchi forniti tramite questo
              servizio; vedi la sezione 11 per i dettagli.
            </>,
            <>
              <Strong>Apple</Strong> — autenticazione Apple Sign-In
            </>,
            <>
              <Strong>Google</Strong> — autenticazione Google Sign-In e
              Firebase Cloud Messaging (notifiche push su Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — elabora gli acquisti e i
              rinnovi dell&apos;abbonamento Pro su iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — elabora gli
              acquisti e i rinnovi dell&apos;abbonamento Pro su Android
            </>,
            <>
              <Strong>Sentry</Strong> — monitoraggio degli errori e
              delle eccezioni del back-end. Il filtraggio delle
              informazioni personali identificabili è attivo (a Sentry
              non vengono inviati e-mail, nomi o contenuti dell&apos;utente).
            </>,
          ]}
        />
        <p>
          Questi fornitori trattano i dati esclusivamente per nostro
          conto e secondo le nostre istruzioni.
        </p>

        <SubHeading>3.2 Obblighi di legge</SubHeading>
        <p>
          I tuoi dati possono essere condivisi con le autorità in
          risposta a un ordine del tribunale, a un&apos;indagine legale
          o a un obbligo di legge.
        </p>

        <SubHeading>
          3.3 Informazioni visibili ad altri utenti
        </SubHeading>
        <p>
          Le seguenti informazioni sono{" "}
          <Strong>visibili ad altri utenti</Strong> nelle classifiche e
          nelle pagine del profilo:
        </p>
        <List
          items={[
            "Il tuo nome utente",
            "La bandiera del tuo paese",
            "La tua squadra preferita",
            "I trofei che hai conquistato",
            "I tuoi punteggi e le statistiche dei pronostici",
            "Un badge di iscrizione Pro se hai un abbonamento attivo",
          ]}
        />
        <p>
          Le seguenti informazioni{" "}
          <Strong>non vengono mai mostrate nell&apos;App</Strong>:
        </p>
        <List
          items={[
            "Il tuo indirizzo e-mail",
            "Il tuo vero nome e cognome",
            "La tua data di nascita",
            "Il tuo genere",
            "Le informazioni del tuo dispositivo",
            "Il tuo identificativo pubblicitario",
            "La data di scadenza del tuo abbonamento",
          ]}
        />

        <SubHeading>3.4 Partner pubblicitari</SubHeading>
        <p>
          L&apos;App mostra annunci pubblicitari attraverso diversi
          network (talvolta chiamati <em>mediation</em>). Quando hai
          dato il consenso al tracciamento, il tuo Identificativo
          pubblicitario e dati tecnici limitati possono essere condivisi
          con i partner di seguito per la diffusione degli annunci,
          l&apos;attribuzione e la limitazione della frequenza. Ogni
          partner ha la propria informativa sulla privacy:
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

      <Section title="4. Dove e per quanto tempo conserviamo i tuoi dati">
        <SubHeading>4.1 Luogo di archiviazione</SubHeading>
        <p>
          Tutti i dati degli utenti sono archiviati nei data center{" "}
          <Strong>
            Amazon Web Services (AWS) Francoforte (eu-central-1)
          </Strong>
          . Come servizio di database utilizziamo Amazon RDS PostgreSQL.
        </p>

        <SubHeading>4.2 Periodo di conservazione</SubHeading>
        <List
          items={[
            <>
              <Strong>Account attivi</Strong>: i tuoi dati sono
              conservati finché il tuo account rimane attivo
            </>,
            <>
              <Strong>Account inattivi</Strong>: gli account che non
              effettuano l&apos;accesso da 2 anni vengono eliminati
              automaticamente
            </>,
            <>
              <Strong>Account eliminati</Strong>: quando elimini il tuo
              account, i tuoi dati personali vengono eliminati
              definitivamente entro 30 giorni (inclusi i backup)
            </>,
            <>
              <Strong>Statistiche anonime</Strong>: dopo
              l&apos;eliminazione possono essere mantenute statistiche
              aggregate anonime (non contengono informazioni personali)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. I tuoi diritti">
        <p>
          Ai sensi del GDPR (Europa) e della KVKK (Turchia), hai i
          seguenti diritti:
        </p>
        <List
          items={[
            <>
              <Strong>Diritto di accesso</Strong>: scoprire quali dati
              trattiamo che ti riguardano
            </>,
            <>
              <Strong>Diritto di rettifica</Strong>: richiedere la
              correzione di dati inesatti o incompleti
            </>,
            <>
              <Strong>
                Diritto alla cancellazione (&quot;diritto all&apos;oblio&quot;)
              </Strong>
              : richiedere la cancellazione dei tuoi dati
            </>,
            <>
              <Strong>Diritto di limitazione del trattamento</Strong>:
              limitare le modalità di trattamento dei tuoi dati
            </>,
            <>
              <Strong>Diritto alla portabilità dei dati</Strong>:
              ricevere i tuoi dati in un formato leggibile da macchina
            </>,
            <>
              <Strong>Diritto di opposizione</Strong>: opporti al
              trattamento dei dati
            </>,
            <>
              <Strong>Diritto di revocare il consenso</Strong>{" "}
              (tracciamento pubblicitario): puoi revocare in qualsiasi
              momento l&apos;autorizzazione ATT su iOS in{" "}
              <Strong>
                Impostazioni → Privacy e sicurezza → Tracciamento
              </Strong>
              , oppure ripristinare/eliminare il tuo identificativo
              pubblicitario su Android
            </>,
          ]}
        />

        <SubHeading>Come eliminare il tuo account</SubHeading>
        <p>Puoi eliminare il tuo account in tre modi:</p>
        <OrderedList
          items={[
            <>
              <Strong>Dall&apos;App</Strong>: pagina Profilo →
              Impostazioni account → Elimina account
            </>,
            <>
              <Strong>Dal web</Strong>:{" "}
              <Anchor href="/it/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Via e-mail</Strong>: invia una richiesta
              all&apos;indirizzo di contatto qui sotto
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Privacy dei minori">
        <p>
          ScoreHunter{" "}
          <Strong>
            non è destinato a utenti di età inferiore ai 13 anni
          </Strong>
          . Non raccogliamo consapevolmente dati personali di minori
          di 13 anni. Se veniamo a conoscenza di aver raccolto dati
          personali di un minore di 13 anni, li elimineremo il più
          presto possibile.
        </p>
        <p>
          Per gli utenti tra i 13 e i 18 anni consigliamo di leggere
          questa Informativa sulla privacy insieme a un genitore o
          tutore. La pubblicità mostrata nell&apos;App è configurata
          con{" "}
          <Strong>
            impostazioni non personalizzate / family-safe
          </Strong>{" "}
          per gli utenti che, in base alla data di nascita fornita,
          risultano minori.
        </p>
        <p>
          Genitori o tutori che ritengono che il proprio figlio stia
          utilizzando l&apos;App possono contattarci.
        </p>
      </Section>

      <Divider />

      <Section title="7. Sicurezza dei dati">
        <p>
          Adottiamo misure di sicurezza standard del settore per
          proteggere i tuoi dati:
        </p>
        <List
          items={[
            <>
              <Strong>Cifratura HTTPS</Strong>: tutto il traffico di
              rete è cifrato tramite SSL/TLS
            </>,
            <>
              <Strong>Autenticazione senza password</Strong>: non
              memorizziamo password; tutti gli accessi avvengono
              tramite Apple e Google
            </>,
            <>
              <Strong>Gestione delle sessioni basata su JWT</Strong>:
              le sessioni sono gestite con token sicuri e temporanei
            </>,
            <>
              <Strong>Limitazione di frequenza</Strong>: gli endpoint
              di autenticazione e quelli sensibili sono limitati per IP
              per prevenire attacchi brute-force e abusi
            </>,
            <>
              <Strong>Controllo degli accessi</Strong>: l&apos;accesso
              al database è limitato agli account di sistema autorizzati
            </>,
            <>
              <Strong>Aggiornamenti di sicurezza regolari</Strong>: i
              nostri sistemi sono mantenuti aggiornati
            </>,
          ]}
        />
        <p>
          Tieni comunque presente che nessun metodo di trasmissione su
          Internet è sicuro al 100%.
        </p>
      </Section>

      <Divider />

      <Section title="8. Pubblicità e tracciamento">
        <SubHeading>8.1 Pubblicità nell&apos;App</SubHeading>
        <p>
          ScoreHunter è in parte sostenuto dalla pubblicità. L&apos;App
          mostra annunci tramite <Strong>Google AdMob</Strong> e
          ulteriori network in mediation (AppLovin, Liftoff/Vungle,
          IronSource, Unity Ads, Meta Audience Network, InMobi). Vedi
          la sezione 3.4 per l&apos;elenco completo dei partner.
        </p>
        <p>
          Gli annunci possono essere in formato banner, interstitial o
          rewarded. Gli iscritti Pro possono usufruire di
          un&apos;esperienza con meno pubblicità o senza pubblicità a
          seconda del livello di abbonamento.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          Su iOS 14.5 e versioni successive, Apple ci richiede di
          ottenere il tuo permesso prima di tracciarti tra app e siti
          web. Al primo avvio dell&apos;App vedrai una richiesta di{" "}
          <Strong>App Tracking Transparency</Strong>:
        </p>
        <List
          items={[
            <>
              Se selezioni <Strong>&quot;Consenti&quot;</Strong>, il
              tuo IDFA può essere condiviso con i nostri partner
              pubblicitari per annunci personalizzati, attribuzione e
              limitazione di frequenza.
            </>,
            <>
              Se selezioni{" "}
              <Strong>
                &quot;Chiedi all&apos;app di non tracciare&quot;
              </Strong>
              , l&apos;IDFA non viene raccolto. Per l&apos;attribuzione
              utilizziamo il framework <Strong>SKAdNetwork</Strong> di
              Apple, che preserva la privacy, e gli annunci visualizzati
              saranno non personalizzati.
            </>,
          ]}
        />
        <p>
          Puoi modificare la tua scelta in qualsiasi momento da{" "}
          <Strong>
            Impostazioni → Privacy e sicurezza → Tracciamento
          </Strong>
          .
        </p>

        <SubHeading>8.3 ID pubblicitario di Android</SubHeading>
        <p>
          Su Android, il tuo Google Advertising ID (GAID) può essere
          utilizzato dai nostri partner pubblicitari. Puoi{" "}
          <Strong>ripristinare</Strong> o <Strong>eliminare</Strong>{" "}
          il tuo identificativo pubblicitario in qualsiasi momento da{" "}
          <Strong>Impostazioni → Google → Annunci</Strong>. Una volta
          eliminato, gli annunci saranno non personalizzati.
        </p>

        <SubHeading>8.4 Cookie</SubHeading>
        <p>
          L&apos;applicazione mobile ScoreHunter{" "}
          <Strong>non utilizza cookie del browser</Strong>. Sul mobile
          il tracciamento è regolato dai meccanismi di piattaforma
          descritti sopra, non dai cookie.
        </p>
      </Section>

      <Divider />

      <Section title="9. Trasferimenti internazionali di dati">
        <p>
          I tuoi dati possono essere trattati al di fuori del tuo paese
          di residenza (AWS Francoforte — Unione Europea, nonché nei
          data center dei partner pubblicitari elencati nella sezione
          3.4, che possono trovarsi al di fuori dell&apos;UE). Tali
          trasferimenti rispettano gli standard di sicurezza richiesti
          da GDPR e KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Modifiche alla presente Informativa">
        <p>
          Possiamo aggiornare questa Informativa sulla privacy di
          tanto in tanto. Le modifiche entrano in vigore una volta
          pubblicate su questa pagina e la data &quot;Ultimo
          aggiornamento&quot; in alto verrà aggiornata. Le modifiche
          significative saranno comunicate tramite notifica in-app.
        </p>
      </Section>

      <Divider />

      <Section title="11. Contenuti di terze parti e marchi">
        <p>
          ScoreHunter mostra dati delle partite di calcio, nomi di
          squadre, nomi di leghe, nomi di giocatori e contenuti visivi
          (come loghi di squadre e leghe) forniti dal nostro provider
          di dati API-Football. Questi nomi, loghi e marchi sono di
          proprietà dei rispettivi titolari — inclusi club, leghe,
          federazioni e altri titolari dei diritti.
        </p>
        <p>
          ScoreHunter{" "}
          <Strong>
            non è affiliato, sostenuto, sponsorizzato né ufficialmente
            collegato in alcun modo a leghe, federazioni, club,
            organizzazioni o competizioni rappresentati nell&apos;App
          </Strong>
          . Tutti i nomi, i loghi e i marchi di terzi sono utilizzati
          esclusivamente a fini identificativi e descrittivi (uso
          nominativo equo), per aiutare gli utenti a riconoscere le
          partite e le squadre che desiderano seguire.
        </p>
        <p>
          Se sei titolare di diritti e ritieni che il tuo marchio o
          materiale protetto da copyright sia utilizzato in modo
          inappropriato all&apos;interno dell&apos;App, contattaci a{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Esamineremo la richiesta e risponderemo prontamente,
          rimuovendo o sostituendo il contenuto ove opportuno.
        </p>
      </Section>

      <Divider />

      <Section title="12. Contatti">
        <p>
          Per domande relative alla presente Informativa sulla privacy
          o per richieste relative al trattamento dei dati:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Sviluppatore</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Sito web</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Le richieste ai sensi del GDPR o della KVKK possono essere
          inviate all&apos;indirizzo e-mail sopra indicato o per
          posta. Risponderemo entro <Strong>30 giorni</Strong>.
        </p>
      </Section>
    </>
  );
}
