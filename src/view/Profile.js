import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Slider from '../components/Slider';
import Quote from '../components/Quote';
import ContacForm from '../components/ContactForm';
import Products from './Products';

const Profile = () => (
  <div>
    <Slider />
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <Quote />
        </Col>
      </Row>
    </Grid>
    <Products />
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <ContacForm />
        </Col>
      </Row>
    </Grid>
  </div>
);


export default Profile;
