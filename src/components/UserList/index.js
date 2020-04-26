import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import Filters from '../Filters';
import useFilters from '../../hooks/users/useFilters';
import useUsers from '../../hooks/users/useUsers';
import { filterUsers } from '../../utils/user';
import SettingsLink from '../Settings/SettingsLink';

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
      <header>
        <h1>
          User list
        </h1>

        <div className="actions">
          <SettingsLink />
        </div>
      </header>

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

const mapStateToProps = (state) => ({
  locales: state.settings.locales,
});

export default connect(mapStateToProps)(UserList);
