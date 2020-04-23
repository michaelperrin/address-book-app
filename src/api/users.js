import axios from 'axios';

const BASE_API_URL = 'https://randomuser.me/api/';

/**
 * Maps API data to standardized data
 *
 * @param {object} user
 * @returns {object} Filtered user data
 */
const mapUser = (user) => ({
  id: user.login.uuid,
  username: user.login.username,
  name: {
    first: user.name.first,
    last: user.name.last,
  },
  email: user.email,
  picture: user.picture.large,
});

/**
 * Transforms filters for the Randomuser API
 *
 * @param {object} filters Original filters
 * @returns {object}       Filters for the Randomuser API
 *
 */
const getFiltersForApi = (filters) => {
  const apiFilters = {};

  if (filters.locale) {
    apiFilters.nat = filters.locale.toLowerCase();
  }

  return apiFilters;
};

/**
 * Get users from the API
 *
 * @param {number} page    Page number
 * @param {number} perPage Number of items per page
 * @param {object} filters Search filters
 * @returns {object}       List of users
 */
const fetchUsers = async (page = 0, perPage = 50, filters = {}) => {
  try {
    const urlParams = {
      page,
      results: perPage,
      ...getFiltersForApi(filters),
    };

    const apiQueryString = new URLSearchParams(urlParams).toString();

    const users = axios
      .get(`${BASE_API_URL}?page=${page}&${apiQueryString}`)
      .then((response) => response.data)
      .then((data) => data.results)
      .then((rawUsers) => rawUsers.map(mapUser));

    return users;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return null;
};

export default fetchUsers;
