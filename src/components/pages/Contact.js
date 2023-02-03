import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Resume';

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
      Checklist
      </p>
      <ul>
        <li> Your name</li>
        <li>[ ] GitHub Profile</li>
        <li>[ ] LinkedIn Page</li>
        <li>[ ] Email Address</li>
        <li>[ ] Phone Number - (optional)</li>
      </ul>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
