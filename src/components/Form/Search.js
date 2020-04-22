import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ReactComponent as SearchIcon } from './images/search-icon.svg';

const Search = ({ value, handleChange }) => {
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
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: '',
};

export default Search;
