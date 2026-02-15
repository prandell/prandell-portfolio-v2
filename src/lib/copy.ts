export const copy = {
  nav: {
    name: 'Patrick Randell',
    subtitle: 'Full-Stack Engineer / Melbourne'
  },

  hero: {
    subheading: 'Interactive Portfolio 2026',
    firstName: 'Patrick',
    lastName: 'Randell',
    blurb:
      'Building high trust on-chain systems at scale. Currently building for the agentic revolution.',
    focusChips: [
      'Full-Stack',
      '10 Years Experience',
      'Crypto & AI',
      'Engineering Leadership'
    ],
    ctaWork: 'View Work',
    ctaQuestion: 'Ask a question',
    canvasNote: 'Particle canvas is interactive on desktop and mobile touch',
    scrollLabel: 'Scroll'
  },

  about: {
    subheading: 'Profile',
    heading: 'About',
    blurb: [
      "I'm a lead engineer at LabEleven, currently embedded with a large Australian crypto company. I've helped scale systems from ~100 to ~500k users across high-trust product surfaces like wallet balances, asset metadata, real-time reward attribution, and on-chain game mechanics.",
      'I work hands-on across frontend, backend, smart-contract interactions, and data — shipping ambitious products while keeping correctness, reliability, and user trust as first-class requirements.',
      "Outside work I'm usually gaming, cooking, or snowboarding."
    ]
  },

  experience: {
    subheading: 'Timeline',
    heading: 'Experience'
  },

  works: {
    subheading: 'Portfolio',
    heading: 'Projects',
    description:
      'A selection of build-heavy work across product engineering, experimentation, and platform systems.'
  },

  contact: {
    subheading: 'Get in touch',
    heading: 'Contact',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'How can I help?',
    sendButton: 'Send Message',
    sendingButton: 'Sending...',
    successMessage: 'Thank you. I will get back to you as soon as possible.',
    errorMessage: 'Something went wrong. Please try again.',
    linkedInUrl: 'https://www.linkedin.com/in/randellp/',
    githubUrl: 'https://github.com/prandell'
  },

  chat: {
    panelSubheading: 'Assistant',
    panelHeading: 'Ask about my work',
    panelDescription: 'Tap the input to open the full dialog.',
    inputPlaceholder: 'Ask a question about projects, roles, or stack',
    dialogTitle: 'Q and A',
    dialogSubheading:
      'Ask about shipping, engineering decisions, or past projects',
    dialogInputPlaceholder: 'Ask a question',
    closeLabel: 'Close',
    sendLabel: 'Send',
    sendingLabel: 'Sending',
    defaultMessage: 'Ask anything about my work, experience, or interests.',
    fallbackResponse: 'Sorry, I could not retrieve a response.',
    sampleQuestions: [
      'What are you building right now?',
      'Which projects best represent your work?',
      'How do you approach reliability in production?',
      'What technologies do you work with most?',
      'What types of teams do you enjoy working in?'
    ],
    aiLabel: 'AI',
    youLabel: 'You'
  },

  steam: {
    nowPlaying: 'Now Playing',
    playtime2w: '2W Playtime',
    playtimeAll: 'All-Time Playtime',
    achievements: 'Achievements',
    recentlyPlayed: 'Recently Played'
  }
} as const
