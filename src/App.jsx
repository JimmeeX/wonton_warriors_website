import React, { useEffect } from 'react';
import { Modal } from 'antd';

import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

import Header from './components/header';
import SEO from './components/seo';

import './App.css';

function info() {
  Modal.info({
    title: 'Coronavirus Update',
    content: (
      <div>
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
          We kindly ask you to reschedule or order takeaway in if you’re at risk
          (from overseas, contact with positive case or symptomatic &nbsp;
          <span role="img" aria-label="sick">
            🤒
          </span>
          ).
        </p>
        <p>
          We hope to continue trading as normal. However, we understand you may
          not wish to eat out during this time of uncertainty. If you prefer to
          stay home, our takeaway service is available through EASI and Ubereats
          &nbsp;
          <span role="img" aria-label="mobile">
            📲
          </span>
          . You can now also request contactless delivery if you are concerned.
          We appreciate your continued support during this time &nbsp;
          <span role="img" aria-label="pray">
            🙏
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
