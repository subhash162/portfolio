import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, MapPin, Code2, Database, Server, Settings, ExternalLink, Download, Menu, X, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openResume = () => {
  window.open("/subash_CV (1).pdf", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-emerald-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-black tracking-tight"
            >
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Subhash Thakur
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-emerald-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  )}
                </button>
              ))}
              <a
                href="#"
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                onClick={openResume}
              >
                <Download className="w-4 h-4 inline mr-2" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-6 space-y-3">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="#"
                className="block w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-center rounded-lg font-medium"
              >
                <Download className="w-4 h-4 inline mr-2"/>
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Subhash Thakur
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-4 font-light">
              Software Engineering Student
            </p>

            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Frontend and Backend Developer with a strong foundation in JavaScript technologies. 
              Passionate about building full-stack applications with React.js and Node.js.
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-400 mb-10">
              <MapPin className="w-5 h-5" />
              <span>gauriganj-3 Jhapa, Nepal</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 hover:-translate-y-0.5 transition-all"
              >
                Get In Touch
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Professional Summary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-400">Professional Summary</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a Software Engineering student seeking Frontend and Backend development opportunities. 
                  With a strong foundation in JavaScript-based technologies including React.js and Node.js, 
                  I have hands-on experience building full-stack applications.
                </p>
                <p>
                  Familiar with RESTful APIs, relational and NoSQL databases, and modern web development practices. 
                  I'm comfortable working with Git/GitHub and collaborative development environments.
                </p>
                <p>
                  Passionate about learning new technologies and staying updated with the latest trends in web development.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-slate-900 rounded-lg border border-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">3.5</div>
                  <div className="text-sm text-slate-400">Current CGPA</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border border-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">3+</div>
                  <div className="text-sm text-slate-400">Major Projects</div>
                </div>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-400">Experience Highlights</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Code2 className="w-5 h-5" />,
                    title: 'Full-Stack Development',
                    description: 'Building complete web applications from frontend to backend'
                  },
                  {
                    icon: <Database className="w-5 h-5" />,
                    title: 'Database Management',
                    description: 'Working with PostgreSQL, MongoDB, and MySQL'
                  },
                  {
                    icon: <Server className="w-5 h-5" />,
                    title: 'API Development',
                    description: 'Creating and integrating RESTful APIs'
                  },
                  {
                    icon: <Settings className="w-5 h-5" />,
                    title: 'Version Control',
                    description: 'Team collaboration using Git and GitHub'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500" />

              {/* Education Card */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-2 gap-8 mb-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-[3px] md:-translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full ring-4 ring-slate-950" />
                  
                  {/* Content */}
                  <div className="md:col-start-2">
                    <div className="bg-slate-900 p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-emerald-400 mb-1">
                            Bachelor of Software Engineering
                          </h3>
                          <p className="text-slate-300 font-medium">
                            Nepal College of Information Technology (NCIT)
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Jhapa, Nepal
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                        <div>
                          <p className="text-sm text-slate-400">Duration</p>
                          <p className="font-semibold">2021 - 2026 (Expected)</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">CGPA</p>
                          <p className="font-semibold text-emerald-400">3.5 (Current)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Technical <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Programming Languages',
                icon: <Code2 className="w-6 h-6" />,
                skills: ['JavaScript', 'HTML', 'CSS']
              },
              {
                title: 'Frontend',
                icon: <Code2 className="w-6 h-6" />,
                skills: ['React.js', 'Responsive Design', 'Modern UI/UX']
              },
              {
                title: 'Backend',
                icon: <Server className="w-6 h-6" />,
                skills: ['Node.js', 'REST APIs', 'Express.js']
              },
              {
                title: 'Databases',
                icon: <Database className="w-6 h-6" />,
                skills: ['PostgreSQL', 'MongoDB', 'MySQL']
              }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-sm text-slate-300 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="mt-12 p-8 bg-slate-900 rounded-xl border border-emerald-500/10">
            <h3 className="text-xl font-bold mb-6 text-center">
              Tools & <span className="text-emerald-400">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Git', 'GitHub', 'Version Control', 'Team Collaboration', 'RESTful APIs', 'Web Development'].map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full text-sm font-medium hover:from-emerald-500/20 hover:to-cyan-500/20 hover:border-emerald-500/40 transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Featured <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              Academic and personal projects showcasing practical application of skills
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'DebunkAI',
                description: 'Developed an application to differentiate between AI-generated and real images. Integrated a ResNet50 machine learning model via REST APIs.',
                tech: ['React.js', 'FastAPI', 'PostgreSQL', 'ResNet50'],
                highlights: [
                  'ML model integration via REST APIs',
                  'Frontend-backend communication',
                  'Database management',
                  'Image processing'
                ]
              },
              {
                title: 'SmartSocial',
                description: 'Built a unified platform integrating multiple social media services such as Facebook, Messenger, Instagram, and Twitter into a single interface.',
                tech: ['Node.js', 'React.js', 'PostgreSQL'],
                highlights: [
                  'Social media API integration',
                  'Backend logic development',
                  'API handling',
                  'Responsive frontend design'
                ]
              },
              {
                title: 'Authentication & Backend Projects',
                description: 'Implemented multiple login and signup systems focusing on backend logic, user authentication, and secure data handling.',
                tech: ['Node.js', 'Databases', 'JWT', 'bcrypt'],
                highlights: [
                  'User authentication systems',
                  'Secure data handling',
                  'Backend logic',
                  'Multiple database integration'
                ]
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl border border-emerald-500/10 overflow-hidden hover:border-emerald-500/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 group"
              >
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-mono font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Activities */}
          <div className="mt-12 p-8 bg-slate-900 rounded-xl border border-emerald-500/10">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Activities & <span className="text-emerald-400">Experience</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 flex-shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hackathons & Workshops</h4>
                  <p className="text-sm text-slate-400">
                    Participated in hackathons and technical workshops related to frontend and backend development
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 flex-shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Team Collaboration</h4>
                  <p className="text-sm text-slate-400">
                    Experience working on team-based projects using Git and GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Get In <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I'm currently seeking Frontend and Backend development opportunities. 
              Let's connect and discuss how we can work together!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                label: 'Email',
                value: 'thakursubash887@gmail.com',
                href: 'mailto:thakursubash887@gmail.com'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                label: 'Phone',
                value: '+977 9817943808',
                href: 'tel:+9779817943808'
              },
              {
                icon: <Github className="w-8 h-8" />,
                label: 'GitHub',
                value: 'github.com/subhash162',
                href: 'https://github.com/subhash162'
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-slate-900 p-6 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-500/10 text-center"
              >
                <div className="inline-flex p-3 bg-emerald-500/10 rounded-lg text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <p className="text-sm text-slate-400 mb-2">{contact.label}</p>
                <p className="font-semibold break-all group-hover:text-emerald-400 transition-colors">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:thakursubash887@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all text-center"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Send Email
            </a>
            <a
              href="https://github.com/subhash162"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 hover:-translate-y-0.5 transition-all text-center"
            >
              <Github className="w-5 h-5 inline mr-2" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-left">
              © 2024 Subhash Thakur. Built with React + Vite + Tailwind CSS
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/subhash162"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:thakursubash887@gmail.com"
                className="p-2 bg-slate-900 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;