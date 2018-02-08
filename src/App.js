import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Styled from 'styled-components';
import Home from './view/Home';
import Profile from './view/Profile';
import Csr from './view/Csr';
import ProductsView from './view/ProductsView';
import About from './view/About';
import Logo from './assets/img/logo/logo.jpg';

const NavbarStyle = {
  marginBottom: 0,
  background: '#fff',
  border: 'none',
};

const NavStyle = {
  marginRight: '10px',
};

const NavbarBrand = Styled(Navbar.Brand)`
  height: 70px;
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

const A = Styled(Link)`
  color: #6b6b6b;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;


const App = () => (
  <Router>
    <div>
      <header className="clearfix">
        <Navbar style={NavbarStyle} >
          <Navbar.Header>
            <NavbarBrand>
              <img alt="maple" src={Logo} />
            </NavbarBrand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight style={NavStyle}>
              <NavbarItem>
                <A to="/">Home</A>
              </NavbarItem>
              <NavbarItem>
                <A to="/profile">Profile</A>
              </NavbarItem>
              <NavbarItem>
                <A to="/product">Products</A>
              </NavbarItem>
              <NavbarItem>
                <A to="/csr">CSR</A>
              </NavbarItem>
              <NavbarItem>
                <A to="/contact">About</A>
              </NavbarItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/product" component={ProductsView} />
      <Route path="/csr" component={Csr} />
      <Route path="/contact" component={About} />
    </div>
  </Router>
);


export default App;
