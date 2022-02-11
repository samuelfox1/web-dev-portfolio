import React from "react";
import "aos/dist/aos.css";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function AllSections() {
  return (
    <main id="hello" className="container">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
