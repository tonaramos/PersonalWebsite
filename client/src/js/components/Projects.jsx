import React from 'react';
import PropTypes from 'prop-types';

function Projects({ list }) {
  const listOfProjects = list.map(project => (
    <div key={project.id}>
      {project.name}
      {project.summary}
      {project.description}
      {project.techStack}
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

Projects.propTypes = {
  list: PropTypes.any.isRequired,
};
