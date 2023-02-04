import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Resume from './Resume';

function Contact(props) {
  return (
    <div>
      <h1>Seek, and you will find:</h1>
      <p>
      I would love to hear from you! Whether you have a question, suggestion, or just want to say hello, please don't hesitate to reach out to me. You can contact me through the following methods:
      </p>
      <ul>
        <li>Shannon Yap</li>
        <li><a href="https://github.com/damnsemicolon" target="_blank">Visit my GitHub Profile</a></li>

        <li><a href="https://linkedin.com/in/shannonyap" target="blank">Visit my LinkedIn Page</a></li>
        <li><a href="mailto:shannoninengland@gmail.com" target="_blank">Send me an Email</a></li>
        <li><a href="tel:+44-7878-715906">Call me maybe at +44 (0) 7878-715906</a></li>
      </ul>
      
      <Link to="resume" role="button" className="btn-primary">
        Resume
      </Link>
    
      <Routes>
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default Contact;
