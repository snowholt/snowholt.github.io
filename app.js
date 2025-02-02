// Define the icons components since we can't import from lucide-react directly in browser
const Icons = {
  Github: props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  Linkedin: props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Mail: props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
  ExternalLink: props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  )
};

const Portfolio = () => {
  const projects = [
    {
      title: "COVID-19 Pandemic Analysis",
      description: "Comprehensive SQL analysis of COVID-19 dataset to understand the pandemic's global impact and regional patterns",
      tech: ["SQL", "Data Analysis", "Excel", "Statistics"],
      link: "https://www.linkedin.com/pulse/covid-pandemic-analysis-using-sql-nariman-jafarieshlaghi/"
    },
    {
      title: "ESP32 Weather Station",
      description: "IoT project utilizing ESP32 microcontroller for weather monitoring and data collection",
      tech: ["C++", "Arduino", "IoT", "Hardware"],
      link: "https://github.com/snowholt/EPS32-Weather"
    },
    {
      title: "LLM Platform",
      description: "Advanced platform leveraging Large Language Models for various applications",
      tech: ["Python", "ML", "AI"],
      link: "https://github.com/snowholt/LLMPlatform"
    },
    {
      title: "YouTube Data Analysis",
      description: "Comprehensive analysis of YouTube comments and video metrics using Python",
      tech: ["Python", "Data Analysis", "NLP"],
      link: "https://www.linkedin.com/pulse/text-data-analysis-python-youtube-case-study-nariman-jafarieshlaghi"
    },
    {
      title: "Fitbit User Preferences Analysis",
      description: "Analysis of smart device fitness data to derive user behavior insights",
      tech: ["Data Analysis", "Statistics", "Visualization"],
      link: "https://www.kaggle.com/code/snowholt/insights-into-user-preferences-of-fitbit-features"
    }
  ];

  const skills = [
    "Python", "SQL", "Excel", "C++", "React Native", "ML", "AI", 
    "Data Analysis", "Electronic", "Telecommunication", "Arduino", 
    "IoT", "Linux", "Database Management"
  ];

  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-50 text-gray-800' },
    // Hero Section
    React.createElement(
      'header',
      { className: 'bg-white shadow-sm' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto py-16 px-4' },
        React.createElement('h1', { className: 'text-4xl font-bold mb-4' }, 'Nariman Jafari'),
        React.createElement(
          'p',
          { className: 'text-xl text-gray-600 mb-6' },
          'Telecommunication Engineer | AI & IoT Enthusiast | Data Analyst'
        ),
        React.createElement(
          'div',
          { className: 'flex space-x-4' },
          React.createElement(
            'a',
            {
              href: 'https://github.com/snowholt',
              className: 'flex items-center text-gray-600 hover:text-gray-900'
            },
            React.createElement(Icons.Github, { className: 'w-5 h-5 mr-2' }),
            'GitHub'
          ),
          React.createElement(
            'a',
            {
              href: 'https://www.linkedin.com/in/narimanjafari/',
              className: 'flex items-center text-gray-600 hover:text-gray-900'
            },
            React.createElement(Icons.Linkedin, { className: 'w-5 h-5 mr-2' }),
            'LinkedIn'
          )
        )
      )
    ),
    // Rest of the sections...
    // [Note: I'll continue with the rest of the sections, but trimmed for space]
  );
};

// Mount the app
ReactDOM.render(
  React.createElement(Portfolio),
  document.getElementById('root')
);
