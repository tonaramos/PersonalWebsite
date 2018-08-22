import React from 'react';
import PropTypes from 'prop-types';

function Cover({ name }) {
  return (
    <div className="cover">
      This is the Cover Section
      {`Hello! /n my name is ${name}`}
    </div>
  );
}

export default Cover;

Cover.propTypes = {
  name: PropTypes.string.isRequired,
};
