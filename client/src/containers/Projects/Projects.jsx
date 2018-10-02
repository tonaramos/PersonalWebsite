import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../../hoc/Segment/Segment';

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
    <Segment>
      <div className="projects">
        This is the Projects Section
        {listOfProjects}
      </div>
    </Segment>
  );
}

export default Projects;

Projects.defaultProps = {
  list: [{
    id: '0',
    name: 'My first project here',
    summary: 'Short description',
    description: 'Full description',
    techStack: ['Javascript'],
  }],
};

Projects.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
  })),
};
