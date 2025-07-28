import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import Header from './components/Header';
import SEO from './components/SEO';

import './App.css';

function App() {
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
}

export default App;
