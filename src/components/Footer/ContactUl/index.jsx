import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFile,
  FaLevelUpAlt,
} from "react-icons/fa";

import { useAppContext } from "../../../context/AppProvider";
import ContactLi from "./ContactLi";

import "./style.css";

export default function ContactUl() {
  const {
    about: { gitHub, linkedIn, resume },
  } = useAppContext();

  return (
    <ul className="contact-ul">
      <ContactLi href={gitHub} icon="fab fa-github-square">
        GitHub
        <FaGithubSquare className="ml-1" size={30} />
      </ContactLi>
      <ContactLi href={linkedIn} icon="fab fa-linkedin">
        LinkedIn
        <FaLinkedin className="ml-1" size={30} />
      </ContactLi>
      <ContactLi href={resume} icon="fas fa-file-alt">
        Resume
        <FaFile className="ml-1" size={30} />
      </ContactLi>
      <ContactLi href="#root" icon="fas fa-level-up">
        Top
        <FaLevelUpAlt className="ml-1" size={30} />
      </ContactLi>
    </ul>
  );
}
