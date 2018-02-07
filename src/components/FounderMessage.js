import React from 'react';
import Styled from 'styled-components';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { media } from '../assets/Media';
import Uaungwin from '../assets/img/uaungwin.JPG';

const GridStyle = {
  padding: '25px',
};

const FounderImage = Styled(Image)`
  ${media.desktop`
    width: 425px;
    hieght: 425px;
  `}

  const PlayAlgo = Styled(2)
  ${media.tablet`
    width: 425px;
    hieght: 425px;
  `}
`;

// const Speaker = Styled.div`

// `;

const H1 = Styled.h1`
  font-weight: 400px;
  font-size: 18px;
  line-height: 53px
  color: #FFFFFF;
`;

const Column = Styled(Col)`
  font-size: 36px;
`;

const FounderMessage = () => (
  <div style={GridStyle}>
    <Grid>
      <Row>
        <Column mdOffset={5} md={8}>
          Maple Trading
        </Column>
      </Row>
      <Row>
        <Col md={3} mdOffset={1}>
          <FounderImage alt="founder" src={Uaungwin} responsive />
        </Col>
        <Col md={7} mdOffset={1}>
          <H1>
              I love this job as it can provide a lot of job opportunities for masses and it can increase their life style. Myanmar garment industry is growing constantly and I believe that, if manufacturers can increase their capacities, it can contribute to the country’s economic growth. We are now working for international brands and in the near future, we plan to develop our own brand, inspired by Myanmar fashion and we wish to penetrate into global market.
          </H1>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default FounderMessage;
