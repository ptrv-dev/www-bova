import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../UI/SectionTitle';

import './Categories.scss';

const categories = [
  { title: 'Розкидачі мінеральних добрив', categoryId: 1, image: '1.png' },
  { title: 'Розкидачі органічних добрив', categoryId: 2, image: '1.png' },
  { title: 'Причепи', categoryId: 3, image: '1.png' },
  { title: 'Напівпричепи', categoryId: 4, image: '1.png' },
  { title: 'Куни', categoryId: 1, image: '1.png' },
  { title: 'Сівалки', categoryId: 6, image: '1.png' },
  { title: 'Зернометателі', categoryId: 7, image: '1.png' },
  { title: 'Катки', categoryId: 8, image: '1.png' },
  { title: 'Борони', categoryId: 9, image: '1.png' },
];

const Categories: React.FC = () => {
  return (
    <div className="section categories">
      <div className="categories__container container">
        <SectionTitle>Категорії</SectionTitle>
        <div className="categories__list">
          {categories.map((category, idx) => (
            <Link
              key={idx}
              to={`/products/${category.categoryId}`}
              className="categories__item"
            >
              <img src={`./assets/img/categories/${category.image}`} alt="" />
              <h4>{category.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
