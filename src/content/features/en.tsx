import {
  Section,
  SubHeading,
  List,
  Strong,
  Divider,
} from "@/components/PolicyComponents";

export function FeaturesContentEn() {
  return (
    <>
      <Section title="Score Hunt — the weekly hunt">
        <p>
          Score Hunt is the heart of the app. Each week we line up the most
          followed matches and unlock them for predictions a few days before
          kickoff. You pick a slate, lock in your calls, and ride the live
          points as the matches play.
        </p>
        <List
          items={[
            <>
              A curated <Strong>weekly fixture set</Strong> across the
              biggest leagues and competitions.
            </>,
            <>
              Predict the <Strong>outcome (1X2)</Strong>, the{" "}
              <Strong>exact score</Strong>, and the{" "}
              <Strong>goal scorers</Strong>.
            </>,
            <>
              Lock in before kickoff — once a match starts, your prediction
              is sealed.
            </>,
            <>
              Live point updates as goals are scored, so you can follow the
              hunt in real time.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Mini Games — quick rounds between match days">
        <p>
          Mini Games are short-form prediction modes that run between
          full Score Hunt rounds. They keep things moving, reward quick
          thinking, and add variety without changing the core skill loop.
        </p>
        <List
          items={[
            <>
              <Strong>Rapid predictions</Strong> on a handful of fixtures —
              perfect for a coffee break.
            </>,
            <>
              <Strong>Themed rounds</Strong> like derbies, top-of-the-table
              clashes, or relegation battles.
            </>,
            <>
              Same skill principle as Score Hunt — no luck multipliers, no
              odds, every match equal.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Leagues — public boards or private friends-only">
        <p>
          Compete with the world or just with the people you trash-talk.
          ScoreHunter supports both global leaderboards and private leagues
          you create and invite friends to.
        </p>
        <SubHeading>Public leaderboards</SubHeading>
        <List
          items={[
            "Global weekly and seasonal rankings.",
            "Country-level leaderboards so you can see who's hot in your region.",
            "Filtered views for top 10, top 100, friends only.",
          ]}
        />
        <SubHeading>Private leagues</SubHeading>
        <List
          items={[
            "Create a league, share an invite link, and you're up and running.",
            "Custom league names and a small, focused leaderboard for friends, family, or colleagues.",
            "League-specific weekly winners and end-of-season honours.",
          ]}
        />
      </Section>

      <Divider />

      <Section title="Trophies & Achievements">
        <p>
          Every prediction counts toward something — even when you don&apos;t
          top the weekly board. Trophies and achievements give you long-term
          goals across many different play styles.
        </p>
        <List
          items={[
            <>
              <Strong>Weekly trophies</Strong>: top the leaderboard, nail a
              perfect week, beat your previous score.
            </>,
            <>
              <Strong>Seasonal honours</Strong>: keep a streak, finish in
              the top X%, win league titles.
            </>,
            <>
              <Strong>Lifetime achievements</Strong>: hundreds of exact
              scores, derbies predicted, mini games completed.
            </>,
            <>
              Some trophies are <Strong>Pro-only</Strong> — exclusive to Pro
              members who want the deep collector experience.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Pro Membership — optional, never required">
        <p>
          Pro is for players who want a smoother, deeper experience. The
          core game stays free for everyone — Pro just adds polish and a
          collector layer.
        </p>
        <List
          items={[
            <>
              <Strong>Reduced ads</Strong> across the app.
            </>,
            <>
              <Strong>Pro-only trophies</Strong> and an exclusive Pro badge
              shown next to your username on leaderboards.
            </>,
            <>
              <Strong>Priority support</Strong> — your messages reach the
              top of our inbox.
            </>,
            <>
              <Strong>No effect on competition</Strong>: Pro members get
              perks, never an unfair advantage. All matches stay equal
              value.
            </>,
          ]}
        />
      </Section>

      <Divider />

      <Section title="Live Match Tracking">
        <p>
          ScoreHunter pulls real-time match data so you don&apos;t have to
          jump apps. As the matches play, your points update live and you
          can watch your rank climb (or wobble) minute by minute.
        </p>
        <List
          items={[
            "Live scoreline updates with goal scorer info.",
            "Per-match breakdown: outcome points, exact-score points, scorer points.",
            "Live leaderboard movement so you know where you stand right now.",
          ]}
        />
      </Section>
    </>
  );
}
