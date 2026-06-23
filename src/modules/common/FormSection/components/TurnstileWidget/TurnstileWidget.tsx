import { useEffect, useRef } from 'react'

const TURNSTILE_SCRIPT =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
const TEST_SITE_KEY = '1x00000000000000000000AA'

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      action: string
      theme: 'dark'
      language: string
      callback: (token: string) => void
      'error-callback': () => void
      'expired-callback': () => void
      'response-field': boolean
    },
  ) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

interface TurnstileWidgetProps {
  action: 'contact_form' | 'career_form'
  language: string
  onSuccess: (token: string) => void
  onError: () => void
}

export const TurnstileWidget = ({
  action,
  language,
  onSuccess,
  onError,
}: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sitekey =
      import.meta.env.VITE_TURNSTILE_SITE_KEY ||
      (import.meta.env.DEV ? TEST_SITE_KEY : '')

    if (!sitekey) {
      onError()
      return
    }

    let cancelled = false
    let widgetId: string | undefined

    const renderWidget = () => {
      if (cancelled || widgetId || !containerRef.current || !window.turnstile) {
        return
      }

      widgetId = window.turnstile.render(containerRef.current, {
        sitekey,
        action,
        theme: 'dark',
        language,
        callback: onSuccess,
        'error-callback': onError,
        'expired-callback': onError,
        'response-field': false,
      })
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TURNSTILE_SCRIPT}"]`,
    )
    const script = existingScript ?? document.createElement('script')

    if (!existingScript) {
      script.src = TURNSTILE_SCRIPT
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    script.addEventListener('load', renderWidget)
    script.addEventListener('error', onError)
    renderWidget()

    return () => {
      cancelled = true
      script.removeEventListener('load', renderWidget)
      script.removeEventListener('error', onError)
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId)
      }
    }
  }, [action, language, onError, onSuccess])

  return <div ref={containerRef} />
}
