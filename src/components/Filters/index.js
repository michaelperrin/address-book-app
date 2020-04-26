import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './Search';

const Filters = ({ filters, handleFiltersChange }) => {
  const locales = useSelector((state) => state.settings.locales);

  return (
    <div className="filters">
      <Search
        handleChange={handleFiltersChange.search}
        value={filters.search}
        locales={locales}
      />
    </div>
  );
};

Filters.propTypes = {
  handleFiltersChange: PropTypes.shape({
    search: PropTypes.func.isRequired,
  }).isRequired,
  filters: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default Filters;
