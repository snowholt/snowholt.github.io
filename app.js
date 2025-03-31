import React from 'react';

const Portfolio = () => {
  // Projects data
  const projects = [
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 text-gray-800">
      {/* Header/Hero Section */}
      <header className="pt-10 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div 
                className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10"
                style={{
                  background: 'linear-gradient(45deg, #FF69B4, #DA70D6)'
                }}
              >
                <img 
                  src="/api/placeholder/250/250" 
                  alt="Nariman Jafari" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-48 h-48 rounded-full bg-purple-100 z-0"></div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 text-gray-800">Nariman Jafari</h1>
              <p className="text-xl text-pink-600 mb-3 font-medium">
                AI Integration Developer | Data Analyst | Full Stack Developer
              </p>
              <p className="text-gray-600 mb-6 italic">
                "Deep dives into AI, code, math, and science fuel my quest for self-peace. Understanding comes with the journey. ✨"
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://github.com/snowholt" 
                  className="flex items-center py-2 px-4 bg-white shadow-sm rounded-full hover:shadow-md transition-shadow"
                >
                  <span className="mr-2">🌟</span>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/narimanjafari/" 
                  className="flex items-center py-2 px-4 bg-white shadow-sm rounded-full hover:shadow-md transition-shadow"
                >
                  <span className="mr-2">💼</span>
                  LinkedIn
                </a>
                <a 
                  href="mailto:jafari.nariman@gmail.com" 
                  className="flex items-center py-2 px-4 bg-white shadow-sm rounded-full hover:shadow-md transition-shadow"
                >
                  <span className="mr-2">✉️</span>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expertise in AI integration, data analytics, and full-stack development. Specialized on building intelligent systems for data-driven insights.
                Bringing expertise in predictive modeling and scalable backend services to innovative projects. Eager to collaborate on cutting-edge technology solutions.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-purple-700">Education</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">🎓</span>
                    College 2B - Montreal, Quebec, Canada
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
                <h3 className="font-semibold mb-2 text-purple-700">Languages</h3>
                <p className="text-gray-600">English, French, Persian</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-purple-700">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-white border rounded-full text-sm shadow-sm hover:shadow-md transition-shadow flex items-center"
                    style={{ borderColor: skill.color, color: skill.color }}
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-1">{exp.title}</h3>
                <p className="text-gray-500 mb-3">{exp.company} | {exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Featured Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-pink-100"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-50 text-purple-600 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-pink-600 hover:text-pink-800"
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
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <h3 className="text-lg font-semibold text-pink-600 mb-1">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer} - {cert.date}</p>
                <a
                  href={cert.link}
                  className="mt-auto inline-flex items-center text-purple-600 hover:text-purple-800 text-sm"
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
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-pink-600">Get in Touch</h2>
          <div className="mb-8">
            <p className="text-gray-600 mb-4">Let's collaborate on innovative tech solutions!</p>
            <a 
              href="mailto:jafari.nariman@gmail.com"
              className="inline-block py-3 px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              Send me an email
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/snowholt"
              className="text-gray-600 hover:text-pink-600 transition-colors text-2xl"
            >
              <span>🌟</span>
            </a>
            <a
              href="https://www.linkedin.com/in/narimanjafari/"
              className="text-gray-600 hover:text-pink-600 transition-colors text-2xl"
            >
              <span>💼</span>
            </a>
            <a
              href="mailto:jafari.nariman@gmail.com"
              className="text-gray-600 hover:text-pink-600 transition-colors text-2xl"
            >
              <span>✉️</span>
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Nariman Jafari • AI Integration Developer • she/her</p>
            <p className="mt-1">© 2025 • Montreal, QC, Canada</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
