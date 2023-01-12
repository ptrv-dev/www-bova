import React from 'react';

import SectionTitle from '../../UI/SectionTitle';

import './Advantages.scss';

const advantages = [
  'Гарантія якості від виробника 2 роки',
  'Займаємося власним виробництвом вже 5 років',
  'Надійність та відповідальність',
  'Широкий асортимент',
];

const Advantages: React.FC = () => {
  return (
    <div className="section advantages">
      <div className="container">
        <SectionTitle>Наші переваги</SectionTitle>
        <div className="advantages__list">
          {advantages.map((advantage, idx) => (
            <div key={idx} className="advantages__item">
              <span>0{idx + 1}</span>
              <h4>{advantage}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
