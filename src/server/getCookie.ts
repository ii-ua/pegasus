import { createServerFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'
export const getLangFn = createServerFn({ method: 'GET' }).handler(async () => {
  // На сервері — з request, на клієнті — з document.cookie
  const langCookie = getCookie('lang')
  return langCookie === 'en' || langCookie === 'uk' ? langCookie : 'uk'
})
