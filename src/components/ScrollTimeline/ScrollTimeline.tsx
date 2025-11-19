import React from 'react'
import { motion } from 'framer-motion'
import RombPrimary from 'src/assets/icons/romb-primary.svg?react'
import RombSecondary from 'src/assets/icons/romb-secondary.svg?react'
import { Paragraph } from '../text'

type Item = { title: string; description: string }

export const ScrollTimeline = ({ items }: { items: Item[] }) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: '1fr 2fr',
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {/* === ЛІВА КОЛОНКА (анімація + лінія + ромби) === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.12, // каскадна анімація
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col items-center gap-1"
          >
            {/* Верхня частина лінії тільки для першого */}
            {index === 0 && (
              <>
                <div className="bg-[linear-gradient(90deg,#CE4906_0%,#FF6600_50.48%,#FF8B20_100%)] h-[18px] tablet:h-[11px] desktop:h-8 w-0.5" />
                <div className="bg-[linear-gradient(90deg,#CE4906_0%,#FF6600_50.48%,#FF8B20_100%)]  w-0.5" />
              </>
            )}

            {/* Ромб */}
            {index === 0 ? (
              <RombPrimary className="w-[22px] h-[22px]" />
            ) : (
              <RombSecondary className="w-[22px] h-[22px]" />
            )}

            {/* Пунктирна лінія */}
            {index < items.length && (
              <div
                className="w-0.5 flex-1 bg-repeat-y"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, #ffffff 60%, transparent 0%)',
                  backgroundSize: '2px 14px',
                }}
              />
            )}
          </motion.div>

          {/* === ПРАВА КОЛОНКА (анімація тексту) === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.14, // синхронізовано з ромбом
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row gap-3 tablet:gap-4 desktop:gap-6 w-full pb-8 tablet:pb-[42px] justify-between"
          >
            <h3 className="text-white flex-1 font-medium uppercase text-[20px] tablet:text-[24px] desktop:text-[32px] leading-tight">
              {item.title}
            </h3>

            <Paragraph
              variant="grey"
              className="flex-2"
              text={item.description}
            />
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  )
}
