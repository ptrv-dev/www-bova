import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

interface ProductCardProps {
  className?: string;
  id: number;
  categoryId: number;
  image: string;
  title: string;
  description: string;
  price: number;
  badge?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  id,
  categoryId,
  image,
  title,
  description,
  price,
  badge = false,
}) => {
  return (
    <div className={`product-card ${className}`}>
      {badge && <div className="product-card__badge">Розстрочка</div>}
      <Link to={`/products/${categoryId}/${id}`}>
        <img
          src={`/assets/img/products/${image}`}
          alt={title}
          className="product-card__image"
        />
      </Link>
      <div className="product-card__row">
        <h3 className="product-card__title">{title}</h3>
        <h3 className="product-card__price">
          {price.toLocaleString('ua-UA', {
            style: 'currency',
            currency: 'UAH',
          })}
        </h3>
      </div>
      <p className="product-card__description">
        {description.length <= 153
          ? description
          : description.slice(0, 150) + '...'}
      </p>
      <Link
        to={`/products/${categoryId}/${id}`}
        className="product-card__btn btn"
      >
        Докладніше...
      </Link>
    </div>
  );
};

export default ProductCard;
