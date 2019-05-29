import 'bootstrap/dist/css/bootstrap.min.css'; // I feel this this could be avoided
import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'; // Might be worth creating your own to reduce file size as it is a simple component
import Nav from 'react-bootstrap/Nav'; // Might be worth creating your own to reduce file size as it is a simple component
import Home from "./Home";
import About from "./About";
import Design from "./Design";
import Development from "./Development";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand exact href="/">HyperLathe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/design">Design</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <h1><NavLink exact to="/">HyperLathe</NavLink></h1>
          <nav>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/design">Design</NavLink></li>
            <li><NavLink to="/development">Development</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </nav>
        </header>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Design" component={Design} />
          <Route path="/Development" component={Development} />
          <Route path="/Contact" component={Contact} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
