const formSection = {
  title: 'Маєте питання? Напишіть нам.',
  description:
    'Ми будемо раді допомогти. заповніть форму нижче, якщо хочете дізнатись більше про продукт, отримати консультацію чи обговорити партнерство.',
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
        label: 'email',
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
        placeholder: 'Щоб ви хотіли дізнатись?',
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
      },
      lastName: {
        valueMissing: 'Введіть ваше прізвище',
        typeMismatch: 'Введіть коректне прізвище',
      },
      tel: {
        valueMissing: 'Введіть ваш телефон',
        typeMismatch: 'Введіть коректний телефон',
      },
      message: {
        valueMissing: 'Введіть ваше повідомлення',
        typeMismatch: 'Введіть коректне повідомлення',
      },
    },
    button: 'ВІДПРАВИТИ',
  },
}

export default formSection
