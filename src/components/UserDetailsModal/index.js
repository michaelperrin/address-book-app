
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { USER_PROP_TYPES } from '../../constants/user';

const UserDetailsModal = ({ user, handleCloseModal }) => (
  <Modal
    isOpen
    contentLabel="User details"
    className="user-details-modal modal"
    overlayClassName="overlay"
    onRequestClose={handleCloseModal}
    ariaHideApp={false}
  >
    <div className="modal-dialog">
      <button
        type="button"
        className="close-button"
        onClick={handleCloseModal}
      >
        &times;
      </button>

      <div className="user-details">
        <header>
          <div className="picture">
            <img src={user.picture} alt="" />
          </div>

          <div className="main-info">
            <h3>
              {user.name.first}
              {' '}
              {user.name.last}
            </h3>

            <div className="username">{user.username}</div>
          </div>
        </header>

        <div className="info">
          <div className="label">
            <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true" alt="Address" title="Address" /></span>
          </div>
          <div className="value">{user.email}</div>
        </div>

        <div className="info">
          <div className="label">
            <span className="icon"><i className="fa fa-map-marker" aria-hidden="true" alt="Address" title="Address" /></span>
          </div>
          <div className="value">
            <address>
              {user.location.street}
              <br />
              {user.location.city}
              {' '}
              {user.location.state}
            </address>
          </div>
        </div>

        {user.phone && (
          <div className="info">
            <div className="label">
              <span className="icon"><i className="fa fa-phone" aria-hidden="true" alt="Phone" title="Phone" /></span>
            </div>
            <div className="value">{user.phone}</div>
          </div>
        )}

        {user.cell && (
          <div className="info">
            <div className="label">
              <span className="icon"><i className="fa fa-mobile" aria-hidden="true" alt="Mobile phone" title="Mobile phone" /></span>
            </div>
            <div className="value">{user.cell}</div>
          </div>
        )}
      </div>
    </div>
  </Modal>
);

UserDetailsModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  user: USER_PROP_TYPES.isRequired,
};

export default UserDetailsModal;
