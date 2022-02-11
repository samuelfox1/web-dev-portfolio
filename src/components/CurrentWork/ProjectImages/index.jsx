import React from "react";
import { v4 } from "uuid";

import { aosOptions } from "../../../utils/aosConfig";

const { fade } = aosOptions;

const ProjectImages = ({ images }) => {
  const getImages = () =>
    images.map(({ src, alt }) => (
      <div key={v4()} data-aos={fade}>
        <a href={src} target="_blank" rel="noreferrer">
          <img className="current-project-image" src={src} alt={alt} />
        </a>
        <p className="mt-0">{alt}</p>
      </div>
    ));

  return <div id="current-project-image-wrapper">{getImages()}</div>;
};

export default ProjectImages;
