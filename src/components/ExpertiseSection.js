import { useEffect, useState } from 'react';

export default function ExpertiseSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const expertiseObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true);
          expertiseObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const expertiseSection = document.getElementById('expertise');
    if (expertiseSection) {
      expertiseObserver.observe(expertiseSection);
    }

    return () => expertiseObserver.disconnect();
  }, [isAnimated]);

  const expertiseData = [
    {
      title: 'Full-Stack Development',
      description: 'I specialize in building complete web applications using technologies like Java, React.js, Angular, Node.js, and Express.js. From creating responsive frontends to building robust backends and integrating APIs, I handle the entire development cycle efficiently.'
    },
    {
      title: 'JIRA & Bitbucket',
      description: 'I’ve used JIRA for managing agile workflows, tracking bugs, and sprint planning. Bitbucket has been part of my version control and code review workflow, especially when working in teams using Git-based repositories.'
    },
    {
      title: 'GitHub',
      description: 'GitHub is my go-to platform for managing source code, collaborating on projects, and maintaining clean version history. I frequently use pull requests, issue tracking, and GitHub Actions for continuous integration.'
    },
    {
      title: 'Database Management',
      description: 'I\'m experienced with both relational and NoSQL databases. I use MySQL for structured data, often with Workbench or DBeaver for visualization and queries. I also work with MongoDB for flexible, document-based storage. For cloud-native solutions, I use NeonDB (PostgreSQL) and Supabase, a Firebase alternative that instantly generates APIs.'
    },
    {
      title: 'Payment Integration',
      description: 'I’ve integrated various payment gateways into web applications, ensuring secure and smooth transactions. These include Razorpay and Urbanledger for Indian markets, and TheMap, CuracaoPay, Payler, and Checkout.com for handling international payments, supporting multiple currencies and compliance standards.'
    }
  ];

  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <h2 className={`expertise-title ${isAnimated ? 'animate' : ''}`}>
          My Expertise
        </h2>
        
        <div className={`expertise-grid ${isAnimated ? 'animate' : ''}`}>
          {expertiseData.map((item, index) => (
            <div 
              key={index} 
              className={`expertise-card ${isAnimated ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="expertise-card-title">{item.title}</h3>
              <p className="expertise-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
