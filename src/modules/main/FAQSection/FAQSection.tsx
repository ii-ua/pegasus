import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { Tabs } from 'radix-ui'
import { TabTrigger } from '@/components/tabs'
import { CustomAccordion } from '@/components/CustomAccordion'

export const FAQSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col gap-[42px] develop-bg"
    >
      <div className="flex flex-col gap-6">
        <SectionTitle
          title={`// ${t('faqMain.title')}`}
          className="text-left max-w-[1000px]"
        />
        <Tabs.Root
          className="flex gap-6"
          defaultValue="aboutProduct"
          orientation="vertical"
        >
          <Tabs.List
            className="flex flex-col max-w-[321px] gap-4"
            aria-label={t('faqMain.title')}
          >
            <TabTrigger value="aboutProduct">
              {t('faqMain.faqs.aboutProduct.title')}
            </TabTrigger>
            <TabTrigger value="manufacturing">
              {t('faqMain.faqs.manufacturing.title')}
            </TabTrigger>
            <TabTrigger value="training">
              {t('faqMain.faqs.training.title')}
            </TabTrigger>
            <TabTrigger value="order">
              {t('faqMain.faqs.order.title')}
            </TabTrigger>
          </Tabs.List>
          <Tabs.Content className="text-white" value="aboutProduct">
            <CustomAccordion />
          </Tabs.Content>
          <Tabs.Content value="manufacturing">Tab two content</Tabs.Content>
          <Tabs.Content value="training">Tab three content</Tabs.Content>
          <Tabs.Content value="order">Tab four content</Tabs.Content>
        </Tabs.Root>
      </div>
    </SectionContainer>
  )
}
