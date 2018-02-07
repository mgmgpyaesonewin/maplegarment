import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Styled from 'styled-components';
import Slider from '../components/Slider';
import Quote from '../components/Quote';
import CopyrightSection from '../components/CopyrightSection';
import MyGoogleMap from '../components/MyGoogleMap';
import ContactForm from '../components/ContactForm';
import Products from './Products';

const Container = Styled(Grid)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Home = () => (
  <div>
    <Slider />
    <Quote />
    <Products />
    <Container>
      <Row>
        <Col md={6}>
          <ContactForm />
        </Col>
        <Col md={6}>
          <MyGoogleMap isMarkerShown />
        </Col>
      </Row>
    </Container>
    <CopyrightSection />
  </div>
);


export default Home;
