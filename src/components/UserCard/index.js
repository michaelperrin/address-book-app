import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ firstName }) => (
  <div className="card">
    {firstName}
  </div>
);

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserCard;
