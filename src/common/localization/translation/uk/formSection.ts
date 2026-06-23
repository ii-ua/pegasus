const formSection = {
  title: 'Маєте питання? Раді допомогти',
  description:
    'Заповніть форму нижче, щоб  дізнатись більше про наш продукт, отримати консультацію чи обговорити партнерство.',
  form: {
    title: '/ НАПИСАТИ НАМ',
    inputs: {
      name: {
        label: 'Ім’я',
        placeholder: 'Введіть ім’я',
      },
      lastName: {
        label: 'Прізвище',
        placeholder: 'Введіть прізвище',
      },
      company: {
        label: 'Компанія',
        placeholder: 'Введіть назву компанії',
      },
      email: {
        label: 'Email',
        placeholder: 'Введіть email',
      },
      position: {
        label: 'Посада',
        placeholder: 'Введіть вашу посаду',
      },
      tel: {
        label: 'Телефон',
        placeholder: '+380 __ ___ __ __',
      },
      message: {
        label: 'Коментар',
        placeholder: 'Що б ви хотіли дізнатись?',
      },
    },
    validations: {
      email: {
        valueMissing: 'Введіть ваш email',
        typeMismatch: 'Введіть коректний email',
      },
      name: {
        valueMissing: 'Введіть ваше ім’я',
        typeMismatch: 'Введіть коректне ім’я',
        invalid: 'Ім’я має містити від 2 до 50 літер',
      },
      lastName: {
        valueMissing: 'Введіть ваше прізвище',
        typeMismatch: 'Введіть коректне прізвище',
        invalid: 'Прізвище має містити від 2 до 50 літер',
      },
      tel: {
        valueMissing: 'Введіть ваш телефон',
        typeMismatch: 'Введіть коректний телефон',
        patternMismatch: 'Введіть коректний номер телефону',
      },
      message: {
        valueMissing: 'Введіть ваше повідомлення',
        typeMismatch: 'Введіть коректне повідомлення',
        tooShort: 'Повідомлення має містити щонайменше 10 символів',
      },
    },
    button: 'ВІДПРАВИТИ',
    captcha: {
      checking: 'ПРОЙДІТЬ ПЕРЕВІРКУ',
      error: 'Не вдалося пройти перевірку. Спробуйте ще раз.',
    },
    submit: {
      success: 'Дякуємо за звернення. Ми відповімо вам найближчим часом.',
      successHr:
        'Дякуємо за вашу заявку. Наш відділ кадрів звʼяжеться з вами найближчим часом.',
    },
    messages: {
      hr: 'Заявку успішно надіслано',
      info: 'Повідомлення успішно надіслано',
    },
    resend: 'Надіслати ще раз',
  },
}

export default formSection
