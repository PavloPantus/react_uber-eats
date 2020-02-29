/* eslint-disable no-nested-ternary,max-len */
import React, { useEffect, useState } from 'react';
import './ModalWindow.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ModalWindow = (
  {
    closeModal,
    children,
  }
) => {
  useEffect(() => {
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [closeClass, setCloseClass] = useState(false);
  const animationDuration = 0.5;

  const closeHandle = () => {
    setCloseClass(true);
  };

  useEffect(() => {
    if (closeClass) {
      setTimeout(closeModal, animationDuration * 1000);
    }
  }, [closeClass]);

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
      {children(closeHandle)}

    </div>
  );
};

ModalWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
