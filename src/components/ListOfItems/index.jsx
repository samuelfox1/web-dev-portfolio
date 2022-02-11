import React from "react";
import { Col, Divider } from "react-materialize";

import { aosOptions } from "../../utils/aosConfig";

import "./style.css";

const { fade } = aosOptions;

const ListOfItems = ({ children, title }) => {
  return (
    <Col s={12} l={6} className="list-of-items" data-aos={fade}>
      <h5 className="left-align">{title}</h5>
      <Divider />
      <ul className="ml-2">{children}</ul>
    </Col>
  );
};

export default ListOfItems;
