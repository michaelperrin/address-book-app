import React, { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import classNames from 'classnames/bind';
import { ReactComponent as SearchIcon } from './images/search-icon.svg';

const Search = ({ value, handleChange, locales }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={classNames('search-group', { active: focus })}>
      <div className="search-icon">
        <SearchIcon />
      </div>
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        onFocus={() => { setFocus(true); }}
        onBlur={() => { setFocus(false); }}
        value={value}
        onChange={handleChange}
      />

      {locales && (
        <ul className="locales">
          {locales.map((locale) => (
            <li key={`locale-${locale}`}>{locale.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  locales: arrayOf(PropTypes.string),
};

Search.defaultProps = {
  value: '',
  locales: [],
};

export default Search;
