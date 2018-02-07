import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class ContactForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }

  getValidationState() {
    const { value } = this.state;
    if (value.length > 10) return 'success';
    else if (value.length > 5) return 'warning';
    else if (value.length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Company Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Please enter your company name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <br />
          <ControlLabel>Contact person</ControlLabel>
          <FormControl
            type="text"
            placeholder="Please enter your name"
          />
          <br />
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            placeholder="Please enter your email name"
          />
          <br />
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            type="text"
            placeholder="Please enter your phone number"
          />
          <br />
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Message</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Plase drop a feedback" />
          </FormGroup>
        </FormGroup>
        <Button bsStyle="danger">Submit</Button>
      </form>
    );
  }
}

export default ContactForm;
