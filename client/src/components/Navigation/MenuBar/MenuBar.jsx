import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './MenuBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class menuBar extends Component {
  // { drawerToggleClicked } = props;
  constructor(props) {
    super(props);
    this.state = {
      winHeight: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { innerHeight, screenY, scrollY } = window;
    const { winHeight } = this.state;
    if (innerHeight !== winHeight) {
      this.setState({
        winHeight: innerHeight,
      });
    }
    console.log('scrollY-> ', scrollY);
    console.log('screenY-> ', screenY);
  }

  render() {
    const { winHeight } = this.state;
    const { drawerToggleClicked } = this.props;
    console.log('this is the winHeight --->> ', winHeight);
    const styleRed = {
      backgroundColor: 'red',
      backgroundImage: 'none',
    };

    return (
      <header className={classes.MenuBar} style={styleRed}>
        <Logo />
        <DrawerToggle clicked={drawerToggleClicked} />
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    );
  }
}


menuBar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default menuBar;
