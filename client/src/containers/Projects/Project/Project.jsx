import React from 'react';
import PropTypes from 'prop-types';
import classes from './Project.css';

function Project({ project, image }) {
  // console.log('The project key->', project);
  const techIconList = project.techStack.map((item) => {
    return <img key={item[1]} src={item[0]} alt="pic" className={classes.TechIcon} />;
  });
  return (
    <div className={classes.Project} key={project.id}>
      <div className={classes.Image}>
        <a href={project.webAddress} rel="noopener noreferrer" target="_blank">
          <img key="exImg" src={image} alt="pic" />
        </a>
      </div>
      <div className={classes.DescriptionContainer}>
        <div className={classes.Title}>
          {project.name}
        </div>
        <div className={classes.Subtitle}>
          {project.summary}
        </div>
        <div className={classes.Description}>
          {project.description}
        </div>
        <div className={classes.TechArea}>
          <div className={classes.Tech}>
            {techIconList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

Project.defaultProps = {
  // project: [{
  //   id: '0',
  //   name: 'My first project here',
  //   summary: 'Short description',
  //   description: 'Full description',
  //   techStack: ['Javascript'],
  // }],
};

Project.propTypes = {
  // project: PropTypes.shape({
  //   id: PropTypes.number,
  //   name: PropTypes.string,
  //   summary: PropTypes.string,
  //   description: PropTypes.string,
  //   techStack: PropTypes.arrayOf(PropTypes.string),
  // }),
};
