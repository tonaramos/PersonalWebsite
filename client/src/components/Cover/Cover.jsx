import React from 'react';
import PropTypes from 'prop-types';

import classes from './Cover.css';
import Segment from '../../hoc/Segment/Segment';
import Button from '../UI/Button/Button';

function Cover({ name }) {
  return (
    <Segment>
      <div className={classes.Cover}>
        <p className={classes.NameTitle}>
          {`Hey, I'm ${name}!`}
        </p>
        <p className={classes.ShortIntro}>
          {'a full stack software engineer'}
        </p>
        <p className={classes.ShortIntro}>
          {'creating capable websites and tools.'}
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
