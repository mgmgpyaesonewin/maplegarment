import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import callto from '../assets/img/call-to.jpg';

const CallToAction = Styled.div`
  background: url(${callto});
  background-attachment: fixed;
  background-size: cover;
  background-position: 50% 90%;
  color: #fff;
  text-align: center;
  padding: 100px 0;
`;

const ZoomInAnimation = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
            transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`;

const ZoomIn = Styled.div`
  animation: ${ZoomInAnimation} 2s;
`;

const H1 = Styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
`;

const P = Styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 3px;
`;

const QuotesWithImage = () => (
  <CallToAction>
    <Grid>
      <Row>
        <Col md={12}>
          <ZoomIn>
            <H1>
              COMPANY PROFILE
            </H1>
            <br />
            <P>
              Dr. Aung win and Mrs. Kyway Kyway Zin established Maple Trading Co. Ltd. as a garment manufacturing company in 1996. After the lifting of sanctions in Myanmar, in 2012, daughters, Win Ei Khine and Thet Su Zin Win came onboard and charted a new growth path for the company. Today they are integral part of the management who have helped the factory achieve new levels of excellence. With an extension and a brand new factory building constructed to international standards, Maple is now a leading local garment manufacturer recognized for its proactive attitude and dynamic, caring company culture. Maple is already registered under SEDEX and has passed sustainability audit from H&M. BSCI is in the process.
            </P>
          </ZoomIn>
        </Col>
      </Row>
    </Grid>
  </CallToAction>
);

export default QuotesWithImage;
