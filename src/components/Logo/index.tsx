import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo: React.FC = () => {
  return (
    <Link to={'/'} className="logo">
      <div className="logo__top">
        <img src="/assets/img/logo.png" alt="Logo" />
        <h3>ТОВ «Завод АгроТех»</h3>
      </div>
      <h5>українське виробниче підприємство</h5>
    </Link>
  );
};

export default Logo;
