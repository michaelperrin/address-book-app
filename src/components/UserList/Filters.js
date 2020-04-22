import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Form/Search';

const Filters = ({ filters, handleFiltersChange }) => (
  <div className="filters">
    <Search handleChange={handleFiltersChange.search} value={filters.search} />
  </div>
);

Filters.propTypes = {
  handleFiltersChange: PropTypes.shape({
    search: PropTypes.func.isRequired,
  }).isRequired,
  filters: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default Filters;
