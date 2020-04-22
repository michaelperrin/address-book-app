import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as SearchIcon } from './images/search-icon.svg';

const Search = () => {
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
      />
    </div>
  );
};

export default Search;
