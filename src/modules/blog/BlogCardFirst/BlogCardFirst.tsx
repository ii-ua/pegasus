import { Paragraph } from '@/components/text'
import { Link, useRouterState } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { localeFromPathname, localizePath } from '@/common/localization/localePath'

export interface BlogCardFirstProps {
  cover: string
  title: string
  description: string
  date: string
  slug: string
}
export const BlogCardFirst = ({
  cover,
  title,
  description,
  date,
  slug,
}: BlogCardFirstProps) => {
  const { t } = useTranslation()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const search = useRouterState({ select: (s) => s.location.search })
  const locale = localeFromPathname(pathname)
  const page =
    typeof search.page === 'number' && search.page > 1 ? search.page : 1
  const blogPostPath = localizePath('/blog/$slug', locale)

  return (
    <div className="flex flex-col gap-6">
      <Paragraph variant="grey" className="text-[#939393]" text={date} />
      <img
        src={cover}
        crossOrigin="anonymous"
        decoding="async"
        alt={title}
        className="w-full h-auto"
      />
      <Paragraph
        variant="light"
        className="font-semibold text-[20px] tablet:text-[24px] desktop:text-[32px] "
        text={title}
      />
      <div
        className="prose prose-invert [&_p]:!m-0 text-[16px] tablet:text-[20px] desktop:text-[24px] max-w-none text-[#d9d9d9] flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link
        to={blogPostPath}
        params={{ slug }}
        state={(prev) => ({ ...prev, blogPage: page ?? 1 })}
        className="decoration-[#FF6600] decoration-1 underline-offset-1 bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent mt-2 inline-flex items-center gap-2  font-normal text-[16px] tablet:text-[20px] desktop:text-[24px] 
            hover:opacity-80 transition"
      >
        {t('blog.more')}
        <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
