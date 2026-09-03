function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            AYUSH<span>.</span>
          </a>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} Ayush Bisne. All rights reserved.
          </span>

          <span>
            Built with React + Vite
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;