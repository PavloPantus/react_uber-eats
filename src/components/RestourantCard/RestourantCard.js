import React from 'react';
import PropTypes from 'prop-types';
import './RestourantCard.scss';
import { Link } from 'react-router-dom';

export const RestourantCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    etaRange,
    uuid,
  } = props;

  return (
    <Link to={`/restaurantId/${uuid}`} className="restaurant-card">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="restaurant-card__img"
      />
      <h2 className="restaurant-card__title">{title}</h2>
      <div className="restaurant-card__categories">
        {categories.join(' • ')}
      </div>
      <div className="restaurant-card__eta">
        {etaRange}
      </div>
    </Link>
  );
};

RestourantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
  uuid: PropTypes.string.isRequired,
};

RestourantCard.defaultProps = {
  categories: [],
  etaRange: '',
};
