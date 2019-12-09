import React, { useState } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Contact from "./pages/Contact";
import NavBurger from "./pages/components/NavBurger";
import CoreStyles from "./coreStyles.js";

const Main = styled.div `
  max-width: 1440px;
  width: 100%;
  display: flex;
  margin-left: 0;
  transition: all 0.2s linear;
`;

const Nav = styled.nav `
    background: #f3f3f3;
    list-style-type: none;
    position: absolute;
    right: 0;
    margin: 0px;
    background: ${CoreStyles.brandWhite};
    padding: 20px;
    width: 150px;
    margin-right: -190px;
    transition: all 0.2s linear;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.h1 `
    position: absolute;
    top: 0;
    width: 100%;
    background: ${CoreStyles.brandPrimary};
    text-align: center;
    padding: 5px 0px 15px 0px;
    margin: 0;
      a {
        color: ${CoreStyles.brandWhite};
      }
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      <Main className={isOpen ? 'navOpen' : ''}>
        <header className="Nav">
          <NavBurger isOpen={isOpen} toggle={toggle} />
          <Logo><NavLink exact to="/">Test</NavLink></Logo>
          <Nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/design">Design</NavLink>
            <NavLink to="/development">Development</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </header>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Design" component={Design} />
          <Route path="/Development" component={Development} />
          <Route path="/Contact" component={Contact} />
        </div>
      </Main>
    </BrowserRouter>
  );
}

export default App;