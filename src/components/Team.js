import React from 'react';
import Styled from 'styled-components';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Img1 from '../assets/img/top/top1.JPG';
import Img2 from '../assets/img/top/top2.JPG';
import Img3 from '../assets/img/top/top3.JPG';
import Img4 from '../assets/img/top/top4.JPG';
import Img5 from '../assets/img/top/top5.JPG';
import Img6 from '../assets/img/top/top6.JPG';
import Img7 from '../assets/img/top/top7.JPG';
import Img8 from '../assets/img/top/top8.JPG';
import Img9 from '../assets/img/top/top9.JPG';
import Img10 from '../assets/img/top/top10.JPG';

const GridStyle = {
  background: '#e60000',
  padding: '25px',
};

const TextCol = Styled(Col)`
  text-align: center;
  color: white;
`;
const Text = Styled.h1`
  font-size: 90px;
`;

const Team = () => (
  <div style={GridStyle}>
    <Grid>
      <Row>
        <Col md={3}>
          <Image alt="900x500" src={Img1} responsive />
        </Col>
        <Col md={3}>
          <Image alt="900x500" src={Img2} responsive />
        </Col>
        <Col md={3}>
          <Image alt="900x500" src={Img3} responsive />
        </Col>
        <Col md={3}>
          <Image alt="900x500" src={Img4} responsive />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={3}>
          <Image alt="900x500" src={Img5} responsive />
        </Col>
        <TextCol md={6}>
          <Text>
          We are one whole team
          </Text>
        </TextCol>
        <Col md={3}>
          <Image alt="900x500" src={Img6} responsive />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={3}>
          <Image alt="900x500" src={Img7} responsive />
        </Col>
        <Col md={3}>
          <Image alt="900x500" src={Img8} responsive />
        </Col>
        <Col md={3}>
          <Image alt="900x500" src={Img9} responsive />
        </Col>
        <Col md={3}>
          <Image alt="900x500" src={Img10} responsive />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Team;
