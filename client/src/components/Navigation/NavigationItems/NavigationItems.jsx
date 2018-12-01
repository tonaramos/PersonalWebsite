import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <Link
      to="/#/Home"
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem active>
        Home
      </NavigationItem>
    </Link>
    <NavigationItem>
      <Link
        to="/#/About"
        scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
      >
        About
      </Link>
    </NavigationItem>
    <Link
      to="/#/Projects"
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        Projects
      </NavigationItem>
    </Link>
    <Link
      to="/#/Gallery"
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        Gallery
      </NavigationItem>
    </Link>
    <Link
      to="/#/Contact"
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        Contact
      </NavigationItem>
    </Link>
  </ul>
);

export default navigationItems;
