import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../UserCard';
import { USER_PROP_TYPES } from '../../constants/user';
import Spinner from '../Spinner';
import UserDetailsModal from '../UserDetailsModal';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const List = ({
  users, loadMore, hasMore,
}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const userListRef = useRef(null);

  const closeModal = () => {
    setCurrentUser(null);
  };

  // useInfiniteScroll('.user-card:last-child', loadMore, hasMore);
  useInfiniteScroll(userListRef, loadMore, hasMore);

  return (
    <>
      <div className="user-list" ref={userListRef}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            picture={user.picture}
            onClick={() => { setCurrentUser(user); }}
          />
        ))}
      </div>

      {currentUser && (
        <UserDetailsModal user={currentUser} handleCloseModal={closeModal} />
      )}
    </>
  );
};

List.propTypes = {
  users: PropTypes.arrayOf(USER_PROP_TYPES).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default List;
