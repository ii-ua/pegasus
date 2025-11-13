import { cn } from '@/common/utils/cn'
import * as Tabs from '@radix-ui/react-tabs'
// твій clsx helper, якщо є

export const TabTrigger = ({ className, ...props }: Tabs.TabsTriggerProps) => (
  <Tabs.Trigger
    {...props}
    className={cn(
      'text-left text-[#939393] font-medium text-[16px] tablet:text-[20px] desktop:text-[24px] uppercase cursor-pointer',
      'data-[state=active]:text-[#FDFFFF] data-[state=active]:border-white',
      className,
    )}
  />
)
