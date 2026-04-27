import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentFr() {
  return (
    <>
      <p>
        Chez iCat Studios (&quot;nous&quot;, &quot;notre&quot;), nous
        respectons la vie privée des utilisateurs (&quot;tu&quot;,
        &quot;ton&quot;) de l&apos;application mobile ScoreHunter
        (&quot;l&apos;App&quot;). La présente Politique de
        confidentialité explique quelles données personnelles nous
        collectons, comment nous les utilisons, avec qui nous les
        partageons et tes droits lors de l&apos;utilisation de notre
        App.
      </p>
      <p>
        En utilisant l&apos;App, tu acceptes la présente Politique de
        confidentialité.
      </p>

      <Divider />

      <Section title="1. Données que nous collectons">
        <SubHeading>1.1 Informations de compte</SubHeading>
        <p>
          Lorsque tu utilises &quot;Se connecter avec Apple&quot; ou
          &quot;Se connecter avec Google&quot;, nous recevons les
          informations suivantes d&apos;Apple ou de Google :
        </p>
        <List
          items={[
            <>
              <Strong>Adresse e-mail</Strong> (Apple fournit une adresse
              e-mail relais si tu choisis &quot;Masquer mon
              e-mail&quot;)
            </>,
            <>
              <Strong>Prénom et nom</Strong> (Apple ne les transmet qu&apos;à
              la première connexion ; Google les fournit à chaque
              connexion)
            </>,
            <>
              <Strong>Provider User ID</Strong> — un identifiant unique
              utilisé pour reconnaître ton compte
            </>,
          ]}
        />

        <SubHeading>1.2 Informations de profil</SubHeading>
        <p>Informations que tu fournis directement dans l&apos;App :</p>
        <List
          items={[
            <>
              <Strong>Nom d&apos;utilisateur</Strong> (nom affiché —
              visible dans les classements)
            </>,
            <>
              <Strong>Pays</Strong>
            </>,
            <>
              <Strong>Équipe de football préférée</Strong>
            </>,
            <>
              <Strong>Date de naissance</Strong>
            </>,
            <>
              <Strong>Genre</Strong> (facultatif — option &quot;préfère
              ne pas le dire&quot; disponible)
            </>,
            <>
              <Strong>Statut d&apos;abonnement Pro</Strong> — si tu as
              une adhésion Pro active et sa date d&apos;expiration
            </>,
          ]}
        />

        <SubHeading>1.3 Données d&apos;utilisation</SubHeading>
        <p>Données générées lors de l&apos;utilisation de l&apos;App :</p>
        <List
          items={[
            <>
              <Strong>Listes de pronostics</Strong> (matchs sélectionnés
              et pronostics réalisés pour Score Hunt et les mini-jeux)
            </>,
            <>
              <Strong>Ligues que tu rejoins</Strong>
            </>,
            <>
              <Strong>Trophées et succès remportés</Strong>
            </>,
            <>
              <Strong>Scores de classements hebdomadaires et
              saisonniers</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Informations sur l&apos;appareil et l&apos;App</SubHeading>
        <List
          items={[
            <>
              <Strong>Identifiant d&apos;appareil</Strong> (pour la
              gestion anonyme des sessions)
            </>,
            <>
              <Strong>Système d&apos;exploitation</Strong> (version
              iOS/Android)
            </>,
            <>
              <Strong>Version et plateforme de l&apos;App</Strong> (code
              de version, nom de version et iOS ou Android) — utilisée
              pour fournir un support spécifique à la version et
              identifier les problèmes de compatibilité
            </>,
            <>
              <Strong>Token de notification push</Strong> — un token
              unique délivré par Apple Push Notification service (APNs)
              ou Firebase Cloud Messaging (FCM) afin de t&apos;envoyer
              des rappels de matchs, des notifications de prix et des
              annonces importantes. Tu peux désactiver les notifications
              push à tout moment depuis les réglages de ton appareil.
            </>,
          ]}
        />

        <SubHeading>1.5 Identifiant publicitaire</SubHeading>
        <p>
          L&apos;App peut collecter ton{" "}
          <Strong>Identifiant publicitaire</Strong> (IDFA sur iOS,
          GAID/Identifiant publicitaire sur Android){" "}
          <Strong>uniquement avec ton consentement explicite</Strong> :
        </p>
        <List
          items={[
            <>
              Sur <Strong>iOS</Strong>, une invite{" "}
              <Strong>App Tracking Transparency (ATT)</Strong> apparaît
              au premier lancement. Si tu choisis &quot;Demander à
              l&apos;app de ne pas me suivre&quot;, l&apos;IDFA n&apos;est
              pas collecté et nos partenaires publicitaires reçoivent
              uniquement des informations préservant la vie privée via
              SKAdNetwork d&apos;Apple.
            </>,
            <>
              Sur <Strong>Android</Strong>, le GAID est collecté à
              moins que tu ne te désinscrives via{" "}
              <Strong>
                Paramètres → Google → Annonces → Supprimer
                l&apos;identifiant publicitaire
              </Strong>
              .
            </>,
            <>
              Lorsqu&apos;il est collecté, l&apos;Identifiant
              publicitaire est partagé avec nos partenaires publicitaires
              listés à la section 3.4 pour l&apos;attribution des
              annonces et le plafonnement de fréquence.
            </>,
          ]}
        />

        <SubHeading>1.6 Données collectées automatiquement</SubHeading>
        <List
          items={[
            <>
              <Strong>Adresse IP</Strong> — utilisée à des fins de
              sécurité, notamment la limitation de débit sur les points
              d&apos;authentification (par ex. jusqu&apos;à 15 tentatives
              de connexion par minute par IP) et la prévention des
              abus. Nous n&apos;utilisons pas les adresses IP pour créer
              des profils publicitaires.
            </>,
            <>
              <Strong>Rapports d&apos;erreur et de plantage</Strong> —
              utilisés pour surveiller la stabilité de l&apos;App. Les
              rapports sont filtrés pour exclure les informations
              personnelles identifiables.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. Comment nous utilisons tes données">
        <p>Nous utilisons les données collectées aux fins suivantes :</p>
        <List
          items={[
            <>
              <Strong>Création et gestion de compte</Strong> : pour te
              permettre de te connecter et d&apos;utiliser l&apos;App
            </>,
            <>
              <Strong>Expérience de jeu</Strong> : pour sauvegarder tes
              listes de pronostics, calculer tes scores et établir les
              classements
            </>,
            <>
              <Strong>Personnalisation</Strong> : pour afficher ton
              équipe préférée et ton pays dans les classements
            </>,
            <>
              <Strong>Gestion de l&apos;abonnement Pro</Strong> : pour
              vérifier ton statut d&apos;abonnement et débloquer les
              fonctionnalités Pro
            </>,
            <>
              <Strong>Communication</Strong> : pour envoyer des mises à
              jour importantes, des annonces, des notifications de prix
              et des notifications push relatives à l&apos;App
            </>,
            <>
              <Strong>Remise des prix</Strong> : pour envoyer des prix
              physiques ou numériques aux gagnants des concours (nom et
              e-mail requis)
            </>,
            <>
              <Strong>Sécurité du compte</Strong> : pour prévenir les
              comptes frauduleux, vérifier l&apos;identité des
              utilisateurs et limiter les activités suspectes
            </>,
            <>
              <Strong>Publicité</Strong> : pour afficher des annonces
              dans l&apos;App et mesurer leurs performances — voir la
              section 8 pour les détails
            </>,
            <>
              <Strong>Analyse et amélioration</Strong> : pour analyser
              de façon anonyme les statistiques d&apos;utilisation et
              améliorer l&apos;App
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Avec qui nous partageons tes données">
        <p>
          ScoreHunter{" "}
          <Strong>
            ne vend ni ne loue tes données personnelles à des tiers
          </Strong>
          . Nous ne partageons les données qu&apos;avec les prestataires
          de confiance et les partenaires publicitaires énumérés
          ci-dessous, et uniquement dans la mesure nécessaire au
          fonctionnement de l&apos;App.
        </p>

        <SubHeading>3.1 Prestataires de services</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — hébergement
              des serveurs et de la base de données (Francfort,
              Allemagne)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — service tiers fournissant les données de match, les
              informations sur les équipes et ligues, ainsi que les
              ressources visuelles associées (logos et images). Aucune
              donnée personnelle n&apos;est partagée avec API-Football.
              ScoreHunter ne possède pas les droits sur les logos ou
              marques fournis par ce service ; voir la section 11 pour
              plus de détails.
            </>,
            <>
              <Strong>Apple</Strong> — authentification Apple Sign-In
            </>,
            <>
              <Strong>Google</Strong> — authentification Google Sign-In
              et Firebase Cloud Messaging (notifications push sur
              Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — traite les achats et les
              renouvellements de l&apos;abonnement Pro sur iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — traite les achats
              et les renouvellements de l&apos;abonnement Pro sur
              Android
            </>,
            <>
              <Strong>Sentry</Strong> — surveillance des erreurs et
              exceptions du back-end. Le filtrage des informations
              personnelles identifiables est activé (aucun e-mail, nom
              ou contenu utilisateur n&apos;est envoyé à Sentry).
            </>,
          ]}
        />
        <p>
          Ces prestataires ne traitent les données que pour notre compte
          et selon nos instructions.
        </p>

        <SubHeading>3.2 Obligations légales</SubHeading>
        <p>
          Tes données peuvent être communiquées aux autorités en réponse
          à une décision de justice, une enquête légale ou une
          obligation légale.
        </p>

        <SubHeading>
          3.3 Informations visibles par les autres utilisateurs
        </SubHeading>
        <p>
          Les informations suivantes sont{" "}
          <Strong>visibles par les autres utilisateurs</Strong> dans
          les classements et les pages de profil :
        </p>
        <List
          items={[
            "Ton nom d'utilisateur (nom affiché)",
            "Ton drapeau de pays",
            "Ton équipe préférée",
            "Les trophées que tu as remportés",
            "Tes scores et statistiques de pronostics",
            "Un badge d'adhésion Pro si tu as un abonnement actif",
          ]}
        />
        <p>
          Les informations suivantes ne sont{" "}
          <Strong>jamais affichées dans l&apos;App</Strong> :
        </p>
        <List
          items={[
            "Ton adresse e-mail",
            "Tes véritables prénom et nom",
            "Ta date de naissance",
            "Ton genre",
            "Tes informations d'appareil",
            "Ton identifiant publicitaire",
            "La date d'expiration de ton abonnement",
          ]}
        />

        <SubHeading>3.4 Partenaires publicitaires</SubHeading>
        <p>
          L&apos;App affiche des publicités via plusieurs réseaux
          publicitaires (parfois appelés <em>mediation</em>). Lorsque tu
          as consenti au suivi, ton Identifiant publicitaire et des
          données techniques limitées peuvent être partagés avec les
          partenaires ci-dessous pour la diffusion d&apos;annonces,
          l&apos;attribution et le plafonnement de fréquence. Chaque
          partenaire dispose de sa propre politique de confidentialité :
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

      <Section title="4. Où et combien de temps nous conservons tes données">
        <SubHeading>4.1 Lieu de stockage</SubHeading>
        <p>
          Toutes les données utilisateurs sont stockées dans les centres
          de données{" "}
          <Strong>
            Amazon Web Services (AWS) Francfort (eu-central-1)
          </Strong>
          . Nous utilisons Amazon RDS PostgreSQL comme service de base
          de données.
        </p>

        <SubHeading>4.2 Durée de conservation</SubHeading>
        <List
          items={[
            <>
              <Strong>Comptes actifs</Strong> : tes données sont
              conservées tant que ton compte reste actif
            </>,
            <>
              <Strong>Comptes inactifs</Strong> : les comptes sans
              connexion depuis 2 ans sont automatiquement supprimés
            </>,
            <>
              <Strong>Comptes supprimés</Strong> : lorsque tu supprimes
              ton compte, tes données personnelles sont définitivement
              supprimées sous 30 jours (sauvegardes incluses)
            </>,
            <>
              <Strong>Statistiques anonymes</Strong> : des statistiques
              agrégées anonymes peuvent être conservées après suppression
              (elles ne contiennent aucune information personnelle)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Tes droits">
        <p>
          Conformément au RGPD (Europe) et à la KVKK (Turquie), tu
          disposes des droits suivants :
        </p>
        <List
          items={[
            <>
              <Strong>Droit d&apos;accès</Strong> : connaître les
              données que nous traitons à ton sujet
            </>,
            <>
              <Strong>Droit de rectification</Strong> : demander la
              correction de données inexactes ou incomplètes
            </>,
            <>
              <Strong>
                Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)
              </Strong>
               : demander la suppression de tes données
            </>,
            <>
              <Strong>Droit à la limitation du traitement</Strong> :
              limiter la manière dont tes données sont traitées
            </>,
            <>
              <Strong>Droit à la portabilité</Strong> : recevoir tes
              données dans un format lisible par machine
            </>,
            <>
              <Strong>Droit d&apos;opposition</Strong> : t&apos;opposer
              au traitement des données
            </>,
            <>
              <Strong>Droit de retirer ton consentement</Strong>{" "}
              (suivi publicitaire) : tu peux révoquer l&apos;autorisation
              ATT sur iOS via{" "}
              <Strong>
                Réglages → Confidentialité et sécurité → Suivi
              </Strong>
              , ou réinitialiser/supprimer ton identifiant publicitaire
              sur Android à tout moment
            </>,
          ]}
        />

        <SubHeading>Comment supprimer ton compte</SubHeading>
        <p>Tu peux supprimer ton compte de trois façons :</p>
        <OrderedList
          items={[
            <>
              <Strong>Dans l&apos;App</Strong> : page Profil → Paramètres
              du compte → Supprimer le compte
            </>,
            <>
              <Strong>Sur le Web</Strong> :{" "}
              <Anchor href="/fr/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Par e-mail</Strong> : envoie une demande à
              l&apos;adresse de contact ci-dessous
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Vie privée des enfants">
        <p>
          ScoreHunter{" "}
          <Strong>
            n&apos;est pas destiné aux utilisateurs de moins de 13 ans
          </Strong>
          . Nous ne collectons pas sciemment de données personnelles
          d&apos;enfants de moins de 13 ans. Si nous apprenons que nous
          avons collecté des données personnelles d&apos;un enfant de
          moins de 13 ans, nous les supprimerons dès que possible.
        </p>
        <p>
          Pour les utilisateurs entre 13 et 18 ans, nous recommandons de
          consulter cette Politique de confidentialité avec un parent
          ou tuteur. La publicité diffusée dans l&apos;App est
          configurée avec des{" "}
          <Strong>
            paramètres non personnalisés / adaptés à toute la famille
          </Strong>{" "}
          pour les utilisateurs apparaissant comme mineurs selon la
          date de naissance fournie.
        </p>
        <p>
          Les parents ou tuteurs qui pensent que leur enfant utilise
          l&apos;App peuvent nous contacter.
        </p>
      </Section>

      <Divider />

      <Section title="7. Sécurité des données">
        <p>
          Nous mettons en œuvre des mesures de sécurité conformes aux
          standards du secteur pour protéger tes données :
        </p>
        <List
          items={[
            <>
              <Strong>Chiffrement HTTPS</Strong> : tout le trafic réseau
              est chiffré via SSL/TLS
            </>,
            <>
              <Strong>Authentification sans mot de passe</Strong> : nous
              ne stockons pas de mots de passe ; toutes les connexions
              passent par Apple et Google
            </>,
            <>
              <Strong>Gestion de session basée sur JWT</Strong> : les
              sessions sont gérées avec des jetons sécurisés et
              temporaires
            </>,
            <>
              <Strong>Limitation de débit</Strong> : les points
              d&apos;authentification et sensibles sont limités par IP
              afin de prévenir les attaques par force brute et les abus
            </>,
            <>
              <Strong>Contrôle des accès</Strong> : l&apos;accès à la
              base de données est limité aux comptes système autorisés
            </>,
            <>
              <Strong>Mises à jour de sécurité régulières</Strong> : nos
              systèmes sont maintenus à jour
            </>,
          ]}
        />
        <p>
          Cependant, aucune méthode de transmission sur Internet
          n&apos;est totalement sûre.
        </p>
      </Section>

      <Divider />

      <Section title="8. Publicité et suivi">
        <SubHeading>8.1 Publicité dans l&apos;App</SubHeading>
        <p>
          ScoreHunter est en partie financé par la publicité. L&apos;App
          diffuse des publicités via <Strong>Google AdMob</Strong> et
          des réseaux supplémentaires en mediation (AppLovin,
          Liftoff/Vungle, IronSource, Unity Ads, Meta Audience Network,
          InMobi). Voir la section 3.4 pour la liste complète.
        </p>
        <p>
          Les annonces peuvent prendre la forme de bannières,
          d&apos;interstitiels et de formats avec récompense. Les
          membres Pro peuvent bénéficier d&apos;une expérience avec moins
          de publicités ou sans publicité selon le niveau d&apos;abonnement.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          Sur iOS 14.5 et versions ultérieures, Apple exige que nous te
          demandions ton autorisation avant de te suivre à travers les
          apps et les sites. Au premier lancement, une invite{" "}
          <Strong>App Tracking Transparency</Strong> apparaît :
        </p>
        <List
          items={[
            <>
              Si tu choisis <Strong>&quot;Autoriser&quot;</Strong>, ton
              IDFA peut être partagé avec nos partenaires publicitaires
              pour des annonces personnalisées, l&apos;attribution et
              le plafonnement de fréquence.
            </>,
            <>
              Si tu choisis{" "}
              <Strong>&quot;Demander à l&apos;app de ne pas me suivre&quot;</Strong>
              , l&apos;IDFA n&apos;est pas collecté. Nous utilisons le
              framework <Strong>SKAdNetwork</Strong> d&apos;Apple,
              respectueux de la vie privée, pour l&apos;attribution, et
              les annonces affichées seront non personnalisées.
            </>,
          ]}
        />
        <p>
          Tu peux modifier ta décision à tout moment dans{" "}
          <Strong>
            Réglages → Confidentialité et sécurité → Suivi
          </Strong>
          .
        </p>

        <SubHeading>8.3 Identifiant publicitaire Android</SubHeading>
        <p>
          Sur Android, ton identifiant publicitaire Google (GAID) peut
          être utilisé par nos partenaires publicitaires. Tu peux{" "}
          <Strong>réinitialiser</Strong> ou <Strong>supprimer</Strong>{" "}
          ton identifiant publicitaire à tout moment via{" "}
          <Strong>Paramètres → Google → Annonces</Strong>. Une fois
          supprimé, les annonces seront non personnalisées.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          L&apos;application mobile ScoreHunter{" "}
          <Strong>n&apos;utilise pas de cookies de navigateur</Strong>.
          Sur mobile, le suivi est géré par les mécanismes de
          plate-forme décrits ci-dessus, et non par des cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. Transferts internationaux de données">
        <p>
          Tes données peuvent être traitées en dehors de ton pays
          d&apos;origine (AWS Francfort — Union européenne, ainsi que
          dans les centres de données de nos partenaires publicitaires
          listés à la section 3.4, qui peuvent se situer hors UE). Ces
          transferts respectent les normes de sécurité exigées par le
          RGPD et la KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Modifications de la présente Politique">
        <p>
          Nous pouvons mettre à jour cette Politique de confidentialité
          de temps à autre. Les modifications prennent effet une fois
          publiées sur cette page, et la date &quot;Dernière mise à
          jour&quot; en haut de page sera actualisée. Les modifications
          importantes seront annoncées via une notification in-app.
        </p>
      </Section>

      <Divider />

      <Section title="11. Contenus tiers et marques">
        <p>
          ScoreHunter affiche des données de matchs de football, des
          noms d&apos;équipes, des noms de ligues, des noms de joueurs
          et des éléments visuels (tels que les logos d&apos;équipes et
          de ligues) provenant de notre fournisseur de données
          API-Football. Ces noms, logos et marques sont la propriété de
          leurs détenteurs respectifs — y compris les clubs de football,
          ligues, fédérations et autres titulaires de droits.
        </p>
        <p>
          ScoreHunter{" "}
          <Strong>
            n&apos;est ni affilié, ni soutenu, ni sponsorisé, ni
            officiellement lié de quelque manière que ce soit à une
            ligue, fédération, club, organisation ou compétition
            sportive figurant dans l&apos;App
          </Strong>
          . Tous les noms, logos et marques de tiers sont utilisés
          uniquement à des fins d&apos;identification et de description
          (usage nominatif équitable), pour aider les utilisateurs à
          reconnaître les matchs et équipes qu&apos;ils souhaitent
          suivre.
        </p>
        <p>
          Si tu es titulaire de droits et estimes que ta marque ou ton
          contenu protégé par le droit d&apos;auteur est utilisé de
          manière incorrecte dans l&apos;App, contacte-nous à{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . Nous examinerons la demande et y répondrons rapidement, en
          retirant ou remplaçant le contenu lorsque cela est approprié.
        </p>
      </Section>

      <Divider />

      <Section title="12. Contact">
        <p>
          Pour toute question concernant la présente Politique de
          confidentialité ou pour des demandes de traitement de données :
        </p>
        <div className="space-y-1">
          <p>
            <Strong>E-mail</Strong> :{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Développeur</Strong> : iCat Studios
          </p>
          <p>
            <Strong>Site web</Strong> :{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Les demandes au titre du RGPD ou de la KVKK peuvent être
          adressées à l&apos;e-mail ci-dessus ou par courrier. Nous
          répondrons sous <Strong>30 jours</Strong>.
        </p>
      </Section>
    </>
  );
}
