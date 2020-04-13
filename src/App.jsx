import React, { useEffect } from 'react';
import { Modal } from 'antd';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import Header from './components/Header';
import SEO from './components/SEO';

import './App.css';

function info() {
  Modal.info({
    title: 'Coronavirus Update',
    content: (
      <div>
        <p>
          <b>WE WILL REMAIN OPEN FOR TAKEAWAYS AND DELIVERY</b>
        </p>
        <p>
          It has been more than a month since our last post and the world is now
          facing a crisis &nbsp;
          <span role="img" aria-label="globe">
            🌏
          </span>
          . With the rapidly evolving COVID19 in NSW, we are constantly
          monitoring updates from WHO, Australian Dept of Health and NSW Health
          &nbsp;
          <span role="img" aria-label="virus">
            🦠
          </span>
          . It is of high priority at Wonton Warrior to protect our staff and
          customers and ensure everyone can still enjoy our food &nbsp;
          <span role="img" aria-label="happy-tongue">
            😋
          </span>
          . While we always have strict food safety measures in place,
          additional measures include:
        </p>
        <ul>
          <li>
            All staff trained on hand hygiene practises (regular hand washing,
            use of hand sanitiser and appropriate use of gloves) &nbsp;
            <span role="img" aria-label="gloves">
              🧼
            </span>
          </li>
          <li>
            Regular wiping down and sanitizing hard surfaces &nbsp;
            <span role="img" aria-label="sponge">
              🧽
            </span>
          </li>
          <li>
            Access to alcohol-based hand sanitiser for customers at the counter
            &nbsp;
            <span role="img" aria-label="hands">
              🙌🏼
            </span>
          </li>
          <li>
            All staff are made aware of monitoring their own health and to
            remain at home if they are unwell &nbsp;
            <span role="img" aria-label="unwell">
              😷
            </span>
          </li>
        </ul>
        <p>
          We kindly ask you to be mindful of personal space
          <span role="img" aria-label="male">
            🧍🏻‍♂️
          </span>
          &nbsp;
          <span role="img" aria-label="female">
            🧍🏻‍♀️
          </span>
        </p>
        <p>
          You can choose to pickup from our shop or place your orders through
          EASI, HungryPanda, Uber Eats or Menulog &nbsp;
          <span role="img" aria-label="chopsticks">
            📲
          </span>
          . We hope to provide you with comfort food during these anxious times
          &nbsp;
          <span role="img" aria-label="chopsticks">
            🥢
          </span>
          .
        </p>
      </div>
    ),
    width: 800,
    onOk() {},
  });
}

const App = () => {
  useEffect(() => {
    info(); // Load Modal Message on Load
  }, []);
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
