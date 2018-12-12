import React from 'react';
import classes from './PhotoBackdrop.css';

function PhotoBackdrop() {
  return (
    <div className={classes.PhotoBackdrop}>
      <img key="Backdrop" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/A.jpg" alt="pic" />
    </div>
  );
}

export default PhotoBackdrop;
