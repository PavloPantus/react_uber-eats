import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

export const Select = (props) => {
  const {
    name,
    value,
    onSelect,
    options,
    iconUrl,
  } = props;

  const selectRef = useRef();

  const handleSelect = () => {
    selectRef.current.focus();
  };

  return (
    <div
      onKeyDown={handleSelect}
      tabIndex="0"
      role="searchbox"
      onClick={handleSelect}
      className="select"
    >
      <select
        ref={selectRef}
        name={name}
        defaultValue={value}
        onChange={onSelect}
        className="select__input"
      >
        {options.map(({ value: optionValue, label }) => (
          <option
            key={optionValue}
            className="select__option"
            value={optionValue}
          >
            {label}
          </option>
        ))}
      </select>

      {!!iconUrl && (
        <img className="select__icon" src={iconUrl} alt="select icon" />
      )}

      <img
        className="select__arrow"
        src="./react_uber-eats/images/arrow-back.png"
        alt="arrow down"
      />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconUrl: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  iconUrl: '',
  onSelect: () => {},
};
