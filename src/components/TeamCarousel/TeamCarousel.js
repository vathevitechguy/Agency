import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
<<<<<<< HEAD
import { FAQS, Profiles } from '../../constant/script';
=======
import { Profiles } from '../../constant/script';
>>>>>>> 31e2bdf6854e6291abf1670d823f41674e39406f
import Profile from '../Profile/Profile';
import './TeamCarousel.scss';
import ClassNames from 'embla-carousel-class-names';

const TeamCarousel = () => {
  const options = {
    align: 'start',
    loop: true,
  };
  const classNames = ClassNames(options);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [classNames]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onProfileClick = useCallback(
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
    <section className="TeamCarousel">
      <div className="TeamCarousel__heading">
        <div>
          <h4 className="TeamCarousel__eyebrow">Our Team</h4>
          <h2 className="TeamCarousel__title">
            Team of Designers and Developers
          </h2>
        </div>
        <div className="TeamCarousel__buttons">
          <img
            src="./assets/icons/left.png"
            alt="arrow-left"
            onClick={scrollPrev}
          />
          <img
            src="./assets/icons/right.png"
            alt="arrow-right"
            onClick={scrollNext}
          />
        </div>
      </div>
      <div className="TeamCarousel__carousel">
        <div className="TeamCarousel__profiles" ref={emblaRef}>
          <ul className="TeamCarousel__slides">
            {Profiles.map((profile, i) => {
              return (
                <li
                  className={`TeamCarousel__profile ${
                    i === selectedIndex && 'is-active'
                  }`}
                  key={i}
                  onClick={() => onProfileClick(i)}
                >
                  <Profile
                    fullName={profile.fullName}
                    imgSrc={profile.imgSrc}
                    jobTitle={profile.jobTitle}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <ul class="TeamCarousel__scroll">
          {Profiles.map((_, index) => (
            <li
              class={`TeamCarousel__dot ${
                index === selectedIndex && 'is-active'
              } `}
              key={index}
              onClick={() => onProfileClick(index)}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamCarousel;
