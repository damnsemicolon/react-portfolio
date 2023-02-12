import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactButton from '../ContactButton';
function Contact(props) {
  return (
    <div>
      <h1>Seek, and you will find:</h1>
      <p>
      Hello there. My name is Shannon Yap. I'm from Hong Kong. I'm from a sales background with experiences in finance, compliances, marketing, and at one point even vineyard management. </p>
      <div className="text-center">
    <ContactButton />
    </div> 
    <br/>
      <p>
        I would love to hear from you! Whether you have a question, suggestion, or just want to say hello, please don't hesitate to reach out to me. You can contact me through the following methods:
      </p>
      <div className="contact-grid">
        <div className="contact-item">
          <FontAwesomeIcon icon={faGithub} size="4x" />
          <a href="https://github.com/damnsemicolon" target="_blank" rel="noreferrer noopener">Visit my GitHub Profile</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
          <a href="https://linkedin.com/in/shannonyap" target="blank" rel="noreferrer noopener">Visit my LinkedIn Page</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} size="4x" />
          <a href="mailto:shannoninengland@gmail.com" target="_blank" rel="noreferrer noopener">Send me an Email</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} size="4x" />
          <a href="tel:+44-7878-715906">Call me maybe at +44 (0) 7878-715906</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
