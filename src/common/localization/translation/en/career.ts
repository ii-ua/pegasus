const career = {
  hero: {
    title: 'Your career starts here',
    paragraphs: [
      'Pegasus Arms is a fully integrated Ukrainian MILTECH company delivering strike UAVs to the Defense Forces of Ukraine.',
      'Fill out the form and join the team that brings Victory closer!',
    ],
    adventages: {
      title: 'OUR BENEFITS:',
      items: [
        'Official employment',
        'Deferral of employees from military service',
        'Competitive salary',
        'Comfortable working environment',
        'Training and professional support',
        '24 calendar days of paid vacation',
        'Paid sick leave',
      ],
    },
  },

  lookingFor: {
    title: 'we are looking for',
    paragraphs: [
      'specialists who create, maintain, and improve Pegasus Arms strike UAVs. Choose the career path that suits you best.',
      'Detailed job descriptions and working conditions are available on our partner job platforms — find the position that suits you.',
    ],
    cards: [
      {
        title: 'Engineering & Development',
        description:
          'Engineer, Electrical engineer, Software developer, Tester, Imbedded software developer',
        count: '11 job vacancies',
        icon: 'engineering',
      },
      {
        title: 'Production',
        description: 'Assembler, Technician, Mechanic, Test operator',
        count: '5 job vacancies',
        icon: 'production',
      },
      {
        title: 'Service',
        description:
          'Service specialist, Operator, UAV pilot, Instructor, Maintenance technician',
        count: '4 job vacancies',
        icon: 'service',
      },
      {
        title: 'Management',
        description:
          'Manager, Accountant, Financial specialist, Economist, Lawyer, HR, Ed. supervisor, Assistant',
        count: '10 job vacancies',
        icon: 'management',
      },
    ],
  },

  questions: {
    title: 'Have questions about our vacancies?',
    contacts: {
      email: {
        text: 'Write to our HR department:',
        link: 'hr@pegasusarms.com.ua',
      },
      tel: {
        text: 'or call us:',
        link: '+380 (75) 444 55 83',
      },
    },
  },

  form: {
    title: '/ APPLY FOR A POSITION',
    inputs: {
      vacancy: {
        label: 'Position',
        placeholder: 'Select a position',
      },
      message: {
        label: 'Comment',
        placeholder: 'Tell us about your experience',
      },
      summary: {
        label: 'Resume',
        placeholder: 'Upload a file',
        placeholder2: '(PDF or DOCX, up to 10 MB)'
      }
    },
    validations: {
      vacancy: {
        valueMissing: 'Please select a position',
      },
      message: {
        valueMissing: 'Please enter your message',
        typeMismatch: 'Please provide a valid message',
      },
      summary: {
        valueMissing: 'Please upload a file',
        sizeExceeded: "The file size must not exceed 10 MB"
      },
    },
    button: 'Submit application',
    jobs: {
      pilotTester: 'Pilot Tester',
      pilotInstructor: 'Pilot Instructor',
      arduplaneEngineer: 'ArduPlane Engineer',
      embeddedArdu: 'Embedded ArduCopter Engineer',
      uavRepair: 'UAV Repair Engineers',
      financeManager: 'Finance Manager (Loans/Grants)',
      assembler: 'UAV Assemblers',
      soldering: 'Soldering Specialists',
    },
  },
}

export default career
