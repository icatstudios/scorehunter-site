import {
  Section,
  SubHeading,
  List,
  OrderedList,
  Strong,
  Anchor,
  Divider,
} from "@/components/PolicyComponents";

export function PolicyContentEn() {
  return (
    <>
      <p>
        At iCat Studios (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we
        respect the privacy of users (&quot;you&quot;, &quot;your&quot;) of
        the ScoreHunter mobile application (&quot;the App&quot;). This Privacy
        Policy explains what personal data we collect, how we use it, with
        whom we share it, and your rights when using our App.
      </p>
      <p>By using the App, you agree to this Privacy Policy.</p>

      <Divider />

      <Section title="1. Data We Collect">
        <SubHeading>1.1 Account Information</SubHeading>
        <p>
          When you use Sign in with Apple or Sign in with Google, we receive
          the following information from Apple or Google:
        </p>
        <List
          items={[
            <>
              <Strong>Email address</Strong> (Apple provides a relay email if
              you select &quot;Hide My Email&quot;)
            </>,
            <>
              <Strong>First name and last name</Strong> (Apple provides this
              only on first sign-in; Google provides it on every sign-in)
            </>,
            <>
              <Strong>Provider User ID</Strong> — a unique identifier used to
              recognize your account
            </>,
          ]}
        />

        <SubHeading>1.2 Profile Information</SubHeading>
        <p>Information you provide directly in the App:</p>
        <List
          items={[
            <>
              <Strong>Username</Strong> (display name — visible in
              leaderboards)
            </>,
            <>
              <Strong>Country</Strong>
            </>,
            <>
              <Strong>Favorite football team</Strong>
            </>,
            <>
              <Strong>Date of birth</Strong>
            </>,
            <>
              <Strong>Gender</Strong> (optional — &quot;prefer not to
              say&quot; option available)
            </>,
            <>
              <Strong>Pro subscription status</Strong> — whether you have an
              active Pro membership and its expiration date
            </>,
          ]}
        />

        <SubHeading>1.3 Usage Data</SubHeading>
        <p>Data generated while using the App:</p>
        <List
          items={[
            <>
              <Strong>Prediction lists</Strong> (matches selected and
              predictions made for Score Hunt and mini games)
            </>,
            <>
              <Strong>Leagues you join</Strong>
            </>,
            <>
              <Strong>Trophies and achievements earned</Strong>
            </>,
            <>
              <Strong>Weekly and seasonal ranking scores</Strong>
            </>,
          ]}
        />

        <SubHeading>1.4 Device and App Information</SubHeading>
        <List
          items={[
            <>
              <Strong>Device ID</Strong> (for anonymous session management)
            </>,
            <>
              <Strong>Operating system</Strong> (iOS/Android version)
            </>,
            <>
              <Strong>App version and platform</Strong> (version code,
              version name, and whether you are on iOS or Android) — used to
              provide version-specific support and identify compatibility
              issues
            </>,
            <>
              <Strong>Push notification token</Strong> — a unique token
              issued by Apple Push Notification service (APNs) or Firebase
              Cloud Messaging (FCM) so we can deliver match reminders, prize
              notifications, and important announcements. You can disable
              push notifications at any time from your device settings.
            </>,
          ]}
        />

        <SubHeading>1.5 Advertising Identifier</SubHeading>
        <p>
          The App may collect your <Strong>Advertising Identifier</Strong>{" "}
          (IDFA on iOS, GAID/Advertising ID on Android){" "}
          <Strong>only with your explicit consent</Strong>:
        </p>
        <List
          items={[
            <>
              On <Strong>iOS</Strong>, you will see an{" "}
              <Strong>App Tracking Transparency (ATT)</Strong> prompt the
              first time you launch the App. If you choose &quot;Ask App Not
              to Track,&quot; the IDFA is not collected and our advertising
              partners receive only privacy-preserving information via
              Apple&apos;s SKAdNetwork.
            </>,
            <>
              On <Strong>Android</Strong>, the GAID is collected unless you
              opt out via{" "}
              <Strong>
                Settings → Google → Ads → Delete advertising ID
              </Strong>
              .
            </>,
            <>
              When collected, the Advertising Identifier is shared with our
              advertising partners listed in section 3.4 for ad attribution
              and frequency capping.
            </>,
          ]}
        />

        <SubHeading>1.6 Automatically Collected Data</SubHeading>
        <List
          items={[
            <>
              <Strong>IP address</Strong> — used for security purposes,
              including rate limiting on authentication endpoints (e.g. up to
              15 sign-in attempts per minute per IP) and abuse prevention. We
              do not use IP addresses to build advertising profiles.
            </>,
            <>
              <Strong>Error and crash reports</Strong> — used to monitor app
              stability. Reports are filtered to exclude personally
              identifiable information.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="2. How We Use Your Data">
        <p>We use the collected data for the following purposes:</p>
        <List
          items={[
            <>
              <Strong>Account creation and management</Strong>: To let you
              sign in and use the App
            </>,
            <>
              <Strong>Game experience</Strong>: To save your prediction
              lists, calculate your scores, and build leaderboards
            </>,
            <>
              <Strong>Personalization</Strong>: To display your favorite team
              and country in leaderboards
            </>,
            <>
              <Strong>Pro subscription management</Strong>: To verify your
              subscription status and grant access to Pro features
            </>,
            <>
              <Strong>Communication</Strong>: To send important updates,
              announcements, prize notifications, and push notifications
              about the App
            </>,
            <>
              <Strong>Prize delivery</Strong>: To send physical or digital
              prizes to contest winners (requires name and email)
            </>,
            <>
              <Strong>Account security</Strong>: To prevent fraudulent
              accounts, verify user identity, and rate-limit suspicious
              activity
            </>,
            <>
              <Strong>Advertising</Strong>: To display advertisements within
              the App and measure their performance — see section 8 for
              details
            </>,
            <>
              <Strong>Analytics and improvement</Strong>: To analyze usage
              statistics anonymously and improve the App
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="3. Who We Share Your Data With">
        <p>
          ScoreHunter{" "}
          <Strong>
            does not sell or rent your personal data to third parties
          </Strong>
          . We share data only with the trusted service providers and
          advertising partners listed below, and only to the extent necessary
          to operate the App.
        </p>

        <SubHeading>3.1 Service Providers</SubHeading>
        <List
          items={[
            <>
              <Strong>Amazon Web Services (AWS)</Strong> — Server and
              database hosting (Frankfurt, Germany)
            </>,
            <>
              <Strong>API-Football</Strong> (
              <Anchor href="https://www.api-football.com">
                api-football.com
              </Anchor>
              ) — Third-party service that provides match data, team and
              league information, and associated visual assets (logos and
              images). No personal data is shared with API-Football.
              ScoreHunter does not own the rights to logos or trademarks
              delivered through this service; see Section 11 for details.
            </>,
            <>
              <Strong>Apple</Strong> — Apple Sign-In authentication
            </>,
            <>
              <Strong>Google</Strong> — Google Sign-In authentication and
              Firebase Cloud Messaging (push notifications on Android)
            </>,
            <>
              <Strong>Apple StoreKit</Strong> — Processes Pro subscription
              purchases and renewals on iOS
            </>,
            <>
              <Strong>Google Play Billing</Strong> — Processes Pro
              subscription purchases and renewals on Android
            </>,
            <>
              <Strong>Sentry</Strong> — Backend error and exception
              monitoring. Personally identifiable information filtering is
              enabled (no email, name, or user content is sent to Sentry).
            </>,
          ]}
        />
        <p>
          These service providers only process data on our behalf and under
          our instructions.
        </p>

        <SubHeading>3.2 Legal Requirements</SubHeading>
        <p>
          Your data may be shared with authorities in response to a court
          order, legal investigation, or legal obligation.
        </p>

        <SubHeading>3.3 Information Visible to Other Users</SubHeading>
        <p>
          The following information is{" "}
          <Strong>visible to other users</Strong> in leaderboards and profile
          pages:
        </p>
        <List
          items={[
            "Your username (display name)",
            "Your country flag",
            "Your favorite team",
            "Trophies you've earned",
            "Your prediction scores and statistics",
            "A Pro membership badge if you have an active subscription",
          ]}
        />
        <p>
          The following information is{" "}
          <Strong>never shown in the App</Strong>:
        </p>
        <List
          items={[
            "Your email address",
            "Your real first and last name",
            "Your date of birth",
            "Your gender",
            "Your device information",
            "Your advertising identifier",
            "Your subscription expiration date",
          ]}
        />

        <SubHeading>3.4 Advertising Partners</SubHeading>
        <p>
          The App displays advertisements through several advertising networks
          (sometimes called <em>mediation</em>). When you have consented to
          tracking, your Advertising Identifier and limited technical data may
          be shared with the partners below for ad delivery, attribution, and
          frequency capping. Each partner has its own privacy policy:
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

      <Section title="4. Where and How Long We Store Your Data">
        <SubHeading>4.1 Data Storage Location</SubHeading>
        <p>
          All user data is stored in{" "}
          <Strong>
            Amazon Web Services (AWS) Frankfurt (eu-central-1)
          </Strong>{" "}
          data centers. We use Amazon RDS PostgreSQL as our database service.
        </p>

        <SubHeading>4.2 Retention Period</SubHeading>
        <List
          items={[
            <>
              <Strong>Active accounts</Strong>: Your data is retained as long
              as your account remains active
            </>,
            <>
              <Strong>Inactive accounts</Strong>: Accounts that have not
              signed in for 2 years are automatically deleted
            </>,
            <>
              <Strong>Deleted accounts</Strong>: When you delete your
              account, your personal data is permanently deleted within 30
              days (including backups)
            </>,
            <>
              <Strong>Anonymous statistics</Strong>: Anonymous aggregate
              statistics may be retained after deletion (contains no personal
              information)
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="5. Your Rights">
        <p>
          Under GDPR (Europe) and KVKK (Turkey), you have the following
          rights:
        </p>
        <List
          items={[
            <>
              <Strong>Right of access</Strong>: Learn what data we process
              about you
            </>,
            <>
              <Strong>Right to rectification</Strong>: Request correction of
              inaccurate or incomplete data
            </>,
            <>
              <Strong>
                Right to erasure (&quot;right to be forgotten&quot;)
              </Strong>
              : Request deletion of your data
            </>,
            <>
              <Strong>Right to restriction of processing</Strong>: Limit how
              your data is processed
            </>,
            <>
              <Strong>Right to data portability</Strong>: Receive your data
              in a machine-readable format
            </>,
            <>
              <Strong>Right to object</Strong>: Object to data processing
            </>,
            <>
              <Strong>Right to withdraw consent</Strong> (advertising
              tracking): You may revoke ATT permission on iOS via{" "}
              <Strong>Settings → Privacy &amp; Security → Tracking</Strong>,
              or reset/delete your advertising ID on Android at any time
            </>,
          ]}
        />

        <SubHeading>How to Delete Your Account</SubHeading>
        <p>You can delete your account in three ways:</p>
        <OrderedList
          items={[
            <>
              <Strong>In-app</Strong>: Profile page → Account Settings →
              Delete Account
            </>,
            <>
              <Strong>Web</Strong>:{" "}
              <Anchor href="/en/delete-account">
                https://scorehunter.app/delete-account
              </Anchor>
            </>,
            <>
              <Strong>Email</Strong>: Send a request to the contact address
              below
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="6. Children's Privacy">
        <p>
          ScoreHunter is{" "}
          <Strong>not intended for users under the age of 13</Strong>. We do
          not knowingly collect personal data from children under 13. If we
          become aware that we have collected personal data from a child
          under 13, we will delete that data as soon as possible.
        </p>
        <p>
          For users between 13 and 18, we recommend reviewing this Privacy
          Policy together with a parent or guardian. Advertising shown in the
          App is configured with{" "}
          <Strong>non-personalized / family-safe settings</Strong> for users
          who appear to be minors based on the date of birth provided.
        </p>
        <p>
          Parents or guardians who believe their child is using the App can
          contact us.
        </p>
      </Section>

      <Divider />

      <Section title="7. Data Security">
        <p>
          We take industry-standard security measures to protect your data:
        </p>
        <List
          items={[
            <>
              <Strong>HTTPS encryption</Strong>: All network traffic is
              encrypted using SSL/TLS
            </>,
            <>
              <Strong>Passwordless authentication</Strong>: We do not store
              passwords; all sign-ins are handled via Apple and Google
            </>,
            <>
              <Strong>JWT-based session management</Strong>: Sessions are
              managed with secure, temporary tokens
            </>,
            <>
              <Strong>Rate limiting</Strong>: Authentication and sensitive
              endpoints are rate-limited per IP to prevent brute-force and
              abuse
            </>,
            <>
              <Strong>Access control</Strong>: Database access is limited to
              authorized system accounts only
            </>,
            <>
              <Strong>Regular security updates</Strong>: Our systems are kept
              up to date
            </>,
          ]}
        />
        <p>
          However, please note that no method of transmission over the
          internet is 100% secure.
        </p>
      </Section>

      <Divider />

      <Section title="8. Advertising and Tracking">
        <SubHeading>8.1 Advertising in the App</SubHeading>
        <p>
          ScoreHunter is supported in part by advertising. The App displays
          ads through <Strong>Google AdMob</Strong> and additional networks
          via mediation (AppLovin, Liftoff/Vungle, IronSource, Unity Ads,
          Meta Audience Network, InMobi). See section 3.4 for the full
          partner list.
        </p>
        <p>
          Ads may include banner, interstitial, and rewarded formats. Pro
          members may experience a reduced-ad or ad-free experience depending
          on the subscription tier.
        </p>

        <SubHeading>8.2 App Tracking Transparency (iOS)</SubHeading>
        <p>
          On iOS 14.5 and later, Apple requires us to ask for your permission
          before tracking you across apps and websites. The first time you
          launch the App you will see an{" "}
          <Strong>App Tracking Transparency</Strong> prompt:
        </p>
        <List
          items={[
            <>
              If you select <Strong>&quot;Allow&quot;</Strong>, your IDFA may
              be shared with our advertising partners for personalized ads,
              attribution, and frequency capping.
            </>,
            <>
              If you select{" "}
              <Strong>&quot;Ask App Not to Track&quot;</Strong>, your IDFA is
              not collected. We use Apple&apos;s privacy-preserving{" "}
              <Strong>SKAdNetwork</Strong> framework for attribution, and ads
              you see will be non-personalized.
            </>,
          ]}
        />
        <p>
          You can change your decision at any time in{" "}
          <Strong>Settings → Privacy &amp; Security → Tracking</Strong>.
        </p>

        <SubHeading>8.3 Android Advertising ID</SubHeading>
        <p>
          On Android, your Google Advertising ID (GAID) may be used by our
          advertising partners. You can <Strong>reset</Strong> or{" "}
          <Strong>delete</Strong> your advertising ID at any time via{" "}
          <Strong>Settings → Google → Ads</Strong>. When deleted, ads will be
          non-personalized.
        </p>

        <SubHeading>8.4 Cookies</SubHeading>
        <p>
          The ScoreHunter mobile application{" "}
          <Strong>does not use browser cookies</Strong>. Tracking on mobile
          is governed by the platform-level mechanisms described above, not
          cookies.
        </p>
      </Section>

      <Divider />

      <Section title="9. International Data Transfers">
        <p>
          Your data may be processed outside of your home country (AWS
          Frankfurt — European Union, and the data centers of our advertising
          partners listed in section 3.4, which may be located outside the
          EU). These transfers comply with the security standards required by
          GDPR and KVKK.
        </p>
      </Section>

      <Divider />

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes take
          effect once published on this page, and the &quot;Last
          updated&quot; date at the top will be refreshed. Significant
          changes will be announced via in-app notification.
        </p>
      </Section>

      <Divider />

      <Section title="11. Third-Party Content and Trademarks">
        <p>
          ScoreHunter displays football match data, team names, league names,
          player names, and visual assets (such as team and league logos)
          sourced from our data provider, API-Football. These names, logos,
          and trademarks are the property of their respective owners —
          including football clubs, leagues, federations, and other rights
          holders.
        </p>
        <p>
          ScoreHunter is{" "}
          <Strong>
            not affiliated with, endorsed by, sponsored by, or in any way
            officially connected to
          </Strong>{" "}
          any sports league, federation, club, organization, or competition
          featured in the App. All third-party names, logos, and trademarks
          are used solely for identification and descriptive purposes
          (nominative fair use), to help users recognize the matches and
          teams they wish to follow.
        </p>
        <p>
          If you are a rights holder and believe that your trademark or
          copyrighted material is being used incorrectly within the App,
          please contact us at{" "}
          <Anchor href="mailto:support@scorehunter.app">
            support@scorehunter.app
          </Anchor>
          . We will review the request and respond promptly, removing or
          replacing the content where appropriate.
        </p>
      </Section>

      <Divider />

      <Section title="12. Contact">
        <p>
          For questions about this Privacy Policy or data processing
          requests:
        </p>
        <div className="space-y-1">
          <p>
            <Strong>Email</Strong>:{" "}
            <Anchor href="mailto:support@scorehunter.app">
              support@scorehunter.app
            </Anchor>
          </p>
          <p>
            <Strong>Developer</Strong>: iCat Studios
          </p>
          <p>
            <Strong>Website</Strong>:{" "}
            <Anchor href="https://scorehunter.app">
              https://scorehunter.app
            </Anchor>
          </p>
        </div>
        <p>
          Requests under GDPR or KVKK can be sent to the email address above
          or by mail. We will respond within <Strong>30 days</Strong>.
        </p>
      </Section>
    </>
  );
}
