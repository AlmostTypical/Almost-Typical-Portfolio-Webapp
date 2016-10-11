import React from 'react';
import { BrowserRouter, Match, Link, Miss } from 'react-router'

import './sass/main.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import NoMatch from './components/NoMatch';

const App = React.createClass({
  render: function () {
    return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>

        <div>
          <Header />
        </div>

        <Match exactly pattern="/" component={LandingPage} />
        <Match pattern="/about" component={About} />
        <Match pattern="/projects" component={Projects} />

        <Miss component={NoMatch}/>

        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    )
  }
});

export default App;