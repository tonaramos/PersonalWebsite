import React from 'react';
import classes from './PhotoBackdrop.css';

import BackdropPic from '../../assets/A.jpg';

function PhotoBackdrop() {
  return (
    <div className={classes.PhotoBackdrop}>
      <img key="Backdrop" src={BackdropPic} alt="pic" />
    </div>
  );
}

export default PhotoBackdrop;
