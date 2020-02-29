import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import { RestourantCard } from '../RestourantCard/RestourantCard';
import './RestourantsListPage.scss';
import Loader from '../Loader/Loader';
import Error from '../Error/index';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export const RestaurantsListPage = (
  { restaurantsData,
    loadRESTAURANTS,
    error,
    isLoading,
    address,
    time,
    setSearchQuery,
    search }
) => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  useEffect(() => {
    if (!searchParams.get('location')) {
      searchParams.set('location', 'kyiv');
    }

    history.push({
      search: `?${searchParams.toString()}`,
    });
    loadRESTAURANTS(searchParams.get('location'));
  }, [address]);

  const filteredRestaurantsData = useMemo(
    () => restaurantsData.filter(
      (restaurant) => {
        const query = search.trim().toLowerCase();
        const {
          title,
          categories,
          etaRange,
          slug,
        } = restaurant;

        if (
          (title + categories.join(' ') + etaRange + slug)
            .toLowerCase().includes(query)
        ) {
          return true;
        }

        return false;
      }
    ),
    [search, restaurantsData]
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="restaurants-list-page">
      <div className="content">
        <div className="restaurants-list">
          {filteredRestaurantsData.map(
            (restaurant) => {
              const {
                uuid,
                title,
                heroImageUrl: imageUrl,
                categories,
                etaRange,
              } = restaurant;

              return (
                <RestourantCard
                  key={uuid}
                  uuid={uuid}
                  title={title}
                  imageUrl={imageUrl}
                  categories={categories}
                  etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(
    PropTypes.shape({})
  ),
  loadRESTAURANTS: PropTypes.func.isRequired,
  error: PropTypes.bool,
  isLoading: PropTypes.bool,
  address: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};
