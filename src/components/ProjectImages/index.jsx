import React from 'react';
import { v4 } from 'uuid';

const ProjectImages = ({ screenshots }) => {
    return (
        <div id="current-project-images">
            {
                screenshots.map(({ src, alt }) => (
                    <div key={v4()} >
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
