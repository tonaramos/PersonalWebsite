import React from 'react';
import classes from './Backdrop.css';

import backdropPic from '../../assets/A.jpg';

function Backdrop() {
  return (
    <div className={classes.Backdrop}>
      <img key="Backdrop" src={backdropPic} alt="pic" />
    </div>
  );
}

export default Backdrop;
