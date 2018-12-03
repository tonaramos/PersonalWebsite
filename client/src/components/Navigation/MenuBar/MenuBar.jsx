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
      winPosition: 0,
      winInnerWidth: 0,
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
    const { innerHeight, innerWidth, scrollY } = window;
    const { winHeight, winInnerWidth } = this.state;
    if (innerHeight !== winHeight) {
      this.setState({ winHeight: innerHeight });
    }
    if (winInnerWidth !== innerWidth) {
      this.setState({ winInnerWidth: innerWidth });
    }
    this.setState({ winPosition: scrollY });
  }

  render() {
    const { winHeight, winPosition, winInnerWidth } = this.state;
    const { drawerToggleClicked } = this.props;
    let style = null;
    if ((winPosition >= winHeight * 1.18) && (winInnerWidth > 699)) {
      style = {
        backgroundColor: 'rgb(35, 123, 197)', // '#206DD0', #40A4c8
        backgroundImage: 'none',
      };
    }

    return (
      <header className={classes.MenuBar} style={style}>
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
