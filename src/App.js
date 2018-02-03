import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Slider from './components/Slider';
import Quote from './components/Quote';
import ContacForm from './components/ContactForm';
import Products from './view/Products';

const App = () => (
  <Router>
    <div>
      <header className="clearfix">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Maple Garment
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/profile">About</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Route path="/profile" component={ContacForm} />
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
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            {/* <ContacForm /> */}
          </Col>
        </Row>
      </Grid>
    </div>
  </Router>
);


export default App;
