import React from 'react';
import PropTypes from 'prop-types';

function Projects({ list }) {
  const listOfProjects = list.map(project => (
    <div key={project.id} className="projectItem">
      <h1>
        {project.name}
      </h1>
      <h2>
        {project.summary}
      </h2>
      <h3>
        {project.description}
      </h3>
      <h2>
        {project.techStack}
      </h2>
    </div>
  ));
  return (
    <div className="projects">
      This is the Projects Section
      {listOfProjects}
    </div>
  );
}

export default Projects;

// Projects.propTypes = {
//   list: any,
// };
