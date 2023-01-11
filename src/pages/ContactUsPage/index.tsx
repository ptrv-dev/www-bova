import React from 'react';
import { address, email } from '../../components/Footer';
import { phones } from '../../components/Header';
import SectionTitle from '../../components/UI/SectionTitle';

import './ContactUsPage.scss';

const ContactUsPage: React.FC = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-page__container container">
        <SectionTitle>Контакти</SectionTitle>
        <div className="contact-us-page__body">
          <h3 className="contact-us-page__title">ТОВ “Agrotech”</h3>
          <div className="contact-us-page__row">
            <div className="contact-us-page__item">
              <h4 className="contact-us-page__subtitle">Номера телефонів</h4>
              <div className="contact-us-page__list">
                {phones.map((phone, idx) => (
                  <a
                    key={idx}
                    className="contact-us-page__list-item"
                    href={`tel:${phone.number}`}
                  >
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
                        d="M2 3.5C2 3.10218 2.15804 2.72064 2.43934 2.43934C2.72065 2.15804 3.10218 2 3.5 2H4.648C4.98947 1.99986 5.32076 2.11622 5.58714 2.32987C5.85351 2.54351 6.03902 2.84165 6.113 3.175L6.829 6.398C6.91176 6.77112 6.84897 7.16176 6.65346 7.49015C6.45795 7.81854 6.14446 8.05992 5.777 8.165L4.844 8.432C4.434 8.549 4.201 8.987 4.364 9.382C4.94408 10.7844 5.79505 12.0587 6.86819 13.1318C7.94134 14.205 9.21558 15.0559 10.618 15.636C11.013 15.799 11.451 15.566 11.568 15.156L11.835 14.223C11.9401 13.8555 12.1815 13.5421 12.5099 13.3465C12.8382 13.151 13.2289 13.0882 13.602 13.171L16.825 13.887C17.1584 13.961 17.4565 14.1465 17.6701 14.4129C17.8838 14.6792 18.0001 15.0105 18 15.352V16.5C18 16.8978 17.842 17.2794 17.5607 17.5607C17.2794 17.842 16.8978 18 16.5 18H15C13.851 18 12.737 17.85 11.674 17.57C9.45506 16.9808 7.43133 15.8155 5.80794 14.1921C4.18454 12.5687 3.01919 10.5449 2.43 8.326C2.14388 7.24051 1.99934 6.12257 2 5V3.5Z"
                        fill="#44403C"
                      />
                    </svg>
                    {phone.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-us-page__item">
              <h4 className="contact-us-page__subtitle">Електронна адреса</h4>
              <a
                href={`mailto:${email}`}
                className="contact-us-page__list-item"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.66675 4C3.13632 4 2.62761 4.21071 2.25253 4.58579C1.87746 4.96086 1.66675 5.46957 1.66675 6V7.161L10.1077 11.382C10.2813 11.4688 10.4727 11.514 10.6667 11.514C10.8608 11.514 11.0522 11.4688 11.2257 11.382L19.6667 7.162V6C19.6667 5.46957 19.456 4.96086 19.081 4.58579C18.7059 4.21071 18.1972 4 17.6667 4H3.66675Z"
                    fill="#44403C"
                  />
                  <path
                    d="M19.6667 8.83911L11.8967 12.7241C11.5149 12.9151 11.0937 13.0145 10.6667 13.0145C10.2398 13.0145 9.81864 12.9151 9.43675 12.7241L1.66675 8.83911V14.0001C1.66675 14.5305 1.87746 15.0393 2.25253 15.4143C2.62761 15.7894 3.13632 16.0001 3.66675 16.0001H17.6667C18.1972 16.0001 18.7059 15.7894 19.081 15.4143C19.456 15.0393 19.6667 14.5305 19.6667 14.0001V8.83911Z"
                    fill="#44403C"
                  />
                </svg>

                {email}
              </a>
            </div>
            <div className="contact-us-page__item">
              <h4 className="contact-us-page__subtitle">Фізична адреса</h4>
              <p className="contact-us-page__list-item">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0233 18.933L10.0263 18.934C10.2233 19.02 10.3333 19 10.3333 19C10.3333 19 10.4433 19.02 10.6413 18.934L10.6433 18.933L10.6493 18.93L10.6673 18.922C10.7622 18.8779 10.8559 18.8312 10.9483 18.782C11.1343 18.686 11.3943 18.542 11.7053 18.349C12.3253 17.965 13.1503 17.383 13.9793 16.584C15.6353 14.988 17.3333 12.493 17.3333 9C17.3333 8.08075 17.1522 7.1705 16.8004 6.32122C16.4486 5.47194 15.933 4.70026 15.283 4.05025C14.633 3.40024 13.8613 2.88463 13.012 2.53284C12.1628 2.18106 11.2525 2 10.3333 2C9.414 2 8.50375 2.18106 7.65447 2.53284C6.80519 2.88463 6.03351 3.40024 5.3835 4.05025C4.73349 4.70026 4.21788 5.47194 3.8661 6.32122C3.51431 7.1705 3.33325 8.08075 3.33325 9C3.33325 12.492 5.03125 14.988 6.68825 16.584C7.382 17.2503 8.14385 17.8419 8.96125 18.349C9.27784 18.5456 9.60354 18.7271 9.93725 18.893L9.99925 18.922L10.0173 18.93L10.0233 18.933ZM10.3333 11.25C10.93 11.25 11.5023 11.0129 11.9242 10.591C12.3462 10.169 12.5833 9.59674 12.5833 9C12.5833 8.40326 12.3462 7.83097 11.9242 7.40901C11.5023 6.98705 10.93 6.75 10.3333 6.75C9.73651 6.75 9.16422 6.98705 8.74226 7.40901C8.32031 7.83097 8.08325 8.40326 8.08325 9C8.08325 9.59674 8.32031 10.169 8.74226 10.591C9.16422 11.0129 9.73651 11.25 10.3333 11.25V11.25Z"
                    fill="#44403C"
                  />
                </svg>
                {address}
              </p>
            </div>
            <div className="contact-us-page__item">
              <h4 className="contact-us-page__subtitle">Графік роботи</h4>
              <div className="contact-us-page__list">
                <p className="contact-us-page__list-item">Понеділок - Субота</p>
                <p className="contact-us-page__list-item">8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10704.106149707071!2d35.185341136707166!3d47.87781344502047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc67bab9a7ecd9%3A0x4a4b5d5e584227b7!2z0KDQmNCdINCb0KLQlA!5e0!3m2!1sru!2sua!4v1673362314737!5m2!1sru!2sua"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-us-page__map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
