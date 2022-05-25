const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ChineduG.github.io/portfolio',
  title: 'SC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chinedu Gabriel',
  role: 'Back-End & Mobile Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1bNwwnqSIwAk5qMcKXxuWlmPDLH3edcep/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/chinedu-gabriel-ab411318a/',
    github: 'https://github.com/chineduG',
    twitter: 'https://twitter.com/saint_gabriel0'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Payment Api',
    description:
      'A stripe-payment restful-api',
    stack: ['NODE.JS', 'EXPRESS', 'MONGODB', 'POSTMAN'],
    sourceCode: 'https://github.com/chineduG/Stripe-Payment-API',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Flutter Status-Story',
    description:
            'WhatsApp story made with flutter',
    stack: ['FLUTTER', 'DART', ],
    sourceCode: 'https://github.com/chineduG/Flutter-Story-App',
    // livePreview: 'https://github.com',
  },
  {
    // https://github.com/chineduG/Job-Design-Template
    name: 'News-api App',
    description:
      'News search api app with flutter',
    stack: ['FLUTTER', 'DART', ],
    sourceCode: 'https://github.com/chineduG/Search-News-App',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Job Design-Template',
    description:
            'Job Template made with flutter',
    stack: ['FLUTTER', 'DART', ],
    sourceCode: 'https://github.com/chineduG/Flutter-Story-App',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Node.js',
  'Express',
  'MongoDB',
  'RestAPI',
  'Git',
  'Flutter',
  'Dart',
  'Linux Command Line',
  'Firebase',
  'Basic Python',
  'NFC',
  // 'Currently Smart-Contracts',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'investorgbriel@mail.com',
}

export { header, about, projects, skills, contact }
