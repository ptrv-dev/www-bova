import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../UI/SectionTitle';

import './Categories.scss';

export const categories = [
  {
    title: 'Розкидачі мінеральних добрив',
    categoryId: 1,
    image: 'мін добрива.png',
    video: 'мін добрива.mp4',
  },
  {
    title: 'Розкидачі органічних добрив',
    categoryId: 2,
    image: 'орг добрива.png',
    video: 'орг добрива.mp4',
  },
  {
    title: 'Причепи',
    categoryId: 3,
    image: 'причепи.png',
    video: 'причепи.mp4',
  },
  { title: 'Напівпричепи', categoryId: 4, image: 'напів причепи.png' },
  { title: 'Фронтальні навантажувачі', categoryId: 5, image: 'куни.png' },
  {
    title: 'Сівалки',
    categoryId: 6,
    image: 'сівалки.png',
    video: 'сівалки.mp4',
  },
  {
    title: 'Зернометателі',
    categoryId: 7,
    image: 'зернометателі.png',
    video: 'зм.mp4',
  },
  { title: 'Катки', categoryId: 8, image: 'катки.png', video: 'катки.mp4' },
  { title: 'Борони', categoryId: 9, image: 'борони.png' },
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
