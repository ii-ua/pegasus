import sanitizeHtml from 'sanitize-html'

export const sanitizeContent = (html: string) =>
  sanitizeHtml(html, {
    allowedTags: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'br'],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
    },
    transformTags: {
      p: () => ({
        tagName: 'p',
        attribs: {},
      }),
      span: () => ({
        tagName: 'span',
        attribs: {},
      }),
    },
  })
