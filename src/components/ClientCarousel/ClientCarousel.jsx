import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';

import Slides from './data.json';
import './ClientCarousel.scss';

import Review from '../Review/Review';

function ClientCarousel() {
  const options = {
    align: 'center',
    loop: true,
  };
  const classNames = ClassNames(options);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames(options)]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSlideClick = useCallback(
    (index) => {
      if (emblaApi && emblaApi.clickAllowed()) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div class="ClientCarousel">
      <div class="ClientCarousel__wrapper ClientCarousel__wrapper--dark">
        <div class="ClientCarousel__container">
          <h2 class="ClientCarousel__eyebrow ">Testimonials</h2>
          <h3 class="ClientCarousel__title ClientCarousel__title--light ClientCarousel__title--large">
            What Our <br />
            Clients Saying
          </h3>
        </div>
        <div class="ClientCarousel__carousel">
          <div class="ClientCarousel__reviews" ref={emblaRef}>
            <ul class="ClientCarousel__slides">
              {Slides.map((slide, index) => (
                <li
                  class={`ClientCarousel__slide ${
                    index === selectedIndex ? 'is-active' : ''
                  }`}
                  key={index}
                  onClick={() => onSlideClick(index)}
                >
                  <Review
                    reviewText={slide.reviewText}
                    authorPortrait={slide.authorPortrait}
                    authorName={slide.authorName}
                    authorCompany={slide.authorCompany}
                  />
                </li>
              ))}
            </ul>
          </div>
          <ul class="ClientCarousel__scroll">
            {Slides.map((slide, index) => (
              <li
                class={`ClientCarousel__dot ${
                  index === selectedIndex ? 'is-active' : ''
                }`}
                key={index}
                onClick={() => onSlideClick(index)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClientCarousel;
