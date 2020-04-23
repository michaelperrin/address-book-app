import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SettingsContext from '../../context/SettingsContext';
import { ReactComponent as SearchIcon } from './images/search-icon.svg';

const Search = ({ value, handleChange }) => {
  const [focus, setFocus] = useState(false);
  const settingsContext = useContext(SettingsContext);

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

      {settingsContext.settings.locales && (
        <ul className="locales">
          {settingsContext.settings.locales.map((locale) => (
            <li>{locale.label}</li>
          ))}
        </ul>
      )}
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
