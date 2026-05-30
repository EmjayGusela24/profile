import React from "react";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for handling form submission goes here
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>
            I am always open to discussing new projects, design ideas, or
            partnership opportunities.
          </p>
          <div className="info-links">
            <p>
              <svg
                className="social-link-icon"
                aria-hidden="true"
                focusable="false"
              >
                <use href="/icons.svg#social-icon" />
              </svg>
              <span className="sr-only">Email</span>
              {" "}
              <a href="mailto:emjaygusela@gmail.com">emjaygusela@gmail.com</a>
            </p>
            <p>
              <svg
                className="social-link-icon"
                aria-hidden="true"
                focusable="false"
              >
                <use href="/icons.svg#social-icon" />
              </svg>
              <span className="sr-only">LinkedIn</span>
              {" "}
              <a
                href="https://www.linkedin.com/in/mario-jiek-cris-gusela-674a81412/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
            <p>
              <svg
                className="social-link-icon"
                aria-hidden="true"
                focusable="false"
              >
                <use href="/icons.svg#github-icon" />
              </svg>
              <span className="sr-only">GitHub</span>
              {" "}
              <a
                href="https://github.com/EmjayGusela24"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </p>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {formSubmitted && (
            <p className="success-msg">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

