import React, { useState } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Development from "./pages/Development";
import Design from "./pages/Design";
import Ux from "./pages/Ux";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBurger from "./pages/components/NavBurger";
import CoreStyles from "./coreStyles.js";
import LogoGraphic from "./img/logo.png";

import TestLayoutDiv from "./pages/components/TestLayoutDiv";


// --- styles ---

const Main = styled.div `
  max-width: 1440px;
  width: 100%;
  display: flex;
  margin-left: 0;
  transition: margin 0.4s ease;
  position: relative;
  overflow: hidden;
`;

const Header = styled.header `
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${CoreStyles.brandPrimary};
  text-align: center;
  padding: 5px 0px 8px 0px;
  margin: 0;
    transition: all 0.4s ease;
    &.nav-open {
      margin-left: -200px;
    }
`;

const Nav = styled.nav `
    background: #f3f3f3;
    list-style-type: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0px;
    background: ${CoreStyles.brandWhite};
    width: 150px;
    padding: 20px;
    height: 100%;
    margin-right: -190px;
    flex-direction: column;
    display: flex;
      &.nav-open {
        transition: width 0.4s ease;
      }
`;

const Logo = styled.h1 `
    line-height: 0;
    font-size: 0;
      a {
        color: transparent;
        background: url('${LogoGraphic}') center center no-repeat;
        background-size: contain;
        width: 60%;
        height: 46px;
        display: block;
        margin: 0px auto;
      }
`;

const Content = styled.div `
    margin-top: 60px;
    width: 100%;
    padding: 10px 15px;
    transition: margin 0.4s ease;
    &.nav-open {
      margin-left: -200px;
      margin-right: 200px;
    }
`;


// --- app ---

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const closeNav = () => {
    return (isOpen ? setIsOpen(false) : '') ;
  }

  return (
    <BrowserRouter>
      <Main>
        <Header onClick={closeNav} className={isOpen ? 'nav-open' : ''}>
          <NavBurger isOpen={isOpen} toggle={toggle} />
          <Logo><NavLink exact to="/">Hyperlathe</NavLink></Logo>
          <Nav onClick={toggle} className={isOpen ? 'nav-open' : ''}>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/development">Development</NavLink>
            <NavLink to="/design">Design</NavLink>
            <NavLink to="/ux">UX</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Header>
        <Content onClick={closeNav} className={isOpen ? 'nav-open' : ''}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Development" component={Development} />
          <Route path="/Design" component={Design} />
          <Route path="/Ux" component={Ux} />
          <Route path="/Contact" component={Contact} />
        <TestLayoutDiv>
          <p>Test Content</p>
        </TestLayoutDiv>
        </Content>
      </Main>
    </BrowserRouter>
  );
}

export default App;