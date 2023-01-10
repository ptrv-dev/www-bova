import React from 'react';

import './Review.scss';

interface ReviewProps {
  image: string;
  title: string;
  text: string;
}

const Review: React.FC<ReviewProps> = ({ image, title, text }) => {
  return (
    <div className="review">
      <img src={`./assets/img/customers/${image}`} alt={title} />
      <div className="review__col">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
