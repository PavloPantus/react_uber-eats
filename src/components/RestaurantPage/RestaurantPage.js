import React, { useEffect } from 'react';
import './RestaurantPage.scss';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { ScrollToTopOnMount } from '../ScrollToTop';
import { RestaurantMenuList } from '../RestaurantMenuList';
import Error from '../Error/index';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export const RestaurantPage = (
  {
    restaurantData,
    loadRestaurantData,
    isLoading,
    restaurantMenuSectionsInfo,
    error,
  }
) => {
  const match = useRouteMatch();

  const { restaurantAddress } = match.params;

  useEffect(() => {
    loadRestaurantData(restaurantAddress);
  }, []);

  if (isLoading && !restaurantData) {
    return (
      <>
        <ScrollToTopOnMount />
        <Loader />
      </>
    );
  }

  if (error && !restaurantData) {
    return <Error message={error} />;
  }

  if (restaurantData) {
    return (
      <>
        <ScrollToTopOnMount />

        <div className="restaurant__page">

          <div
            className="restaurant__background-container"
            style={
              {
                backgroundImage: `url(${restaurantData.heroImageUrls[5]
                  ? restaurantData.heroImageUrls[5].url
                  // eslint-disable-next-line max-len
                  : 'https://www.europarl.europa.eu/news/img/mediasize_video.png'})`,
              }
            }
          >
            <div className="restaurant__info-container">
              <div className="content">
                <div className="restaurant__info restaurant-info">
                  <h1 className="restaurant-info__title">
                    {restaurantData.title}
                  </h1>
                  <div className="restaurant__categories">
                    {
                      restaurantData.categories
                        .join(' • ')
                    }
                  </div>
                  <div className="restaurant__eta-range">
                    {
                      restaurantData.etaRange
                        ? restaurantData.etaRange : DEFAULT_ETA_RANGE
                    }
                  </div>
                  <div className="restaurant__address">
                    {restaurantData.location.address}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="restaurant__page-container">
          <RestaurantMenuList
            restaurantMenuSectionsInfo={restaurantMenuSectionsInfo}
          />
        </div>
      </>

    );
  }

  return (
    <>
      <ScrollToTopOnMount />
      <Loader />
    </>
  );
};

RestaurantPage.propTypes = {
  restaurantData: PropTypes.shape({
    heroImageUrls: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    etaRange: PropTypes.oneOfType([
      PropTypes.oneOf([null]), PropTypes.string,
    ]),
  }),
  loadRestaurantData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  restaurantMenuSectionsInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool.isRequired,
};

RestaurantPage.defaultProps = {
  restaurantData: null,
};
