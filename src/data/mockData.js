export const mockData = {
  personal: {
    name: 'Altaf Khan',
    title: 'Data Scientist & ML Engineer',
    tagline: 'Transforming complex data into actionable intelligence through scalable Machine Learning solutions.',
    email: 'altafkhan122105@gmail.com',
    phone: '+91 8053821088',
    location: 'Gurugram, India',
    resume: '#',
    profileImage: '/images/altaf.jpg'
  },

  about: {
    description: 'Data Scientist and ML Engineer specializing in building predictive models and intelligent systems. I combine strong mathematical foundations with production-ready Python development to solve business problems.',
    detailedDescription: 'I am a results-oriented Data Scientist with a focus on End-to-End Machine Learning, helping organizations leverage data for strategic advantage. My expertise spans the entire data lifecycle—from robust data engineering and exploratory analysis to model development, evaluation, and deployment. I thrive in fast-paced environments where I can apply statistical rigor and software engineering best practices to deliver reliable, high-impact AI solutions.',
    image: '/images/about-ai-ds.jpg',
    stats: [
      { value: 'Machine Learning & AI', label: 'Primary Focus' },
      { value: 'Python & SQL', label: 'Core Stack' },
      { value: 'End-to-End', label: 'Development Approach' },
      { value: 'Business Impact', label: 'Key Metric' }
    ],
    interests: ['Deep Learning', 'Generative AI', 'MLOps', 'Data Strategy', 'Automated Reasoning']
  },

  skills: {
    categories: [
      {
        name: 'Core AI & Machine Learning',
        skills: [
          { name: 'Python (Scikit-learn, Pandas, NumPy)', level: 90 },
          { name: 'Deep Learning (TensorFlow/PyTorch)', level: 80 },
          { name: 'NLP & LLMs (HuggingFace, Gemini API)', level: 75 },
          { name: 'Statistical Analysis & Modeling', level: 85 }
        ]
      },
      {
        name: 'Data Engineering & Backend',
        skills: [
          { name: 'SQL (PostgreSQL)', level: 80 },
          { name: 'APIs (FastAPI, Flask)', level: 75 },
          { name: 'Data Visualization (Matplotlib/Seaborn)', level: 85 },
          { name: 'Git & Version Control', level: 80 }
        ]
      },
    ],
    additionalSkills: [
      'Experiment Tracking',
      'Feature Engineering',
      'Model Deployment',
      'A/B Testing Concepts',
      'Agile Methodology',
      'Technical Documentation'
    ]
  },

  experience: {
    positions: [
      {
        title: 'Data Science Engineer',
        company: 'Q Spider Tech',
        location: 'Gurugram, India',
        duration: 'July 2025 - Present',
        description: 'Driving data initiatives and optimizing workflows through structured analysis and automation.',
        achievements: [
          'Optimized data processing pipelines using Python, reducing manual data handling time by 40%.',
          'Developed automated reporting scripts using SQL and Pandas to track key performance indicators.',
          'Conducted exploratory data analysis (EDA) to identify data quality issues, leading to a 15% improvement in dataset reliability.',
          'Collaborated with engineering teams to integrate data validation checks into core application workflows.'
        ],
        technologies: ['Python', 'SQL', 'Pandas', 'Automation', 'Data Validation']
      },
      {
        title: 'AI & Data Science Intern',
        company: 'Academic & Personal Projects',
        location: 'Gurugram, India',
        duration: 'Aug 2025 - Dec 2025',
        description: 'Built and deployed functional AI prototypes focusing on real-world feasibility and user interaction.',
        achievements: [
          'Engineered an LLM-powered virtual assistant using Google Gemini API, achieving 90% relevance in query responses.',
          'Implemented a RAG-based (Retrieval-Augmented Generation) pipeline for context-aware information retrieval.',
          'Processed and cleaned large datasets (10k+ rows) for model training, handling missing values and outlier detection.',
          'Deployed machine learning models via REST APIs to demonstrate real-time inference capabilities.'
        ],
        technologies: ['Python', 'LLMs', 'Gemini API', 'Rest APIs', 'Data Cleaning']
      }
    ]
  },

  projects: {
    projects: [
      {
        title: 'RealityML – AI Feasibility Suite',
        description: 'A strategic B2B tool that evaluates the technical and business viability of potential ML projects before investment.',
        features: [
          'Engineered a "Solvability Score" algorithm using NLP to assess problem statements against ML capabilities.',
          'Developed a Synthetic Data Generator to simulate realistic "Real Estate" and "Customer Churn" datasets for prototyping.',
          'Built a "Data Risk Engine" to automatically detect bias, leakage, and data sparsity issues.',
          'Result: enabling teams to reduce "Proof of Concept" failure rates by validating data readiness early.'
        ],
        technologies: ['Python', 'FastAPI', 'Streamlit', 'Scikit-learn', 'NLP'],
        githubUrl: 'https://github.com/ialtaf14/RealityML',
        liveUrl: null,
        image: "/images/RealityML.jpg"
      },
      {
        title: 'Nova-AI – Intelligent Assistant',
        description: 'A context-aware AI assistant designed to handle natural language queries with high accuracy and low latency.',
        features: [
          'Integrated Google Gemini API with custom prompt engineering to handle complex multi-turn conversations.',
          'Implemented robust error handling and rate-limiting logic to ensure service reliability.',
          'Designed a modular backend architecture facilitating easy integration of new model capabilities.',
          'Result: Demonstrated proficiency in LLM integration and building user-centric AI applications.'
        ],
        technologies: ['Python', 'Google Gemini API', 'JSON Handling', 'REST APIs'],
        githubUrl: 'https://github.com/ialtaf14/Nova-AI',
        liveUrl: null,
        image: "/images/Nova-AI.jpg"
      }
    ]
  },

  education: {
    degrees: [
      {
        degree: "B.Tech in Computer Science Engineering",
        institution: 'Gurugram University',
        location: 'Gurugram, India',
        duration: '2022 - 2026',
        description: 'Specialization in Data Science & Machine Learning.',
        highlights: [
          'Focus Areas: Algorithms, Statistical Modeling, and Database Systems.',
          'Lead Developer in multiple hackathons, delivering functional MVP prototypes under deadline constraints.'
        ],
        coursework: [
          'Machine Learning',
          'Deep Learning',
          'Data Mining',
          'Linear Algebra',
          'Probability & Statistics'
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
        name: 'Introduction to IoT',
        issuer: 'NPTEL',
        date: '2025',
        pdf: '/certificates/nptel-iot.pdf',
        viewUrl: '/certificates/nptel-iot.pdf',
        downloadUrl: '/certificates/nptel-iot.pdf'
      }
    ]
  }
};