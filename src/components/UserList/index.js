import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/users/useUsers';
import List from './List';
import Filters from './Filters';
import useFilters from '../../hooks/users/useFilters';
import { filterUsers } from '../../utils/user';

const UserList = () => {
  const {
    handleFiltersChange,
    filters,
  } = useFilters();

  const {
    hasLoaded,
    users,
    hasMore,
    loadMore,
  } = useUsers();

  const filteredUsers = filterUsers(users, filters);

  return (
    <div className="user-list-page">
      <h1>
        User list
      </h1>

      <Link to="/settings">Settings</Link>

      <Filters handleFiltersChange={handleFiltersChange} filters={filters} />

      {hasLoaded && users.length === 0 && (
        <div>
          No results.
        </div>
      )}

      <List users={filteredUsers} hasMore={hasMore} loadMore={loadMore} />
    </div>
  );
};

export default UserList;
