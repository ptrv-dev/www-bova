import React from 'react';

import SectionTitle from '../../UI/SectionTitle';

import './DeliveryAndPay.scss';

const delivery = [
  'доставка транспортними компаніями',
  'доставка власним автотранспортом',
  'самовивіз',
];

const pay = [
  'передоплата 30% на банківську картку',
  'повна передоплата на банківську картку',
  'оплата при отриманні',
];

const DeliveryAndPay: React.FC = () => {
  return (
    <div className="section delivery-and-pay">
      <div className="delivery-and-pay__container container">
        <SectionTitle>Доставка та оплата</SectionTitle>
        <div className="delivery-and-pay__row">
          <div className="delivery-and-pay__item">
            <img src="./assets/img/delivery.png" alt="" />
            <h4>Доставка</h4>
            <ul>
              {delivery.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="delivery-and-pay__item">
            <img src="./assets/img/money.png" alt="" />
            <h4>Оплата</h4>
            <ul>
              {pay.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndPay;
