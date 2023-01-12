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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.710150157306!2d30.77853193419579!3d50.24131964456086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4eb307f4c5561%3A0x4ca1517a34f549f!2z0LLRg9C70LjRhtGPINCm0LXQvdGC0YDQsNC70YzQvdCwLCA2LCDQn9GA0L7RhtGW0LIsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7LiwgMDgzNDQ!5e0!3m2!1sru!2sua!4v1673516367746!5m2!1sru!2sua"
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default WeOnMap;
