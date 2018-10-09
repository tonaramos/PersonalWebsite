import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
  const { children, link, active } = props;
  return (
    <li className={classes.NavigationItem}>
      <a
        href={link}
        className={active ? classes.active : null}
      >
        {children}
      </a>
    </li>
  );
};

navigationItem.propTypes = {
  children: PropTypes.any.isRequired,
};

export default navigationItem;
