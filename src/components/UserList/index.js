import React from 'react';
import useUsers from '../../hooks/useUsers';
import UserCard from '../UserCard';

const UserList = () => {
  const { isLoading, users } = useUsers();

  return (
    <div>
      Users

      <div className="card-group">
        {!isLoading && users.length && (
          users.map((user) => (
            <UserCard
              firstName={user.name.first}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
