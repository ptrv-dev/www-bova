import React from 'react';
import ContactButton from '../../UI/ContactButton';

import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__container container">
        <div className="hero__col">
          <h1>
            Виробник сільськогосподарської техніки та запасних частин №1 в
            Україні
          </h1>
          <div className="hero__buttons">
            <ContactButton />
            <button className="btn btn_o">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.25 2C3.65326 2 3.08097 2.23705 2.65901 2.65901C2.23705 3.08097 2 3.65326 2 4.25V6.75C2 7.34674 2.23705 7.91903 2.65901 8.34099C3.08097 8.76295 3.65326 9 4.25 9H6.75C7.34674 9 7.91903 8.76295 8.34099 8.34099C8.76295 7.91903 9 7.34674 9 6.75V4.25C9 3.65326 8.76295 3.08097 8.34099 2.65901C7.91903 2.23705 7.34674 2 6.75 2H4.25ZM4.25 11C3.65326 11 3.08097 11.2371 2.65901 11.659C2.23705 12.081 2 12.6533 2 13.25V15.75C2 16.3467 2.23705 16.919 2.65901 17.341C3.08097 17.7629 3.65326 18 4.25 18H6.75C7.34674 18 7.91903 17.7629 8.34099 17.341C8.76295 16.919 9 16.3467 9 15.75V13.25C9 12.6533 8.76295 12.081 8.34099 11.659C7.91903 11.2371 7.34674 11 6.75 11H4.25ZM13.25 2C12.6533 2 12.081 2.23705 11.659 2.65901C11.2371 3.08097 11 3.65326 11 4.25V6.75C11 7.34674 11.2371 7.91903 11.659 8.34099C12.081 8.76295 12.6533 9 13.25 9H15.75C16.3467 9 16.919 8.76295 17.341 8.34099C17.7629 7.91903 18 7.34674 18 6.75V4.25C18 3.65326 17.7629 3.08097 17.341 2.65901C16.919 2.23705 16.3467 2 15.75 2H13.25ZM13.25 11C12.6533 11 12.081 11.2371 11.659 11.659C11.2371 12.081 11 12.6533 11 13.25V15.75C11 16.3467 11.2371 16.919 11.659 17.341C12.081 17.7629 12.6533 18 13.25 18H15.75C16.3467 18 16.919 17.7629 17.341 17.341C17.7629 16.919 18 16.3467 18 15.75V13.25C18 12.6533 17.7629 12.081 17.341 11.659C16.919 11.2371 16.3467 11 15.75 11H13.25Z"
                  fill="#EA580C"
                />
              </svg>
              До каталогу
            </button>
          </div>
        </div>
        <img
          src="./assets/img/hero/hero-image.png"
          alt=""
          className="hero__image"
        />
      </div>
    </div>
  );
};

export default Hero;
