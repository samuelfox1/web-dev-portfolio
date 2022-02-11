import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import AllSections from "./components/AllSections";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => Aos.init({ duration: 1500, offset: 200 }), []);
  window.onload = () => setLoading(false);

  const getComponent = () => (loading ? <Preloader /> : <AllSections />);

  return (
    <>
      <Nav />
      {getComponent()}
      <Footer />
    </>
  );
}
