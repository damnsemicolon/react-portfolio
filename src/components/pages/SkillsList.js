import React, { useState } from 'react';

function SkillsList() {
  const [activeTab, setActiveTab] = useState('foundations');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <h1>Front-end Development Skills</h1>

    <section className="row mx-auto" style={{ width: '93%' }}>
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          <a
            className={`list-group-item list-group-item-action list-left text-center ${
              activeTab === 'foundations' ? 'active' : ''
            }`}
            id="list-foundations-list"
            data-toggle="list"
            href="#list-foundations"
            role="tab"
            aria-controls="foundations"
            onClick={() => handleTabClick('foundations')}
          >
            Front-End Foundations
          </a>
          <a
            className={`list-group-item list-group-item-action list-left text-center ${
              activeTab === 'frameworks' ? 'active' : ''
            }`}
            id="list-frameworks-list"
            data-toggle="list"
            href="#list-frameworks"
            role="tab"
            aria-controls="frameworks"
            onClick={() => handleTabClick('frameworks')}
          >
            Front-End Frameworks
          </a>
        </div>
      </div>
      <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div
            className={`tab-pane fade ${activeTab === 'foundations' ? 'show active' : ''}`}
            id="list-foundations"
            role="tabpanel"
            aria-labelledby="list-foundations-list">
            <ul className="list-group">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">UX / UI</li>
              <li className="list-group-item">Third-party APIs: JQuery & Bootstrap</li>
              <li className="list-group-item">Git & Github</li>
              <li className="list-group-item">Server-side APIs, AJAX, and JSON</li>
              <li className="list-group-item">Agile software development methodology</li>
            </ul>
          </div>

          <div
            className={`tab-pane fade ${activeTab === 'frameworks' ? 'show active' : ''}`}
            id="list-frameworks"
            role="tabpanel"
            aria-labelledby="list-frameworks-list">
            <ul className="list-group">
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">ES6</li>
              <li className="list-group-item">Test-driven development</li>
              <li className="list-group-item">Behavior-driven development</li>
              <li className="list-group-item">React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default SkillsList;
