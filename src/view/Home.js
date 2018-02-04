import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Slider from '../components/Slider';
import Quote from '../components/Quote';
import CopyrightSection from '../components/CopyrightSection';
import MyGoogleMap from '../components/MyGoogleMap';
import Products from './Products';

const Home = () => (
  <div>
    <Slider />
    <Quote />
    <Products />
    <MyGoogleMap isMarkerShown />
    <CopyrightSection />
  </div>
);


export default Home;
