import React from 'react';
import classes from './Footer.css';
import Button from '../UI/Button/Button';

import Twitter from '../../assets/twitter-draw-logo.png';
import Facebook from '../../assets/facebook-1.png';
import Instagram from '../../assets/instagram-draw-logo.png';
import Linkedin from '../../assets/linkedin-draw-logo.png';
import Github from '../../assets/github-draw-logo.png';
import UpButton from '../../assets/upload.png';

function Footer() {
  return (
    <div id="More+" className={classes.Footer}>
      <Button>
        <img key="BackToTop" src={UpButton} alt="UpButton" className={classes.SocialMediaIcon} />
      </Button>
      {/* <div className={classes.Text}>
        Build with  love care and tender
      </div> */}
      <div className={classes.SocialMediaSection}>
        <a href="https://www.linkedin.com/in/tonaramos/">
          <img key="Linkedin" src={Linkedin} alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://github.com/tonaramos">
          <img key="Github" src={Github} alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://twitter.com/tonarms">
          <img key="Twitter" src={Twitter} alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://www.instagram.com/whatsmiusername/">
          <img key="Instagram" src={Instagram} alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://www.facebook.com/ToNa01">
          <img key="Facebook" src={Facebook} alt="pic" className={classes.SocialMediaIcon} />
        </a>
      </div>
      {/* <div className={classes.Text}>
        Link to Resume
      </div> */}
      <div className={classes.Text}>
      © 2018 Tonatiuh Ramos. Made in San Francisco.
      </div>
    </div>
  );
}

export default Footer;
