import { useEffect, useState } from 'react';

export default function PortfolioSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const portfolioObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true);
          portfolioObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioObserver.observe(portfolioSection);
    }

    return () => portfolioObserver.disconnect();
  }, [isAnimated]);

  const portfolioItems = [
    {
      title: 'Video Platform',
      description: 'A modern video streaming platform with interactive features and responsive design.',
      url: 'https://www.youtube.com',
      preview: 'https://www.youtube.com'
    },
    {
      title: 'Development Platform',
      description: 'A collaborative development platform for version control and project management.',
      url: 'https://www.github.com',
      preview: 'https://www.github.com'
    },
    {
      title: 'Search Engine',
      description: 'A powerful search engine with advanced algorithms and user-friendly interface.',
      url: 'https://www.google.com',
      preview: 'https://www.google.com'
    },
    {
      title: 'Knowledge Base',
      description: 'A comprehensive knowledge management system with collaborative editing features.',
      url: 'https://www.wikipedia.org',
      preview: 'https://www.wikipedia.org'
    },
    {
      title: 'Q&A Platform',
      description: 'A community-driven question and answer platform for developers and programmers.',
      url: 'https://www.stackoverflow.com',
      preview: 'https://www.stackoverflow.com'
    },
    {
      title: 'Code Playground',
      description: 'An online code editor and playground for front-end developers and designers.',
      url: 'https://www.codepen.io',
      preview: 'https://www.codepen.io'
    }
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="portfolio" className="section">
      <div className="portfolio-container">
        <h1 className={`portfolio-title ${isAnimated ? 'animate' : ''}`}>Portfolio</h1>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className={`portfolio-card ${isAnimated ? 'animate' : ''}`}
              style={{ animationDelay: isAnimated ? `${300 + (index * 150)}ms` : '0ms' }}
              onClick={() => handleCardClick(item.url)}
            >
              <div className="portfolio-preview">
                <iframe 
                  className="portfolio-iframe" 
                  src={item.preview} 
                  title={item.title}
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <div className="portfolio-overlay-icon">
                      <span className="material-icons">visibility</span>
                    </div>
                    <div className="portfolio-overlay-text">View Project</div>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title-card">{item.title}</h3>
                <p className="portfolio-description" style={{ textAlign: 'left' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
