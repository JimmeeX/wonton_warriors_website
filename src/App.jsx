import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

import Header from './components/header';
import SEO from './components/seo';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <SEO />
      <Header />
      <Home />
      <About />
      <Menu />
      <Contact />
    </div>
  );
};

export default App;
