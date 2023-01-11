import React from 'react';
import { useParams } from 'react-router-dom';

import { IProductItem } from '../../@types/custom';

import './ProductPage.scss';

import json from '../../json/products.json';
import ContactButton from '../../components/UI/ContactButton';

const ProductPage: React.FC = () => {
  const { category, id } = useParams();

  const [data, setData] = React.useState<IProductItem | undefined>();
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  React.useEffect(() => {
    setData(
      json.find(
        (item) => item.categoryId === Number(category) && item.id === Number(id)
      )
    );
  }, [category, id]);

  const handleClickNext = () => {
    if (currentSlide < data!.images.length - 1)
      setCurrentSlide((prev) => prev + 1);
  };
  const handleClickPrev = () => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div className="product-page">
      {data && (
        <div className="product-page__container container">
          <div className="product-page__top">
            <div className="product-slider">
              <div className="product-slider__root">
                {currentSlide > 0 && (
                  <button
                    onClick={handleClickPrev}
                    className="product-slider__btn product-slider__btn_prev"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
                <img
                  src={`/assets/img/products/${data.images[currentSlide]}`}
                  alt=""
                />
                {currentSlide < data.images.length - 1 && (
                  <button
                    onClick={handleClickNext}
                    className="product-slider__btn product-slider__btn_next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="product-slider__row">
                {data.images.map((image, idx) => (
                  <img
                    onClick={() => setCurrentSlide(idx)}
                    key={idx}
                    src={`/assets/img/products/${image}`}
                    alt=""
                    className={`product-slider__img ${
                      idx === currentSlide ? 'product-slider__img_active' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="product-page__info">
              <h2 className="product-page__title">{data.title}</h2>
              <h2 className="product-page__price">
                {data.price.toLocaleString('ua-UA', {
                  style: 'currency',
                  currency: 'UAH',
                })}
              </h2>
              <br />
              <h4 className="product-page__subtitle product-page__subtitle_mb">
                Для замовлення натискайте кнопку:
              </h4>
              <ContactButton />
              <h4 className="product-page__subtitle product-page__subtitle_mt">
                Опис:
              </h4>
              <p className="product-page__description">{data.description}</p>
            </div>
          </div>
          <div className="product-page__bottom">
            <div className="product-page-table">
              <h3>Технічні характеристики</h3>
              <table>
                <tbody>
                  {data.table.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
