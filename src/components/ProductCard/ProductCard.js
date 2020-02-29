import React, { useState } from 'react';
import './ProductCard.scss';
import PropTypes from 'prop-types';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import ModalWindowOrder from '../ModalWindowOrder/index';

export const ProductCard = ({ productInfo }) => {
  const [showModalOrderData, setShowModalOrderData] = useState(false);

  const currencyCodes = {
    GBP: '£',
  };

  return (
    <>
      {
        showModalOrderData
        && (

          <ModalWindow
            closeModal={() => {
              setShowModalOrderData(false);
            }}
          >

            {closeHandle => (
              <ModalWindowOrder
                uuid={productInfo.uuid}
                closeHandle={closeHandle}
              />
            )
            }

          </ModalWindow>

        )
      }

      <div
        role="link"
        tabIndex={0}
        onKeyDown={((event) => {
          if (event.key === 'Enter') {
            setShowModalOrderData(true);
          }
        })}
        className="product"
        onClick={() => {
          setShowModalOrderData(true);
        }
        }

      >
        <div className="product__info">
          <h3 className="product__name">
            {productInfo.title}
          </h3>
          <p className="product__description">
            {productInfo.description}
          </p>
          <p className="product__price">
            {
              currencyCodes[productInfo.currencyCode]
            }
            {productInfo.price}
          </p>
        </div>
        <div
          className="product__image-container"
          style={
            {
              backgroundImage: `url(${productInfo.imageUrl})`,
            }
          }
        />

      </div>
    </>
  );
};

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType(
      [PropTypes.oneOf([null]), PropTypes.string]
    ),
    currencyCode: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.oneOfType(
      [PropTypes.oneOf([null]), PropTypes.string]
    ),
  }).isRequired,
};
