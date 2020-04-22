import { useState } from 'react';

const useFilters = () => {
  const [filters, setFilters] = useState({
    search: '',
  });

  const handleSearchChange = (e) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  return {
    filters,
    handleFiltersChange: {
      search: handleSearchChange,
    },
  };
};

export default useFilters;
