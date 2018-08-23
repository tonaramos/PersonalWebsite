import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formComplete: false,
    };

    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ [`${event.target.id}`]: event.target.value });
  }

  informationValidator() {
    let validName = false;
    let validEmail = false;
    let validMassage = false;
    if (this.state.name.slice().length > 1) {
      validName = true;
    }
    if (this.state.email.length > 4 && this.state.email.includes('@') && this.state.email.includes('.')) {
      validEmail = true;
    }


    if ( validName && validEmail && validMassage) {
      this.submitInformation();
    }
  }

  submitInformation() {
    this.props.summitButton(this.state);
  }

  // const classes = [];
  render() {
    const classes = ['bold'];
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
            <label className={classes} htmlFor="name">
              Name
              <input id="name" type="text" onChange={this.onChangeHandler} />
            </label>
            <label htmlFor="email">
              Email
              <input id="email" type="text" onChange={this.onChangeHandler} />
            </label>
            <label htmlFor="message">
              Message
              <input id="message" type="text" onChange={this.onChangeHandler} />
            </label>
          </div>
          <button type="button" onClick={this.informationValidator}>
            Send!
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
  summitButton: PropTypes.func.isRequired,
};
