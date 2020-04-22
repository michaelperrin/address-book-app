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
 * Get users from the API
 *
 * @param {number} page    Page number
 * @param {number} perPage Number of items per page
 * @returns {object}       List of suers
 */
const fetchUsers = async (page = 0, perPage = 50) => {
  try {
    const users = axios
      .get(`${BASE_API_URL}?page=${page}&results=${perPage}`)
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
