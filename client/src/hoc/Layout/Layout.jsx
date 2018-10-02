import React from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import MenuBar from '../../components/Navigation/MenuBar/MenuBar';

//   SideDrawer,Backdrop ## also go in this page along with the menuBar

const Layout = props => (
  <Aux>
    <MenuBar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
