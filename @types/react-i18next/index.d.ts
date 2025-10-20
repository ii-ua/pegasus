import 'react-i18next'
import { defaultNS } from '../../src/common/localization'
import type { resources } from '../../src/common/localization'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: (typeof resources)['en']
  }
}
