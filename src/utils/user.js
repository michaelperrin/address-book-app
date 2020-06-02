import { BATCH_SIZE, MAX_ITEMS } from '../constants/user';

export const isLastPage = (page) => page * BATCH_SIZE >= MAX_ITEMS;

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
