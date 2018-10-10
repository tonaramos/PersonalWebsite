import React from 'react';
import PropTypes from 'prop-types';
import classes from './Contact.css';
import Segment from '../../hoc/Segment/Segment';
import Button from '../../components/UI/Button/Button';

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
        <div className={classes.Contact}>
          <h1>
            Get in touch!
          </h1>
          <div className={classes.Form}>
            <form className={classes.FieldList}>
              <div className={classes.Field}>
                <label htmlFor="name">
                  Name
                  <span className={classes.Asterisk}>
                  *
                </span>
                </label>
                <input
                  id="name"
                  className={classes.TextInput}
                  type="text"
                  value={name}
                  onChange={this.onChangeHandler}
                  onBlur={this.informationValidator}
                  wrap="hard"
                  spellCheck="true"
                  gramm_editor="true"
                />
                {validName === false ? nameWarning : null}
              </div>
              <div className={classes.Field}>
                <label htmlFor="email">
                Email
                  <span className={classes.Asterisk}>
                  *
                </span>
                </label>
                <input
                  required
                  id="email"
                  className={classes.TextInput}
                  type="email"
                  title="someEmailIsTheTitle"
                  value={email}
                  onChange={this.onChangeHandler}
                  onBlur={this.informationValidator}
                  wrap="hard"
                  spellCheck="true"
                  gramm_editor="true"
                />
                {validEmail === false ? emailWarning : null}
              </div>
            </form>
            <form className={classes.FieldList}>
              <div className={classes.MessageField}>
                <label htmlFor="message">
                Message
                  <span className={classes.Asterisk}>
                  *
                </span>
                </label>
                <textarea
                  id="message"
                  className={classes.MessageInput}
                  type="text"
                  value={message}
                  onChange={this.onChangeHandler}
                  onBlur={this.informationValidator}
                  rows="6"
                  wrap="hard"
                  spellCheck="true"
                  gramm_editor="true"
                />
                {validMessage === false ? messageWarning : null}
              </div>
            </form>
            <form className={classes.SubmitField}>
              {/* <div className={classes.SubmitField}> */}
              <Button type="button">
                <div
                  className={classes.SendButton}
                  onFocus={this.informationValidator}
                  onClick={this.submitInformation}
                >
                Send!
                </div>
              </Button>
              {/* </div> */}
            </form>
          </div>
        </div>
      </Segment>
    );
  }
}

Contact.propTypes = {
  summitButton: PropTypes.func.isRequired,
};

export default Contact;
