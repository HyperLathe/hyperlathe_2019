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
import LogoGraphic from "./img/logo.png"


// --- styles ---

const Main = styled.div `
  max-width: 1440px;
  width: 100%;
  display: flex;
  margin-left: 0;
  transition: all 0.4s ease;
  position: relative;
    &.nav-open {
      margin-left: -200px;
    }
`;

const Header = styled.header `
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${CoreStyles.brandPrimary};
  text-align: center;
  padding: 5px 0px 8px 0px;
  margin: 0;
`;

const Nav = styled.nav `
    background: #f3f3f3;
    list-style-type: none;
    position: absolute;
    top: 0;
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
      <Main className={isOpen ? 'nav-open' : ''}>
        <Header onClick={closeNav}>
          <NavBurger isOpen={isOpen} toggle={toggle} />
          <Logo><NavLink exact to="/">Hyperlathe</NavLink></Logo>
          <Nav onClick={toggle} >
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/development">Development</NavLink>
            <NavLink to="/design">Design</NavLink>
            <NavLink to="/ux">UX</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Header>
        <Content onClick={closeNav}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Development" component={Development} />
          <Route path="/Design" component={Design} />
          <Route path="/Ux" component={Ux} />
          <Route path="/Contact" component={Contact} />
        </Content>
      </Main>
    </BrowserRouter>
  );
}

export default App;