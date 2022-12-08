import React, { useEffect, useState } from 'react';

import AllSections from './components/AllSections';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';
import Nav from './components/Nav/index';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => setLoading(false));
  }, []);

  const getComponent = () => (loading ? <Preloader /> : <AllSections />);

  return (
    <>
      <Nav />
      {getComponent()}
      <Footer />
      <BackgroundImage />
    </>
  );
}
