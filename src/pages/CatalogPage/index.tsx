import React from 'react';
import Categories from '../../components/HomePage/Categories';

import './CatalogPage.scss';

const CatalogPage: React.FC = () => {
  return (
    <div className="catalog">
      <div className="catalog__container container">
        <Categories />
      </div>
    </div>
  );
};

export default CatalogPage;
