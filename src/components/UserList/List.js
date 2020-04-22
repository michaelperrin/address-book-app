import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import UserCard from '../UserCard';
import { USER_PROP_TYPES } from '../../constants/user';

const List = ({
  users, loadMore, hasMore,
}) => (
  <>
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div className="loader" key={0}>Loading ...</div>}
    >
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            firstname={user.name.first}
            lastname={user.name.last}
            username={user.username}
            email={user.email}
            picture={user.picture}
            key={user.id}
          />
        ))}
      </div>
    </InfiniteScroll>
  </>
);

List.propTypes = {
  users: PropTypes.arrayOf(USER_PROP_TYPES).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default List;
