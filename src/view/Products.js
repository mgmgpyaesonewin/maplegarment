import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Img1 from '../assets/img/clothes/img1.jpg';
import Img2 from '../assets/img/clothes/img2.jpg';
import Img3 from '../assets/img/clothes/img3.jpg';

const Products = () => (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <Image src={Img1} thumbnail responsive />
      </Col>
      <Col xs={6} md={4}>
        <Image src={Img2} thumbnail responsive />
      </Col>
      <Col xs={6} md={4}>
        <Image src={Img3} thumbnail responsive />
      </Col>
    </Row>
  </Grid>
);


export default Products;
