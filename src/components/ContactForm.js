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
          validationState={this.getValidationState()}
        >
          <ControlLabel>Company Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
          <ControlLabel>Contact person</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
          />
          <HelpBlock>Validation is based on string length.</HelpBlock>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
          />
          <HelpBlock>Validation is based on string length.</HelpBlock>
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
          />
          <HelpBlock>Validation is based on string length.</HelpBlock>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <Button bsStyle="primary">Primary</Button>
      </form>
    );
  }
}

export default ContactForm;
