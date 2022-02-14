import React from "react";

import "./style.css";

const Section = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`row custom-section my-3 ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
