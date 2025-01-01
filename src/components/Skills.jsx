import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './CSS/Skills.css';

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Ziad Elsharkawy - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>
        <div className="skills-right mb-1">
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              <i
                className="devicon-bootstrap-plain colored"
                title="Bootstrap"
              ></i>

            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-tailwindcss-plain colored"
                title="Tailwind"
              ></i>

              <i
                className="devicon-materialui-plain colored"
                title="Material Ui"
              ></i>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
              <i
                className="devicon-typescript-plain colored"
                title="typeScript"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                class="devicon-nextjs-original-wordmark colored"
                title="Next.js"
              ></i>
              <i className="devicon-sass-original colored" title="Sass"></i>
              <i className="devicon-redux-original colored" title="Redux"></i>
              <i class="devicon-vuejs-plain-wordmark colored" title="vue"></i>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
