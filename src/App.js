import React from 'react';
import './style/index.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Users from './components/Users/index';
import Register from './components/Register/index';
import Footer from './components/Footer/Footer';

const App = () => (
  <>
    <Header />
    <main>
      <Banner />
      <AboutMe />
      <Users />
      <Register />
    </main>
    <Footer />
  </>
);

export default App;
