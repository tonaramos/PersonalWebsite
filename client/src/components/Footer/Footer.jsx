import React from 'react';
import classes from './Footer.css';
// import Segment from '../../hoc/Segment/Segment';
import Button from '../UI/Button/Button';

function Footer() {
  return (
    <div className={classes.Footer}>
      <Button>
        <div className={classes.ReturnButton}>
          {'/\\'}
        </div>
      </Button>
      <div>
        Build with  love care and tender
      </div>
      <div>
      these are my links from Facebook, linkedin, twitter, github, instagram. 
      </div>
      <div>
        Link to Resume
      </div>
      <div>
      © 2018 Tonatiuh Ramos. Made in San Francisco.
      </div>
    </div>
  );
}

export default Footer;
