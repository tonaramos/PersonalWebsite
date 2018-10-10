import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = (props) => {
  const { children, clicked, btnType } = props;
  return (
    <button
      className={[classes.Button, classes[btnType]].join(' ')}
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
  btnType: PropTypes.any.isRequired,
};

export default button;
