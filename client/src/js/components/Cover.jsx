import React from 'react';
import PropTypes from 'prop-types';

function Cover({ name }) {
  return (
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
  );
}

export default Cover;

Cover.propTypes = {
  name: PropTypes.string.isRequired,
};
