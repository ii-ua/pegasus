const formSection = {
  title: 'Have a question? Write to us.',
  description:
    'We’ll be happy to help. Fill out the form below if you want to learn more about the product, get a consultation, or discuss partnership opportunities.',
  form: {
    title: '/ CONTACT US',
    inputs: {
      name: {
        label: 'First Name',
        placeholder: 'Enter your first name',
      },
      lastName: {
        label: 'Last Name',
        placeholder: 'Enter your last name',
      },
      company: {
        label: 'Company',
        placeholder: 'Enter your company name',
      },
      email: {
        label: 'Email',
        placeholder: 'Enter your email',
      },
      position: {
        label: 'Position',
        placeholder: 'Enter your position',
      },
      tel: {
        label: 'Phone',
        placeholder: '+380 __ ___ __ __',
      },
      message: {
        label: 'What would you like to know?',
        placeholder: '',
      },
    },
    validations: {
      email: {
        valueMissing: 'Please enter your email',
        typeMismatch: 'Please provide a valid email',
      },
      name: {
        valueMissing: 'Please enter your first name',
        typeMismatch: 'Please provide a valid first name',
      },
      lastName: {
        valueMissing: 'Please enter your last name',
        typeMismatch: 'Please provide a valid last name',
      },
      tel: {
        valueMissing: 'Please enter your phone number',
        typeMismatch: 'Please provide a valid phone number',
      },
      message: {
        valueMissing: 'Please enter your message',
        typeMismatch: 'Please provide a valid message',
      },
    },
    button: 'SEND',
  },
}

export default formSection
