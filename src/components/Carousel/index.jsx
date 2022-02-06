import React, { useEffect, useMemo, useState } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { v4 } from "uuid";

import "./style.css"


const Carousel = ({ aus, projects }) => {
    const [index, setIndex] = useState(0)
    const [project, setProject] = useState(projects[index])
    const { description, title, github, deployment } = project

    useEffect(() => {
        const options = {
            duration: 300,
            dist: -100,
            indicators: true,
            onCycleTo: ({ dataset: { index } }) => {
                setIndex(index)
                // console.log(dataset);
            }
        };
        const el = document.querySelector('#other-work')
        console.log(el)
        M.Carousel.init(el, options);

        // Instance Plugin
        let instance = M.Carousel.getInstance(el);
        instance.next(index);

    }, [])

    useEffect(() => {
        setProject(projects[index])
    }, [index])

    const carousel = useMemo(() => (
        <div className="carousel" id="other-work">
            {projects.map(({ src, alt }, index) => (
                <div className="carousel-item" key={v4()} data-index={index}>
                    <img alt={alt} src={src} />
                </div>))}
        </div >
    ), []
    )


    return (
        <section className="carousel-wrapper" data-aos="fade" >
            <div className="project-title-wrapper">
                <h4 className="project-title">{title}</h4>
            </div>
            {carousel}
            {/* <div className="divider"></div> */}
            <div className="carousel-project-links">
                <h3>
                    <a href={github} target="_blank" rel="noreferrer"><i class="fab fa-github" /></a>
                </h3>
                <h3>
                    <a href={deployment} target="_blank" rel="noreferrer"><i class="fas fa-mobile-alt"></i></a>
                </h3>
            </div>
            <p className="carousel-project-description">{description}</p>
        </section >
    )
}
export default Carousel;
