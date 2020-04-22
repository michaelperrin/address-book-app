import React from 'react';
import useUsers from '../../hooks/useUsers';
import List from './List';
import Filters from './Filters';

const UserList = () => {
  const {
    hasLoaded,
    users,
    hasMore,
    loadMore,
  } = useUsers();

  return (
    <div className="user-list-page">
      <h1>
        User list
      </h1>

      <Filters />

      {hasLoaded && users.length === 0 && (
        <div>
          No results.
        </div>
      )}

      <List users={users} hasMore={hasMore} loadMore={loadMore} />
    </div>
  );
};

export default UserList;
