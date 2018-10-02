import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../../hoc/Segment/Segment';

function Cover({ name }) {
  return (
    <Segment>
      <div className="cover">
        <div className="coverTextArea">
          <div className="coverText">
            <p>
              {'Hello!'}
            </p>
            <p>
              {`my name is ${name}.`}
            </p>
            <p>
              {'I am a web-developer'}
            </p>
          </div>
        </div>
        <div className="coverImageContainer">
          <img alt="COVER PIC OF ME" />
        </div>
      </div>
    </Segment>
  );
}

export default Cover;

Cover.propTypes = {
  name: PropTypes.string.isRequired,
};
