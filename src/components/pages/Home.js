import React from "react";
import { Jumbotron, Container, Button } from 'react-bootstrap'
import avatar from '../../assets/projects/avatar.jpg';
import ContactModal from '../ContactButton'

function Home() {
  return (
    <div>
      <Jumbotron>

        <div>
          <img
            className="avatar"
            src={avatar}
          />
        </div>
        <h1>Shannon's Portfolio</h1>
        <p>
          This is my test portfolio utilizing React.<br />
          Hopefully everything will look right. 🤞
        </p>

        <p>If you would like to share an idea, mentor me, sponsor me, <br />or simply connect with me, please contact me below:
        </p>
      <ContactModal />

      </Jumbotron>
    </div>
  );
}

export default Home;
