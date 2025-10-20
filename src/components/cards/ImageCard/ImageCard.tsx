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
    <a
      href={href}
      aria-label={title}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6600]"
    >
      <article
        className="
          relative border-[2px] max-w-[321px] h-[437px]
          transition-all duration-300 
          group-hover:scale-[1.02]
          [--border-gradient:linear-gradient(90deg,#F5F5F5_0%,#FDFFFF_100%)]
          group-hover:[--border-gradient:linear-gradient(90deg,#CE4906_0%,#FF6600_50.48%,#FF8B20_100%)]
          p-[21px] cursor-pointer
          flex flex-col justify-between
        "
        style={{
          borderImage: 'var(--border-gradient) 1',
          borderStyle: 'solid',
        }}
      >
        <img
          src={image1x}
          srcSet={`${image1x} 1x, ${image2x} 2x`}
          sizes="(min-width: 768px) 321px, 100vw"
          alt={title}
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
        />

        <h3 className="text-white font-[Tektur] font-semibold text-[36px] uppercase leading-tight">
          {title}
        </h3>
        <p className="text-white font-light text-[16px] uppercase">
          {description}
        </p>
      </article>
    </a>
  )
}
