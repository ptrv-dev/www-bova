import React from 'react';
import Review from '../../Review';
import SectionTitle from '../../UI/SectionTitle';

import './Reviews.scss';

const reviews = [
  {
    image: '1.jpg',
    title: 'Олександр Єрмаков',
    text: 'Отличный прицеп метал и швы на 👍\nСудя по швейлеру сделано неплохо.',
  },
  {
    image: '1.jpg',
    title: 'Олексій Таран',
    text: 'Здрастуйте. Навантажувач вогонь 🔥🔥🔥🔥🔥🔥. Удачі вам і вашому бізнесу.',
  },
  {
    image: '1.jpg',
    title: 'Олексій',
    text: 'Хлопці молодці! За грамотного підходу техніка працює довго і як треба.',
  },
  {
    image: '1.jpg',
    title: 'Миколай',
    text: 'Відсіяли такою 3 років, тільки УПС-4. Впринципі норм(за свою ціну).',
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="section reviews">
      <div className="reviews__container container">
        <SectionTitle>Люди про нас</SectionTitle>
        <div className="reviews__grid">
          {reviews.map((review, idx) => (
            <Review key={idx} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
