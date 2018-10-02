import React from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import MenuBar from '../../components/Navigation/MenuBar/MenuBar';

const Layout = props => (
  <Aux>
    <div>
      <MenuBar />
    </div>
    <div>
      SideDrawer,Backdrop ##
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
