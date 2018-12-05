import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import classes from './Cover.css';
import Segment from '../../hoc/Segment/Segment';
import Button from '../UI/Button/Button';

function Cover() {
  return (
    <Segment>
      <div id="Home" className={classes.Cover}>
        <p className={classes.NameTitle}>
          {'Hey, I\'m Tona!'}
        </p>
        <Button>
          <NavLink
            to={{
              // pathname: '/Contact',
              hash: 'Contact',
            }}
            scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
          >
            {'- Say Hello -'}
          </NavLink>
        </Button>
      </div>

    </Segment>
  );
}

export default Cover;

Cover.propTypes = {
  // name: PropTypes.string.isRequired,
};
