import { useState } from 'react';
import { useSelector } from 'react-redux';
import fetchUsers from '../../api/users';

const BATCH_SIZE = 50;
const MAX_ITEMS = 1000;

const useUsers = () => {
  const [usersState, setUsersState] = useState({
    users: [],
    nextUsers: [],
    currentPage: 1,
    hasLoaded: false,
  });

  const locales = useSelector((state) => state.settings.locales);

  const getUsers = async (page) => {
    const filters = {};

    if (locales) {
      filters.locales = locales;
    }

    const newNextUsers = fetchUsers(page, BATCH_SIZE, filters);

    return newNextUsers;
  };

  const isLastPage = (page) => page * BATCH_SIZE >= MAX_ITEMS;

  /**
   * Load more users
   */
  const loadMore = () => {
    const fetchData = async () => {
      let nextUsersList;

      if (usersState.currentPage === 1) {
        nextUsersList = await getUsers(usersState.currentPage);
      } else {
        nextUsersList = await usersState.nextUsers;
      }

      const newState = {
        ...usersState,
        users: [...usersState.users, ...nextUsersList],
        currentPage: usersState.currentPage + 1,
        hasLoaded: true,
      };

      // Only load next users if we are not on the last page
      if (!isLastPage(usersState.currentPage)) {
        newState.nextUsers = getUsers(usersState.currentPage + 1);
      }

      setUsersState(newState);
    };

    fetchData();
  };

  return {
    hasLoaded: usersState.hasLoaded,
    users: usersState.users,
    loadMore,
    hasMore: !isLastPage(usersState.currentPage),
  };
};

export default useUsers;
