// Single source of truth for App Store and Google Play URLs. Flip a
// string here to "#" and the corresponding button switches back to the
// "Coming soon" state without any other code change (StoreButtons checks
// via isStoreLive below).
export const STORE_LINKS = {
  appStore:
    "https://apps.apple.com/us/app/score-hunter-prediction-game/id6759538804",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.icatstudios.scorehunter",
} as const;

export const isStoreLive = (url: string) => url !== "#" && url.length > 0;
