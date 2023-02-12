import React from "react";

import bootstrap from '../../assets/projects/bootstrap-portfolio.png';
import codeQuiz from '../../assets/projects/code-quiz.jpg';
import htmlCss from '../../assets/projects/html-css-portfolio.png';
import password from '../../assets/projects/password-generator.jpg';
import readME from '../../assets/projects/read-me-generator.png';
import weather from '../../assets/projects/weather-dashboard.png';
import workday from '../../assets/projects/workday-scheduler.png';
import weatherpick from '../../assets/projects/weather-pickmeup.png';

const projects = [  
  {
    name: "Bootstrap Portfolio",
    description: "A Bootstrap-powered portfolio page created by using bootstrap and custom CSS",
    image: bootstrap,
    deployed: "https://damnsemicolon.github.io/bootstrap-portfolio-shannon"
  },
  {
    name: "Code-Quiz",
    description: "A fun javascript timed-quiz made with HTML, CSS, JavaScript and Web API",
    image: codeQuiz,
    deployed: "https://damnsemicolon.github.io/code-quiz-shannon/"
  },
  {
    name: "HTML & CSS Portfolio",
    description: "Portfolio page to practice newly learned CSS Flexbox, media queries, CSS variables, and more.",
    image: htmlCss,
    deployed: "https://damnsemicolon.github.io/portfolio-beginner/"
  },
  {
    name: "PasswordGenerator",
    description: "An application that generates a random password based on the criteria(s) selected",
    image: password,
    deployed: "https://damnsemicolon.github.io/password-generator-shannon"
  },
  {
    name: "ReadME Generator",
    description: "Use Node.js to quickly create a README tailored for YOUR project",
    image: readME,
    deployed: "https://github.com/damnsemicolon/readme-generator-shannon"
  },
  {
    name: "Weather Dashboard",
    description: "Weather App developed with JavaScript with API Calls. Input your city and get 5-days Weather Forecast",
    image: weather,
    deployed: "https://damnsemicolon.github.io/weather-dashboard-shannon"
  },
  {
    name: "Workday Scheduler",
    description: "Day-Scheduler made with HTML, CSS, JavaScript and Third-Party API - jQuery",
    image: workday,
    deployed: "https://damnsemicolon.github.io/work-day-scheduler-shannon"
  },
  {
    name: "Weather Pick-Me-Up",
    description: "Application using OpenMeteo and GIPHI API, developed in group effort",
    image: weatherpick,
    deployed: "https://stevelab1.github.io/weather-pickmeup/"
  }
  ];

function Project() {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>
        Here on this page, you will find a showcase of some of my recent projects that demonstrate my skills and experience in various programming languages and technologies.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", height: "100vh" }}>
      {projects.map(project => (
        <div key={project.name}>
          <div className="card" style={{ width: "18rem", marginTop: "15px"}}>
            <img
              className="card-img-top"
              src={project.image}
              alt={project.name}
              style={{ height: "18rem", objectFit: "cover", border: "1px solid gray" }}
            />
            <div className="card-body">
                  <strong>{project.name}</strong><br/>
                  {project.description}<br/>
                <a
                  href={project.deployed}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ marginTop: "10px" }}
                >
                  Check it out
                </a>

            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}


export default Project;
