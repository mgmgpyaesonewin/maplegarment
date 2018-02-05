import React from 'react';
import Styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const GridStyle = {
  background: '#e60000',
  padding: '25px',
};

const P = Styled.p`
  color: white;
  font-size: 20px;
`;

const Text = Styled.div`
  text-align: center;
`;

const H1 = Styled.h1`
  color: white;
  font-size: 45px;
`;

const History = () => (
  <div style={GridStyle}>
    <Grid>
      <Row>
        <Col mdOffset={4} md={4}>
          <Text>
            <H1>History</H1>
          </Text>
        </Col>
      </Row>
      <Row>
        <Col mdOffset={1} md={4}>
          <P>
          The founder, Dr. Aung Win has deep interest in handicrafts since he was young and making clothes has become one of his passions. In 1996, he has decided to set up the garment factory in Yangon with the technical support from Thai garment manufacturer. Since then, we have been exporting international quality products proudly made in Myanmar.
          </P>
        </Col>
        <Col mdOffset={2} md={4}>
          <P>
          We started with 50 employees in 1996 and have grown over 850 workers. In 2015, we have founded Belle Maison Maple Garment Factory, joint venture with Senshukai Co., Ltd, Japan in Pegu area. It employs over 150 workers.
          </P>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default History;
