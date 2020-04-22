import React from 'react';
import Header from './Header';
import UserList from './components/UserList';

const AddressBook = () => (
  <div className="address-book-app">
    <Header />

    <div className="container">
      <UserList />
    </div>
  </div>
);

export default AddressBook;
