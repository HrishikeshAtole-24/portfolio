import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true);
          aboutObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    return () => aboutObserver.disconnect();
  }, [isAnimated]);

  const technologies = [
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'CSS3', icon: '/icons/css.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextdotjs.svg' },
    { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
    { name: 'Express', icon: '/icons/express.svg' },
    {name:'Angular', icon: '/icons/angular.svg'},
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'MySQL', icon: '/icons/mysql.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Postman', icon: '/icons/postman.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
    { name: 'Tailwind', icon: '/icons/tailwindcss.svg' },
    { name: 'Vercel', icon: '/icons/vercel.svg' },
    { name: 'Supabase', icon: '/icons/supabase.svg' },
    { name: 'JIRA', icon: '/icons/jira.svg' },
    { name: 'Bitbucket', icon: '/icons/bitbucket.svg' } ,
    {name:'razorpay', icon: '/icons/razorpay.svg'},
  ];

  const personalInfo = [
    { label: 'Name:', value: 'Hrishikesh Atole' },
    { label: 'Age:', value: '24 Years' },
    { label: 'Phone:', value: '+91 7045215685' },
    { label: 'Email:', value: 'rishiatole4545@gmail.com' },
    { label: 'Address:', value: 'Mumbai, India' },
    { label: 'Freelance:', value: 'Available' }
  ];

  return (
    <section id="about" className="section">
      <h1 className={`about-title ${isAnimated ? 'animate' : ''}`}>About Me</h1>
      <div className="about-container">
        <div className={`about-left ${isAnimated ? 'animate' : ''}`}>
          <div className="technologies">
            <h3>Technologies I Work With</h3>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-icon">
                    <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`about-right ${isAnimated ? 'animate' : ''}`}>
          <div className="about-content">
            <h2>About Me</h2>
            <p className="about-description" style={{ textAlign: 'left' }}>
             Passionate Software Developer with 1+ year of experience building dynamic, responsive web apps using modern technologies.
            </p>
            <div className="personal-info">
              {personalInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
            <a 
              href="/hrishi_resume.pdf" 
              download="Hrishikesh_Atole_Resume.pdf"
              className="download-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
