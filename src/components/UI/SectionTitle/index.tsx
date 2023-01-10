import React from 'react';

import './SectionTitle.scss';

interface SectionTitleProps {
  children: String;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="section-title">
      <span />
      <h2>{children}</h2>
      <span />
    </div>
  );
};

export default SectionTitle;
