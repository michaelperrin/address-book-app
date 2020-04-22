import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({
  firstname,
  lastname,
  username,
  email,
  picture,
}) => (
  <div className="user-card">
    <div className="picture">
      <img src={picture} alt="" />
    </div>

    <div className="profile">
      <h3>
        {firstname}
        {' '}
        {lastname}
      </h3>

      <div className="username">{username}</div>

      <div className="email">
        {email}
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default UserCard;
