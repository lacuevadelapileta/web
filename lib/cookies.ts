export const COOKIE_CONSENT_KEY = "cookie-consent"
export const COOKIE_REOPEN_EVENT = "cookie-banner:reopen"

export type CookieConsent = "accepted" | "rejected"

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  const v = window.localStorage.getItem(COOKIE_CONSENT_KEY)
  return v === "accepted" || v === "rejected" ? v : null
}

export function setCookieConsent(value: CookieConsent): void {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
}

export function reopenCookieBanner(): void {
  window.localStorage.removeItem(COOKIE_CONSENT_KEY)
  window.dispatchEvent(new Event(COOKIE_REOPEN_EVENT))
}
