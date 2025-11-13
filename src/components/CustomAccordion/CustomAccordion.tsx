import * as Accordion from '@radix-ui/react-accordion'
import CutAccordionTopLeft from '@/assets/shapes/cut-accordion-top-left.svg?react'
import CutAccordionBottomRight from '@/assets/shapes/cut-accordion-bottom-right.svg?react'
import arrowDownRight from '@/assets/icons/arrow-down-right.svg'
import arrowDownRightActive from '@/assets/icons/arrow-down-right-active.svg'
import arrowUpRight from '@/assets/icons/arrow-up-right.svg'

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
              <h3 className=" m-0 uppercase text-[#FDFFFF] font-normal text-[16px] tablet:text-[20px] desktop:text-[24px]">
                {title}
              </h3>

              {/* ІКОНКИ */}
              <span className="inline-flex items-center">
                {/* ↓ Закрито (дефолт) */}
                <img
                  src={arrowDownRight}
                  width={42}
                  height={42}
                  alt=""
                  className="block group-hover:hidden group-focus:hidden group-data-[state=open]:hidden"
                />
                {/* ↓ Закрито + hover */}
                <img
                  src={arrowDownRightActive}
                  width={42}
                  height={42}
                  alt=""
                  className="hidden group-hover:block group-focus:block group-data-[state=open]:hidden"
                />
                {/* ↑ Відкрито */}
                <img
                  src={arrowUpRight}
                  width={42}
                  height={42}
                  alt=""
                  className="hidden group-data-[state=open]:block"
                />
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
            <div className="relative z-10 p-[22px] text-[#FDFFFF] font-normal text-[14px] tablet:text-[20px] desktop:text-[20px]">
              {content}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
