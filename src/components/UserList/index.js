import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import Filters from '../Filters';
import useFilters from '../../hooks/users/useFilters';
import { filterUsers } from '../../utils/user';
import SettingsLink from '../Settings/SettingsLink';
import { loadMoreUsers, resetUserSearch } from '../../actions/users';

const UserList = () => {
  const { handleFiltersChange, filters } = useFilters();
  const locales = useSelector((state) => state.settings.locales);
  const userState = useSelector((state) => state.users);
  const { hasMore, users, hasLoaded } = userState;
  const dispatch = useDispatch();
  const loadMore = () => dispatch(loadMoreUsers(locales));
  const resetSearch = () => dispatch(resetUserSearch());

  useEffect(() => {
    resetSearch();
  }, [locales]);

  const filteredUsers = filterUsers(users, filters);

  return (
    <div className="user-list-page">
      <header>
        <h1>
          User list
        </h1>

        <div className="actions">
          <SettingsLink />
        </div>
      </header>

      <Filters handleFiltersChange={handleFiltersChange} filters={filters} />

      {hasLoaded && filteredUsers.length === 0 && (
        <div>
          No results.
        </div>
      )}

      <List users={filteredUsers} hasMore={hasMore} loadMore={loadMore} />
    </div>
  );
};

export default UserList;
