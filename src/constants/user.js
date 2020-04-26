import PropTypes from 'prop-types';

export const BATCH_SIZE = 50;
export const MAX_ITEMS = 200;

export const USER_PROP_TYPES = PropTypes.shape({
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }),
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  phone: PropTypes.string,
  cell: PropTypes.string,
});
