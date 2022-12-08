import React, { useEffect, useState } from "react";

import Nav from "./components/Nav/index";
import AllSections from "./components/AllSections";
import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => setLoading(false);
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
