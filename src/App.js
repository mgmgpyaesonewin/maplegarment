import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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


const App = () => (
  <Router>
    <div>
      <header className="clearfix">
        <Navbar style={NavbarStyle} >
          <Navbar.Header>
            <Navbar.Brand>
              Maple Garment
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight style={NavStyle}>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/profile">Profile</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">About</Link>
              </NavItem>
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
