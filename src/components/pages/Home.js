import React from "react";
import About from "./About"
import { Jumbotron, Container, Button } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <h1>Welcome to my coding journey</h1>
      <p>
        Hello, welcome! You have successfully loaded my website.
        (Pats myself on the back).
      </p>
 
     <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
    </div>
  );
}

export default Home;
