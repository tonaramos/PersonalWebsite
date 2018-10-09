import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../Aux/Aux';
import classes from './Segment.css';

const segment = (props) => {
  const { children } = props;
  return (
    <Aux>
      <div className={classes.Segment}>
        {children}
      </div>
    </Aux>
  );
};

segment.propTypes = {
  children: PropTypes.any.isRequired,
};

export default segment;
