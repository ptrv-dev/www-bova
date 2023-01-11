import React from 'react';
import { Link } from 'react-router-dom';
import { navigation, phones } from '../Header';
import { categories } from '../HomePage/Categories';

import './Footer.scss';

export const address = 'м. Запоріжжя, вул. Перемоги 216/4, 17564';

export const email = 'agrotech@gmail.com';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top__container container">
          <div className="footer-top__row">
            <Link to={'/'} className="logo">
              <div className="logo__top">
                <img src="/assets/img/logo.svg" alt="Logo" />
                <h3>AgroTech</h3>
              </div>
              <h5>продаж с/г техніки в Україні</h5>
            </Link>
          </div>
          <div className="footer-top__row">
            <div className="footer-info">
              <div className="footer-info__item">
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
                    d="M9.69 18.933L9.693 18.934C9.89 19.02 10 19 10 19C10 19 10.11 19.02 10.308 18.934L10.31 18.933L10.316 18.93L10.334 18.922C10.4289 18.8779 10.5226 18.8312 10.615 18.782C10.801 18.686 11.061 18.542 11.372 18.349C11.992 17.965 12.817 17.383 13.646 16.584C15.302 14.988 17 12.493 17 9C17 8.08075 16.8189 7.1705 16.4672 6.32122C16.1154 5.47194 15.5998 4.70026 14.9497 4.05025C14.2997 3.40024 13.5281 2.88463 12.6788 2.53284C11.8295 2.18106 10.9193 2 10 2C9.08075 2 8.1705 2.18106 7.32122 2.53284C6.47194 2.88463 5.70026 3.40024 5.05025 4.05025C4.40024 4.70026 3.88463 5.47194 3.53284 6.32122C3.18106 7.1705 3 8.08075 3 9C3 12.492 4.698 14.988 6.355 16.584C7.04875 17.2503 7.8106 17.8419 8.628 18.349C8.94459 18.5456 9.27029 18.7271 9.604 18.893L9.666 18.922L9.684 18.93L9.69 18.933ZM10 11.25C10.5967 11.25 11.169 11.0129 11.591 10.591C12.0129 10.169 12.25 9.59674 12.25 9C12.25 8.40326 12.0129 7.83097 11.591 7.40901C11.169 6.98705 10.5967 6.75 10 6.75C9.40326 6.75 8.83097 6.98705 8.40901 7.40901C7.98705 7.83097 7.75 8.40326 7.75 9C7.75 9.59674 7.98705 10.169 8.40901 10.591C8.83097 11.0129 9.40326 11.25 10 11.25Z"
                    fill="white"
                  />
                </svg>
                {address}
              </div>
              <a href={`mailto:${email}`} className="footer-info__item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V7.161L9.441 11.382C9.61456 11.4688 9.80595 11.514 10 11.514C10.194 11.514 10.3854 11.4688 10.559 11.382L19 7.162V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4H3Z"
                    fill="white"
                  />
                  <path
                    d="M19 8.83911L11.23 12.7241C10.8481 12.9151 10.427 13.0145 10 13.0145C9.57301 13.0145 9.1519 12.9151 8.77 12.7241L1 8.83911V14.0001C1 14.5305 1.21071 15.0393 1.58579 15.4143C1.96086 15.7894 2.46957 16.0001 3 16.0001H17C17.5304 16.0001 18.0391 15.7894 18.4142 15.4143C18.7893 15.0393 19 14.5305 19 14.0001V8.83911Z"
                    fill="white"
                  />
                </svg>
                {email}
              </a>
              {phones.map((phone, idx) => (
                <a
                  key={idx}
                  className="footer-info__item"
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
                      fill="white"
                    />
                  </svg>
                  {phone.text}
                </a>
              ))}
            </div>
            <div className="footer__nav">
              {navigation.map((item, idx) => (
                <Link key={idx} to={item.link}>
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="footer__categories">
              <span>Каталог</span>
              {categories.map((category, idx) => (
                <Link key={idx} to={`/products/${category.categoryId}`}>
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer__copyright">
            © 2022 “AgroTech” • All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
