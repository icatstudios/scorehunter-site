// Single source of truth for App Store and Google Play URLs.
// Until the apps go live these stay as "#" so buttons render but don't
// navigate; on launch day flip these two strings and redeploy.
export const STORE_LINKS = {
  appStore: "#",
  googlePlay: "#",
} as const;

export const isStoreLive = (url: string) => url !== "#" && url.length > 0;
