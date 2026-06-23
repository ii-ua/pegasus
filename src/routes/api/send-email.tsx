import { createFileRoute } from '@tanstack/react-router'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY!)
const TEST_TURNSTILE_SECRET = '1x0000000000000000000000000000000AA'

const TO_MAP = {
  hr: 'softlab@ii-ua.com',
  info: 'softlab@ii-ua.com',
} as const

const ALLOWED_ORIGINS = new Set([
  'https://pegasusarms.com.ua',
  'https://www.pegasusarms.com.ua',
  'https://martyntech.com',
  'https://www.martyntech.com',
])

function corsHeaders(origin: string | null) {
  const isAllowed = origin ? ALLOWED_ORIGINS.has(origin) : false

  return {
    ...(isAllowed ? { 'Access-Control-Allow-Origin': origin } : {}),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}

type TurnstileValidation = {
  success: boolean
  action?: string
  'error-codes'?: string[]
}

async function validateTurnstile(
  token: string,
  remoteip: string | null,
): Promise<TurnstileValidation> {
  const secret =
    import.meta.env.TURNSTILE_SECRET_KEY ||
    (import.meta.env.DEV ? TEST_TURNSTILE_SECRET : '')

  if (!secret) {
    return { success: false, 'error-codes': ['missing-input-secret'] }
  }

  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip,
      }),
    },
  )

  return response.json()
}

export const Route = createFileRoute('/api/send-email')({
  server: {
    handlers: {
      OPTIONS: async ({ request }) => {
        const origin = request.headers.get('origin')

        if (origin && !ALLOWED_ORIGINS.has(origin)) {
          return new Response(null, {
            status: 403,
            headers: corsHeaders(origin),
          })
        }

        return new Response(null, { status: 204, headers: corsHeaders(origin) })
      },
      POST: async ({ request }) => {
        try {
          const origin = request.headers.get('origin')

          if (origin && !ALLOWED_ORIGINS.has(origin)) {
            return new Response(
              JSON.stringify({ error: 'Origin not allowed' }),
              {
                status: 403,
                headers: {
                  'Content-Type': 'application/json',
                  ...corsHeaders(origin),
                },
              },
            )
          }

          const data = await request.formData()

          console.log('Form data received:', Array.from(data.entries()))

          const target = data.get('target') as 'hr' | 'info'
          if (!target || !TO_MAP[target]) {
            return new Response(JSON.stringify({ error: 'Invalid target' }), {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders(origin),
              },
            })
          }

          const turnstileToken = data.get('cf-turnstile-response')?.toString()
          const expectedAction =
            target === 'hr' ? 'career_form' : 'contact_form'

          if (!turnstileToken) {
            return new Response(
              JSON.stringify({ error: 'CAPTCHA token is required' }),
              {
                status: 400,
                headers: {
                  'Content-Type': 'application/json',
                  ...corsHeaders(origin),
                },
              },
            )
          }

          const turnstile = await validateTurnstile(
            turnstileToken,
            request.headers.get('CF-Connecting-IP') ??
              request.headers.get('X-Forwarded-For')?.split(',')[0].trim() ??
              null,
          )

          const hasInvalidAction =
            turnstile.action !== expectedAction &&
            !(import.meta.env.DEV && turnstile.action === undefined)

          if (!turnstile.success || hasInvalidAction) {
            console.warn(
              'Turnstile validation failed:',
              turnstile['error-codes'],
            )
            return new Response(
              JSON.stringify({ error: 'CAPTCHA validation failed' }),
              {
                status: 403,
                headers: {
                  'Content-Type': 'application/json',
                  ...corsHeaders(origin),
                },
              },
            )
          }

          const name = data.get('name')?.toString() ?? ''
          const lastName = data.get('lastName')?.toString() ?? ''
          const email = data.get('email')?.toString() ?? ''
          const tel = data.get('tel')?.toString()
          const vacancy = data.get('vacancy')?.toString()
          const message = data.get('message')?.toString() ?? ''
          const file = data.get('summary') as File | null

          const attachments: any[] = []

          if (file && target === 'hr') {
            const buffer = Buffer.from(await file.arrayBuffer())
            attachments.push({
              filename: file.name,
              content: buffer,
            })
          }

          await resend.emails.send({
            to: TO_MAP[target],
            from:
              target === 'hr'
                ? 'Форма з сайту Pegasus Arms — HR <no-reply@ii-softlab.pp.ua>'
                : 'Форма з сайту Pegasus Arms <no-reply@ii-softlab.pp.ua>',
            subject: `[Pegasus Arms] ${target === 'hr' ? 'Нова заявка' : 'Запит'} від ${name} ${lastName}`,
            text:
              target === 'hr'
                ? `
👤 Кандидат:
Імʼя: ${name} ${lastName}
Email: ${email}
Телефон: ${tel ?? '—'}

💼 Вакансія:
${vacancy ?? 'Не вказано'}

📝 Повідомлення:
${message}

${file ? `Прикріплено файл: ${file.name}` : ''}
—
Цей лист надіслано з форми сайту.
              `
                : `
Нове повідомлення з сайту Pegasus Arms

👤 Контакт:
Імʼя: ${name} ${lastName}
Email: ${email}
Телефон: ${tel ?? '—'}

📝 Повідомлення:
${message}

—
Цей лист надіслано з контактної форми сайту.
              `,
            attachments,
          })

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders(origin),
            },
          })
        } catch (error) {
          console.error('Email send error:', error)
          const origin = request.headers.get('origin')
          return new Response(
            JSON.stringify({ error: 'Failed to send email' }),
            {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders(origin),
              },
            },
          )
        }
      },
    },
  },
})
