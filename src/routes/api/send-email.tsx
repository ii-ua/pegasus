import { createFileRoute } from '@tanstack/react-router'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY!)

const TO_MAP = {
  hr: 'hr@pegasusarms.com.ua',
  info: 'p.info@pegasusarms.com.ua',
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
