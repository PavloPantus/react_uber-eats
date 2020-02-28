/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router';
import PropTypes from 'prop-types';
import './Header.scss';
import TimePicker from 'rc-time-picker';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { Input } from '../Input/Input';
import 'rc-time-picker/assets/index.css';
import 'semantic-ui-css/semantic.min.css';

export const Header = (
  {
    address, setAdress, time,
    setTime, search, setSearch,
    locationsList, loadLocations,
  }
) => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  const [toggledLocation, setToggledLocation] = useState(false);
  const [toggledSearch, setToggledSearch] = useState(false);

  const locationsRef = useRef(null);
  const handleLocationsContainer = () => {
    locationsRef.current.open();
  };

  useEffect(() => {
    loadLocations();
  }, []);

  const handleAdressChange = useCallback(
    (event, { value }) => {
      setAdress(value);
      searchParams.set('location', value);
      history.push({
        pathname: '/',
        search: `?${searchParams.toString()}`,
      });
    }, []
  );

  const handleTimeChange = useCallback(
    (value) => {
      setTime(value);
    }, []
  );

  const handleSearchChange = useCallback(
    ({ target }) => {
      setSearch(target.value);
    }, []
  );

  return (
    <header className="header">

      <div className="content">

        <div className="header-inner">

          <Link to={`/?${searchParams.toString()}`}>
            <img
              className="header__logo"
              src="./react_uber-eats/images/logo.svg"
              alt="Uber Eats"
            />
          </Link>

          <div
            className="header__address control"
            onClick={handleLocationsContainer}
            onKeyDown={(event) => {
              if (event.key === 'enter') {
                handleLocationsContainer();
              }
            }}
          >
            <img
              className="input__icon"
              src="./react_uber-eats/images/place.svg"
              alt=""
            />
            <Dropdown
              ref={locationsRef}
              onChange={handleAdressChange}
              options={
                locationsList
                  .map(
                    item => ({
                      key: item.id, text: item.title, value: item.id,
                    })
                  )
              }
              placeholder="Location"
              selection
              value={address}
            />
          </div>

          <div className="header__time">
            <TimePicker
              showSecond={false}
              placeholder="ASAP"
              onChange={handleTimeChange}
              value={time}
            />
          </div>

          <Input
            name="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search"
            iconUrl="./react_uber-eats/images/search.svg"
            className="header__search"
          />

          <div className="header__mobile-controls">
            <button
              onClick={
                () => {
                  setToggledLocation(!toggledLocation);
                  setToggledSearch(false);
                }
              }
              className="header__mobile-location-toggler"
              type="button"
            >
              <img
                src="./react_uber-eats/images/location-icon.png"
                alt="location-icon"
              />
            </button>

            <button
              onClick={
                () => {
                  setToggledSearch(!toggledSearch);
                  setToggledLocation(false);
                }
              }
              className="header__mobile-search-toggler"
              type="button"
            >
              <img
                src="./react_uber-eats/images/search-icon.png"
                alt="location-icon"
              />
            </button>

          </div>

          <a href="/sign-in" className="header__sign-in">
            Sign In
          </a>

        </div>

        {
          (toggledSearch || toggledLocation)
          && (
            <div className="mobile-search-section">
              {
                toggledLocation
              && (
                <div className="mobile-location-container">

                  <div className="mobile-search-section__time--mobile">
                    <TimePicker
                      showSecond={false}
                      placeholder="ASAP"
                      onChange={handleTimeChange}
                      value={time}
                    />
                  </div>

                  <Input
                    name="address"
                    value={address}
                    onChange={handleAdressChange}
                    placeholder="Address"
                    iconUrl="./react_uber-eats/images/place.svg"
                    className="mobile-search-section__address--mobile"
                  />
                </div>
              )
              }

              {
                toggledSearch
              && (
                <Input
                  name="search"
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  iconUrl="./react_uber-eats/images/search.svg"
                  className="mobile-search-section__search--mobile"
                />
              )
              }

              <button
                type="button"
                onClick={
                  () => {
                    setToggledLocation(false);
                    setToggledSearch(false);
                  }
                }
                className="mobile-search-section__close-button"
              />

            </div>
          )
        }

      </div>

    </header>
  );
};

Header.propTypes = {
  address: PropTypes.string.isRequired,
  setAdress: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  locationsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string, title: PropTypes.string,
    })
  ),
  loadLocations: PropTypes.func.isRequired,
};

Header.defaultProps = {
  locationsList: [],
};
