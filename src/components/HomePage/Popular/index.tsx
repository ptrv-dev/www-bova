import React from 'react';
import SectionTitle from '../../UI/SectionTitle';

import './Popular.scss';

import products from '../../../json/products.json';
import ProductCard from '../../ProductInfoCard';

const popular = [
  {
    id: 1,
    categoryId: 1,
  },
  {
    id: 1,
    categoryId: 1,
  },
  {
    id: 1,
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
                product.id === item.id && product.categoryId === item.id
            );
            if (data)
              return (
                <ProductCard
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
