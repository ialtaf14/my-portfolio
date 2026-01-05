export const mockData = {
  personal: {
    name: 'Altaf Khan',
    title: 'AI & Data Science Skills',
    tagline: 'I work with data to solve real-world problems—uncovering insights, building machine learning models, and supporting smarter decisions. From raw data to actionable results, I deliver solutions teams can trust.',
    email: 'altafkhan122105@gmail.com',
    phone: '+91 8053821088',
    location: 'Gurugram, India',
    resume: '#', // Placeholder for resume link
    profileImage: '/images/altaf.jpg' // Updated to existing image
  },

  about: {
    description: 'I am a motivated Data Science and AI/ML aspirant with practical experience in Python, data analysis, and machine learning models, driven to solve real-world problems through data-driven solutions.',
    detailedDescription: 'Throughout my academic and project-based journey, I have worked on data-driven projects involving data analysis, machine learning, and problem-solving using Python. I focus on applying strong fundamentals, building reliable solutions, and continuously improving my skills by staying updated with emerging tools and techniques in the data science and AI/ML ecosystem.',
    image: '/images/about-ai-ds.jpg',
    stats: [
      { value: 'Self-Driven • Curious • Detail-Oriented', label: '⚡ Work Ethic' },
      { value: 'Project-Based Practical Learning', label: '💻 Hands-on Experience' },
      { value: 'Aspiring Data Scientist (AI & ML)', label: '🎯 Career Focus' },
      { value: '4+ Academic & Personal Projects', label: '🚀 Projects Completed' },
      { value: '24/7', label: '🎯 Availability' }
    ], interests: ['AI & Machine Learning', 'Sci-Fi Movies', 'Personal Projects', 'Problem Solving', 'Learning by Practice', 'Data Exploration'
    ]
  },

  skills: {
    categories: [
      {
        name: 'Languages & Frameworks',
        skills: [
          { name: 'Python', level: 80 },
          { name: 'SQL', level: 70 },
          { name: 'Pandas', level: 55 },
          { name: 'NumPy', level: 65 }
        ]
      },
      {
        name: 'Technologies',
        skills: [
          { name: 'Jupyter Notebook', level: 65 },
          { name: 'PostgreSQL', level: 55 },
          { name: 'CSV / Excel Data Handling', level: 70 },
          { name: 'Git', level: 60 }
        ]
      },
    ],
    additionalSkills: [
      'Data Analysis',
      'Machine Learning Fundamentals',
      'Exploratory Data Analysis (EDA)',
      'Problem Solving',
      'Statistics Basics',
      'Model Evaluation',
      'Data Cleaning',
      'Version Control (Git)',
      'Continuous Learning'
    ]
  },

  experience: {
    positions: [
      {
        title: 'Data Science Engineer',
        company: 'Q Spider Tech',
        location: 'Gurugram, India',
        duration: 'July 2025 - Present',
        description: 'Worked on project-based learning involving data handling, basic analysis, and applying Python to solve structured problems.',
        achievements: [
          'Worked on project-based tasks involving structured data handling and basic analysis using Python and spreadsheets',
          'Assisted in organizing, cleaning, and validating datasets used in application workflows',
          'Handled Excel and CSV files to understand data structure, trends, and basic reporting',
          'Supported data-driven features by preparing datasets and ensuring consistency acr oss systems',
          'Learned how data flows through applications and how it supports decision-making',
          'Practiced basic performance awareness by working with optimized data formats and queries',
          'Gained exposure to rule-based logic and simple automation concepts using data inputs',
          'Developed a strong understanding of real-world data problems, edge cases, and accuracy requirements'
        ],
        technologies: ['Python', 'Jupyter Notebook', 'Excel / CSV Data Handling', 'PostgreSQL (Basics)', 'REST APIs (Data Consumption)', 'Git']
      },

      {

        title: 'AI & Data Science Intern (Project-Based)',
        company: 'Self-Learning / Academic Projects',
        location: 'Gurugram, India',
        duration: 'Aug 2025 - Dec 2025',
        description: 'Gained hands-on experience through project-based learning in data science and AI, focusing on Python, data handling, and basic machine learning concepts.',
        achievements: [
          'Worked on Python-based projects involving data collection, cleaning, and basic analysis',
          'Built an AI-powered virtual assistant using Python with integration of Google Gemini API',
          'Handled structured data using CSV and Excel files to understand patterns and insights',
          'Practiced writing clean Python code for data processing and automation tasks',
          'Learned how APIs are used to connect AI models with applications',
          'Tested and refined project outputs by analyzing responses and improving logic step by step',
          'Developed a clear understanding of real-world data problems and model limitations',
          'Strengthened debugging, problem-solving, and analytical thinking skills through hands-on practice'],
        technologies: ['Python', 'Google Gemini API', 'Jupyter Notebook', 'CSV / Excel Data Handling', 'Basic Machine Learning Concepts', 'REST APIs (Basics)', 'Git']
      }

    ]
  },

  projects: {
    projects: [
      {
        title: 'AI Virtual Assistant',
        description: 'A Python-based AI virtual assistant built using Google Gemini API to understand user queries and generate intelligent, context-aware responses.',
        features: ['Takes natural language input from users and processes it using Python',
          'Integrated Google Gemini API for generating AI-powered responses',
          'Handled API requests, responses, and basic error cases',
          'Worked on prompt structuring to improve response relevance',
          'Implemented simple logic to manage conversation flow',
          'Tested the assistant with different types of queries to improve accuracy'],
        technologies: ['Python', 'Google Gemini API', 'REST APIs', 'Basic Prompt Engineering', 'JSON Data Handling'],
        githubUrl: 'https://github.com/ialtaf14/ai-virtual-assistant',
        liveUrl: null,
        image: "/images/ai-virtual-assistant.jpg"
      },
    ]
  },

  education: {
    degrees: [
      {
        degree: "Bachelor's in Technology",
        institution: 'Gurugram University',
        location: 'Gurugram, India',
        duration: '2022 - 2026',
        description: 'Currently pursuing a technology degree with a strong focus on data science, machine learning, and analytical problem-solving.',
        highlights: [
          'Will successfully complete curriculum by 2026',
          'Built structured onboarding resources and technical documentation, demonstrating ownership, clarity in communication, and process optimization',
          'Active participant in coding competitions and hackathons, applying data-driven thinking, problem-solving, and rapid prototyping skills',
          'Held leadership roles in technical societies, contributing to collaboration, mentoring, and knowledge-sharing initiatives'
        ],
        coursework: [
          'Data Structures & Algorithms',
          'Database Management Systems (SQL & Data Modeling)',
          'Object-Oriented Programming (Python)',
          'Statistics & Probability for Data Analysis',
          'Machine Learning Fundamentals',
          'Software Engineering & Data Pipelines',
          'Data Visualization & Analysis',
          'Computer Networks',
          'Operating Systems'
        ]
      }
    ],
    certifications: [
      {
        name: 'Artificial Intelligence: Concepts and Techniques',
        issuer: 'NPTEL',
        date: '2025',
        pdf: '/certificates/nptel-ai.pdf',
        viewUrl: '/certificates/nptel-ai.pdf',
        downloadUrl: '/certificates/nptel-ai.pdf'
      },
      {
        name: 'Introduction to Internet of Things',
        issuer: 'NPTEL',
        date: '2025',
        pdf: '/certificates/nptel-iot.pdf',
        viewUrl: '/certificates/nptel-iot.pdf',
        downloadUrl: '/certificates/nptel-iot.pdf'
      }
    ]
  }
};