import React from 'react';
import PropTypes from 'prop-types';

import classes from './MenuBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const menuBar = (props) => {
  const { drawerToggleClicked } = props;
  return (
    <header className={classes.MenuBar}>
      <Logo />
      <DrawerToggle clicked={drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};


menuBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default menuBar;
