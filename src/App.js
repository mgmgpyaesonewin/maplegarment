import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import Home from './view/Home';

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
              <Link to="/profile">Profile</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">About</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={ContactForm} />
      <Route path="/contact" component={ContactForm} />
    </div>
  </Router>
);


export default App;
