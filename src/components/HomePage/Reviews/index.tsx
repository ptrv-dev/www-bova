import React from 'react';
import Review from '../../Review';
import SectionTitle from '../../UI/SectionTitle';

import './Reviews.scss';

const reviews = [
  {
    title: 'Олександр Єрмаков',
    text: 'Отличный прицеп метал и швы на 👍\nСудя по швейлеру сделано неплохо.',
    date: '23.12.2022',
    rating: 4,
  },
  {
    title: 'Олексій Таран',
    text: 'Доброго дня. Навантажувач вогонь 🔥🔥🔥🔥🔥🔥. Удачі вам і вашому бізнесу.',
    date: '10.07.2022',
    rating: 5,
  },
  {
    title: 'Олексій',
    text: 'Хлопці молодці! За грамотного підходу техніка працює довго і як треба.',
    date: '25.05.2022',
    rating: 5,
  },
  {
    title: 'Миколай',
    text: 'Відсіяли такою 3 років, тільки УПС-4. В принципі норм(за свою ціну).',
    date: '07.08.2022',
    rating: 4,
  },
];

const Reviews: React.FC = () => {
  const [slide, setSlide] = React.useState<number>(0);
  const [slideWidth, setSlideWidth] = React.useState<number>(0);
  const slideRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setSlideWidth(slideRef.current!.offsetWidth);
  }, [slideRef]);

  React.useEffect(() => {
    const resize = () => {
      setSlideWidth(slideRef.current!.offsetWidth);
    };
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  const handleNextButton = () => {
    if (slide >= reviews.length - 1) return setSlide(0);
    setSlide((prev) => prev + 1);
  };
  const handlePrevButton = () => {
    if (slide <= 0) return setSlide(reviews.length - 1);
    setSlide((prev) => prev - 1);
  };

  return (
    <div className="section reviews">
      <div className="reviews__container container">
        <SectionTitle>Люди про нас</SectionTitle>
        <div className="reviews__slider reviews-slider">
          <button
            className="reviews-slider__button reviews-slider__button_prev"
            onClick={handlePrevButton}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.875 3.75L13.125 10L6.875 16.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="reviews-slider__body">
            {reviews.map((review, idx) => (
              <Review
                key={idx}
                className="reviews__item"
                style={{
                  transform: `translateX(-${
                    slide * slideWidth + slide * 16
                  }px)`,
                }}
                myRef={slideRef}
                {...review}
              />
            ))}
          </div>
          <button
            className="reviews-slider__button reviews-slider__button_next"
            onClick={handleNextButton}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.875 3.75L13.125 10L6.875 16.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
