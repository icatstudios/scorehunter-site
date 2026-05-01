// Categorised FAQ data. Other locales fall back to "en" until translations
// are written, mirroring the dictionary placeholder strategy.

export interface FAQCategory {
  title: string;
  items: { q: string; a: string }[];
}

export const FAQ_CONTENT: Record<"en" | "tr", FAQCategory[]> = {
  en: [
    {
      title: "Getting started",
      items: [
        {
          q: "What is ScoreHunter?",
          a: "ScoreHunter is a skill-based football prediction game from iCat Studios. You pick the week's matches, predict the scores, and compete with players around the world on weekly and seasonal leaderboards.",
        },
        {
          q: "Is ScoreHunter free?",
          a: "Yes. Downloading and playing ScoreHunter is fully free. There's an optional Pro membership for extras like reduced ads and exclusive trophies, but nothing about the core game is locked behind it.",
        },
        {
          q: "How do I sign up?",
          a: "Sign in with Apple or Google in seconds — no passwords, no email verification. We never see your password and we never store one.",
        },
        {
          q: "Which devices are supported?",
          a: "iPhone (iOS 14 and later) and Android (8.0 Oreo and later). One account works seamlessly across both platforms.",
        },
      ],
    },
    {
      title: "Gameplay",
      items: [
        {
          q: "How does scoring work?",
          a: "You earn points for correct outcomes (1, X, 2), exact scores, and goal scorers. Mini games add bonus picks. Every match is worth the same — no odds, no multipliers, no luck-based payouts.",
        },
        {
          q: "What's a Score Hunt?",
          a: "Score Hunt is the main weekly mode. Each week, a curated set of fixtures unlocks for predictions. Lock in your calls before kickoff and watch the live points roll in as the matches play.",
        },
        {
          q: "Can I change my predictions?",
          a: "Yes — you can edit your predictions any time before kickoff. Once a match starts, your prediction for that match is locked.",
        },
        {
          q: "What are mini games?",
          a: "Mini games are short-form prediction modes that run between full Score Hunt rounds. Quick fixtures, themed weeks, same skill principle — they keep things moving on quiet match days.",
        },
        {
          q: "Is this gambling?",
          a: "No. ScoreHunter contains no betting, no odds, no money in or out, no lotteries. All matches are equal value and any prizes are promotional only — never cash.",
        },
      ],
    },
    {
      title: "Leagues & friends",
      items: [
        {
          q: "How do I join a league?",
          a: "Open the Leagues tab and pick a public league, or join a private one with an invite link from a friend.",
        },
        {
          q: "How do private leagues work?",
          a: "Create a league, give it a name, and share the invite link. Anyone with the link can join, and you all compete on a private leaderboard alongside the public ones.",
        },
        {
          q: "How many friends can I invite?",
          a: "There's no hard cap for casual play. Most private leagues stay between 5 and 50 members for the best banter.",
        },
      ],
    },
    {
      title: "Pro membership",
      items: [
        {
          q: "What does Pro include?",
          a: "Reduced ads, Pro-only trophies, an exclusive Pro badge on leaderboards, and priority support. Pro never affects competition results — all matches stay equal value for every player.",
        },
        {
          q: "How do I subscribe?",
          a: "Open the app, head to your profile, and tap Pro. Payment goes through Apple App Store on iOS or Google Play Billing on Android.",
        },
        {
          q: "How do refunds work?",
          a: "Refund requests go through Apple or Google, not us. Apple: reportaproblem.apple.com. Google Play: in the Play Store under Order history. We can help you find the right place but the refund itself is handled by the platform.",
        },
      ],
    },
    {
      title: "Account & privacy",
      items: [
        {
          q: "How do I delete my account?",
          a: "From the app: Profile → Account Settings → Delete Account. From the web: scorehunter.app/delete-account. Either way, your data is permanently deleted within 30 days, including backups.",
        },
        {
          q: "What data does ScoreHunter store about me?",
          a: "Your username, country, favourite team, predictions, and trophies — basically what you'd expect for a leaderboard game. Email and real name stay private. Full breakdown is in our Privacy Policy.",
        },
        {
          q: "I forgot my password.",
          a: "There is no password. Sign-in goes through Apple or Google — recovery happens at the Apple/Google level, not on ScoreHunter's side.",
        },
      ],
    },
    {
      title: "Technical",
      items: [
        {
          q: "The app crashed / a feature isn't working.",
          a: "Sorry about that. Send us a quick note via the Support page with your device, OS version, and what you were doing. We aim to reply within 2 business days.",
        },
        {
          q: "Match data looks wrong / a goal is missing.",
          a: "Match data comes from a third-party provider. There can be a small delay before live events appear. If something looks off after a few minutes, let us know via Support.",
        },
      ],
    },
  ],
  tr: [
    {
      title: "Başlangıç",
      items: [
        {
          q: "ScoreHunter nedir?",
          a: "ScoreHunter, iCat Studios'un beceri tabanlı futbol tahmin oyunudur. Haftanın maçlarını seçer, skorları tahmin eder ve haftalık ile sezonluk sıralamalarda dünyanın dört bir yanından oyuncularla yarışırsın.",
        },
        {
          q: "ScoreHunter ücretsiz mi?",
          a: "Evet. ScoreHunter'ı indirmek ve oynamak tamamen ücretsiz. Daha az reklam ve özel kupalar gibi ekstralar için opsiyonel bir Pro üyelik var ama ana oyunun hiçbir parçası ona kilitli değil.",
        },
        {
          q: "Nasıl kayıt olurum?",
          a: "Apple veya Google ile saniyeler içinde giriş yap — şifre yok, e-posta doğrulama yok. Şifreni hiç görmeyiz ve hiç saklamayız.",
        },
        {
          q: "Hangi cihazlar destekleniyor?",
          a: "iPhone (iOS 14 ve üzeri) ile Android (8.0 Oreo ve üzeri). Tek hesap her iki platformda da sorunsuz çalışır.",
        },
      ],
    },
    {
      title: "Oyun",
      items: [
        {
          q: "Puanlama nasıl işliyor?",
          a: "Doğru sonuç (1, X, 2), kesin skor ve gol atan tahminleri için puan kazanırsın. Mini oyunlar bonus tahminler ekler. Her maç eşit değerde — oran yok, çarpan yok, şansa dayalı ödeme yok.",
        },
        {
          q: "Score Hunt nedir?",
          a: "Score Hunt ana haftalık moddur. Her hafta seçilmiş bir maç seti tahmine açılır. Maç başlamadan tahminlerini kilitle ve maçlar oynanırken canlı puanlarının gelişini izle.",
        },
        {
          q: "Tahminlerimi değiştirebilir miyim?",
          a: "Evet — maç başlamadan önce tahminlerini istediğin zaman düzenleyebilirsin. Maç başladığı anda o maça ait tahminin kilitlenir.",
        },
        {
          q: "Mini oyunlar nedir?",
          a: "Mini oyunlar, tam Score Hunt turlarının arasında çalışan kısa formatlı tahmin modlarıdır. Hızlı maçlar, tematik haftalar, aynı beceri prensibi — sessiz maç günlerinde hareketi sürdürür.",
        },
        {
          q: "Bu kumar mı?",
          a: "Hayır. ScoreHunter'da bahis yok, oran yok, para girişi/çıkışı yok, çekiliş yok. Tüm maçlar eşit değerde ve verilen ödüller yalnızca promosyon amaçlı — asla nakit değil.",
        },
      ],
    },
    {
      title: "Ligler ve arkadaşlar",
      items: [
        {
          q: "Bir lige nasıl katılırım?",
          a: "Ligler sekmesini aç ve halka açık bir lig seç ya da bir arkadaşından gelen davet bağlantısıyla özel bir lige katıl.",
        },
        {
          q: "Özel ligler nasıl çalışıyor?",
          a: "Bir lig oluştur, isim ver ve davet bağlantısını paylaş. Bağlantısı olan herkes katılabilir ve hep birlikte halka açık tabloların yanında özel bir sıralamada yarışırsınız.",
        },
        {
          q: "Kaç arkadaş davet edebilirim?",
          a: "Sıradan oyun için sıkı bir üst sınır yok. Çoğu özel lig en iyi atışmalar için 5 ile 50 üye arasında kalır.",
        },
      ],
    },
    {
      title: "Pro üyelik",
      items: [
        {
          q: "Pro neler içerir?",
          a: "Daha az reklam, Pro'ya özel kupalar, sıralamalarda özel Pro rozeti ve öncelikli destek. Pro asla yarışmayı etkilemez — tüm maçlar her oyuncu için eşit değerde kalır.",
        },
        {
          q: "Nasıl abone olurum?",
          a: "Uygulamayı aç, profiline git ve Pro'ya dokun. Ödeme iOS'ta Apple App Store, Android'de Google Play Billing üzerinden yapılır.",
        },
        {
          q: "İade nasıl yapılır?",
          a: "İade talepleri biz değil, Apple veya Google üzerinden yürür. Apple: reportaproblem.apple.com. Google Play: Play Store'da Sipariş geçmişi altında. Doğru yeri bulmana yardımcı olabiliriz, ama iadeyi platform yapar.",
        },
      ],
    },
    {
      title: "Hesap ve gizlilik",
      items: [
        {
          q: "Hesabımı nasıl silerim?",
          a: "Uygulamadan: Profil → Hesap Ayarları → Hesabı Sil. Webden: scorehunter.app/delete-account. Her iki yolda da verilerin yedeklerden de olmak üzere 30 gün içinde kalıcı olarak silinir.",
        },
        {
          q: "ScoreHunter benim hakkımda hangi verileri saklıyor?",
          a: "Kullanıcı adın, ülken, favori takımın, tahminlerin ve kupaların — bir sıralama oyunundan beklenen şeyler. E-posta ve gerçek isim gizli kalır. Tam döküm Gizlilik Politikası'nda.",
        },
        {
          q: "Şifremi unuttum.",
          a: "Şifre yok. Giriş Apple veya Google üzerinden olur — kurtarma ScoreHunter'da değil, Apple/Google tarafında olur.",
        },
      ],
    },
    {
      title: "Teknik",
      items: [
        {
          q: "Uygulama çöktü / bir özellik çalışmıyor.",
          a: "Üzgünüz. Destek sayfasından cihazını, OS sürümünü ve ne yaptığını kısaca yaz. Genellikle 2 iş günü içinde dönüyoruz.",
        },
        {
          q: "Maç verisi hatalı / bir gol eksik.",
          a: "Maç verileri üçüncü taraf bir sağlayıcıdan geliyor. Canlı olaylar görünene kadar küçük bir gecikme olabilir. Birkaç dakika sonra hâlâ tuhaf görünüyorsa Destek üzerinden bize bildir.",
        },
      ],
    },
  ],
};
