import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Styled from 'styled-components';
import newlook from '../assets/img/brands/newlook.png';
import amisu from '../assets/img/brands/amisu.png';
import conbipel from '../assets/img/brands/conbipel.jpg';
import reserve from '../assets/img/brands/reserve.svg';
import takko from '../assets/img/brands/takko.png';
import AsahiKasei from '../assets/img/brands/AsahiKasei.jpeg';
import aeon from '../assets/img/brands/aeon.jpg';
import itochu from '../assets/img/brands/itochu.png';

const H3 = Styled.h3`
  color: #e60000;
  font-size: 40px;
`;

const GridStyle = {
  background: '#f7f6f6',
  padding: '25px',
};

const Products = () => (
  <div style={GridStyle}>
    <Grid>
      <Row>
        <Col xsOffset={3} xs={4} mdOffset={4} md={4} >
          <H3>OUR BRANDS</H3>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col xs={6} md={3}>
          <Image src={aeon} responsive />
        </Col>
        <Col xs={6} md={3}>
          <Image src={conbipel} responsive />
        </Col>
        <Col xs={6} md={3}>
          <Image src={AsahiKasei} responsive />
        </Col>
        <Col xs={6} md={3}>
          <Image src={newlook} responsive />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col xs={6} md={3}>
          <Image src={reserve} responsive />
        </Col>
        <Col xs={6} md={3}>
          <Image src={amisu} responsive />
        </Col>
        <Col xs={6} md={3}>
          <Image src={takko} responsive />
        </Col>
        <Col xs={6} md={3}>
          <Image src={itochu} responsive />
        </Col>
      </Row>
    </Grid>
  </div>
);


export default Products;
