import { LOAD_NEXT_PAGE, RESET_USER_SEARCH, REQUEST_NEXT_PAGE } from '../constants/action-types';
import { isLastPage } from '../utils/user';
import { getUsers } from '../api/users';

/**
 * Action when next page of users is requested
 */
export const requestNextPage = () => ({
  type: REQUEST_NEXT_PAGE,
});

/**
 * Action to load the next page of users
 */
export const loadNextPage = (users, nextUsers) => ({
  type: LOAD_NEXT_PAGE,
  users,
  nextUsers,
});

/**
 * Reset user search action
 */
export const resetUserSearch = () => ({
  type: RESET_USER_SEARCH,
});

/**
 * Loads a new batch of users.
 *
 * @param {Array} locales List of locales for the user search
 */
export const loadMoreUsers = (locales) => (dispatch, getState) => {
  dispatch(requestNextPage());
  const usersState = getState().users;

  const fetchNewUsers = async () => {
    let usersList;

    if (usersState.currentPage === 1) {
      usersList = await getUsers(usersState.currentPage, locales);
    } else {
      usersList = await usersState.nextUsers;
    }

    let nextUsers = null;

    // Only load next users if we are not on the last page
    if (!isLastPage(usersState.currentPage)) {
      nextUsers = getUsers(usersState.currentPage + 1, locales);
    }

    dispatch(loadNextPage(usersList, nextUsers));
  };

  fetchNewUsers();
};
