import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import TimePicker from 'rc-time-picker';
import { Input } from '../Input/Input';
import 'rc-time-picker/assets/index.css';

export const Header = (
  {
    address,
    setAdress,
    time,
    setTime,
    search,
    setSearch,
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

          <img
            className="header__logo"
            src="./images/logo.svg"
            alt="Uber Eats"
          />

          <Input
            name="address"
            value={address}
            onChange={handleAdressChange}
            placeholder="Address"
            iconUrl="./images/place.svg"
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
            iconUrl="./images/search.svg"
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
              <img src="./images/location-icon.png" alt="location-icon" />
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
              <img src="./images/search-icon.png" alt="location-icon" />
            </button>

          </div>

          <a href="/sign-in" className="header__sign-in">
            Sign In
          </a>

        </div>

        {
          (toggledSearch || toggledLocation)
          && (
            <div className="header__mobile-search-section">
              {
                toggledLocation
              && (
                <div className="header__mobile-location-container">

                  <div className="header__time--mobile">
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
                    iconUrl="./images/place.svg"
                    className="header__address--mobile"
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
                  iconUrl="./images/search.svg"
                  className="header__search--mobile"
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
                className="header__mobile-search-section__close-button"
              >
                <img src="./images/mobile-menu-close.png" alt="" />
              </button>
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
