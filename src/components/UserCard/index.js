import React from 'react';
import PropTypes from 'prop-types';
import { USER_PROP_TYPES } from '../../constants/user';

const UserCard = ({
  name,
  username,
  email,
  picture,
  onClick,
}) => (
  <div className="user-card" onClick={onClick} onKeyPress={onClick} role="button" tabIndex={0}>
    <div className="picture">
      <img src={picture} alt="" />
    </div>

    <div className="profile">
      <h3>
        {name.first}
        {' '}
        {name.last}
      </h3>

      <div className="username">{username}</div>

      <div className="email">
        {email}
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  ...USER_PROP_TYPES.isRequired,
  onClick: PropTypes.func,
};

UserCard.defaultProps = {
  onClick: null,
};

export default UserCard;
