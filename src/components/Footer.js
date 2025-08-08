export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Hrishikesh</div>
            <div className="footer-tagline">
              Crafting digital experiences with passion and precision. 
              Let&apos;s build something amazing together.
            </div>
          </div>
          
          <div className="copyright">
            <div className="copyright-text">
              <span>Made with</span>
              <span className="copyright-heart">
                <span className="material-icons">favorite</span>
              </span>
              <span>by Hrishikesh</span>
            </div>
            <div>
              <span>Copyright © </span>
              <span className="footer-year">{currentYear}</span>
              <span> | All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
