import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="py-[82px]">
      <div className="max-w-[667px] uppercase text-white font-light text-[16px]">
        <img
          className="mb-[42px]"
          width={124}
          height={124}
          src="/logo.png"
          alt="Logo"
        />
        <p className="">{t('footer.copyright')}</p>
        <p>
          {t('footer.terms.text')}
          <a
            href="/terms"
            className="inline-block underline decoration-[#FF6600] decoration-1 underline-offset-1 bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent"
          >
            {t('footer.terms.links.terms')}
          </a>
          {t('footer.terms.and')}
          <a
            href="/privacy"
            className="inline-block underline decoration-[#FF6600] decoration-1 underline-offset-1 bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent"
          >
            {t('footer.terms.links.privacy')}
          </a>
        </p>
      </div>
    </footer>
  )
}
