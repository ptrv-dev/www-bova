import React from 'react';
import { useSelector } from 'react-redux';
import { phones } from '../Header';

import { RootState, useAppDispatch } from '../../store/store';
import { setIsActive } from '../../store/slices/popupSlice';

const ContactUsPopup: React.FC = () => {
  const { isActive } = useSelector((state: RootState) => state.popupReducer);

  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(setIsActive(false));

  return (
    <div className={`backdrop ${isActive ? 'backdrop_active' : ''}`}>
      <div className="contact-us-popup">
        <div className="contact-us-popup__header">
          <h3>Зв'язок з нами</h3>
        </div>
        <div className="contact-us-popup__body">
          <p>
            Для отримання додаткової інформації та/або оформлення замовлення ви
            маєте зв'язатися з одним із наших менеджерів за наступними
            телефонами:
          </p>
          <div className="contact-us-popup__list">
            {phones.map((phone, idx) => (
              <a
                key={idx}
                className="contact-us-popup__phone"
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
        <div className="contact-us-popup__footer">
          <button className="btn" onClick={handleClose}>
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPopup;
