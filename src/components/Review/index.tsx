import React, { CSSProperties } from 'react';

import './Review.scss';

interface ReviewProps {
  title: string;
  text: string;
  date: string;
  rating: number;
  className?: string;
  myRef?: any;
  style?: CSSProperties;
}

const Review: React.FC<ReviewProps> = ({
  date,
  title,
  text,
  rating,
  className,
  style,
  myRef,
}) => {
  return (
    <div className={`review ${className || ''}`} style={style} ref={myRef}>
      <div className="review__header">
        <h3 className="review__title">{title}</h3>
        <h4 className="review__date">{date}</h4>
      </div>
      <div className="review__rating">
        {[...Array(5)].map((value, idx) => (
          <svg
            key={idx}
            width="16"
            height="16"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
              fill={rating >= idx + 1 ? '#1D4ED8' : '#C6D2F5'}
            />
          </svg>
        ))}
      </div>
      <p className="review__text">{text}</p>
    </div>
  );
};

export default Review;
