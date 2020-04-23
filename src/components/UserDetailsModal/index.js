
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const UserDetailsModal = ({ user, handleCloseModal }) => (
  <div className="user-details-modal">

    <Modal
      isOpen
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
    >

      <div>
        {user.name.first}

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>

    </Modal>
  </div>
);

UserDetailsModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default UserDetailsModal;
