import React from 'react';
import Styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const Blockquote = Styled.blockquote`
  font-size: 25px;
  font-style: italic;
  margin: 0.25em 0;
  padding: 0.35em 40px;
  line-height: 1.45;
  position: relative;
  color: white;
  border: none !important;
  &:before {
    display: block;
    padding-left: 10px;
    content: "\\201C";
    font-size: 100px;
    position: absolute;
    left: -35px;
    top: -35px;
    color: white;
  }
  cite {
    color: white;
    font-size: 14px;
    display: block;
    margin-top: 5px;
    &:before {
      content: "\\2014 \\2009";
    }
  }
`;

const GridStyle = {
  background: '#e60000',
  padding: '25px',
};

const Quote = () => (
  <div style={GridStyle}>
    <Grid>
      <Row>
        <Col mdOffset={2} md={8}>
          <Blockquote>
            Started in 1996, Maple is a locally-owned garment manufacturing
            factory from Myanmar that specializes in producing all type of
            woven outer wears. With over 20 years of experiences, we
            guarantee to provide professional and turnkey services in a
            sustainable way.
            <cite>Somebody famous</cite>
          </Blockquote>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Quote;
