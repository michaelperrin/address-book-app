import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import GlobalSpinner from './components/GlobalSpinner';

const store = createStore(rootReducer);
const UserList = lazy(() => import('./components/UserList'));
const Settings = lazy(() => import('./components/Settings'));

const AddressBook = () => (
  <Router>
    <Provider store={store}>
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
    </Provider>
  </Router>
);

export default AddressBook;
