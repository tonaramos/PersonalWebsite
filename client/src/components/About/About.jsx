import React from 'react';
import classes from './About.css';
import Segment from '../../hoc/Segment/Segment';

function About() {
  return (
    <Segment>
      <div id="About" className={classes.About}>
        <div className={classes.AboutMe}>
          <div className={classes.Text}>
            <h1>
              About Me
            </h1>
            <p>
              {'I’m a programmer who values diversity, equality, and is close to family and nature. Initially programming Arduino boards and interested in becoming a Mechanical Engineer, I transitioned to Software Engineering and became a Full Stack Developer inspired by the agility of the work, the quick turn out, and the ability to reach many from their own devices. I firmly believe that the internet and the access to information can bring significant changes to the world and the cities that most need it by increasing awareness and education. Growing up in the California Central Valley and Mexico, I’m part of two cultures that I respect, love, and enjoy celebrating. Currently, in San Francisco, I’m lucky to be in a place where I’ve met people from all over the world, has incredible food and can practice multiple outdoor activities within a short drive. If you want to learn more about me or my work as a software engineer check out my projects, send me a message, or reach out through social media.'}
            </p>
          </div>
          <img key="exImg" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File20.jpg" alt="pic" className={classes.ProfileImage} />
        </div>
        <div className={classes.WhatsATona}>
          <div className={classes.Text}>
            <h2>
            What’s a Tōna
            </h2>
            <p>
              {'Tonatiuh (Pronounced: tone-ah-Tee-you) was one of my given names at birth. In Aztec mythology, Tonatiuh was the fifth sun and the leader of the skies. You have probably seen his image at the center of the Aztec calendar.'}
            </p>
          </div>
          <div className={classes.TonatiuhImageFrame}>
            <a href="https://en.wikipedia.org/wiki/T%C5%8Dnatiuh" rel="noopener noreferrer" target="_blank">
              <img key="exImg" src="https://s3-us-west-1.amazonaws.com/tonaramoswebsite/File27.jpg" alt="pic" />
            </a>
          </div>
        </div>
      </div>
    </Segment>
  );
}

export default About;
