export const COOKIE_CONSENT_KEY = 'iskelepro-consent'

export type CookieConsent = 'granted' | 'denied'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function readStored(): CookieConsent | null {
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    return stored === 'granted' || stored === 'denied' ? stored : null
  }
  catch {
    return null
  }
}

function applyGtag(value: CookieConsent) {
  window.gtag?.('consent', 'update', {
    analytics_storage: value,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

export function useCookieConsent() {
  const choice = useState<CookieConsent | null>('cookie-consent', () => null)
  const ready = useState('cookie-consent-ready', () => false)

  if (import.meta.client && !ready.value) {
    choice.value = readStored()
    ready.value = true
  }

  function setChoice(value: CookieConsent) {
    choice.value = value
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value)
    }
    catch {
      // ignore quota / private mode
    }
    applyGtag(value)
  }

  return {
    choice,
    visible: computed(() => ready.value && choice.value === null),
    accept: () => setChoice('granted'),
    reject: () => setChoice('denied'),
  }
}
