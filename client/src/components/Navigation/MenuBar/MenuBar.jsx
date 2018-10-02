import React from 'react';
import classes from './MenuBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
// import drawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const menuBar = props => {
  const { drawerToggleClicked } = props;
  return (
    <header className={classes.MenuBar}>
    HELL this is an item in the MenuBar
      {/* <DrawerToggle clicked={drawerToggleClicked} /> */}
      <div className={classes.Logo}>
        {/* <Logo /> */}
        Here will be the logo
      </div>
      <nav className={classes.DesktopOnly}>
        {/* <NavigationItems /> */}
      </nav>
    </header>
  )
}

export default menuBar;


/*
    <div className="menuBar">
        <li className="menuItem">
          Home
        </li>
        <li className="menuItem">
          Projects
        </li>
        <li className="menuItem">
          About
        </li>
        <li className="menuItem">
          Contact
        </li>
      </div>
    );
*/ 