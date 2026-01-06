import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'
const { VITE_RESEND_API_KEY } = import.meta.env

const resend = new Resend(VITE_RESEND_API_KEY!)

const TO_MAP = {
  hr: 'softlab@ii-ua.com',
  info: 'softlab@ii-ua.com',
} as const

export const sendFormEmail = createServerFn({ method: 'POST' })
  .inputValidator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error('Expected FormData')
    }

    const file = data.get('summary')

    return {
      target: data.get('target') as 'hr' | 'info',
      name: data.get('name')?.toString() ?? '',
      lastName: data.get('lastName')?.toString(),
      email: data.get('email')?.toString() ?? '',
      tel: data.get('tel')?.toString(),
      vacancy: data.get('vacancy')?.toString(),
      message: data.get('message')?.toString() ?? '',
      file: file instanceof File ? file : null,
    }
  })
  .handler(async ({ data }) => {
    if (data.target == 'hr') {
      const attachments = []

      if (data.file) {
        const buffer = Buffer.from(await data.file.arrayBuffer())

        attachments.push({
          filename: data.file.name,
          content: buffer,
        })
      }
      // Process form data
      resend.emails.send({
        to: TO_MAP[data.target],
        from: 'Форма з сайту Pegasus Arms — HR <no-reply@ii-softlab.pp.ua>',
        subject: `[Pegasus Arms] Нова заявка з форми сайту від ${data.name} ${data.lastName ?? ''}`,
        text: `
              
👤 Кандидат:
Імʼя: ${data.name} ${data.lastName ?? ''}
Email: ${data.email}
Телефон: ${data.tel ?? '—'}

💼 Вакансія:
${data.vacancy ?? 'Не вказано'}

📝 Повідомлення:
${data.message}

—
Цей лист надіслано з форми сайту.
            `,
        attachments,
      })
    } else {
      resend.emails.send({
        to: TO_MAP[data.target],
        from: 'Форма з сайту Pegasus Arms <no-reply@ii-softlab.pp.ua>',
        subject: `[Pegasus Arms] Запит з сайту від ${data.name} ${data.lastName ?? ''}`,
        text: `
              Нове повідомлення з сайту Pegasus Arms

👤 Контакт:
Імʼя: ${data.name} ${data.lastName ?? ''}
Email: ${data.email}
Телефон: ${data.tel ?? '—'}

📝 Повідомлення:
${data.message}

—
Цей лист надіслано з контактної форми сайту.
            `,
      })
    }

    return { success: true }
  })
