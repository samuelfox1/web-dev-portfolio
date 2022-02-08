import React, { useEffect, useMemo, useState } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { v4 } from "uuid";

import ProjectLinks from "../../ProjectLinks";
import "./style.css"
import { aosOptions } from "../../../utils/aosConfig";

const { fade } = aosOptions


const Carousel = ({ projects }) => {
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
        // console.log(el)
        M.Carousel.init(el, options);

        // Instance Plugin
        let instance = M.Carousel.getInstance(el);
        instance.next(index);

    }, [])

    useEffect(() => {
        setProject(projects[index])
    }, [index])

    const carousel = useMemo(() => (
        <div className="carousel" id="other-work" data-aos={fade}>
            {projects.map(({ src, alt }, index) => (
                <div className="carousel-item" key={v4()} data-index={index}>
                    <img alt={alt} src={src} />
                </div>))}
        </div >
    ), []
    )


    return (
        <section className="carousel-wrapper"  >
            <div className="project-title-wrapper" data-aos={fade} >
                <h4 className="project-title">{title}</h4>
            </div>

            {carousel}

            <p className="carousel-project-description" data-aos={fade} >{description}</p>
            <ProjectLinks github={github} deployment={deployment} />
        </section >
    )
}
export default Carousel;
