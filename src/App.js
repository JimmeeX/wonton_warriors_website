import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

import Header from './components/header';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Menu />
      <Contact />
    </div>
  );
};

export default App;
