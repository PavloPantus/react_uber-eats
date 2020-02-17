import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import TimePicker from 'rc-time-picker';
import { Link } from 'react-router-dom';
import { Input } from '../Input/Input';
import 'rc-time-picker/assets/index.css';

export const Header = (
  {
    address, setAdress, time,
    setTime, search, setSearch,
  }
) => {
  const [toggledLocation, setToggledLocation] = useState(false);
  const [toggledSearch, setToggledSearch] = useState(false);

  const handleAdressChange = useCallback(
    ({ target }) => {
      setAdress(target.value);
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

          <Link to="/">
            <img
              className="header__logo"
              src="./react_uber-eats/images/logo.svg"
              alt="Uber Eats"
            />
          </Link>

          <Input
            name="address"
            value={address}
            onChange={handleAdressChange}
            placeholder="Address"
            iconUrl="./react_uber-eats/images/place.svg"
            className="header__address"
          />

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
};
