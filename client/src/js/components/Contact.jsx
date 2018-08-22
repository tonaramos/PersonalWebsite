import React from 'react';
import PropTypes from 'prop-types';

function Contact({ nameInput }) {
  return (
    <div className="contact">
      This is the Contact Section
      <input type="text" onChange={nameInput} />
    </div>
  );
}

export default Contact;

Contact.propTypes = {
  nameInput: PropTypes.func.isRequired,
};
