import React from 'react';
import Styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const CopyrightSectionContainer = Styled.div`
  border-top: 1px solid #363636;
  font-size: 12px;
  padding: 20px 0;
  background: #1d1d1d;
  color: #7f7f7f;
`;

const Copyright = Styled.p`
  font-size: 16px;
`;

const CopyrightSection = () => (
  <CopyrightSectionContainer>
    <Grid>
      <Row>
        <Col md={7}>
          <Copyright>
            Copyright © 2014. All Rights Reserved.  Design and Developed by
            <a href="http://www.mgmgpyaesonewin.me"> Maple</a>
          </Copyright>
        </Col>
      </Row>
    </Grid>
  </CopyrightSectionContainer>
);

export default CopyrightSection;
