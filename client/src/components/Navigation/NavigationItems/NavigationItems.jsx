import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

//  link='/'   for each navigation item was deleted. Need to be reinstated.

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem active>
      <Link to="/Home">
        Home
      </Link>
    </NavigationItem>
    <NavigationItem>
      <Link smooth to="/Projects">
        Projects
      </Link>
    </NavigationItem>
    <NavigationItem>
      About
    </NavigationItem>
    <NavigationItem>
      Gallery
    </NavigationItem>
    <NavigationItem>
      Contact
    </NavigationItem>
  </ul>
);

export default navigationItems;
