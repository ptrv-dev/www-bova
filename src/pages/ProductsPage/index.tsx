import React from 'react';
import { useParams } from 'react-router-dom';

import './ProductsPage.scss';

import json from '../../json/products.json';
import SectionTitle from '../../components/UI/SectionTitle';
import { categories } from '../../components/HomePage/Categories';
import { IProductItem } from '../../@types/custom';
import ProductCard from '../../components/ProductCard';

const ProductsPage: React.FC = () => {
  const { category } = useParams();

  const [products, setProducts] = React.useState<IProductItem[] | undefined>(
    []
  );

  React.useEffect(() => {
    setProducts(json.filter((item) => item.categoryId === Number(category)));
  }, [category]);

  return (
    <div className="products-page">
      <div className="products-page__container container">
        <SectionTitle>
          {
            categories.find((item) => item.categoryId === Number(category))!
              .title
          }
        </SectionTitle>
        {products && (
          <div className="products-page__list">
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                className="products-page__item"
                {...product}
                image={product.images[0]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
