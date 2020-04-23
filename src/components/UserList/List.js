import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import UserCard from '../UserCard';
import { USER_PROP_TYPES } from '../../constants/user';
import Spinner from '../Spinner';
import UserDetailsModal from '../UserDetailsModal';

const List = ({
  users, loadMore, hasMore,
}) => {
  const [currentUser, setCurrentUser] = useState(null);

  const closeModal = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={(
          <div className="spinner-container" key="spinner">
            <Spinner />
          </div>
        )}
      >
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} onClick={() => { setCurrentUser(user); }}>
              <UserCard
                name={user.name}
                username={user.username}
                email={user.email}
                picture={user.picture}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>

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
