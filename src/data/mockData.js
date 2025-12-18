export const mockData = {
  personal: {
    name: 'Altaf Khan',
    title: 'AI & Data Science Skills',
    tagline: 'I work with data to solve real-world problems—uncovering insights, building machine learning models, and supporting smarter decisions. From raw data to actionable results, I deliver solutions teams can trust.',
    email: 'altafkhan122105@gmail.com',
    phone: '+91 8053821088',
    location: 'Gurugram, India',
    resume: '#', // Placeholder for resume link
    profileImage: '/images/profile.jpg' // Placeholder
  },

  about: {
    description: 'I am a motivated Data Science and AI/ML aspirant with practical experience in Python, data analysis, and machine learning models, driven to solve real-world problems through data-driven solutions.',
    detailedDescription: 'Throughout my academic and project-based journey, I have worked on data-driven projects involving data analysis, machine learning, and problem-solving using Python. I focus on applying strong fundamentals, building reliable solutions, and continuously improving my skills by staying updated with emerging tools and techniques in the data science and AI/ML ecosystem.',
    stats: [
      { value: '1+', label: 'Years Experience' },
      { value: '5+', label: 'Projects Completed' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: '24/7', label: 'Support' }
    ],
    interests: ['AI & Machine Learning', 'Sci-Fi Movies', 'Personal Projects', 'Open-Source Contribution', 'Mobile UI/UX', 'Tech Blogging']
  },

  skills: {
    categories: [
      {
        name: 'Languages & Frameworks',
        skills: [
          { name: 'Python', level: 80},
          { name: 'SQL', level: 70 },
          { name: 'Pandas', level: 55},
          { name: 'NumPy', level: 65 }
        ]
      },
      {
        name: 'Technologies',
        skills: [
          { name: '', level: 85 },
          { name: 'PostgreSQL', level: 80 },
          { name: 'REST APIs', level: 90 },
          { name: 'Git', level: 85 }
        ]
      },
      {
        name: 'Mobile Development',
        skills: [
          { name: 'Cross-platform Development', level: 90 },
          { name: 'UI/UX Implementation', level: 85 },
          { name: 'State Management', level: 88 },
          { name: 'Performance Optimization', level: 80 }
        ]
      },
      {
        name: 'Web Development',
        skills: [
          { name: 'React', level: 75 },
          { name: 'Node.js', level: 70 },
          { name: 'HTML/CSS', level: 85 },
          { name: 'Responsive Design', level: 80 }
        ]
      }
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
        duration: 'Dec 2023 - Present',
        description: 'Leading Flutter development for innovative mobile applications focused on digitizing paper-based workflows and improving business operations.',
        achievements: [
          'Collaborated on the development of business-critical mobile applications that digitized paper-based workflows',
          'Introduced new features such as advanced task management modules and intuitive user interfaces',
          'Worked on Excel sheet and PDF file export features for enhanced data management',
          'Optimized the codebase for improved performance, stability, and scalability',
          'Focused on operational efficiency by 45%, reducing key workflows and reducing manual overhead',
          'Worked on excel sheet and PDF file export feature',
          'Engineered smart inventory tracking, implemented rule-based task automation, and ensured secure, encrypted data handling',
          'Strengthened understanding of business workflows, optimized database structures, and contributed to end-to-end app design'
        ],
        technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git', 'Excel Integration', 'PDF Generation']
      },
      {
        title: 'Flutter Development Intern',
        company: 'TechNova Solutions',
        location: 'Gurugram, India',
        duration: 'Aug 2023 - Dec 2023',
        description: 'Gained hands-on experience in Flutter development while working on scalable mobile applications and learning industry best practices.',
        achievements: [
          'Collaborated on a cross-functional team to develop a scalable Flutter-based mobile app for a service aggregator platform',
          'Integrated Firebase Authentication, Firestore database, and push notifications for real-time interactions',
          'Built dynamic UI components using GetX for smooth state management and modular architecture',
          'Developed a booking widget with user-customizable options, scheduling, and responsive layout for both Android and iOS platforms',
          'Implemented RESTful API integration and error-handling strategies to ensure a seamless user experience',
          'Gained hands-on experience in agile development, Git workflows, pull-based version control, and continuous testing',
          'Handled mobile app updates using Flutter for smooth releases across platforms'
        ],
        technologies: ['Flutter', 'Dart', 'Firebase', 'GetX', 'REST APIs', 'Git', 'Agile Development']
      }
    ]
  },

  projects: {
    projects: [
      {
        title: 'Motel App',
        description: 'A comprehensive hotel management system with separate dashboards for staff and guests, featuring real-time booking management and room availability tracking.',
        features: [
          'Different dashboards for staff and guests',
          'Integrated easy check-in and check-out',
          'Implemented room availability based on time after checking out',
          'Real-time booking updates',
          'Payment integration',
          'Multi-role user management'
        ],
        technologies: ['Flutter', 'Dart', 'Firebase'],
        githubUrl: 'https://github.com/ialtaf14/motel-app',
        liveUrl: null,
        image: '/images/motel-app.jpg'
      },
      {
        title: 'Image Generation & Chatbot App',
        description: 'An AI-powered application combining image generation capabilities with an intelligent chatbot interface for creative and conversational interactions.',
        features: [
          'Image generation using Hugging Face models',
          'Integrated text-to-image & text-to-text functionality',
          'Implemented using REST APIs',
          'Clean and intuitive UI',
          'Real-time chat interface',
          'Image gallery and history'
        ],
        technologies: ['Flutter', 'Dart', 'LLM', 'SD 3.5'],
        githubUrl: 'https://github.com/ialtaf14/ai-chat-app',
        liveUrl: null,
        image: '/images/ai-chat-app.jpg'
      },
      {
        title: 'ParkIt - Smart Parking App',
        description: 'A smart parking management system that helps users find and reserve parking spaces while enabling operators to manage their facilities efficiently.',
        features: [
          'Designed a scalable system to manage parking lots, floors, slots, and parking areas',
          'Implemented features to handle vehicle details, user profiles, and user-vehicle associations',
          'Enabled real-time tracking of parking slot availability',
          'Booking and reservation system',
          'Payment gateway integration',
          'Real-time notifications'
        ],
        technologies: ['Flutter', 'Dart', 'Supabase'],
        githubUrl: 'https://github.com/ialtaf14/parkit-app',
        liveUrl: null,
        image: '/images/parkit-app.jpg'
      }
    ]
  },

  education: {
    degrees: [
      {
        degree: "Bachelor's in Technology",
        institution: 'Gurugram University',
        location: 'Gurugram, India',
        duration: '2021 - 2026',
        description: 'Currently pursuing a comprehensive technology degree with focus on software development, data structures, and modern programming methodologies.',
        highlights: [
          'Will successfully complete curriculum by 2026',
          'Took ownership of onboarding new Flutter developers by creating starter kits, setup guides, and walkthroughs to streamline team integration',
          'Active participation in coding competitions and hackathons',
          'Leadership roles in technical societies'
        ],
        coursework: [
          'Data Structures & Algorithms',
          'Object-Oriented Programming',
          'Database Management Systems',
          'Software Engineering',
          'Mobile Application Development',
          'Web Development',
          'Computer Networks',
          'Operating Systems'
        ]
      }
    ],
    certifications: [
      {
        name: 'Flutter Development Certification',
        issuer: 'Google Developers',
        date: '2023'
      },
      {
        name: 'Firebase Certified Developer',
        issuer: 'Google Cloud',
        date: '2023'
      },
      {
        name: 'Git Version Control',
        issuer: 'Atlassian',
        date: '2023'
      },
      {
        name: 'REST API Development',
        issuer: 'Postman',
        date: '2023'
      }
    ]
  }
};