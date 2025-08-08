import { useEffect, useState } from 'react';

export default function ContactSection() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true);
          contactObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactObserver.observe(contactSection);
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn?.classList.add('show');
      } else {
        scrollToTopBtn?.classList.remove('show');
      }
    };

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    scrollToTopBtn?.addEventListener('click', handleScrollToTop);

    return () => {
      contactObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      scrollToTopBtn?.removeEventListener('click', handleScrollToTop);
    };
  }, [isAnimated]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-container">
          {/* Left Side - Contact Form */}
          <div className={`contact-form-wrapper ${isAnimated ? 'animate' : ''}`}>
            <div className="contact-form">
              <h3>Send Message</h3>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`submit-status ${submitStatus.type}`}>
                    <span className="material-icons">
                      {submitStatus.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    {submitStatus.message}
                  </div>
                )}
                
                <button type="submit" className="send-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="material-icons spinning">refresh</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-icons">send</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className={`contact-info-wrapper ${isAnimated ? 'animate' : ''}`}>
            <div className="contact-info">
              <h3>Contact Details</h3>
              
              {/* Contact Details in Compact Grid */}
              <div className="contact-details-grid">
                <div className="contact-detail-card">
                  <div className="contact-icon-small">
                    <span className="material-icons">email</span>
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">hrishi@example.com</span>
                  </div>
                </div>
                
                <div className="contact-detail-card">
                  <div className="contact-icon-small">
                    <span className="material-icons">phone</span>
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 9876543210</span>
                  </div>
                </div>
                
                <div className="contact-detail-card">
                  <div className="contact-icon-small">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Mumbai, India</span>
                  </div>
                </div>
              </div>
              
              {/* Social Media Section - Compact */}
              <div className="social-media-compact">
                <h4>Connect With Me</h4>
                <div className="social-icons-compact">
                  <a href="https://linkedin.com/in/hrishi" target="_blank" rel="noopener noreferrer" className="social-link-compact linkedin" title="LinkedIn">
                    <span className="material-icons">work</span>
                  </a>
                  <a href="https://github.com/hrishi" target="_blank" rel="noopener noreferrer" className="social-link-compact github" title="GitHub">
                    <span className="material-icons">code</span>
                  </a>
                  <a href="https://twitter.com/hrishi" target="_blank" rel="noopener noreferrer" className="social-link-compact twitter" title="Twitter">
                    <span className="material-icons">alternate_email</span>
                  </a>
                  <a href="https://instagram.com/hrishi" target="_blank" rel="noopener noreferrer" className="social-link-compact instagram" title="Instagram">
                    <span className="material-icons">photo_camera</span>
                  </a>
                  <a href="mailto:hrishi@example.com" className="social-link-compact email" title="Email">
                    <span className="material-icons">mail</span>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-link-compact whatsapp" title="WhatsApp">
                    <span className="material-icons">chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
