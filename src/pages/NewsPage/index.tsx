import React from 'react';
import SectionTitle from '../../components/UI/SectionTitle';

import './NewsPage.scss';

const news = [
  {
    video: '1.mp4',
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit aspernatur est dolor, voluptatem possimus tempore dolorem, error voluptatum obcaecati doloremque unde. Maiores consectetur ullam facilis similique molestias nobis corrupti quidem.',
  },
  {
    video: '1.mp4',
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit aspernatur est dolor, voluptatem possimus tempore dolorem, error voluptatum obcaecati doloremque unde. Maiores consectetur ullam facilis similique molestias nobis corrupti quidem.',
  },
  {
    video: '1.mp4',
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit aspernatur est dolor, voluptatem possimus tempore dolorem, error voluptatum obcaecati doloremque unde. Maiores consectetur ullam facilis similique molestias nobis corrupti quidem.',
  },
  {
    video: '1.mp4',
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit aspernatur est dolor, voluptatem possimus tempore dolorem, error voluptatum obcaecati doloremque unde. Maiores consectetur ullam facilis similique molestias nobis corrupti quidem.',
  },
];
const NewsPage: React.FC = () => {
  return (
    <div className="news-page">
      <div className="news-page__container container">
        <SectionTitle>Новини</SectionTitle>
        <div className="news-page__body">
          {news.map((item, idx) => (
            <div key={idx} className="news-page__item">
              <video src={`/assets/video/${item.video}`} controls></video>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
