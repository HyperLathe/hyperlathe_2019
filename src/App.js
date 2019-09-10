// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.scss';
import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="Nav">
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