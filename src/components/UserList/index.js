import React from 'react';
import useUsers from '../../hooks/useUsers';
import UserCard from '../UserCard';

const UserList = () => {
  const { isLoading, users } = useUsers();

  return (
    <div>
      <h1>
        User list
      </h1>

      <div className="user-list">
        {!isLoading && users.length && (
          users.map((user) => (
            <UserCard
              firstname={user.name.first}
              lastname={user.name.last}
              username={user.username}
              email={user.email}
              picture={user.picture}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
