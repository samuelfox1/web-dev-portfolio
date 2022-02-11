import React from "react";

import "./style.css";

const Section = ({ className, children }) => {
  return (
    <section className={`row custom-section my-3 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
