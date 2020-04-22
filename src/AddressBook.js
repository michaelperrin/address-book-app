import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import UserList from './components/UserList';
import Settings from './components/Settings';

const AddressBook = () => (
  <Router>
    <div className="address-book-app">
      <Header />

      <div className="container">
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default AddressBook;
