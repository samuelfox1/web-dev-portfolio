import React, { useEffect, useMemo } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { v4 } from "uuid";

import "./style.css";

const getLocalStorageKey = (id) => `${id}-idx`;

export const setCarouselLocation = (id, idx) =>
  localStorage.setItem(getLocalStorageKey(id), idx);

export const getCarouselLocation = (id) =>
  localStorage.getItem(getLocalStorageKey(id));

const Carousel = ({ id, images, index, setIndex }) => {
  const advanceCarousel = (idx) => {
    console.log(idx);
    setIndex(idx);
    setCarouselLocation(id, idx);
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
    const el = document.querySelector(`#${id}`);
    M.Carousel.init(el, options);

    // sroll carousel to last selected project
    let instance = M.Carousel.getInstance(el);
    instance.next(index);
  }, []);

  const carousel = useMemo(
    () => (
      <div className="carousel" id={id}>
        {images.map(({ src, alt }, idx) => (
          <div className="carousel-item" key={v4()} data-idx={idx}>
            <img alt={alt} src={src} />
          </div>
        ))}
      </div>
    ),
    [id, images]
  );

  return carousel;
};
export default Carousel;