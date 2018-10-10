import React from 'react';
import PropTypes from 'prop-types';

import classes from './Project.css';
// import Aux from '../../hoc/Aux/Aux';

function Project({ project }) {
  return (
    <div className={classes.Project} key={project.id}>
      <div className={classes.Image}>
        Image
      </div>
      <div className={classes.Text}>
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
  );
}

export default Project;

Project.defaultProps = {
  project: [{
    id: '0',
    name: 'My first project here',
    summary: 'Short description',
    description: 'Full description',
    techStack: ['Javascript'],
  }],
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
  }),
};
