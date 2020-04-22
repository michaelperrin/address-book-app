import React from 'react';
import { USER_PROP_TYPES } from '../../constants/user';

const UserCard = ({
  name,
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
};

export default UserCard;
