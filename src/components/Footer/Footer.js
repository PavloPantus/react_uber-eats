/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.scss';
import { Select } from '../Select/Select';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <a
              href="#"
              className="footer__logo"
            >
              <img
                src="./react_uber-eats/images/logo-white.png"
                alt="Uber Eats"
              />
            </a>
            <div
              className="footer__select-language"
            >
              <Select
                name="language"
                options={[
                  {
                    value: 'en', label: 'English',
                  },
                  {
                    value: 'ua', label: 'Ukrainian',
                  },
                ]}
                value="en"
                iconUrl="./react_uber-eats/images/world.png"
              />
            </div>
          </div>

          <div className="footer__mobile-container">
            <a
              href="#"
              className="footer__app-store"
            >
              <img
                src="./react_uber-eats/images/app-store-logo.png"
                alt="App store"
              />
            </a>
            <a
              href="#"
              className="footer__google-play"
            >
              <img
                src="./react_uber-eats/images/google-play-logo.png"
                alt="Google play"
              />
            </a>
          </div>

        </div>

        <div className="footer__links-container">
          <div className="footer__links">
            <a className="footer__link" href="#">About UberEats</a>
            <a className="footer__link" href="#">Read our blog</a>
            <a className="footer__link" href="#">Sign up to deliver</a>
            <a className="footer__link" href="#">Add your restaurant</a>
          </div>

          <div className="footer__links">
            <a className="footer__link" href="#">Get help</a>
            <a className="footer__link" href="#">Read FAQs</a>
            <a className="footer__link" href="#">View all cities</a>
          </div>
        </div>

      </div>

      <div className="footer__bottom-part">
        <p className="footer__copyright">© 2019 Uber Technologies Inc.</p>

        <div className="footer__info">
          <a className="footer__info-link" href="#">Privacy policy</a>
          <a className="footer__info-link" href="#">Terms of  use</a>
          <a className="footer__info-link" href="#">Pricing</a>
        </div>

        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <img
              src="./react_uber-eats/images/facebook-logo.png"
              alt="uber facebook"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              src="./react_uber-eats/images/twitter-logo.png"
              alt="uber twitter"
            />
          </a>
          <a href="#" className="footer__social-link">
            <img
              src="./react_uber-eats/images/instagram-logo.png"
              alt="uber instagram"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
