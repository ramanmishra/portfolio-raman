'use client';
import { FormEvent, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaStackOverflow, FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formActionUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL || '';
  const nameFieldId = process.env.NEXT_PUBLIC_GOOGLE_FORM_NAME_FIELD || '';
  const emailFieldId = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL_FIELD || '';
  const phoneFieldId = process.env.NEXT_PUBLIC_GOOGLE_FORM_PHONE_FIELD || '';
  const commentFieldId = process.env.NEXT_PUBLIC_GOOGLE_FORM_COMMENT_FIELD || '';

  const isConfigured = Boolean(formActionUrl && nameFieldId && emailFieldId);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!isConfigured) {
      event.preventDefault();
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <div className="contact-container">
      <aside className="contact-sidebar">
        <h3 className="sidebar-title">contact</h3>
        <ul className="contact-links">
          <li>
            <span className="contact-label">email</span>
            <a href="mailto:raman.mishra7@gmail.com">raman.mishra7@gmail.com</a>
          </li>
          <li>
            <span className="contact-label">phone</span>
            <a href="tel:+491608329271">+49 160 8329271</a>
          </li>
          <li>
            <span className="contact-label">location</span>
            <span>Düsseldorf, Germany</span>
          </li>
        </ul>
        <h3 className="sidebar-title">profiles</h3>
        <ul className="contact-profile-links">
          <li>
            <a
              href="https://www.linkedin.com/in/raman-mishra-62627394/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ramanmishra"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/8870132/raman-mishra"
              target="_blank"
              rel="noreferrer"
              aria-label="Stack Overflow"
              title="Stack Overflow"
            >
              <FaStackOverflow />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ramanmishra7"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              title="X"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </aside>

      <div className="contact-content">
        <div className="sidebar-title">contact.raman</div>
        <main className="contact-main">
          <div className="contact-main-grid">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              action={formActionUrl}
              method="POST"
              target="contact-form-submit-target"
            >
              <label htmlFor="name">_name:</label>
              <input
                id="name"
                name={nameFieldId}
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />

              <label htmlFor="email">_email:</label>
              <input
                id="email"
                name={emailFieldId}
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label htmlFor="phone">_phone-number:</label>
              <input
                id="phone"
                name={phoneFieldId}
                type="tel"
                placeholder="Your Phone Number (optional)"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />

              <label htmlFor="comment">_message:</label>
              <textarea
                id="comment"
                name={commentFieldId}
                placeholder="Role, company, or message"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />

              <button type="submit">submit-message</button>
              {status === 'success' && (
                <p className="contact-form-status success">message-submitted</p>
              )}
              {status === 'error' && (
                <p className="contact-form-status error">
                  failed-to-send-message. check-google-form-config (action-url + required field ids).
                </p>
              )}
            </form>

            <section className="contact-intro-panel">
              <h1 className="contact-heading">Let&apos;s connect</h1>
              <p className="contact-intro-text">
                Open to senior backend engineering opportunities and technical
                conversations around Java, Spring Boot, Scala, Kafka, and
                distributed systems.
              </p>
            </section>
          </div>

          <iframe
            name="contact-form-submit-target"
            title="contact-form-submit-target"
            style={{ display: 'none' }}
          />
        </main>
      </div>
    </div>
  );
}
