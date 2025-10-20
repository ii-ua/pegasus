export const Tabs = () => {
  return (
    <div className="flex gap-8 items-start">
      {/* Вкладки зліва */}
      <div className="flex flex-col tabs tabs-lifted tabs-vertical">
        <input
          type="radio"
          name="faq_tabs"
          className="tab"
          aria-label="Про продукт"
          id="tab1"
          defaultChecked
        />
        <div className="tab-content hidden" />
        <input
          type="radio"
          name="faq_tabs"
          className="tab"
          aria-label="Виготовлення"
          id="tab2"
        />
        <div className="tab-content hidden" />
        <input
          type="radio"
          name="faq_tabs"
          className="tab"
          aria-label="Навчання"
          id="tab3"
        />
        <div className="tab-content hidden" />
        <input
          type="radio"
          name="faq_tabs"
          className="tab"
          aria-label="Замовлення"
          id="tab4"
        />
        <div className="tab-content hidden" />
      </div>

      {/* Контент справа — завжди зверху */}
      <div className="relative flex-1">
        <div className="tab-content bg-base-200 p-6 rounded">
          Контент для «Про продукт»
        </div>
        <div className="tab-content bg-base-200 p-6 rounded">
          Контент для «Виготовлення»
        </div>
        <div className="tab-content bg-base-200 p-6 rounded">
          Контент для «Навчання»
        </div>
        <div className="tab-content bg-base-200 p-6 rounded">
          Контент для «Замовлення»
        </div>
      </div>
    </div>
  )
}
