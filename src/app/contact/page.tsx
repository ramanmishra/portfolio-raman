'use client';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <aside className="contact-sidebar">
                <h3 className="sidebar-title">contacts</h3>
                <ul className="contact-info">
                    <li>📧 raman.mishra7@gmail.com</li>
                    <li>📞 +49 160 8329271</li>
                </ul>
                <h3 className="sidebar-title">find-me-also-in</h3>
                <ul className="contact-links">
                    <li><a href="https://stackoverflow.com/users/8870132/raman-mishra">🔗 StackOverflow</a></li>
                    <li><a href="https://github.com/ramanmishra">🔗 Github</a></li>
                    <li><a href="https://x.com/ramanmishra7">🔗 X</a></li>
                    <li><a href="https://www.linkedin.com/in/raman-mishra-62627394/">🔗 LinkedIn</a></li>
                </ul>
            </aside>
            <div style={{ width: "80%" }}>
                <h3 className="sidebar-title">contact-form</h3>
                <main className="contact-main">
                    <form className="contact-form">
                        <label htmlFor="name">_name:</label>
                        <input id="name" type="text" placeholder="Your Name" />

                        <label htmlFor="email">_email:</label>
                        <input id="email" type="email" placeholder="Your Email" />

                        <label htmlFor="message">_message:</label>
                        <textarea id="message" placeholder="your message here ..." />

                        <button type="submit">submit-message</button>
                    </form>

                    <div className="contact-code">
                        <pre>
                            <code>
                                {`const button = document.querySelector('#sendBtn');

const message = {
  name: "Raman Mishra",
  email: "",
  message: "",
  date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
  form.send(message);
})`}
                            </code>
                        </pre>
                    </div>
                </main>
            </div>
        </div>
    );
}
