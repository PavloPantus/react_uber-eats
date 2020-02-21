import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = ({ message, setRestaurantsError }) => {
  useEffect(() => () => {
    setRestaurantsError(null);
  }, []);

  return (
    <div className="error">
      <p className="error__text">
        {`Error occurred... it's comething like - ${message};
        Try to reload this page, or go on home page
      `}
      </p>

      <a href="/" className="error__link">
        Go to HOME
      </a>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
  setRestaurantsError: PropTypes.func.isRequired,
};

Error.defaultProps = {
  message: 'Sorry, something went wrong',
};
