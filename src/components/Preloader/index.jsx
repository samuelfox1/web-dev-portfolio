import React from "react";
import { Preloader as MaterializePreloader } from "react-materialize";

import "./style.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <MaterializePreloader size="big" />
    </div>
  );
};

export default Preloader;
