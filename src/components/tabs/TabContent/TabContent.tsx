import { cn } from '@/common/utils/cn'
import * as Tabs from '@radix-ui/react-tabs'
// твій clsx helper, якщо є

export const TabContent = ({ className, ...props }: Tabs.TabsContentProps) => (
  <Tabs.Content
    {...props}
    className={cn(
      'text-left text-[#939393] font-medium text-2xl uppercase cursor-pointer',
      'data-[state=active]:text-white data-[state=active]:border-white',
      className,
    )}
  />
)
