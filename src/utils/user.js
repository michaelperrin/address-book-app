import { BATCH_SIZE, MAX_ITEMS } from '../constants/user';
import fetchUsers from '../api/users';

export const isLastPage = (page) => page * BATCH_SIZE >= MAX_ITEMS;

/**
 * Fetches users for given page and locales.
 *
 * @param {number} page   Page number
 * @param {Array} locales List of locales for the user search
 */
export const getUsers = async (page, locales) => {
  const filters = {};

  if (locales) {
    filters.locales = locales;
  }

  return fetchUsers(page, BATCH_SIZE, filters);
};

/**
 * Filters a list of users
 *
 * @param {array} users    User list
 * @param {object} filters List of filters
 * @returns {object}       Filters list of users
 */
export const filterUsers = (users, filters) => users.filter((user) => {
  if (filters.search) {
    const fullName = `${user.name.first} ${user.name.last}`;

    return fullName.toLowerCase().includes(filters.search.toLowerCase());
  }

  return true;
});
