import React from 'react';
import PropTypes from 'prop-types';

import classes from './Projects.css';
import Segment from '../../hoc/Segment/Segment';
import Project from './Project/Project';
// import Aux from '../../hoc/Aux/Aux';

function Projects({ list }) {
  const listOfProjects = list.map(project => (
    <div className={classes.Project}>
      <div className={classes.Image}>
        Image
      </div>
      <div key={project.id} className={classes.Text}>
        <h1>
          {project.name}
        </h1>
        <h3>
          {project.summary}
        </h3>
        <h4 className={classes.TextDescription}>
          {project.description}
        </h4>
        <h2>
          {project.techStack}
        </h2>
      </div>
    </div>
  ));
  return (
    <Segment>
      <div className={classes.ProjectSection}>
        <h1>
          Projects
        </h1>
        <div className={classes.ProjectsList}>
          {listOfProjects}
        </div>
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
