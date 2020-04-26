import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SettingsStore from './context/SettingsStore';
import GlobalSpinner from './components/GlobalSpinner';

const UserList = lazy(() => import('./components/UserList'));
const Settings = lazy(() => import('./components/Settings'));

const AddressBook = () => (
  <Router>
    <SettingsStore>
      <Suspense fallback={<GlobalSpinner />}>
        <div className="address-book-app">
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
      </Suspense>
    </SettingsStore>
  </Router>
);

export default AddressBook;
