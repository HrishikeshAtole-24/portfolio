import { useEffect, useState } from 'react';

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Electronics and Telecommunication & minor in AI & ML",
      institution: "MCT's Rajiv Gandhi Institute of Technology",
      duration: "2020 - 2024",
      grade: "CGPA: 7.75/10",
      description: "Gained a strong foundation in core Electronics and Telecommunication subjects such as digital systems, signal processing, embedded systems, and communication engineering. Alongside, pursued a minor in Artificial Intelligence and Machine Learning, covering data science, neural networks, and deep learning. Developed a strong interest in software engineering, combining knowledge of hardware and intelligent systems for innovative solutions."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science Stream (PCMB)",
      institution: "Shailendra Education Society (Dhaisar)",
      duration: "2017 - 2020",
      grade: "Percentage: 61%",
      description: "Focused on Physics, Chemistry, Mathematics, and Biology with computer science as an additional subject."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "General Studies",
      institution: "St. Mary's High School (Mira)",
      duration: "2015 - 2016",
      grade: "Percentage: 72%",
      description: "Completed secondary education with distinction in mathematics and science subjects."
    }
  ];

  const experienceData = [
    // {
    //   title: "Full Stack Developer",
    //   company: "Tech Solutions Pvt Ltd",
    //   duration: "Jan 2023 - Present",
    //   location: "Mumbai, India",
    //   description: [
    //     "Developing scalable web applications using React.js, Node.js, and MongoDB",
    //     "Led a team of 3 developers on multiple client projects",
    //     "Implemented modern development practices and CI/CD pipelines",
    //     "Optimized application performance resulting in 40% faster load times"
    //   ]
    // },
    // {
    //   title: "Frontend Developer Intern",
    //   company: "Digital Innovations",
    //   duration: "Jun 2022 - Dec 2022",
    //   location: "Pune, India",
    //   description: [
    //     "Built responsive web interfaces using React.js and modern CSS frameworks",
    //     "Collaborated with UI/UX designers to implement pixel-perfect designs",
    //     "Developed reusable component library for consistent design system",
    //     "Participated in code reviews and agile development processes"
    //   ]
    // },
    {
      title: "Software Engineer",
      company: "Vernost Tech Ventures",
      duration: "2024 - 2026",
      location: "Mumbai, India",
      description: [
        "Working on Vepay, a fintech platform enabling seamless digital payments and transaction management",
        "Integrated multiple global and domestic payment gateways including Razorpay, Juspay, Urbanledger, CuracaoPay, theMap, Payler, and Checkout",
    "Built and maintained APIs for payment processing, transaction tracking, and settlement reconciliation",
    "Ensured PCI-DSS compliance and implemented secure tokenization for sensitive user data",
    "Collaborated with cross-functional teams to deliver high-performance, real-time fintech features"
  ]
    }
  ];

return (
    <section id="education" className="section education-section">
        <div className="container">
            <h1 className={`education-title ${isVisible ? 'animate' : ''}`}>
                Background
            </h1>
            
            <div className="background-container">
                {/* Education Section */}
                <div className="education-block">
                    <h2 className={`section-subtitle ${isVisible ? 'animate' : ''}`}>
                        Education
                    </h2>
                    
                    <div className="education-cards">
                        {educationData.map((item, index) => (
                            <div key={index} className={`education-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="education-header">
                                    <h3 className="institution-name">{item.institution}</h3>
                                    <span className="duration-badge">{item.duration}</span>
                                </div>
                                <p className="grade-info">{item.grade}</p>
                                <h4 className="degree-name">{item.degree}</h4>
                                <p className="education-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="divider-line"></div>

                {/* Experience Section */}
                <div className="experience-block">
                    <h2 className={`section-subtitle ${isVisible ? 'animate' : ''}`}>
                        Experience
                    </h2>
                    
                    <div className="experience-cards">
                        {experienceData.map((item, index) => (
                            <div key={index} className={`experience-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${(index + 3) * 0.2}s` }}>
                                <h3 className="job-title">{item.title}</h3>
                               <i><h4 className="company-name">{item.company}</h4></i>
                               
                                <ul className="experience-description">
                                    {item.description.map((point, pointIndex) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                </ul>
                                 <div className="badge-row">
                                    <span className="badge-left">{item.duration}</span>
                                    <span className="badge-right">{item.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Resume Download Section */}
            <div className="resume-download-section" style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a 
                    href="/hrishi_resume.pdf" 
                    download="Hrishikesh_Atole_Resume.pdf"
                    className="download-resume-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="material-icons" style={{ marginRight: '0.5rem' }}>download</span>
                    Download Resume
                </a>
            </div>
        </div>
        <style jsx>{`
            .education-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 0.8rem;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .institution-name {
                font-size: 1.2rem;
                font-weight: 700;
                color: #ffffff;
                margin: 0;
                text-align: left;
                flex: 1;
                line-height: 1.3;
            }
            
            .duration-badge {
                background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                color: #e2e8f0;
                padding: 0.4rem 1rem;
                border-radius: 6px;
                font-size: 0.8rem;
                font-weight: 600;
                white-space: nowrap;
                border: 1px solid #475569;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            }
            
            .grade-info {
                font-size: 1rem;
                color: #f8fafc;
                font-weight: 600;
                margin: 0 0 0.8rem 0;
                text-align: left;
                padding: 0.3rem 0.8rem;
                background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                border-radius: 4px;
                display: inline-block;
                border: 1px solid #ef4444;
            }
            
            .degree-name {
                font-size: 1.1rem;
                font-weight: 600;
                color: #94a3b8;
                margin: 0 0 1rem 0;
                text-align: left;
            }
            
            .education-description {
                font-size: 0.95rem;
                line-height: 1.6;
                color: #cbd5e1;
                margin: 0;
                text-align: left;
            }
            
            .badge-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                border-radius: 6px;
                padding: 0.5em 1.2em;
                margin: 0.7em 0 1em 0;
                font-size: 0.9em;
                font-weight: 500;
                border: 1px solid #475569;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            }
            .badge-left {
                color: #e2e8f0;
                font-weight: 600;
            }
            .badge-right {
                color: #94a3b8;
                font-weight: 500;
            }
            
            .download-resume-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, rgb(71, 85, 105) 0%, rgb(51, 65, 85) 100%);
                color: rgb(226, 232, 240);
                padding: 1rem 2rem;
                border-radius: 8px;
                text-decoration: none;
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
                border: 1px solid rgb(71, 85, 105);
                cursor: pointer;
                text-transform: uppercase;
                letter-spacing: 1px;
                position: relative;
                overflow: hidden;
            }
            
            .download-resume-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.2), transparent);
                transition: left 0.5s ease;
            }
            
            .download-resume-btn:hover::before {
                left: 100%;
            }
            
            .download-resume-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
                background: linear-gradient(135deg, rgb(51, 65, 85) 0%, rgb(30, 41, 59) 100%);
            }
            
            .download-resume-btn:active {
                transform: translateY(-1px);
            }
        `}</style>
    </section>
);
}
