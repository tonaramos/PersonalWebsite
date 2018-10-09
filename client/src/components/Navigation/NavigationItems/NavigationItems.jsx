import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

//  link='/'   for each navigation item was deleted. Need to be reinstated.

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem active>
      Home
    </NavigationItem>
    <NavigationItem>
      Projects
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
