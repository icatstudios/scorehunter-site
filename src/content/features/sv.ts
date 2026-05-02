import type { FeaturesData } from "@/components/landing/FeaturesContentRenderer";

export const featuresSv: FeaturesData = {
  scoreHunt: {
    title: "Score Hunt",
    intro:
      "Score Hunt är spelets huvudläge. Varje spelvecka ber vi dig bygga en tipplista genom att fylla i matchresultaten.",
    bullets: [
      "Du har 10 huvudtips och 2 bonustips.",
      "Du har en 2X-joker att använda på en match.",
      "Du kan tjäna poäng på många sätt — från att träffa rätt utgångsriktning till exakt antal mål.",
      "Du tjänar extra bonuspoäng när du gör en perfekt tippning eller träffar en sällsynt tippning.",
      "Glöm inte att bekräfta din tipplista innan matcherna på den startar.",
    ],
  },
  miniGames: {
    title: "Minispel",
    intro:
      "I Minispel ber vi dig att tippa händelser som inträffar under matcherna i stället för matchresultaten. Mindre listor, stort skoj.",
    bullets: [
      "Varje minispel har sina egna regler och sitt eget koncept.",
      "Belöningspoängen varierar beroende på minispelets svårighetsgrad.",
      "Du har 1 bonustillägg för att öka chanserna att lyckas.",
      "Även om listan misslyckas får du en deltagarpoäng (25 poäng).",
    ],
  },
  leagues: {
    title: "Ligor",
    intro:
      "ScoreHunter har många topplistor, men om du vill skapa en separat rangordning med dina vänner, din familj eller en gemenskap du tillhör kommer du att älska Ligor-menyn.",
    bullets: [
      "Endast Pro-medlemmar kan skapa ligor; för att gå med i en liga krävs inte Pro.",
      "Du kan ställa in egna priser inom ligorna.",
      "Ligor du skapar kan vara öppna eller åtkomstbegränsade med en inbjudningskod.",
    ],
  },
  trophies: {
    title: "Troféer",
    intro:
      "På ScoreHunter får spelare som slutar i topp 3 i de tre huvudtopplistorna — veckovis och säsongsvis — egna troféer.",
    bullets: [
      "Egna troféer-design för varje spelläge.",
      "Troféer du vinner visas på din profil och är synliga för andra användare.",
      "Spelare som vinner troféer under en säsong kvalificerar sig till Champions League i nästa säsong.",
    ],
  },
  liveMatch: {
    title: "Live matchuppföljning",
    intro:
      "ScoreHunter har kompletterande funktioner som liveresultat, matchdetalj, tabeller, matchanalyser och många fler menyer.",
    bullets: [
      "Liveresultaten uppdateras direkt.",
      "Öppna en matchdetalj för att se händelserna som inträffar under matchen.",
      "Följ detaljerade matchanalyser för att stärka dina tips.",
      "Vi siktade på ett rent och intuitivt gränssnitt så att appen är trevlig att använda även utöver tippningen.",
    ],
  },
  pro: {
    title: "Pro-medlemskap",
    intro:
      "Pro-medlemskapet är utformat så att det inte påverkar konkurrensen eller den rättvisa användningen i spelet. Pro-medlemmar får följande fördelar:",
    bullets: [
      "Reklamfri appupplevelse.",
      "Reservtipplista.",
      "Möjlighet att redigera bekräftade tipplistor.",
      "Lås upp AI-fördelsanalys.",
      "Skapa ligor.",
      "Exklusiva avatar-paket.",
    ],
  },
  note: {
    title: "Ett meddelande från oss",
    paragraphs: [
      "Vi måste visa annonser för att finansiera server-, underhålls- och utvecklingskostnader för ScoreHunter, samt priserna som delas ut. Var trygg med att vi gör vårt bästa för att göra dem så lite störande som möjligt.",
      "Pro-medlemskapet hjälper oss att täcka dessa kostnader och ger samtidigt användare som vill ha en smidigare upplevelse den möjligheten. Genom att köpa Pro-medlemskap bidrar du direkt till utvecklingen och fortsättningen av ScoreHunter.",
      "Tack för din förståelse och ditt stöd kring annonser och Pro-medlemskap.",
    ],
  },
};
