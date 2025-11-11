import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { Tabs } from 'radix-ui'
import { TabTrigger } from '@/components/tabs'
import { CustomAccordion } from '@/components/CustomAccordion'
import { AccordionAnswer } from '@/components/text/AccordionAnswer'

export const FAQSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-6">
        <SectionTitle
          title={`${t('faqMain.title')}`}
          className="text-left max-w-[1000px]"
        />
        <Tabs.Root
          className="flex gap-6"
          defaultValue="aboutProduct"
          orientation="vertical"
        >
          <Tabs.List
            className="flex flex-col w-[321px] gap-4"
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
            <CustomAccordion
              items={[
                {
                  value: 'aboutProduct1',
                  title: t('faqMain.faqs.aboutProduct.questions.q1.question'),
                  content: (
                    <AccordionAnswer
                      answer={t(
                        'faqMain.faqs.aboutProduct.questions.q1.answer',
                      )}
                    />
                  ),
                },
                {
                  value: 'aboutProduct2',
                  title: t('faqMain.faqs.aboutProduct.questions.q2.question'),
                  content: (
                    <ul className="list-disc pl-6">
                      {t('faqMain.faqs.aboutProduct.questions.q2.answer', {
                        returnObjects: true,
                      }).map((paragraph: string) => (
                        <li key={paragraph}>
                          <AccordionAnswer answer={paragraph} />
                        </li>
                      ))}
                    </ul>
                  ),
                },
              ]}
            />
          </Tabs.Content>
          <Tabs.Content value="manufacturing">
            <CustomAccordion
              items={[
                {
                  value: 'manufacturing1',
                  title: t('faqMain.faqs.manufacturing.questions.q1.question'),
                  content: (
                    <AccordionAnswer
                      answer={t(
                        'faqMain.faqs.manufacturing.questions.q1.answer',
                      )}
                    />
                  ),
                },
                {
                  value: 'manufacturing2',
                  title: t('faqMain.faqs.manufacturing.questions.q2.question'),
                  content: (
                    <AccordionAnswer
                      answer={t(
                        'faqMain.faqs.manufacturing.questions.q2.answer',
                      )}
                    />
                  ),
                },
              ]}
            />
          </Tabs.Content>
          <Tabs.Content value="training">
            <CustomAccordion
              items={[
                {
                  value: 'training1',
                  title: t('faqMain.faqs.training.questions.q1.question'),
                  content: (
                    <AccordionAnswer
                      answer={t('faqMain.faqs.training.questions.q1.answer')}
                    />
                  ),
                },
                {
                  value: 'training2',
                  title: t('faqMain.faqs.training.questions.q2.question'),
                  content: (
                    <AccordionAnswer
                      answer={t('faqMain.faqs.training.questions.q2.answer')}
                    />
                  ),
                },
              ]}
            />
          </Tabs.Content>
          <Tabs.Content value="order">
            <CustomAccordion
              items={[
                {
                  value: 'order1',
                  title: t('faqMain.faqs.order.questions.q1.question'),
                  content: (
                    <AccordionAnswer
                      answer={t('faqMain.faqs.order.questions.q1.answer')}
                    />
                  ),
                },
                {
                  value: 'order2',
                  title: t('faqMain.faqs.order.questions.q2.question'),
                  content: (
                    <AccordionAnswer
                      answer={t('faqMain.faqs.order.questions.q2.answer')}
                    />
                  ),
                },
              ]}
            />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </SectionContainer>
  )
}
