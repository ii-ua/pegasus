import * as Accordion from '@radix-ui/react-accordion'
import CutAccordionTopLeft from '@/assets/shapes/cut-accordion-top-left.svg?react'
import CutAccordionBottomRight from '@/assets/shapes/cut-accordion-bottom-right.svg?react'
import ArrowDownRight from '@/assets/icons/arrow-down-right.svg?react'
import ArrowDownRightActive from '@/assets/icons/arrow-down-right-active.svg?react'
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg?react'

type Item = {
  value: string
  title: React.ReactNode
  content: React.ReactNode
}

export function CustomAccordion({
  items,
  type = 'single',
  collapsible = true,
}: {
  items: Item[]
  type?: 'single' | 'multiple'
  collapsible?: boolean
}) {
  return (
    <Accordion.Root
      type={type}
      className="flex flex-col gap-4"
      collapsible={collapsible}
    >
      {items?.map(({ value, title, content }) => (
        <Accordion.Item key={value} value={value}>
          <Accordion.Trigger className="group relative cursor-pointer">
            <CutAccordionTopLeft
              preserveAspectRatio="none"
              className="h-full w-full block"
            />
            <div className="absolute inset-0 flex items-center justify-between pl-9 pr-[18px] py-[18px]">
              <h3 className="text-white  m-0 font-[Tektur] uppercase font-normal text-[24px]">
                {title}
              </h3>

              {/* ІКОНКИ */}
              <span className="inline-flex items-center">
                {/* ↓ Закрито (дефолт) */}
                <ArrowDownRight className="block group-hover:hidden group-focus:hidden group-data-[state=open]:hidden" />
                {/* ↓ Закрито + hover */}
                <ArrowDownRightActive className="hidden group-hover:block group-focus:block group-data-[state=open]:hidden" />
                {/* ↑ Відкрито */}
                <ArrowUpRight className="hidden group-data-[state=open]:block" />
              </span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="relative -mt-px max-w-[1011px] overflow-hidden">
            {/* бекграунд-рамка, тягнеться на 100% ширини/висоти */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 block"
            >
              <CutAccordionBottomRight
                className="block w-full h-full"
                preserveAspectRatio="none" // <-- ключове!
              />
            </span>

            {/* контент формує висоту */}
            <div className="relative z-10 p-[22px] text-white/80">
              {content}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
