import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import GlobalSpinner from './components/GlobalSpinner';

const UserList = lazy(() => import('./components/UserList'));
const Settings = lazy(() => import('./components/Settings'));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

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
