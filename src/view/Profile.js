import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import QuotesWithImage from '../components/QuotesWithImage';
import History from '../components/History';
import Timeline from '../components/Timeline';
import Team from '../components/Team';
import ContacForm from '../components/ContactForm';
import Products from './Products';

const Profile = () => (
  <div>
    <QuotesWithImage />
    <History />
    <Timeline />
    <Team />
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
