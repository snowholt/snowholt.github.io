/* ========================================================
   Portfolio — Professional Developer Portfolio
   Dark-first, terminal-inspired, recruiter-ready
   ======================================================== */

const Portfolio = () => {
  const [activeTab, setActiveTab] = React.useState('about');
  const [theme, setTheme] = React.useState('dark');
  const [projectFilter, setProjectFilter] = React.useState('all');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  // ===================== DATA =====================

  const skillCategories = [
    {
      name: "Languages",
      cmd: "languages",
      skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "R", "Shell / Bash", "HTML / CSS"]
    },
    {
      name: "AI & Machine Learning",
      cmd: "ai-ml",
      skills: [
        "OpenAI APIs", "Google Gemini / ADK", "Hugging Face", "LangGraph",
        "RAG Pipelines", "PyTorch", "TensorFlow", "Whisper STT",
        "Edge TTS / XTTS", "YOLOv8", "OpenCV", "NLP",
        "vLLM", "llama.cpp", "CUDA Inference"
      ]
    },
    {
      name: "Backend",
      cmd: "backend",
      skills: [
        "FastAPI", "Flask", "Django", "REST APIs",
        "WebSocket / WebRTC", "SQLAlchemy", "Alembic"
      ]
    },
    {
      name: "Frontend",
      cmd: "frontend",
      skills: [
        "React", "Next.js", "React Native", "Expo",
        "Tailwind CSS", "Zustand", "React Query", "i18next"
      ]
    },
    {
      name: "Databases & Storage",
      cmd: "databases",
      skills: [
        "PostgreSQL", "pgvector", "Redis", "MySQL",
        "SQLite", "ChromaDB", "S3 / MinIO"
      ]
    },
    {
      name: "DevOps & Infrastructure",
      cmd: "devops",
      skills: [
        "Docker", "Docker Compose", "Linux", "Nginx",
        "Traefik", "systemd", "Prometheus", "Git",
        "CI/CD", "Debian Packaging"
      ]
    },
    {
      name: "Security",
      cmd: "security",
      skills: [
        "OWASP Top 10", "JWT / OAuth", "RBAC", "MFA",
        "AES-256-GCM", "CSRF / CORS / CSP", "Audit Logging",
        "Secrets Management", "HIPAA Safeguards"
      ]
    },
    {
      name: "Data & BI",
      cmd: "data-bi",
      skills: [
        "Pandas", "NumPy", "Power BI", "Tableau",
        "Excel", "Google Sheets", "Data Visualization"
      ]
    }
  ];

  const projects = [
    // AI & Agents
    {
      title: "ADK Study Planner",
      description: "Multi-agent AI system creating personalized 5-day study schedules with specialized agents for planning, research, and academic content curation from YouTube and Arxiv.",
      tech: ["Python", "Google ADK", "Gemini 2.5", "React", "FastAPI"],
      link: "https://github.com/snowholt/Study-Planner",
      category: "ai"
    },
    {
      title: "Chefbelle: AI Kitchen Assistant",
      description: "Stateful AI agent for cooking guidance with semantic recipe search, nutritional analysis via USDA API, and voice-interactive cooking sessions.",
      tech: ["Python", "LangGraph", "Gemini", "ChromaDB", "SQLite", "Whisper"],
      link: "https://github.com/snowholt/chefbelle",
      category: "ai"
    },
    {
      title: "Intelligent Pac-Man Agent",
      description: "Autonomous AI agent using hybrid intelligence \u2014 local computer vision for 30 FPS reflex actions and Google Gemini for high-level strategic planning.",
      tech: ["Python", "OpenCV", "NumPy", "Gemini SDK", "PyAutoGUI"],
      link: "https://github.com/snowholt/Inteligent-PacMan",
      category: "ai"
    },
    {
      title: "Smart Vision Gemma",
      description: "Real-time computer vision integrating YOLOv8 object detection and face analysis with Google Gemma for creative environment descriptions.",
      tech: ["Python", "YOLOv8", "Gemma", "MediaPipe", "OpenCV"],
      link: "https://github.com/snowholt/smart-vision-gemma",
      category: "ai"
    },
    {
      title: "Snow Research AI Assistant",
      description: "Modular desktop GUI for AI model interaction supporting file analysis, image understanding, audio transcription, and automated PowerPoint generation.",
      tech: ["Python", "PyQt5", "OpenRouter", "OpenAI SDK", "Whisper"],
      link: "https://github.com/snowholt/myaiAssistant",
      category: "ai"
    },
    {
      title: "LLM Platform",
      description: "Cross-platform mobile app providing a unified interface for GPT-4, Claude, and Gemini via the OpenRouter API.",
      tech: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
      link: "https://github.com/snowholt/LLMPlatform",
      category: "ai"
    },
    // Apps & Productivity
    {
      title: "Lumina Tabs",
      description: "AI-powered Chrome extension for ADHD/focus support with smart tab grouping, session snapshots, Focus Mode, and encrypted key storage.",
      tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Chrome MV3", "AES-GCM"],
      link: "https://github.com/snowholt/Lumina-Tabs",
      category: "apps"
    },
    {
      title: "Luminudge",
      description: "Linux-native productivity companion combining task planning, Pomodoro timers, learning trackers, and AI-driven task suggestions for freelancers.",
      tech: ["Python", "PySide6", "SQLite", "Google GenAI", "Fernet"],
      link: "https://github.com/snowholt/luminudge",
      category: "apps"
    },
    // Systems & Hardware
    {
      title: "Particle Physics Simulation",
      description: "High-performance physics engine simulating thousands of particles with hardware-level SIMD/AVX2 optimizations for real-time visualization.",
      tech: ["C++", "SIMD / AVX2", "OpenGL", "GLFW3", "Spatial Hashing"],
      link: "https://github.com/snowholt/ParticlePhysicsSimulation",
      category: "systems"
    },
    {
      title: "Lumina SDR",
      description: "Modular web application for Software Defined Radio \u2014 FM/AM broadcasting, ISS satellite tracking, and ADS-B aircraft monitoring via browser.",
      tech: ["Python", "FastAPI", "React", "RTL-SDR", "Docker", "WebSockets"],
      link: "https://github.com/snowholt/rtlSDR-projects",
      category: "systems"
    },
    {
      title: "ESP32 Weather Station",
      description: "IoT hardware project measuring environmental data (temperature, humidity, pressure) served via a local web server on the ESP32 microcontroller.",
      tech: ["C++", "Arduino", "ESP32", "DHT11 / BMP180", "ESPAsyncWebServer"],
      link: "https://github.com/snowholt/EPS32-Weather",
      category: "systems"
    },
    // Dev Tools
    {
      title: "Task Assistant",
      description: "Local DevOps utility for managing Docker containers, ngrok tunnels, log cleanup, and API health checks through a streamlined interface.",
      tech: ["Python", "PySide6", "Docker API", "Shell", "Debian Pkg"],
      link: "https://github.com/snowholt/taskAssistant",
      category: "devtools"
    },
    {
      title: "PostgreSQL Manager",
      description: "Desktop database management tool for Linux with direct and SSH-tunneled connections, schema browsing, and record management.",
      tech: ["Python", "PyQt5", "Psycopg2", "Paramiko SSH", "SQLite"],
      link: "https://github.com/snowholt/postgreSQLManager",
      category: "devtools"
    },
    {
      title: "Software Testing Project",
      description: "Demonstrating rigorous testing methodologies \u2014 Unit, Integration, and System testing with full coverage reporting for financial calculation logic.",
      tech: ["Python", "Unittest", "Pytest", "Coverage.py"],
      link: "https://github.com/snowholt/softwareTesting",
      category: "devtools"
    },
    {
      title: "Python Environment Analyzer",
      description: "Utility tool for analyzing and managing Python environments, ensuring dependency consistency across projects.",
      tech: ["Python", "Shell Scripting"],
      link: "https://github.com/snowholt/pythonEnvAnalyzer",
      category: "devtools"
    },
    {
      title: "Professional VS Code Theme",
      description: "A clean, distraction-free VS Code color theme designed for focused coding sessions with a professional aesthetic.",
      tech: ["JavaScript", "TypeScript", "VS Code API", "UI/UX"],
      link: "https://github.com/snowholt/pinkTheme",
      category: "devtools"
    },
    // Data & Analytics
    {
      title: "Fitbit User Preferences Analysis",
      description: "Analysis of smart device fitness data to derive user behavior insights and feature usage patterns across activity tracking, sleep, and heart rate.",
      tech: ["Data Analysis", "Statistics", "Visualization"],
      link: "https://www.kaggle.com/code/snowholt/insights-into-user-preferences-of-fitbit-features",
      category: "data"
    },
    {
      title: "COVID-19 Pandemic Analysis",
      description: "Comprehensive SQL analysis of COVID-19 datasets to understand the pandemic's global impact through statistical queries and visualization.",
      tech: ["SQL", "Data Analysis", "Excel", "Statistics"],
      link: "https://www.linkedin.com/pulse/covid-pandemic-analysis-using-sql-nariman-jafarieshlaghi/",
      category: "data"
    },
    {
      title: "YouTube Data Analysis",
      description: "Analysis of YouTube comments and video metrics using Python for text mining, sentiment analysis, and NLP-driven insights.",
      tech: ["Python", "Data Analysis", "NLP", "Visualization"],
      link: "https://www.linkedin.com/pulse/text-data-analysis-python-youtube-case-study-nariman-jafarieshlaghi",
      category: "data"
    }
  ];

  const projectCategories = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI & Agents' },
    { id: 'apps', name: 'Apps' },
    { id: 'systems', name: 'Systems & Hardware' },
    { id: 'devtools', name: 'Dev Tools' },
    { id: 'data', name: 'Data & Analytics' }
  ];

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  const experiences = [
    {
      title: "AI Integration Developer / Full-Stack Developer",
      company: "BaHaam",
      location: "Montr\u00e9al, QC",
      period: "Present",
      bullets: [
        "Architecting a production-grade bilingual SaaS platform with secure backend services, AI-driven conversational workflows, and scalable deployment infrastructure",
        "Building end-to-end features spanning authentication, real-time communication, billing integration, and admin operations",
        "Implementing security hardening aligned with OWASP Top 10 and HIPAA safeguards across all critical application layers"
      ]
    },
    {
      title: "Freelance Full-Stack / GenAI Developer",
      company: "BeautyAI",
      location: "Montr\u00e9al, QC",
      period: "Mar 2025 \u2013 Feb 2026",
      bullets: [
        "Built AI voice platform combining FastAPI backend with React/TypeScript dashboard for voice, chat, WhatsApp, and billing workflows",
        "Developed low-latency multilingual voice pipelines using WebSocket/WebRTC, Faster-Whisper STT, and TTS synthesis",
        "Implemented SaaS capabilities: JWT auth, Stripe billing, pgvector semantic search, and Prometheus monitoring"
      ]
    },
    {
      title: "AI Integration Developer",
      company: "College 2B",
      location: "Montr\u00e9al, QC",
      period: "Aug 2023 \u2013 Present",
      bullets: [
        "Developing a full-stack educational platform with AI-assisted evaluation, secure authentication, and integrated payment processing",
        "Building and hardening backend APIs for exam delivery, scoring, content management, and commerce workflows",
        "Managing deployment and operations with containerized services, database migrations, and secrets management"
      ]
    },
    {
      title: "Developer & Technical Analyst",
      company: "Ertebat Rahcom Iranian (HiWeb)",
      location: "Tehran, Iran",
      period: "Aug 2020 \u2013 Aug 2023",
      bullets: [
        "Developed Python scripts to automate technical and operational workflows across network and system environments",
        "Performed network analysis and monitoring using SNMP across telecommunications infrastructure",
        "Contributed to automation tooling to improve system efficiency and reduce manual intervention"
      ]
    },
    {
      title: "Telecommunication Engineer / Technical Analyst",
      company: "ICCSSCO",
      location: "Tehran, Iran",
      period: "Apr 2011 \u2013 Jun 2020",
      bullets: [
        "Delivered technical support and engineering across telecommunications systems and network infrastructure",
        "Transitioned from network-focused responsibilities toward software development and scripting automation"
      ]
    },
    {
      title: "PHP Developer (Volunteer)",
      company: "Cari St-Laurent",
      location: "Montr\u00e9al, QC",
      period: "Mar \u2013 Aug 2023",
      bullets: [
        "Developed a cross-platform application for managing member data in MySQL",
        "Automated data analysis processes to improve organizational efficiency"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/X69F48Y5MSH3"
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      date: "2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PELKURXNCBHZ"
    },
    {
      title: "Algorithmic Thinking",
      issuer: "Quera College",
      date: "2022",
      link: null
    },
    {
      title: "Version Control with Git",
      issuer: "Quera College",
      date: "2022",
      link: null
    },
    {
      title: "IEEE Data Science Winter School",
      issuer: "University of Tehran",
      date: "2020",
      link: null
    },
    {
      title: "Applied Artificial Intelligence",
      issuer: "University of Tehran",
      date: "2019",
      link: null
    }
  ];

  const education = [
    {
      degree: "Francisation \u2014 \u00c9tudes de Langue Fran\u00e7aise",
      school: "CEA LaSalle Coll\u00e8ge",
      location: "Montr\u00e9al, QC",
      period: "2023 \u2013 2024"
    },
    {
      degree: "M.Sc. Telecommunications Engineering",
      school: "Azad University, Science & Research",
      location: "Tehran, Iran",
      period: "2015 \u2013 2021"
    },
    {
      degree: "B.Sc. Telecommunication Engineering",
      school: "Urmia University",
      location: "Urmia, Iran",
      period: "2002 \u2013 2007"
    }
  ];

  const tabs = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'contact', name: 'Contact' }
  ];

  // ===================== ICONS =====================

  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const ExternalIcon = () => (
    <svg className="inline-block ml-1 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
  );

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );

  // ===================== RENDER =====================

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* ---- Header ---- */}
      <header className="pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image — squared corners */}
            <div
              className="w-36 h-36 rounded-lg overflow-hidden border-2 flex-shrink-0"
              style={{ borderColor: 'var(--border)' }}
            >
              <img
                src="images/profile.jpg"
                alt="Nariman Jafari"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1
                className="text-3xl font-bold mb-1 cursor-blink"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Nariman Jafari
              </h1>
              <p className="text-lg mb-3" style={{ color: 'var(--text-secondary)' }}>
                Full-Stack Developer &middot; AI Engineer &middot; DevOps
              </p>
              <p className="text-sm mb-5 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Building production AI-powered platforms, real-time voice systems, and scalable web applications.
                Bilingual (EN/FR) with a strong security and infrastructure background.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="https://github.com/snowholt" target="_blank" rel="noopener noreferrer" className="social-link">
                  <GitHubIcon /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/narimanjafari/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href="mailto:jafari.nariman@gmail.com" className="social-link">
                  <MailIcon /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---- Tab Navigation ---- */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex justify-center">
          <div className="tab-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={'tab-btn' + (tab.id === activeTab ? ' active' : '')}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Content ---- */}
      <main className="max-w-4xl mx-auto px-4 pb-16">

        {/* ======== ABOUT ======== */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn space-y-6">
            <div className="card-static">
              <div className="section-title">
                <span className="prompt">$</span> cat about.md
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Bilingual (English &amp; French) Full-Stack Developer and AI Engineer with hands-on
                experience building AI-powered SaaS products, real-time voice systems, and multilingual
                web applications. Strong background in FastAPI, React/Next.js, PostgreSQL, and modern
                LLM/voice pipelines. Skilled at translating product requirements into production-ready
                backend services, secure authentication flows, and scalable AI workflows.
              </p>
            </div>

            <div className="card-static">
              <div className="section-title">
                <span className="prompt">$</span> cat education.md
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {edu.school} &mdash; {edu.location}
                      <span className="mono ml-2" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-static">
              <div className="section-title">
                <span className="prompt">$</span> echo $LANGUAGES
              </div>
              <div className="flex gap-3">
                {["English", "French", "Persian"].map((lang, i) => (
                  <span key={i} className="skill-tag">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======== SKILLS ======== */}
        {activeTab === 'skills' && (
          <div className="animate-fadeIn space-y-4">
            {skillCategories.map((cat, i) => (
              <div key={i} className="card-static">
                <div className="section-title">
                  <span className="prompt">$</span> ls skills/{cat.cmd}/
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ======== EXPERIENCE ======== */}
        {activeTab === 'experience' && (
          <div className="animate-fadeIn">
            <div className="card-static">
              <div className="section-title">
                <span className="prompt">$</span> git log --oneline --experience
              </div>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="exp-item">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                        {exp.title}
                      </h3>
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {exp.company} &mdash; {exp.location}
                    </div>
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-sm flex gap-2"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span style={{ color: 'var(--accent)', flexShrink: 0 }}>&rsaquo;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======== PROJECTS ======== */}
        {activeTab === 'projects' && (
          <div className="animate-fadeIn">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {projectCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setProjectFilter(cat.id)}
                  className={'filter-btn' + (projectFilter === cat.id ? ' active' : '')}
                >
                  {cat.name}
                  <span className="ml-1 opacity-50" style={{ fontSize: '11px' }}>
                    {cat.id === 'all'
                      ? projects.length
                      : projects.filter(p => p.category === cat.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredProjects.map((project, i) => (
                <div key={i} className="card">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t, j) => (
                      <span key={j} className="skill-tag">{t}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium inline-flex items-center"
                    style={{ color: 'var(--accent)' }}
                  >
                    View Project <ExternalIcon />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======== CERTIFICATIONS ======== */}
        {activeTab === 'certifications' && (
          <div className="animate-fadeIn">
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="card">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm">
                    <span style={{ color: 'var(--accent)' }}>{cert.issuer}</span>
                    <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                      {cert.date}
                    </span>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm mt-3 inline-flex items-center font-medium"
                      style={{ color: 'var(--accent)' }}
                    >
                      View Certificate <ExternalIcon />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======== CONTACT ======== */}
        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <div className="card-static text-center">
              <div className="section-title" style={{ textAlign: 'left' }}>
                <span className="prompt">$</span> cat contact.md
              </div>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                Available for full-time positions, freelance projects, and technical collaborations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:jafari.nariman@gmail.com" className="social-link">
                  <MailIcon /> jafari.nariman@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/narimanjafari/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href="https://github.com/snowholt" target="_blank" rel="noopener noreferrer" className="social-link">
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ---- Footer ---- */}
      <footer
        className="py-6"
        style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} Nariman Jafari. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(
  React.createElement(Portfolio),
  document.getElementById('root')
);
