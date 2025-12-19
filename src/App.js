import React, { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, Award, Code, Shield, Database, User, Menu, X, ChevronRight } from 'lucide-react';

// Custom GitHub icon component (since Github is deprecated in lucide-react)
const GithubIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: 'Movie Rating Application',
      description: 'A full-stack web application where users can browse films by genre, submit ratings and reviews in each movie section.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Supabase', 'PostgreSQL'],
      github: 'https://github.com/susanjong/PROJEK-BUAT-WEB-FULLSTACK.git',
      highlights: ['Backend endpoints in PHP for CRUD operations', 'Database schema design in Supabase', 'User authentication and review system']
    },
    {
      title: 'POS Application',
      description: 'A desktop Point of Sale system built in JavaFX, featuring inventory management, item lookup, cart operations, and multi-level access control.',
      technologies: ['Java', 'JavaFX', 'FXML', 'PostgreSQL'],
      github: 'https://github.com/susanjong/UTS_PBO_KELOMPOK5.git',
      highlights: ['Overall architecture design', 'Multi-level access control (Admin/User)', 'Inventory management and receipt printing']
    },
    {
      title: 'Personality Type Prediction',
      description: 'A machine learning pipeline that predicts personality types from survey data, including data exploration, preprocessing, model training, and evaluation.',
      technologies: ['Python', 'Google Colab', 'pandas', 'scikit-learn', 'SHAP', 'matplotlib'],
      github: 'https://colab.research.google.com/drive/1MRuP9flZkeyqKumGgcaH1NZr8ZPXWfm7?usp=sharing',
      highlights: ['Multiple ML models comparison', 'SHAP for model interpretation', 'Comprehensive data analysis and visualization']
    }
  ];

  const skills = [
    { category: 'Programming Languages', items: ['PHP', 'JavaScript', 'Java', 'Python'], icon: Code },
    { category: 'Cybersecurity', items: ['Ethical Hacking', 'CTF Challenges', 'Vulnerability Assessment', 'Penetration Testing'], icon: Shield },
    { category: 'Databases', items: ['PostgreSQL', 'Supabase', 'Neon'], icon: Database },
    { category: 'Frameworks & Tools', items: ['JavaFX', 'React', 'Google Colab'], icon: User }
  ];

  const certifications = [
    {
      title: 'University CTF 2024: Binary Badlands',
      institution: 'Hack The Box',
      date: 'December 2024',
      achievement: 'Team rank: 588/1128, solved 6/49 challenges'
    },
    {
      title: 'Cyber Strike Competition 1.0',
      institution: 'Satuan Siber TNI (Indonesian National Cyber Unit)',
      date: 'October 2024',
      achievement: 'National-level Jeopardy style CTF participant'
    },
    {
      title: 'Web Development Pathway',
      institution: 'Google Developer Groups on Campus USU',
      date: 'May 2025',
      achievement: 'Certificate of Completion'
    }
  ];

  const styles = {
    // Base styles
    body: {
      margin: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#0f172a',
      color: '#ffffff',
      lineHeight: 1.6
    },
    
    // Navigation
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid #334155',
      padding: '1rem 0'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navDesktop: {
      display: 'flex',
      gap: '2rem',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'color 0.2s',
      ':hover': {
        color: '#60a5fa'
      }
    },
    navButtonActive: {
      color: '#60a5fa'
    },
    mobileMenuToggle: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'block'
      }
    },
    mobileMenu: {
      display: 'none',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid #334155',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'block' : 'none'
      }
    },
    mobileMenuButton: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '0.5rem 0',
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'color 0.2s',
      ':hover': {
        color: '#60a5fa'
      }
    },

    // Sections
    section: {
      padding: '5rem 0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    },
    sectionAlt: {
      backgroundColor: '#1e293b'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      width: '100%'
    },
    
    // Hero Section
    hero: {
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))',
      zIndex: 0
    },
    heroContent: {
      position: 'relative',
      zIndex: 1,
      transition: 'all 1s',
      transform: isVisible.home ? 'translateY(0)' : 'translateY(40px)',
      opacity: isVisible.home ? 1 : 0
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #60a5fa, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem'
      }
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#cbd5e1',
      '@media (max-width: 768px)': {
        fontSize: '1.2rem'
      }
    },
    heroDescription: {
      fontSize: '1.1rem',
      marginBottom: '3rem',
      color: '#94a3b8',
      maxWidth: '600px',
      margin: '0 auto 3rem auto'
    },
    heroButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap'
    },
    buttonPrimary: {
      padding: '0.75rem 2rem',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      ':hover': {
        backgroundColor: '#1d4ed8',
        transform: 'translateY(-2px)'
      }
    },
    buttonSecondary: {
      padding: '0.75rem 2rem',
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid #475569',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      ':hover': {
        borderColor: '#60a5fa',
        transform: 'translateY(-2px)'
      }
    },

    // Content sections
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    
    // About section
    aboutContent: {
      maxWidth: '800px',
      margin: '0 auto',
      transition: 'all 1s',
      transform: isVisible.about ? 'translateY(0)' : 'translateY(40px)',
      opacity: isVisible.about ? 1 : 0
    },
    aboutText: {
      backgroundColor: '#374151',
      borderRadius: '0.5rem',
      padding: '2rem',
      marginBottom: '2rem',
      fontSize: '1.1rem',
      color: '#d1d5db',
      lineHeight: 1.7
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    aboutCard: {
      backgroundColor: '#374151',
      borderRadius: '0.5rem',
      padding: '1.5rem'
    },
    aboutCardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#60a5fa'
    },

    // Projects section
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      transition: 'all 1s',
      transform: isVisible.projects ? 'translateY(0)' : 'translateY(40px)',
      opacity: isVisible.projects ? 1 : 0
    },
    projectCard: {
      backgroundColor: '#1e293b',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      transition: 'all 0.3s',
      ':hover': {
        backgroundColor: '#334155',
        transform: 'translateY(-5px)'
      }
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#60a5fa'
    },
    projectDescription: {
      color: '#d1d5db',
      marginBottom: '1rem',
      lineHeight: 1.6
    },
    projectHighlights: {
      marginBottom: '1rem'
    },
    projectHighlightTitle: {
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#e2e8f0'
    },
    projectHighlightList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    projectHighlightItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '0.5rem',
      fontSize: '0.9rem',
      color: '#94a3b8'
    },
    projectHighlightDot: {
      width: '6px',
      height: '6px',
      backgroundColor: '#60a5fa',
      borderRadius: '50%',
      marginRight: '0.5rem',
      marginTop: '0.5rem',
      flexShrink: 0
    },
    projectTechnologies: {
      marginBottom: '1rem'
    },
    projectTechTitle: {
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#e2e8f0'
    },
    projectTechList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    projectTechTag: {
      padding: '0.25rem 0.75rem',
      backgroundColor: '#2563eb',
      color: 'white',
      fontSize: '0.875rem',
      borderRadius: '9999px'
    },
    projectLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#60a5fa',
      textDecoration: 'none',
      transition: 'color 0.2s',
      ':hover': {
        color: '#93c5fd'
      }
    },

    // Skills section
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      transition: 'all 1s',
      transform: isVisible.skills ? 'translateY(0)' : 'translateY(40px)',
      opacity: isVisible.skills ? 1 : 0
    },
    skillCard: {
      backgroundColor: '#374151',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      textAlign: 'center',
      transition: 'all 0.3s',
      ':hover': {
        backgroundColor: '#4b5563',
        transform: 'translateY(-5px)'
      }
    },
    skillIcon: {
      color: '#60a5fa',
      marginBottom: '1rem'
    },
    skillTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#60a5fa'
    },
    skillList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    skillItem: {
      color: '#d1d5db',
      marginBottom: '0.5rem'
    },

    // Certifications section
    certificationsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      transition: 'all 1s',
      transform: isVisible.certifications ? 'translateY(0)' : 'translateY(40px)',
      opacity: isVisible.certifications ? 1 : 0
    },
    certCard: {
      backgroundColor: '#1e293b',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      transition: 'all 0.3s',
      ':hover': {
        backgroundColor: '#334155',
        transform: 'translateY(-5px)'
      }
    },
    certHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    certIcon: {
      color: '#fbbf24',
      marginRight: '0.75rem'
    },
    certTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#60a5fa'
    },
    certDetail: {
      color: '#d1d5db',
      marginBottom: '0.5rem'
    },
    certAchievement: {
      fontSize: '0.9rem',
      color: '#94a3b8'
    },

    // Contact section
    contactContent: {
      maxWidth: '600px',
      margin: '0 auto',
      transition: 'all 1s',
      transform: isVisible.contact ? 'translateY(0)' : 'translateY(40px)',
      opacity: isVisible.contact ? 1 : 0
    },
    contactCard: {
      backgroundColor: '#374151',
      borderRadius: '0.5rem',
      padding: '2rem'
    },
    contactDescription: {
      fontSize: '1.1rem',
      color: '#d1d5db',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      color: 'white',
      fontWeight: '600',
      transition: 'all 0.2s',
      ':hover': {
        transform: 'translateY(-2px)'
      }
    },
    contactEmail: {
      backgroundColor: '#2563eb',
      ':hover': {
        backgroundColor: '#1d4ed8'
      }
    },
    contactPhone: {
      backgroundColor: '#059669',
      ':hover': {
        backgroundColor: '#047857'
      }
    },
    contactGithub: {
      backgroundColor: '#4b5563',
      ':hover': {
        backgroundColor: '#374151'
      }
    },

    // Footer
    footer: {
      padding: '2rem 0',
      backgroundColor: '#0f172a',
      borderTop: '1px solid #334155',
      textAlign: 'center',
      color: '#94a3b8'
    }
  };

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            Fathurrahman Nasution
          </div>
          
          {/* Desktop Navigation */}
          <div style={styles.navDesktop}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  ...styles.navButton,
                  ...(activeSection === item.id ? styles.navButtonActive : {})
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            style={styles.mobileMenuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={styles.mobileMenuButton}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.section}>
        <div style={styles.heroBackground}></div>
        <div style={styles.container}>
          <div style={styles.hero}>
            <div style={styles.heroContent}>
              <h1 style={styles.heroTitle}>
                Fathurrahman Nasution
              </h1>
              <p style={styles.heroSubtitle}>
                Computer Science Student | Cybersecurity Enthusiast | Web Developer
              </p>
              <p style={styles.heroDescription}>
                Passionate about cybersecurity and web development, with experience in CTF challenges and full-stack applications
              </p>
              <div style={styles.heroButtons}>
                <button
                  onClick={() => scrollToSection('projects')}
                  style={styles.buttonPrimary}
                >
                  <span>View Projects</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={styles.buttonSecondary}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.container}>
          <div style={styles.aboutContent}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <div style={styles.aboutText}>
              <p style={{marginBottom: '1.5rem'}}>
                I am a fifth-semester Computer Science student at the University of North Sumatera with a passion for 
                Web Programming and Cybersecurity. Over the past two years, I have built web applications using PHP, 
                JavaScript, and PostgreSQL databases like Supabase and Neon.
              </p>
              <p style={{marginBottom: '1.5rem'}}>
                I have deepened my security skills through CTF challenges like Hack The Box's University CTF 2024 and 
                the national-level Cyber Strike Competition 1.0. I'm fascinated by ethical hacking and vulnerability 
                assessment, and I am committed to becoming a cybersecurity analyst who can proactively identify and 
                remediate threats.
              </p>
              <p style={{marginBottom: 0}}>
                In the long term, I aim to attain industry certifications such as OSCP and contribute to Indonesia's 
                digital safety by working on advanced penetration-testing teams.
              </p>
            </div>
            <div style={styles.aboutGrid}>
              <div style={styles.aboutCard}>
                <h3 style={styles.aboutCardTitle}>Education</h3>
                <p style={{color: '#d1d5db', margin: 0}}>
                  <strong>University of North Sumatera</strong><br />
                  Computer Science (5th Semester)<br />
                  Focus: Web Programming & Cybersecurity
                </p>
              </div>
              <div style={styles.aboutCard}>
                <h3 style={styles.aboutCardTitle}>Career Goals</h3>
                <p style={{color: '#d1d5db', margin: 0}}>
                  Aspiring Cybersecurity Analyst<br />
                  Target: OSCP Certification<br />
                  Vision: Contributing to Indonesia's digital safety
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                
                <div style={styles.projectHighlights}>
                  <h4 style={styles.projectHighlightTitle}>Key Highlights:</h4>
                  <ul style={styles.projectHighlightList}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i} style={styles.projectHighlightItem}>
                        <span style={styles.projectHighlightDot}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={styles.projectTechnologies}>
                  <h4 style={styles.projectTechTitle}>Technologies:</h4>
                  <div style={styles.projectTechList}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={styles.projectTechTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                >
                  <GithubIcon size={16} />
                  <span>View Code</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Skills & Expertise</h2>
          <div style={styles.skillsGrid}>
            {skills.map((skillCategory, index) => {
              const IconComponent = skillCategory.icon;
              return (
                <div key={index} style={styles.skillCard}>
                  <div style={styles.skillIcon}>
                    <IconComponent size={48} />
                  </div>
                  <h3 style={styles.skillTitle}>{skillCategory.category}</h3>
                  <ul style={styles.skillList}>
                    {skillCategory.items.map((skill, i) => (
                      <li key={i} style={styles.skillItem}>{skill}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Certifications & Achievements</h2>
          <div style={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} style={styles.certCard}>
                <div style={styles.certHeader}>
                  <Award size={24} style={styles.certIcon} />
                  <h3 style={styles.certTitle}>{cert.title}</h3>
                </div>
                <p style={styles.certDetail}><strong>Institution:</strong> {cert.institution}</p>
                <p style={styles.certDetail}><strong>Date:</strong> {cert.date}</p>
                <p style={styles.certAchievement}>{cert.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.contactContent}>
            <div style={styles.contactCard}>
              <p style={styles.contactDescription}>
                I'm always open to discussing cybersecurity, web development, or potential collaboration opportunities.
              </p>
              <div style={styles.contactGrid}>
                <a
                  href="https://github.com/FathurrahmanNasution"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{...styles.contactLink, ...styles.contactGithub}}
                >
                  <GithubIcon size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>© 2025 Fathurrahman Nasution. Built with React and CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;