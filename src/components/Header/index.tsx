import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const phones = [
  { text: '+380 (99) 760 39 29', number: '+380997603929' },
  { text: '+380 (99) 760 39 29', number: '+380997603929' },
];

const navigation = [
  {
    text: 'Головна',
    link: '/',
  },
  {
    text: 'Каталог',
    link: '/',
  },
  {
    text: 'Новини',
    link: '/',
  },
  {
    text: 'Про нас',
    link: '/',
  },
  {
    text: 'Контакти',
    link: '/',
  },
];

const ContactButton: React.FC = () => {
  return (
    <button className="btn">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.505 2.365C5.32653 2.12142 7.16226 1.99948 9 2C10.863 2 12.697 2.124 14.495 2.365C15.742 2.532 16.675 3.473 16.93 4.633C16.7394 4.59745 16.5466 4.57441 16.353 4.564C14.7855 4.47838 13.2145 4.47838 11.647 4.564C9.229 4.696 7.5 6.727 7.5 8.998V11.238C7.5 12.651 8.17 13.973 9.26 14.8L6.28 17.78C6.17511 17.8848 6.04153 17.9561 5.89614 17.985C5.75074 18.0139 5.60004 17.999 5.46308 17.9423C5.32611 17.8856 5.20903 17.7895 5.12661 17.6663C5.04419 17.5431 5.00013 17.3982 5 17.25V13.807C4.499 13.759 4 13.701 3.505 13.635C2.033 13.438 1 12.162 1 10.72V5.28C1 3.839 2.033 2.563 3.505 2.366V2.365Z"
          fill="white"
        />
        <path
          d="M14 6C13.238 6 12.48 6.02 11.729 6.062C10.157 6.148 9 7.472 9 8.998V11.238C9 12.757 10.147 14.077 11.71 14.173C11.924 14.186 12.138 14.197 12.352 14.207C12.552 14.216 12.737 14.297 12.87 14.431L15.22 16.781C15.3249 16.8858 15.4586 16.9572 15.6041 16.986C15.7496 17.0149 15.9004 16.9999 16.0374 16.9431C16.1744 16.8863 16.2915 16.7901 16.3738 16.6667C16.4562 16.5433 16.5001 16.3983 16.5 16.25V14.18C17.953 13.985 19 12.717 19 11.265V8.998C19 7.472 17.843 6.148 16.271 6.062C15.5147 6.02068 14.7574 6.00001 14 6Z"
          fill="white"
        />
      </svg>
      Зв’язатись з нами
    </button>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [width, setWidth] = React.useState<Number>(0);

  React.useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    resize();

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top__container container">
          <Link to={'/'} className="logo">
            <div className="logo__top">
              <img src="/assets/img/logo.svg" alt="Logo" />
              <h3>AgroTech</h3>
            </div>
            <h5>продаж с/г техніки в Україні</h5>
          </Link>
          <div className="header-phones">
            {phones.map((phone, idx) => (
              <a
                key={idx}
                className="header-phones__item"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 3.5C2 3.10218 2.15804 2.72064 2.43934 2.43934C2.72065 2.15804 3.10218 2 3.5 2H4.648C4.98947 1.99986 5.32076 2.11622 5.58714 2.32987C5.85351 2.54351 6.03902 2.84165 6.113 3.175L6.829 6.398C6.91176 6.77112 6.84897 7.16176 6.65346 7.49015C6.45795 7.81854 6.14446 8.05992 5.777 8.165L4.844 8.432C4.434 8.549 4.201 8.987 4.364 9.382C4.94408 10.7844 5.79505 12.0587 6.86819 13.1318C7.94134 14.205 9.21558 15.0559 10.618 15.636C11.013 15.799 11.451 15.566 11.568 15.156L11.835 14.223C11.9401 13.8555 12.1815 13.5421 12.5099 13.3465C12.8382 13.151 13.2289 13.0882 13.602 13.171L16.825 13.887C17.1584 13.961 17.4565 14.1465 17.6701 14.4129C17.8838 14.6792 18.0001 15.0105 18 15.352V16.5C18 16.8978 17.842 17.2794 17.5607 17.5607C17.2794 17.842 16.8978 18 16.5 18H15C13.851 18 12.737 17.85 11.674 17.57C9.45506 16.9808 7.43133 15.8155 5.80794 14.1921C4.18454 12.5687 3.01919 10.5449 2.43 8.326C2.14388 7.24051 1.99934 6.12257 2 5V3.5Z"
                    fill="white"
                  />
                </svg>
                {phone.text}
              </a>
            ))}
          </div>
          {width > 550 && <ContactButton />}
          <button
            className={`header__burger ${
              isMenuOpen ? 'header__burger_active' : ''
            }`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom__container container">
          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav_active' : ''}`}
          >
            {navigation.map((item, idx) => (
              <Link key={idx} to={item.link}>
                {item.text}
              </Link>
            ))}
            {width <= 550 && <ContactButton />}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
