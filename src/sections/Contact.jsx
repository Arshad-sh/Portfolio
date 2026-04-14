function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <h2>Let’s Connect & Build Something Amazing 🚀</h2>

        <p>
          I am actively looking for opportunities as a <b>Java Full Stack Developer / Frontend Developer</b>.
          Feel free to reach out for internships, full-time roles, or collaboration.
        </p>

        <div className="contact-grid">

          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:arshadshaikh0564@gmail.com">
              arshadshaikh0564@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <a href="tel:+919307016289">
              +91 9307016289
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-item linkedin">
            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/arshad8787/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-btn"
            >
              🔗 View My LinkedIn Profile
            </a>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <a
              href="https://github.com/Arshad-sh"
              target="_blank"
              rel="noreferrer"
            >
              View Projects
            </a>
          </div>

          {/* WhatsApp Hire Me */}
          <div className="contact-item whatsapp">
            <h3>WhatsApp</h3>

            <a
              href="https://wa.me/919307016289?text=Hi%20Arshad,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20hire%20you"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              💬 Hire Me on WhatsApp
            </a>
          </div>

        </div>

        <div className="availability">
          <p>🟢 Open to Work | Full-Time / Internship</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;