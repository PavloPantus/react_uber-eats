/* eslint-disable no-nested-ternary,max-len */
import React, { useEffect, useState } from 'react';
import './ModalWindow.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loader from '../Loader/Loader';
import Error from '../Error/index';

export const ModalWindow = (
  {
    modalOrderData,
    closeModal,
    uuid,
    isLoading,
    error,
    loadModalOrderData,
  }
) => {
  useEffect(() => {
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    loadModalOrderData(uuid);

    return () => {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [closeClass, setCloseClass] = useState(false);
  const animationDuration = 0.3;

  const closeHandle = () => {
    setCloseClass(true);
    closeModal(animationDuration * 1000);
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={
        classNames(
          [
            'modal-container',
            { 'modal-container_close': closeClass },
            { 'modal-container_open': !closeClass },
          ]
        )
      }
      style={{
        animationDuration: `${animationDuration}s`,
      }}
      onClick={closeHandle}
    >

      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className="modal-container__window"
        onClick={
          (event) => {
            event.stopPropagation();
          }
        }

      >
        {
          isLoading
            ? (<Loader />)
            : (
              error
                ? (<Error message={error} />)
                : modalOrderData
                  ? (
                    <div className="order">

                      <button
                        type="button"
                        className="order__close-button"
                        onClick={
                          closeHandle
                        }
                      />

                      <img
                        className="order__image"
                        loading="lazy"
                        src={modalOrderData.imageUrl}
                        alt={modalOrderData.title}
                      />

                      <p className="order__title">
                        {modalOrderData.title}
                      </p>

                      <p className="order__description">
                        {modalOrderData.itemDescription}
                      </p>

                      {
                        modalOrderData.customizationsList
                          .map(
                            item => (
                              <div
                                key={item.title}
                              >
                                <div className="order__customization-type">
                                  <p
                                    className="order__customization-name"
                                  >
                                    {item.title}
                                  </p>
                                  <p
                                    className="order__customization-description"
                                  >
                                    Choose up to
                                    {' '}
                                    {item.maxPermitted}
                                  </p>
                                </div>
                                {
                                  item.options
                                    .map(option => (

                                      <div
                                        key={option.title}
                                        className="order__customization-input-container"
                                      >
                                        {
                                          item.maxPermitted > 1
                                            ? (
                                              <label
                                                className="order__customization-label-checkbox"
                                              >
                                                <input
                                                  className="hidden-input"
                                                  name={item.title}
                                                  type="checkbox"
                                                />
                                              </label>
                                            )
                                            : (
                                              <label
                                                className="order__customization-label-radio"
                                              >
                                                <input
                                                  className="hidden-input"
                                                  name={item.title}
                                                  type="radio"
                                                />
                                              </label>
                                            )
                                        }

                                        <p className="order__cusromization-value">
                                          {option.title}
                                        </p>
                                        <p
                                          className="order__cusromization-price"
                                        >
                                          {option.price}
                                        </p>
                                      </div>

                                    ))
                                }
                              </div>

                            )
                          )
                      }

                      <div className="order__customization-type">
                        Special instructions
                      </div>

                      <textarea
                        className="order__instructions-message"
                        placeholder="Leave a note to kitchen"
                        name=""
                        id=""
                        cols="30"
                        rows="1"
                      />

                      <div className="order__confirmation-block">

                        <div className="order__controls-container">
                          <button
                            className="order__item-decrease"
                            type="button"
                          />

                          <span
                            className="order__items-quantity"
                          >
                          1
                          </span>

                          <button
                            type="button"
                            className="order__item-increase"
                          />
                        </div>

                        <button
                          className="order__add-to-basket"
                          type="button"
                        >
                          <span
                            className="order__quantity-add-to-basket"
                          >
                            Add 1 to order
                          </span>

                          <span
                            className="order__sum-of-order"
                          >
                            {modalOrderData.price}
                          </span>

                        </button>

                      </div>

                    </div>
                  )
                  : (<Loader />)
            )

        }

      </div>

    </div>
  );
};

ModalWindow.propTypes = {
  modalOrderData: PropTypes.shape({
    imageUrl: PropTypes.oneOfType([
      PropTypes.oneOf([null]), PropTypes.string,
    ]),
    title: PropTypes.string.isRequired,
    itemDescription: PropTypes.string.isRequired,
    customizationsList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
          }).isRequired,
        ).isRequired,
      }).isRequired,
    ).isRequired,
    price: PropTypes.number.isRequired,
  }),

  closeModal: PropTypes.func.isRequired,
  uuid: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loadModalOrderData: PropTypes.func.isRequired,
};

ModalWindow.defaultProps = {
  modalOrderData: null,
};
