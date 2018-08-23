import React from 'react';
import PropTypes from 'prop-types';

function Contact({ nameInput, summitButton }) {
  return (
    <div className="contactContainer">
      <h1>
        Contact
      </h1>
      <form className="formArea">
        <fieldset>
          Contact Form
        </fieldset>
        <div className="lables">
          <label htmlFor="name">
            Name
            <input id="name" type="text" onChange={nameInput} />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" type="text" onChange={nameInput} />
          </label>
          <label htmlFor="message">
            Message
            <input id="message" type="text" onChange={nameInput} />
          </label>
        </div>
        <button type="button" onClick={summitButton}>
          Send!
        </button>
      </form>
    </div>
  );
}

export default Contact;

Contact.propTypes = {
  nameInput: PropTypes.func.isRequired,
  summitButton: PropTypes.func.isRequired,
};
