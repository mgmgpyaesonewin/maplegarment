import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Styled from 'styled-components';
import ContactForm from './components/ContactForm';
import Home from './view/Home';
import Profile from './view/Profile';

const NavbarStyle = {
  marginBottom: 0,
  background: '#fff',
  border: 'none',
};

const NavStyle = {
  marginRight: '10px',
};

const NavbarBrand = Styled(Navbar.Brand)`
  height: 60px;
  &:hover {
    background: #ff432e;
  }
`;

const NavbarItem = Styled(NavItem)`
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    background: #ff432e;
  }
`;

const NavbarCollapse = Styled()


const App = () => (
  <Router>
    <div>
      <header className="clearfix">
        <Navbar style={NavbarStyle} >
          <Navbar.Header>
            <NavbarBrand>
              Maple
            </NavbarBrand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight style={NavStyle}>
              <NavbarItem>
                <Link to="/">Home</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/profile">Profile</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/contact">About</Link>
              </NavbarItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/contact" component={ContactForm} />
    </div>
  </Router>
);


export default App;
