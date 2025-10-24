import RombPrimary from 'src/assets/icons/romb-primary.svg?react'
import RombSecondary from 'src/assets/icons/romb-secondary.svg?react'
type Item = { title: string; description: string }

export const ScrollTimeline = ({ items }: { items: Item[] }) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-[5px] flex-1 justify-center items-center">
        <div className="bg-[linear-gradient(90deg,#CE4906_0%,#FF6600_50.48%,#FF8B20_100%)] h-[32px] w-[2px]"></div>
        <div className="w-2 h-2 rotate-45 bg-[linear-gradient(90deg,#CE4906_0%,#FF6600_50.48%,#FF8B20_100%)]"></div>
        <div className="bg-[linear-gradient(90deg,#CE4906_0%,#FF6600_50.48%,#FF8B20_100%)] h-[100px] w-[2px]"></div>
        <RombPrimary className="w-[22px] h-[22px]" />
        <div
          className="w-[2px] h-[112px] bg-repeat-y"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #ffffff 60%, transparent 0%)',
            backgroundSize: '2px 14px', // 14px = 8px лінія + 6px відступ
          }}
        />
        <RombSecondary className="w-[22px] h-[22px]" />
        <div
          className="w-[2px] h-[112px] bg-repeat-y"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #ffffff 60%, transparent 0%)',
            backgroundSize: '2px 14px', // 14px = 8px лінія + 6px відступ
          }}
        />
        <RombSecondary className="w-[22px] h-[22px]" />
        <div
          className="w-[2px] h-[34px] bg-repeat-y"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #ffffff 60%, transparent 0%)',
            backgroundSize: '2px 14px', // 14px = 8px лінія + 6px відступ
          }}
        />
      </div>
      <ul className="flex flex-col flex-1 gap-[42px]">
        {items?.map((item, index) => (
          <TimeLineItemTitle key={index} title={item.title} />
        ))}
      </ul>
      <ul className="flex flex-col flex-2 gap-[42px]">
        {items?.map((item, index) => (
          <TimeLineItemDescription key={index} description={item.description} />
        ))}
      </ul>
    </div>
  )
}

const TimeLineItemTitle = ({ title }: { title: string }) => {
  return (
    <li>
      <h3 className="text-white font-medium uppercase text-[32px]">{title}</h3>
    </li>
  )
}

const TimeLineItemDescription = ({ description }: { description: string }) => {
  return (
    <li>
      <p className="bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent font-light uppercase text-[24px]">
        {description}
      </p>
    </li>
  )
}
