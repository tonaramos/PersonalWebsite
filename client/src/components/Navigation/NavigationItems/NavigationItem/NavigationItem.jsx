import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
  const { children, link, active } = props;
  return (
    <li className={classes.NavigationItem}>
      <div>
        {/* // href={link}
        // className={active ? classes.active : null}
      > */}
        {children}
      </div>
    </li>
  );
};

navigationItem.propTypes = {
  children: PropTypes.any.isRequired,
};

export default navigationItem;
