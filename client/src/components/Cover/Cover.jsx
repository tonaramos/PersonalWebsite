import React from 'react';
import PropTypes from 'prop-types';
import classes from './Cover.css';
import Segment from '../../hoc/Segment/Segment';
import Button from '../UI/Button/Button';

function Cover() {
  return (
    <Segment>
      <div className={classes.Cover}>
        <p className={classes.NameTitle}>
          {'Hey, I\'m Tona!'}
        </p>
        <Button>
          {'Say Hello!'}
        </Button>
      </div>

    </Segment>
  );
}

export default Cover;

Cover.propTypes = {
  name: PropTypes.string.isRequired,
};
