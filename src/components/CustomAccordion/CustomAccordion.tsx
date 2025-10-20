import * as Accordion from '@radix-ui/react-accordion'
import CutAccordionTopLeft from '@/assets/shapes/cut-accordion-top-left.svg?react'
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
    <Accordion.Root type={type} collapsible={collapsible}>
      {items?.map(({ value, title, content }) => (
        <Accordion.Item key={value} value={value}>
          <Accordion.Trigger className="group relative">
            <CutAccordionTopLeft className="h-full w-full" />
            <div className="absolute inset-0 flex items-center justify-between pl-9 pr-[18px] py-[18px]">
              <span className="text-white">{title}</span>

              {/* ІКОНКИ */}
              <span className="inline-flex items-center">
                {/* ↓ Закрито (дефолт) */}
                <ArrowDownRight className="block group-hover:hidden group-data-[state=open]:hidden" />
                {/* ↓ Закрито + hover */}
                <ArrowDownRightActive className="hidden group-hover:block group-data-[state=open]:hidden" />
                {/* ↑ Відкрито */}
                <ArrowUpRight className="hidden group-data-[state=open]:block" />
              </span>
            </div>
          </Accordion.Trigger>

          <Accordion.Content className="overflow-hidden px-6 py-4 text-white/80 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            {content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
