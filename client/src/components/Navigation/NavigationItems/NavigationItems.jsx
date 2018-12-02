import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavLink
      to={{
        // pathname: 'Home',
        hash: 'Home',
      }}
      // exact
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        Home
      </NavigationItem>
    </NavLink>
    <NavLink
      to={{
        // pathname: '',
        hash: 'About',
      }}
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        About
      </NavigationItem>
    </NavLink>
    <NavLink
      to={{
        // pathname: '/Projects',
        hash: 'Projects',
        // search: '?project-search',
      }}
      // exact
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        Projects
      </NavigationItem>
    </NavLink>
    <NavLink
      to={{
        // pathname: '/Gallery',
        hash: 'Gallery',
        // search: '?Gallery-Search',
      }}
      // exact
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        Gallery
      </NavigationItem>
    </NavLink>
    <NavLink
      to={{
        // pathname: '/Contact',
        hash: 'Contact',
      }}
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        Contact
      </NavigationItem>
    </NavLink>
    <NavLink
      to={{
        // pathname: '/More+',
        hash: 'More+',
      }}
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
    >
      <NavigationItem>
        More+
      </NavigationItem>
    </NavLink>
  </ul>
);

export default navigationItems;
