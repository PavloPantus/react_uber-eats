import React from 'react';
import PropTypes from 'prop-types';
import './RestourantCard.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export const RestourantCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    etaRange,
    uuid,
  } = props;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return (
    <Link
      to={`/restaurantId/${uuid}?${searchParams.toString()}`}
      className="restaurant-card"
    >
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
