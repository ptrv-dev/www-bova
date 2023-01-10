import React from 'react';
import Review from '../../Review';
import SectionTitle from '../../UI/SectionTitle';

import './Reviews.scss';

const reviews = [
  {
    image: '1.jpg',
    title: 'Леонід Макарон',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis iaculis leo, vel interdum est. Duis congue ex non facilisis euismod. Phasellus feugiat libero ante. Vivamus sit amet ante mi. Sed eget consequat mauris, feugiat vehicula velit.',
  },
  {
    image: '1.jpg',
    title: 'Леонід Макарон',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis iaculis leo, vel interdum est. Duis congue ex non facilisis euismod. Phasellus feugiat libero ante. Vivamus sit amet ante mi. Sed eget consequat mauris, feugiat vehicula velit.',
  },
  {
    image: '1.jpg',
    title: 'Леонід Макарон',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis iaculis leo, vel interdum est. Duis congue ex non facilisis euismod. Phasellus feugiat libero ante. Vivamus sit amet ante mi. Sed eget consequat mauris, feugiat vehicula velit.',
  },
  {
    image: '1.jpg',
    title: 'Леонід Макарон',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis iaculis leo, vel interdum est. Duis congue ex non facilisis euismod. Phasellus feugiat libero ante. Vivamus sit amet ante mi. Sed eget consequat mauris, feugiat vehicula velit.',
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
