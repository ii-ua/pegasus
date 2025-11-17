import { StatCard } from '@/components/cards'
import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Mina from '@/assets/icons/mina.svg?react'
import Munitions from '@/assets/icons/munitions.svg?react'
import Delivery from '@/assets/icons/delivery.svg?react'

export const BplaHero = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex pt-[90px] tablet:pt-[64px] flex-col justify-center items-center gap-[54px] tablet:gap-[64px] desktop:gap-[82px]"
    >
      <div className="w-full flex flex-col gap-5 desktop:gap-6">
        <Paragraph
          className="font-light"
          variant="grey"
          text={`${t('navMain.systems')} / ${t('navMain.bpla')}`}
        />
        <SectionTitle
          title={`${t('systems.bpla.hero.title')}`}
          className="text-left text-[37px] w-full"
        />
        <Paragraph variant="grey" text={t('systems.bpla.hero.description')} />
      </div>
      <picture>
        {/* MOBILE */}
        <source
          media="(max-width: 639px)"
          srcSet="
      /images/systems/bpla/m_bpla_specifications@1x.png 1x,
      /images/systems/bpla/m_bpla_specifications@2x.png 2x
    "
        />

        {/* TABLET */}
        <source
          media="(max-width: 1133px)"
          srcSet="
      /images/systems/bpla/t_bpla_specifications@1x.png 1x,
      /images/systems/bpla/t_bpla_specifications@2x.png 2x
    "
        />

        {/* DESKTOP (default) */}
        <img
          src="/images/systems/bpla/d_bpla_specifications@1x.png"
          srcSet="/images/systems/bpla/d_bpla_specifications@2x.png 2x"
          alt="Bpla pegasus arms 25"
          loading="lazy"
          decoding="async"
          className="w-full"
        />
      </picture>
      <div className="w-full flex flex-col justify-end gap-5 items-end">
        {t('systems.bpla.hero.paragraphs', { returnObjects: true }).map(
          (text: string, index: number) => (
            <p
              className="font-light uppercase max-w-[1011px] bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent text-[24px]"
              key={index}
            >
              {text}
            </p>
          ),
        )}
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-6">
          <StatCard
            className="gap-0"
            iconClassName="flex justify-center"
            value={<Mina />}
            description={t('systems.bpla.hero.cards.0')}
            highlight={false}
          />
          <StatCard
            className="gap-0"
            iconClassName="flex justify-center"
            value={<Munitions />}
            description={t('systems.bpla.hero.cards.1')}
            highlight={false}
          />
        </div>
        <StatCard
          className="gap-0"
          iconClassName="flex justify-center"
          value={<Delivery />}
          description={t('systems.bpla.hero.cards.2')}
          highlight={false}
        />
      </div>
    </SectionContainer>
  )
}
