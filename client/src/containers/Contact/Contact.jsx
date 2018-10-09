import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../../hoc/Segment/Segment';

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
    const {
      name, email, message, validName, validEmail, validMessage,
    } = this.state;
    if (name.slice().length >= 2) {
      this.setState({ validName: true });
    } else {
      this.setState({ validName: null });
    }

    if (email.length >= 4 && email.includes('@') && email.includes('.')) {
      this.setState({ validEmail: true });
    } else {
      this.setState({ validEmail: null });
    }

    if (message.length >= 4) {
      this.setState({ validMessage: true });
    } else {
      this.setState({ validMessage: null });
    }

    if (validName && validEmail && validMessage) {
      this.setState({ formCompleted: true });
    } else {
      this.setState({ formCompleted: false });
    }
  }

  /* Submit Information activated on button clicked.
    Sets validEntry to false to display warning when validation fails. */
  submitInformation() {
    const {
      validName,
      validEmail,
      validMessage,
      formCompleted,
    } = this.state;
    const { summitButton } = this.props;

    if (!validName) {
      this.setState({ validName: false });
    }
    if (!validEmail) {
      this.setState({ validEmail: false });
    }
    if (!validMessage) {
      this.setState({ validMessage: false });
    }
    if (formCompleted) {
      summitButton(this.state);
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
    const {
      name,
      email,
      message,
      validName,
      validEmail,
      validMessage,
    } = this.state;
    if (validName === false) {
      nameStyle.push('redBackground');
    }
    if (validEmail === false) {
      emailStyle.push('redBackground');
    }
    if (validMessage === false) {
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
      <Segment>
        <div className="contactContainer">
          <h1>
            Contact
          </h1>
          <form className="formArea">
            <fieldset>
              Contact Form
            </fieldset>
            <div className="labels">
              <label htmlFor="name">
                Name
                <input id="name" className={nameStyle} type="text" value={name} onChange={this.onChangeHandler} onBlur={this.informationValidator} />
                {validName === false ? nameWarning : null}
              </label>
              <label htmlFor="email">
                Email
                <input id="email" className={emailStyle} type="text" value={email} onChange={this.onChangeHandler} onBlur={this.informationValidator} />
                {validEmail === false ? emailWarning : null}
              </label>
              <label htmlFor="message">
                Message
                <input id="message" className={messageStyle} type="text" value={message} onChange={this.onChangeHandler} onBlur={this.informationValidator} />
                {validMessage === false ? messageWarning : null}
              </label>
            </div>
            <button type="button" onFocus={this.informationValidator} onClick={this.submitInformation}>
              Send!
            </button>
          </form>
        </div>
      </Segment>
    );
  }
}

Contact.propTypes = {
  summitButton: PropTypes.func.isRequired,
};

export default Contact;
