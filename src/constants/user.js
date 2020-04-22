import PropTypes from 'prop-types';

export const USER_PROP_TYPES = PropTypes.shape({
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }),
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
});
