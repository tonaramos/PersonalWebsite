import React from 'react';
import classes from './MenuBar.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const menuBar = props => {
  const { drawerToggleClicked } = props;
  return (
    <header className={classes.MenuBar}>
    <Logo />
      <DrawerToggle clicked={drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default menuBar;
