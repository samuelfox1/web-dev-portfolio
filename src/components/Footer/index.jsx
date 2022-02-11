import React from "react";
import { Divider } from "react-materialize";
import { aosOptions } from "../../utils/aosConfig";
import SectionHeader from "../SectionHeader";
import ContactUl from "./ContactUl";
import "./style.css";

const { fade } = aosOptions;

export default function index({ aos }) {
  return (
    <footer id="contact">
      <SectionHeader className="ml-1">Contact</SectionHeader>
      <ContactUl />
      <Divider />
      <h6 className="center-align">2022</h6>
    </footer>
  );
}
