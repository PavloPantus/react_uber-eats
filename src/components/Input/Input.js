import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.scss';

export const Input = React.memo((props) => {
  const {
    iconUrl,
    value,
    onChange,
    type,
    placeholder,
    name,
    className,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const rootClass = classNames('control', {
    'control--focused': isFocused,
    [className]: !!className,
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputRef = useRef();

  const focus = () => inputRef.current.focus();

  return (
    <div
      className={rootClass}
      onClick={focus}
      role="presentation"
    >
      {!!iconUrl
      && (
        <img
          src={iconUrl}
          alt={placeholder}
          className="control__icon"
        />
      )}
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="control__input"
      />
    </div>
  );
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {

  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};
