const formSection = {
  title: 'Got questions? Glad to help',
  description:
    'Fill out the form below to learn more about our product, get a consultation, or discuss a partnership.',
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
        label: 'Comment',
        placeholder: 'What would you like to know?',
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
    submit: {
      success: 'Thank you for reaching out. We will get back to you shortly.',
      successHr:
        'Thank you for your application. Our HR department will contact you shortly.',
    },
    messages: {
      hr: 'Application sent successfully',
      info: 'Message sent successfully',
    },
    resend: 'Send again',
  },
}

export default formSection
