import React from 'react';
import PropTypes from 'prop-types';
// import ScreenPic from '../../../assets/Screen.png';
import classes from './Project.css';
// import Aux from '../../hoc/Aux/Aux';

function Project({ project, image }) {
  return (
    <div className={classes.Project} key={project.id}>
      {/* <div className={classes.Image}> */}
      <img key="exImg" src={image} alt="pic" />
      {/* </div> */}
      <div className={classes.DescriptionContainer}>
        {/* <div className={classes.Text}> */}
        <p>
          {project.name}
        </p>
        <p>
          {project.summary}
        </p>
        <p className={classes.TextDescription}>
          {project.description}
        </p>
        <p>
          {project.techStack}
        </p>
      </div>
      {/* </div> */}
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
