// Define icon components
const Icons = {
  Github: props => (
    React.createElement('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    }, React.createElement('path', {
      d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
    }))
  ),
  Linkedin: props => (
    React.createElement('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    }, [
      React.createElement('path', {
        key: 'path',
        d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
      }),
      React.createElement('rect', {
        key: 'rect',
        x: '2',
        y: '9',
        width: '4',
        height: '12'
      }),
      React.createElement('circle', {
        key: 'circle',
        cx: '4',
        cy: '4',
        r: '2'
      })
    ])
  ),
  Mail: props => (
    React.createElement('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    }, [
      React.createElement('path', {
        key: 'path',
        d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
      }),
      React.createElement('polyline', {
        key: 'polyline',
        points: '22,6 12,13 2,6'
      })
    ])
  ),
  ExternalLink: props => (
    React.createElement('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    }, [
      React.createElement('path', {
        key: 'path',
        d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
      }),
      React.createElement('polyline', {
        key: 'polyline',
        points: '15 3 21 3 21 9'
      }),
      React.createElement('line', {
        key: 'line',
        x1: '10',
        y1: '14',
        x2: '21',
        y2: '3'
      })
    ])
  )
};

const Portfolio = () => {
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
      description: "Comprehensive SQL analysis of COVID-19 dataset to understand the pandemic's global impact and regional patterns",
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
        React.createElement(
          'div',
          { className: 'flex flex-col md:flex-row items-center gap-8' },
          React.createElement(
            'div',
            { className: 'relative' },
            // Modern frame effect
            React.createElement(
              'div',
              { 
                className: 'w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10',
                style: {
                  background: 'linear-gradient(45deg, #4F46E5, #3B82F6)'
                }
              },
              React.createElement('img', {
                src: 'images/profile.jpg',
                alt: 'Nariman Jafari',
                className: 'w-full h-full object-cover'
              })
            ),
            // Decorative background element
            React.createElement('div', {
              className: 'absolute -bottom-2 -right-2 w-48 h-48 rounded-full bg-blue-100 z-0'
            })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'h1',
              { className: 'text-4xl font-bold mb-4' },
              'Nariman Jafari'
            ),
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
    // About Section
    React.createElement(
      'section',
      { className: 'py-16 bg-white' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto px-4' },
        React.createElement('h2', { className: 'text-3xl font-bold mb-8' }, 'About Me'),
        React.createElement(
          'div',
          { className: 'grid md:grid-cols-2 gap-8' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'text-gray-600 mb-4' },
              'Telecommunication Engineer with expertise in signal processing, IoT development, and data analysis. Passionate about combining hardware and software solutions to create innovative projects.'
            ),
            React.createElement(
              'div',
              { className: 'mb-6' },
              React.createElement('h3', { className: 'font-semibold mb-2' }, 'Education'),
              React.createElement(
                'ul',
                { className: 'space-y-2 text-gray-600' },
                React.createElement('li', null, 'M.Sc. Telecommunication Engineering - Azad University'),
                React.createElement('li', null, 'B.S. Telecommunication Engineering - Urmia University')
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement('h3', { className: 'font-semibold mb-2' }, 'Languages'),
              React.createElement('p', { className: 'text-gray-600' }, 'English, French, Persian')
            )
          ),
          React.createElement(
            'div',
            null,
            React.createElement('h3', { className: 'font-semibold mb-4' }, 'Technical Skills'),
            React.createElement(
              'div',
              { className: 'flex flex-wrap gap-2' },
              skills.map((skill, index) =>
                React.createElement(
                  'span',
                  {
                    key: index,
                    className: 'px-3 py-1 bg-gray-100 rounded-full text-sm'
                  },
                  skill
                )
              )
            )
          )
        )
      )
    ),
    // Projects Section
    React.createElement(
      'section',
      { className: 'py-16 bg-gray-50' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto px-4' },
        React.createElement('h2', { className: 'text-3xl font-bold mb-8' }, 'Featured Projects'),
        React.createElement(
          'div',
          { className: 'grid gap-6' },
          projects.map((project, index) =>
            React.createElement(
              'div',
              {
                key: index,
                className: 'bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'
              },
              React.createElement('h3', { className: 'text-xl font-semibold mb-2' }, project.title),
              React.createElement('p', { className: 'text-gray-600 mb-4' }, project.description),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-2 mb-4' },
                project.tech.map((tech, techIndex) =>
                  React.createElement(
                    'span',
                    {
                      key: techIndex,
                      className: 'px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-sm'
                    },
                    tech
                  )
                )
              ),
              React.createElement(
                'a',
                {
                  href: project.link,
                  className: 'inline-flex items-center text-blue-600 hover:text-blue-800'
                },
                'View Project ',
                React.createElement(Icons.ExternalLink, { className: 'w-4 h-4 ml-1' })
              )
            )
          )
        )
      )
    ),
    // Contact Section
    React.createElement(
      'footer',
      { className: 'bg-white py-16' },
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto px-4 text-center' },
        React.createElement('h2', { className: 'text-3xl font-bold mb-8' }, 'Get in Touch'),
        React.createElement(
          'div',
          { className: 'flex justify-center space-x-6' },
          React.createElement(
            'a',
            {
              href: 'https://github.com/snowholt',
              className: 'text-gray-600 hover:text-gray-900'
            },
            React.createElement(Icons.Github, { className: 'w-6 h-6' })
          ),
          React.createElement(
            'a',
            {
              href: 'https://www.linkedin.com/in/narimanjafari/',
              className: 'text-gray-600 hover:text-gray-900'
            },
            React.createElement(Icons.Linkedin, { className: 'w-6 h-6' })
          ),
          React.createElement(
            'a',
            {
              href: 'mailto:your.email@example.com',
              className: 'text-gray-600 hover:text-gray-900'
            },
            React.createElement(Icons.Mail, { className: 'w-6 h-6' })
          )
        )
      )
    )
  );
};

// Mount the app
ReactDOM.render(
  React.createElement(Portfolio),
  document.getElementById('root')
);
