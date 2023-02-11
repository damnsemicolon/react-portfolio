import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact(props) {
  return (
    <div>
      <h1>Seek, and you will find:</h1>
      <p>
      I would love to hear from you! Whether you have a question, suggestion, or just want to say hello, please don't hesitate to reach out to me. You can contact me through the following methods:
      </p>
      <ul>
        <li>I'm Shannon Yap, you can find my online presence below:</li>
        <li><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/damnsemicolon" target="_blank" rel="noreferrer noopener">Visit my GitHub Profile</a></li>

        <li><FontAwesomeIcon icon={faLinkedin} /> <a href="https://linkedin.com/in/shannonyap" target="blank" rel="noreferrer noopener">Visit my LinkedIn Page</a></li>
        <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:shannoninengland@gmail.com" target="_blank" rel="noreferrer noopener">Send me an Email</a></li>
        <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+44-7878-715906">Call me maybe at +44 (0) 7878-715906</a></li>
      </ul>
      


    </div>
  );
}

export default Contact;
