import React, { useEffect, useMemo } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import "./style.css";

const getLocalStorageKey = (id) => `${id}-idx`;

export const setCarouselLocation = (id, idx) =>
  localStorage.setItem(getLocalStorageKey(id), idx);

export const getCarouselLocation = (id) =>
  parseInt(localStorage.getItem(getLocalStorageKey(id))) || 0;

const Carousel = ({ id, images, index, setIndex }) => {
  const advanceCarousel = (idx) => {
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

    // sroll carousel to last selected project on mount
    let instance = M.Carousel.getInstance(el);
    instance.next(index);
  }, []);

  const carousel = useMemo(
    () => (
      <div className="carousel" id={id}>
        {images.map(({ src, alt }, idx) => (
          <div className="carousel-item" key={idx} data-idx={idx}>
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
