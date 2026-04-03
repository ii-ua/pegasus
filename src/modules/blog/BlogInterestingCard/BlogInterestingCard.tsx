import { BlogPostTranslation } from '@/common/interfaces/posts';
import { Paragraph } from '@/components/text'
import { useTranslation } from 'react-i18next';

export interface BlogCardProps {
    cover: string
    translations: BlogPostTranslation[],
    onClick: () => void
}
export default function BlogInterestingCard ({
    cover,
    translations, 
    onClick
}: BlogCardProps) {
    const { i18n } = useTranslation()
    const translation =
      translations?.find((t: any) => t.languages_code.includes(i18n.language)) ??
      translations?.[0]

    if (!translation) return null

    const { title, content_short: description } = translation

    return (
        <div className="flex flex-col gap-4 flex-1 p-4 desktop:p-6 border-[2px] border-[#FDFFFF] hover:border-[#FF6600] cursor-pointer transition-bg duration-300" onClick={onClick}>
            <img
                src={`https://admin.pegasusarms.com.ua/assets/${cover}`}
                crossOrigin="anonymous"
                decoding="async"
                alt={title}
                className="w-full h-[252px] tablet:h-[239px] desktop:h-[301px] object-cover"
            />
            <Paragraph
                variant="light"
                className="font-semibold text-[20px] tablet:text-[24px] desktop:text-[32px] "
                text={title}
            />
            <div
                className="prose prose-invert [&_p]:!m-0 text-[16px] tablet:text-[20px] desktop:text-[24px] max-w-none max-h-[88px] tablet:max-h-[178px] text-[#d9d9d9] line-clamp-4 tablet:line-clamp-6 desktop:line-clamp-5 text-[#d9d9d9"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    );
}
