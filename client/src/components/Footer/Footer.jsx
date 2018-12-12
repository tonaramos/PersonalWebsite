import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import classes from './Footer.css';
import Button from '../UI/Button/Button';

function Footer() {
  return (
    <div id="Más+" className={classes.Footer}>
      <Button>
        <NavLink
          to={{
            // pathname: '/Home',
            hash: 'Home',
          }}
          scroll={(el) => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          <img key="BackToTop" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/upload.png" alt="UpButton" className={classes.SocialMediaIcon} />
        </NavLink>
      </Button>
      <div className={classes.SocialMediaSection}>
        <a href="https://www.linkedin.com/in/tonaramos/" rel="noopener noreferrer" target="_blank">
          <img key="Linkedin" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/linkedin-draw-logo.png" alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://github.com/tonaramos" rel="noopener noreferrer" target="_blank">
          <img key="Github" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/github-draw-logo.png" alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://twitter.com/tonarms" rel="noopener noreferrer" target="_blank">
          <img key="Twitter" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/twitter-draw-logo.png" alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://www.instagram.com/whatsmiusername/" rel="noopener noreferrer" target="_blank">
          <img key="Instagram" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/instagram-draw-logo.png" alt="pic" className={classes.SocialMediaIcon} />
        </a>
        <a href="https://www.facebook.com/ToNa01" rel="noopener noreferrer" target="_blank">
          <img key="Facebook" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/facebook-1.png" alt="pic" className={classes.SocialMediaIcon} />
        </a>
      </div>
      <div className={classes.Text}>
        <p>
          © 2018 Tonatiuh Ramos.
        </p>
        <p>
          Made in San Francisco.
        </p>
        <p>
          v1.0 - 18.12
        </p>
      </div>
    </div>
  );
}

export default Footer;
