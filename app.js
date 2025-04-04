const Portfolio = () => {
  // State for active tab
  const [activeTab, setActiveTab] = React.useState('about');
  
  // Projects data
  const projects = [
    {
      title: "Professional VS Code Theme",
      description: "A professionally crafted VS Code theme designed with a clean aesthetic, providing a focused and distraction-free color palette for coding",
      tech: ["JavaScript", "TypeScript", "VS Code API", "UI/UX"],
      link: "https://github.com/snowholt/pinkTheme"
    },
    {
      title: "LLM Platform",
      description: "Advanced platform leveraging Large Language Models for various applications",
      tech: ["Python", "ML", "AI"],
      link: "https://github.com/snowholt/LLMPlatform"
    },
    {
      title: "ESP32 Weather Station",
      description: "IoT project utilizing ESP32 microcontroller for weather monitoring and data collection",
      tech: ["C++", "Arduino", "IoT", "Hardware"],
      link: "https://github.com/snowholt/EPS32-Weather"
    },
    {
      title: "Fitbit User Preferences Analysis",
      description: "Analysis of smart device fitness data to derive user behavior insights",
      tech: ["Data Analysis", "Statistics", "Visualization"],
      link: "https://www.kaggle.com/code/snowholt/insights-into-user-preferences-of-fitbit-features"
    },
    {
      title: "COVID-19 Pandemic Analysis",
      description: "Comprehensive SQL analysis of COVID-19 dataset to understand the pandemic's global impact",
      tech: ["SQL", "Data Analysis", "Excel", "Statistics"],
      link: "https://www.linkedin.com/pulse/covid-pandemic-analysis-using-sql-nariman-jafarieshlaghi/"
    },
    {
      title: "YouTube Data Analysis",
      description: "Comprehensive analysis of YouTube comments and video metrics using Python",
      tech: ["Python", "Data Analysis", "NLP"],
      link: "https://www.linkedin.com/pulse/text-data-analysis-python-youtube-case-study-nariman-jafarieshlaghi"
    }
  ];

  // Certifications data
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "Apr 2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/X69F48Y5MSH3"
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      date: "Dec 2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PELKURXNCBHZ"
    },
    {
      title: "Fundamentals Of Python Programming",
      issuer: "Quera",
      date: "Aug 2022",
      link: "#"
    },
    {
      title: "Version Control With Git",
      issuer: "Quera",
      date: "Aug 2022",
      link: "#"
    },
    {
      title: "IEEE Data Science Winter School",
      issuer: "University of Tehran",
      date: "Dec 2020",
      link: "#"
    }
  ];

  // Experience data
  const experiences = [
    {
      title: "AI Integration Developer",
      company: "College 2B",
      period: "Mar 2023 - Present",
      description: "Architecting and developing RESTful APIs using Flask and FastAPI frameworks. Implementing sentiment analysis pipeline using OpenAI API and LLMs to process user feedback."
    },
    {
      title: "Data Analyst Volunteer",
      company: "CARI St-Laurent",
      period: "Mar 2023 - May 2023",
      description: "Verified and updated information in databases and suggested methods to increase efficiency."
    },
    {
      title: "Developer Volunteer",
      company: "CARI St-Laurent",
      period: "May 2023 - Present",
      description: "Developing a multiplatform Django platform to save and update member information in a MySQL database."
    }
  ];

  // Core skills with icons
  const coreSkills = [
    { name: "AI & ML", icon: "🧠", color: "#FF69B4" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "Data Analysis", icon: "📊", color: "#4CAF50" },
    { name: "C++", icon: "⚙️", color: "#00599C" },
    { name: "SQL", icon: "🗄️", color: "#4479A1" },
    { name: "R", icon: "📈", color: "#276DC3" },
    { name: "Excel", icon: "📑", color: "#217346" },
    { name: "Power BI", icon: "📉", color: "#F2C811" },
    { name: "Tableau", icon: "📋", color: "#E97627" },
    { name: "IoT", icon: "🌐", color: "#00BCD4" },
    { name: "Git", icon: "🔄", color: "#F05032" },
    { name: "Linux", icon: "🐧", color: "#FFC107" }
  ];
  
  // Tab animation classes
  const getTabClasses = (tabName) => {
    const baseClasses = "py-3 px-6 rounded-full text-sm font-medium transition-all duration-300 flex items-center shadow-sm mx-1";
    
    if (tabName === activeTab) {
      return `${baseClasses} bg-white text-blue-600 shadow-md transform -translate-y-1 scale-105 z-10 border-2 border-blue-300`;
    } else {
      return `${baseClasses} bg-blue-50 text-gray-600 hover:bg-white hover:-translate-y-0.5 hover:text-blue-500`;
    }
  };
  
  // Content animation class
  const contentClass = "animate-fadeIn";
  
  // Define tabs
  const tabs = [
    { id: 'about', name: 'About Me', icon: '👤' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'projects', name: 'Projects', icon: '💻' },
    { id: 'certifications', name: 'Certifications', icon: '🏆' },
    { id: 'contact', name: 'Contact', icon: '📧' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header/Hero Section - Always visible */}
      <header className="pt-10 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div 
                className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10"
                style={{
                  background: 'linear-gradient(45deg, #2563EB, #3B82F6)'
                }}
              >
                <img 
                  src="images/profile.jpg" 
                  alt="Nariman Jafari" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-48 h-48 rounded-full bg-blue-100 z-0"></div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 text-gray-800">Nariman Jafari</h1>
              <p className="text-xl text-blue-600 mb-3 font-medium">
                AI Integration Developer | Data Analyst | Full Stack Developer
              </p>
              <p className="text-gray-600 mb-6">
                Software developer with expertise in AI integration, data analysis, and full-stack development. 
                Focused on delivering innovative solutions through technical excellence and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-5xl mx-auto px-4 mb-6">
        <div className="flex justify-center overflow-x-auto pb-2 pt-4">
          <div className="flex space-x-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={getTabClasses(tab.id)}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto h-0.5 bg-gradient-to-r from-pink-200 via-purple-300 to-pink-200 rounded-full mb-8"></div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* About Section - Home */}
        {activeTab === 'about' && (
          <div className={contentClass}>
            <section className="bg-white rounded-xl shadow-sm p-8 mb-2">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">My Profile</h2>
              
              {/* Full width description */}
              <div className="mb-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="font-bold text-lg text-blue-600">Professional Software Developer </span>

Experienced developer specializing in AI integration, data analytics, and full-stack development. I leverage technical expertise to build intelligent systems that solve complex problems and drive innovation. With a methodical approach to software design and implementation, I deliver scalable solutions that meet business requirements and enhance user experience.
                </p>
              </div>
              
              {/* Technical Skills */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-blue-600">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {coreSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-white border rounded-full text-sm shadow-sm hover:shadow-md transition-shadow flex items-center transform hover:scale-105 transition-transform"
                      style={{ borderColor: skill.color, color: skill.color }}
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Two column layout for Education and Languages */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Education</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2">🎓</span>
                      CEA LaSalle - Montreal, Quebec, Canada
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🎓</span>
                      M.Sc. Telecommunication Engineering - Azad University
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🎓</span>
                      B.S. Telecommunication Engineering - Urmia University
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Languages</h3>
                  <p className="text-gray-600">English, French, Persian</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <div className={contentClass}>
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-400 transform hover:-translate-y-1 transition-transform"
                  >
                    <h3 className="text-xl font-semibold text-blue-700 mb-1">{exp.title}</h3>
                    <p className="text-gray-500 mb-3">{exp.company} | {exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className={contentClass}>
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Featured Projects</h2>
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 transform hover:-translate-y-1 transition-transform"
                  >
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      View Project 
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <div className={contentClass}>
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Certifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col border-l-4 border-blue-400 transform hover:-translate-y-1 transition-transform"
                  >
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">{cert.title}</h3>
                    <p className="text-gray-600 mb-2">{cert.issuer} - {cert.date}</p>
                    <a
                      href={cert.link}
                      className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View Certificate
                      <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className={contentClass}>
            <section className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Get in Touch</h2>
              <div className="mb-8 text-center">
                <p className="text-gray-600 mb-6">Let's collaborate on innovative tech solutions!</p>
                <a 
                  href="mailto:jafari.nariman@gmail.com"
                  className="inline-block py-3 px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 transition-transform"
                >
                  Send me an email
                </a>
              </div>
              <div className="flex justify-center space-x-6 mt-10">
                <a
                  href="https://github.com/snowholt"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/narimanjafari/"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="mailto:jafari.nariman@gmail.com"
                  className="text-gray-600 hover:text-pink-600 transition-colors text-2xl"
                >
                  <span>✉️</span>
                </a>
              </div>
              <div className="mt-10 text-sm text-gray-500 text-center">
                <p>Nariman Jafari • AI Integration Developer </p>
                <p className="mt-1">© 2025 • Montreal, QC, Canada</p>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(
  React.createElement(Portfolio),
  document.getElementById('root')
);
