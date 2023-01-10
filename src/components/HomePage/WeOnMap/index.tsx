import React from 'react';
import SectionTitle from '../../UI/SectionTitle';

import './WeOnMap.scss';

const WeOnMap: React.FC = () => {
  return (
    <div className="section map">
      <div className="map__container container">
        <SectionTitle>Ми на мапі</SectionTitle>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10704.106149707071!2d35.185341136707166!3d47.87781344502047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc67bab9a7ecd9%3A0x4a4b5d5e584227b7!2z0KDQmNCdINCb0KLQlA!5e0!3m2!1sru!2sua!4v1673362314737!5m2!1sru!2sua"
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default WeOnMap;
