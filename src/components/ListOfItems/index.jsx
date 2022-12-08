import React from "react";
import { Col, Divider } from "react-materialize";

import "./style.css";

const ListOfItems = ({ children, title }) => {
  return (
    <Col s={12} l={6} className="list-of-items">
      <h5 className="left-align">{title}</h5>
      <Divider />
      <ul className="ml-2">{children}</ul>
    </Col>
  );
};

export default ListOfItems;
