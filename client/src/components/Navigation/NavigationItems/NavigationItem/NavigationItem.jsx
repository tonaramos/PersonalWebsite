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
  active: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default navigationItem;
