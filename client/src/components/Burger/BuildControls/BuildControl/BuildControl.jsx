import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.css';

const buildControl = (props) => {
  const { label } = props;
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>
        {label}
      </div>
      <button type="button" className={classes.Less}>
        Less
      </button>
      <button type="button" className={classes.More}>
        More
      </button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
};

export default buildControl;
