import React from 'react';
import './MenuCategorySection.scss';
import PropTypes from 'prop-types';
import { ProductCard } from '../ProductCard/ProductCard';

export const MenuCategorySection = ({ categorySection }) => (
  <div className="menu-category">
    <h2 className="menu-category__title">
      {categorySection.title}
    </h2>

    <ul className="menu-category__list">
      {
        categorySection.itemUuids
          .map((productInfo, i) => {
            const key = `${i}${productInfo.title}`;

            return (
              <li
                key={key}
              >
                <ProductCard
                  productInfo={productInfo}
                />
              </li>
            );
          })
      }
    </ul>
  </div>
);

MenuCategorySection.propTypes = {
  categorySection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    itemUuids: PropTypes.array.isRequired,
  }).isRequired,
};
