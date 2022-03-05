import { useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import Button from '../form/Button';

export const SliderItems = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length === 0) return null;

  return (
    <section className="slider">
      <div className="slider__arrow-left">
        <Button icon value={<MdNavigateBefore />} onClick={prevSlide} />
      </div>
      <div className="slider__arrow-right">
        <Button icon value={<MdNavigateNext />} onClick={nextSlide} />
      </div>

      {slides.map((item, index) => {
        const isActive = index === current;
        return (
          <div className={`slide ${isActive ? 'active' : ''}`} key={index}>
            <h4 className="slide__name">{item.name}</h4>
            {index === current && (
              <img className="slider__image" src={item.poster} alt="slide" />
            )}
          </div>
        );
      })}
    </section>
  );
};
