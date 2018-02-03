import React from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Slider from './components/Slider';
import Quote from './components/Quote';
import Products from './view/Products';

const App = () => (
  <div>
    <header className="clearfix">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Maple Garment
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
        </Nav>
      </Navbar>
    </header>
    <Slider />
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <Quote />
        </Col>
      </Row>
    </Grid>
    <Products />
  </div>
);


export default App;
