import React from 'react';
import PropTypes from 'prop-types';

import classes from './Projects.css';
import Segment from '../../hoc/Segment/Segment';
import Project from './Project/Project';

function Projects({ list }) {
  const listOfProjects = list.map(data => (
    <Project project={data} image={data.image} key={data.id + data.name} />
  ));
  return (
    <Segment>
      <div className={classes.ProjectSection}>
        <div className={classes.SectionTitle}>
          Projects
        </div>
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
