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
        invalid: 'First name must contain between 2 and 50 letters',
      },
      lastName: {
        valueMissing: 'Please enter your last name',
        typeMismatch: 'Please provide a valid last name',
        invalid: 'Last name must contain between 2 and 50 letters',
      },
      tel: {
        valueMissing: 'Please enter your phone number',
        typeMismatch: 'Please provide a valid phone number',
        patternMismatch: 'Please provide a valid phone number',
      },
      message: {
        valueMissing: 'Please enter your message',
        typeMismatch: 'Please provide a valid message',
        tooShort: 'Message must contain at least 10 characters',
      },
    },
    button: 'SEND',
    captcha: {
      checking: 'COMPLETE THE CHECK',
      error: 'Verification failed. Please try again.',
    },
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
