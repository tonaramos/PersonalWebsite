import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      validName: null,
      validEmail: null,
      validMessage: null,
      formCompleted: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.informationValidator = this.informationValidator.bind(this);
    this.submitInformation = this.submitInformation.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ [`${event.target.id}`]: event.target.value });
    this.informationValidator();
  }

  /* Information validator activated on input change or on unBlur for each input
    and on button click. Does not assign false to state only true or null. */
  informationValidator() {
    if (this.state.name.slice().length >= 2) {
      this.setState({ validName: true });
    } else {
      this.setState({ validName: null });
    }

    if (this.state.email.length >= 4 && this.state.email.includes('@') && this.state.email.includes('.')) {
      this.setState({ validEmail: true });
    } else {
      this.setState({ validEmail: null });
    }

    if (this.state.message.length >= 4) {
      this.setState({ validMessage: true });
    } else {
      this.setState({ validMessage: null });
    }

    if (this.state.validName && this.state.validEmail && this.state.validMessage) {
      this.setState({ formCompleted: true });
    } else {
      this.setState({ formCompleted: false });
    }
  }

  /* Submit Information activated on button clicked.
    Sets validEntry to false to display warning when validation fails. */
  submitInformation() {
    if (!this.state.validName) {
      this.setState({ validName: false });
    }
    if (!this.state.validEmail) {
      this.setState({ validEmail: false });
    }
    if (!this.state.validMessage) {
      this.setState({ validMessage: false });
    }
    if (this.state.formCompleted) {
      this.props.summitButton(this.state);
      this.clearForm();
    }
  }

  // Clear form resets states fields when a correct submission is process.
  clearForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      validName: null,
      validEmail: null,
      validMessage: null,
      formCompleted: false,
    });
  }

  render() {
    const nameStyle = [];
    const emailStyle = [];
    const messageStyle = [];
    if (this.state.validName === false) {
      nameStyle.push('redBackground');
    }
    if (this.state.validEmail === false) {
      emailStyle.push('redBackground');
    }
    if (this.state.validMessage === false) {
      messageStyle.push('redBackground');
    }

    const nameWarning = (
      <p>
        Please enter a full name
      </p>
    );
    const emailWarning = (
      <p>
        Please enter a correct email address
      </p>
    );
    const messageWarning = (
      <p>
        Please enter a longer message
      </p>
    );

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
              <input id="name" className={nameStyle} type="text" value={this.state.name} onChange={this.onChangeHandler} onBlur={this.informationValidator} />
              {this.state.validName === false ? nameWarning : null}
            </label>
            <label htmlFor="email">
              Email
              <input id="email" className={emailStyle} type="text" value={this.state.email} onChange={this.onChangeHandler} onBlur={this.informationValidator} />
              {this.state.validEmail === false ? emailWarning : null}
            </label>
            <label htmlFor="message">
              Message
              <input id="message" className={messageStyle} type="text" value={this.state.message} onChange={this.onChangeHandler} onBlur={this.informationValidator} />
              {this.state.validMessage === false ? messageWarning : null}
            </label>
          </div>
          <button type="button" onFocus={this.informationValidator} onClick={this.submitInformation}>
            Send!
          </button>
        </form>
      </div>
    );
  }
}

Contact.propTypes = {
  summitButton: PropTypes.func.isRequired,
};

export default Contact;
