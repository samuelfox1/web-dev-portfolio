import React, { useEffect, useMemo, useState } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { v4 } from "uuid";

import ProjectLinks from "../../ProjectLinks";
import "./style.css";

const Carousel = ({ projects }) => {
  const [index, setIndex] = useState(localStorage.getItem("project-idx") || 0);
  const [project, setProject] = useState(projects[index]);
  const { description, title, github, deployment } = project;

  const advanceCarousel = (idx) => {
    console.log(idx);
    setIndex(idx);
    localStorage.setItem("project-idx", idx);
    setProject(projects[idx]);
  };

  useEffect(() => {
    const options = {
      duration: 300,
      dist: -100,
      indicators: true,
      onCycleTo: ({ dataset: { idx } }) => {
        advanceCarousel(idx);
      },
    };
    const el = document.querySelector("#other-work");
    M.Carousel.init(el, options);

    // Instance Plugin
    let instance = M.Carousel.getInstance(el);
    instance.next(index);
  }, []);

  const carousel = useMemo(
    () => (
      <div className="carousel" id="other-work">
        {projects.map(({ src, alt }, idx) => (
          <div className="carousel-item" key={v4()} data-idx={idx}>
            <img alt={alt} src={src} />
          </div>
        ))}
      </div>
    ),
    [projects]
  );

  return (
    <section className="carousel-wrapper">
      <div className="project-title-wrapper">
        <h4 className="project-title">{title}</h4>
      </div>

      {carousel}

      <ProjectLinks github={github} deployment={deployment} />
      <p>{description}</p>
    </section>
  );
};
export default Carousel;
