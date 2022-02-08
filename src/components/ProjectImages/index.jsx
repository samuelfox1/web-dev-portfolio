import React from 'react';
import { v4 } from 'uuid';
import { aosOptions } from '../../utils/aosConfig';
const { flipUp } = aosOptions

const ProjectImages = ({ images }) => {
    return (
        <div id="current-project-images">
            {
                images.map(({ src, alt }) => (
                    <div key={v4()} data-aos={flipUp}
                    >
                        <a
                            href={src}
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className='current-project'
                                src={src}
                                alt={alt}
                            />
                        </a>
                        <p >{alt}</p>
                    </div>
                ))
            }
        </div>

    );
};

export default ProjectImages;
