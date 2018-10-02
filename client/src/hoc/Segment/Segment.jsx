import React from 'react';
import Aux from '../Aux/Aux';
import classes from './Segment.css';

const segment = props => (
  <Aux>
    <div className={classes.Segment}>
      {props.children}
    </div>
  </Aux>
);

export default segment;
