
import React from 'react';
import Styled from 'styled-components';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Team from '../assets/img/team.svg';

const Organization = () => (
  <div>
    <Grid>
      <Row>
        <Col mdOffset={3} md={4}>
          <h1>Origanization Structure</h1>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <Image alt="team" src={Team} responsive />
        </Col>
        <Col md={7}>
          <p>
            Our mission is to cater for customers’ satisfaction by producing best quality garments with reliable great efficiency; to become internationally recognized garment factory that complies with buyers’ compliance standards, and to expand our service from CMP basis to FOB.
          </p>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Organization;
