import { useEffect, useState } from 'react';

export default function ServicesSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true);
          servicesObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesObserver.observe(servicesSection);
    }

    return () => servicesObserver.disconnect();
  }, [isAnimated]);

  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'I build complete, end-to-end web solutions using powerful frontend and backend technologies. With frameworks like React.js and Angular, I develop responsive, user-friendly interfaces. On the backend, I use Java (Spring Boot) or Node.js to create secure, scalable applications with RESTful APIs for seamless communication.'
    },
    {
      title: 'Custom Website & Web App Development',
      description: 'I develop tailored websites and web apps that align with business goals—ranging from landing pages and admin dashboards to full-fledged enterprise systems. My solutions include user authentication, role-based access control, and interactive dashboards with real-time features using WebSockets.'
    },
    {
      title: 'Database Design & Management',
      description: 'I design efficient, scalable, and secure database architectures using both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) technologies. I ensure data integrity, normalization, and performance optimization using tools like DBeaver, Workbench, NeonDB, and Supabase for various applications.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="services-container">
        <h1 className={`services-title ${isAnimated ? 'animate' : ''}`}>Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${isAnimated ? 'animate' : ''}`}
              style={{ animationDelay: isAnimated ? `${300 + (index * 100)}ms` : '0ms' }}
            >
              <div className="service-icon">
                <span className="material-icons" style={{ fontSize: '3rem', color: '#667eea' }}>
                  {service.icon}
                </span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
