import React from 'react';
import SectionTitle from '../../UI/SectionTitle';

import './Popular.scss';

import products from '../../../json/products.json';
import ProductInfoCard from '../../ProductInfoCard';

const popular = [
  {
    id: 2,
    categoryId: 4,
  },
  {
    id: 1,
    categoryId: 5,
  },
  {
    id: 3,
    categoryId: 1,
  },
];

const Popular: React.FC = () => {
  return (
    <div className="section popular">
      <div className="popular__container container">
        <SectionTitle>Популярні товари</SectionTitle>
        <div className="popular__row">
          {popular.map((item, idx) => {
            const data = products.find(
              (product) =>
                product.id === item.id && product.categoryId === item.categoryId
            );

            if (data)
              return (
                <ProductInfoCard
                  key={idx}
                  id={data.id}
                  category={data.categoryId}
                  title={data.title}
                  description={data.description}
                  image={data.images[0]}
                  className="popular__item"
                />
              );
            else return <></>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
