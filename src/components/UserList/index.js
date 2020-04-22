import React from 'react';
import useUsers from '../../hooks/useUsers';
import List from './List';

const UserList = () => {
  const {
    hasLoaded,
    users,
    hasMore,
    loadMore,
  } = useUsers();

  return (
    <div>
      <h1>
        User list
      </h1>

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
