import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ScoreHunter",
  description:
    "Learn how ScoreHunter collects, uses, and protects your personal data.",
};

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen px-4 py-12 sm:py-16">
      <FloatingParticles />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Back to home */}
        <Link
          href="/"
          className="animate-fade-in mb-8 text-text-muted hover:text-primary transition-colors text-sm flex items-center gap-1 w-fit"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Brand */}
        <div className="animate-slide-up mb-2">
          <h2 className="text-xl font-bold tracking-tight">
            <span className="animate-shimmer">Score</span>
            <span className="text-text-primary">Hunter</span>
          </h2>
        </div>

        {/* Title */}
        <div className="animate-slide-up-delay-1 mb-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary">
            Privacy Policy
          </h1>
        </div>

        {/* Meta */}
        <div className="animate-slide-up-delay-2 mb-10 text-text-muted text-sm space-y-1">
          <p>
            <span className="text-text-secondary">Last updated:</span> April 9,
            2026
          </p>
          <p>
            <span className="text-text-secondary">Application:</span>{" "}
            ScoreHunter
          </p>
          <p>
            <span className="text-text-secondary">Developer:</span> iCat Studios
          </p>
        </div>

        {/* Content */}
        <article className="animate-slide-up-delay-3 glass-card p-6 sm:p-10 space-y-8 text-text-secondary text-[15px] leading-relaxed">
          <p>
            At iCat Studios (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
            we respect the privacy of users (&quot;you&quot;, &quot;your&quot;)
            of the ScoreHunter mobile application (&quot;the App&quot;). This
            Privacy Policy explains what personal data we collect, how we use
            it, with whom we share it, and your rights when using our App.
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
                  <Strong>Email address</Strong> (Apple provides a relay email
                  if you select &quot;Hide My Email&quot;)
                </>,
                <>
                  <Strong>First name and last name</Strong> (Apple provides this
                  only on first sign-in; Google provides it on every sign-in)
                </>,
                <>
                  <Strong>Provider User ID</Strong> — a unique identifier used
                  to recognize your account
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

            <SubHeading>1.4 Device Information</SubHeading>
            <List
              items={[
                <>
                  <Strong>Device ID</Strong> (for anonymous session management)
                </>,
                <>
                  <Strong>Operating system</Strong> (iOS/Android version)
                </>,
                <>
                  <Strong>App version</Strong>
                </>,
              ]}
            />

            <SubHeading>1.5 Automatically Collected Data</SubHeading>
            <List
              items={[
                <>
                  <Strong>IP address</Strong> (for security and regional
                  content)
                </>,
                <>
                  <Strong>Error and crash reports</Strong> (for app stability)
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
                  <Strong>Personalization</Strong>: To display your favorite
                  team and country in leaderboards
                </>,
                <>
                  <Strong>Communication</Strong>: To send important updates,
                  announcements, and prize notifications
                </>,
                <>
                  <Strong>Prize delivery</Strong>: To send physical or digital
                  prizes to contest winners (requires name and email)
                </>,
                <>
                  <Strong>Account security</Strong>: To prevent fraudulent
                  accounts and verify user identity
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
                does not sell, rent, or share your data with third parties for
                commercial purposes
              </Strong>
              .
            </p>
            <p>
              We only share your data in the following limited cases:
            </p>

            <SubHeading>3.1 Service Providers</SubHeading>
            <List
              items={[
                <>
                  <Strong>Amazon Web Services (AWS)</Strong> — Server and
                  database hosting (Frankfurt, Germany)
                </>,
                <>
                  <Strong>API-Football</Strong> — Third-party service for match
                  data (no personal data is shared)
                </>,
                <>
                  <Strong>Apple</Strong> — Apple Sign-In authentication
                </>,
                <>
                  <Strong>Google</Strong> — Google Sign-In authentication
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
              <Strong>visible to other users</Strong> in leaderboards and
              profile pages:
            </p>
            <List
              items={[
                "Your username (display name)",
                "Your country flag",
                "Your favorite team",
                "Trophies you've earned",
                "Your prediction scores and statistics",
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
              data centers. We use Amazon RDS PostgreSQL as our database
              service.
            </p>

            <SubHeading>4.2 Retention Period</SubHeading>
            <List
              items={[
                <>
                  <Strong>Active accounts</Strong>: Your data is retained as
                  long as your account remains active
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
                  statistics may be retained after deletion (contains no
                  personal information)
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
              ]}
            />

            <SubHeading>How to Delete Your Account</SubHeading>
            <p>You can delete your account in three ways:</p>
            <ol className="list-decimal list-outside pl-5 space-y-2 marker:text-primary">
              <li>
                <Strong>In-app</Strong>: Profile page → Account Settings →
                Delete Account
              </li>
              <li>
                <Strong>Web</Strong>:{" "}
                <Anchor href="/delete-account">
                  https://scorehunter.app/delete-account
                </Anchor>
              </li>
              <li>
                <Strong>Email</Strong>: Send a request to the contact address
                below
              </li>
            </ol>
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
                  <Strong>Access control</Strong>: Database access is limited to
                  authorized system accounts only
                </>,
                <>
                  <Strong>Regular security updates</Strong>: Our systems are
                  kept up to date
                </>,
              ]}
            />
            <p>
              However, please note that no method of transmission over the
              internet is 100% secure.
            </p>
          </Section>

          <Divider />

          <Section title="8. Cookies and Tracking Technologies">
            <p>
              The ScoreHunter mobile application{" "}
              <Strong>does not use cookies</Strong>. No third-party analytics or
              advertising SDKs are integrated for user tracking.
            </p>
          </Section>

          <Divider />

          <Section title="9. International Data Transfers">
            <p>
              Your data may be processed outside of your home country (AWS
              Frankfurt — European Union). These transfers comply with the
              security standards required by GDPR and KVKK.
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

          <Section title="11. Contact">
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
        </article>

        {/* Footer */}
        <footer className="text-center mt-12 pb-6 text-text-muted text-xs">
          © 2026 iCat Studios. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      {children}
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-text-primary mt-6">{children}</h3>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-2 marker:text-primary">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-text-primary font-semibold">{children}</strong>;
}

function Anchor({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-primary hover:underline break-words"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function Divider() {
  return <hr className="border-white/10" />;
}
