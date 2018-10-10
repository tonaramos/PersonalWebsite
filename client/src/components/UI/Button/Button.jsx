import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = (props) => {
  const { children, clicked } = props;
  return (
    <button
      className={classes.Button}
      onClick={clicked}
      type="button"
    >
      {children}
    </button>
  );
};

button.propTypes = {
  children: PropTypes.any.isRequired,
  clicked: PropTypes.any.isRequired,
};

export default button;
