import React from 'react';
import { BrowserRouter, Match, Link, Miss } from 'react-router'

import './sass/main.scss';

import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import NoMatch from './components/NoMatch';

const App = React.createClass({
  render: function () {
    return (
    <BrowserRouter>
      <div className="container">
        <ul className="navbar">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>

        <Match exactly pattern="/" component={LandingPage} />
        <Match pattern="/about" component={About} />
        <Match pattern="/projects" component={Projects} />

        <Miss component={NoMatch}/>

      </div>
    </BrowserRouter>
    )
  }
});

export default App;