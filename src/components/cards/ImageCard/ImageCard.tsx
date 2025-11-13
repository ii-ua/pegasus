import arrowDownRight from '@/assets/icons/arrow-down-right.svg'
import arrowDownRightActive from '@/assets/icons/arrow-down-right-active.svg'
import { motion } from 'motion/react'

interface ImageCardProps {
  image1x: string
  image2x: string
  title: string
  description: string
  href: string
}

export const ImageCard = ({
  image1x,
  image2x,
  title,
  description,
  href,
}: ImageCardProps) => {
  return (
    <motion.a
      href={href}
      aria-label={title}
      className="
        group/ImageCard block cursor-pointer
        border-[2px] border-[#FDFFFF]
        p-[16px]
         tablet:max-w-[285px] desktop:max-w-[321px] tablet:h-[385px] desktop:h-[410px]
        focus:outline-none
        focus:ring-2 focus:ring-[#FF6600]
      "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <article className="flex h-full flex-col justify-between">
        {/* картинка фіксованої висоти — без змін при hover */}
        <div className="relative w-full max-h-[240px] overflow-hidden">
          <img
            src={image1x}
            srcSet={`${image1x} 1x, ${image2x} 2x`}
            sizes="(min-width: 768px) 321px, 100vw"
            alt={title}
            className=" w-full"
            loading="lazy"
          />
        </div>

        {/* низ: тайтл + опис + стрілки */}
        <div className="desktop:pt-[17px] flex gap-3 items-end">
          <div className="flex flex-col gap-3">
            <h3
              className="
                text-[#FDFFFF] text-left font-[Univermag] font-normal text-[24px] tablet:text-[32px] desktop:text-[36px] uppercase leading-tight
                transition-all duration-300 ease-out
                group-hover/ImageCard:text-[24px] group-focus/ImageCard:text-[24px]
              "
            >
              {title}
            </h3>

            <p
              className="
                font-[400] text-[#FDFFFF] text-[16px] uppercase
                max-h-0 overflow-hidden opacity-0 translate-y-2
                transition-all duration-300 ease-out
                group-hover/ImageCard:max-h-24 group-hover/ImageCard:opacity-100 group-hover/ImageCard:translate-y-0
                group-focus/ImageCard:max-h-24 group-focus/ImageCard:opacity-100 group-focus/ImageCard:translate-y-0
              "
            >
              {description}
            </p>
          </div>

          {/* базова стрілка */}
          <img
            src={arrowDownRight}
            width={32}
            height={32}
            className="
              block
              group-hover/ImageCard:hidden
              group-focus/ImageCard:hidden
              max-w-[32px] max-h-[32px]
            "
            alt=""
          />

          {/* активна стрілка з легким зміщенням на hover */}
          <motion.img
            src={arrowDownRightActive}
            width={32}
            height={32}
            className="
              hidden
              group-hover/ImageCard:block
              group-focus/ImageCard:block
              max-w-[32px] max-h-[32px]
            "
            alt=""
            whileHover={{ x: 4, y: -4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </div>
      </article>
    </motion.a>
  )
}
