import React from 'react';
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

export default segment;
