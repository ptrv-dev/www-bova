import React from 'react';
import { Link } from 'react-router-dom';

import './ProductInfoCard.scss';

interface ProductCardProps {
  id: number;
  category: number;
  image: string;
  title: string;
  description: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  category,
  image,
  title,
  description,
  className,
}) => {
  return (
    <div className={`product-info-card ${className ? className : ''}`}>
      <img
        src={`./assets/img/products/${image}`}
        alt={title}
        className="product-info-card__image"
      />
      <h5 className="product-info-card__title">{title}</h5>
      <p className="product-info-card__description">
        {description.length <= 153
          ? description
          : description.slice(0, 150) + '...'}
      </p>
      <Link to={`/products/${category}/${id}`} className="btn btn_o">
        Докладніше...
      </Link>
    </div>
  );
};

export default ProductCard;
