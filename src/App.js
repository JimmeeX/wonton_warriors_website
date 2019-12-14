import React from 'react';

import About from './components/About';
import Menu from './components/Menu';

import Header from './components/header';
import Carousel from './components/carousel';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <About />
      <Menu />
    </div>
  );
}

export default App;
