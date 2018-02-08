import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const About = () => (
  <Grid>
    <br />
    <br />
    <Row>
      <Col mdOffset={3} md={6} xs={6}>
        <ContactForm />
      </Col>
    </Row>
  </Grid>
);

export default About;
