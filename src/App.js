import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';

import Header from './components/header';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Menu />
    </div>
  );
}

export default App;
