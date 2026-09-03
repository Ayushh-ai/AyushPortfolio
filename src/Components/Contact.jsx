function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="contact-top">
          <span className="section-label">Get in touch</span>

          <span className="contact-number">07 / 07</span>
        </div>

        <div className="contact-content">
          <h2>
            Let’s build
            <br />
            <span>something useful.</span>
          </h2>

          <p>
            I’m open to opportunities where I can learn, contribute and grow
            as an IT professional.
          </p>

          <div className="contact-actions">
            {/* Replace the email below with your REAL email */}
            <a
              href="mailto:bisneayush@gmail.com"
              className="contact-main-button"
            >
              Email me
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="contact-links">
          {/* Replace these URLs with your real profiles */}

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>

          <a
            href="https://github.com/Ayushh-ai"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;