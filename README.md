# Simple address book app

![Screenshot of the address book app](https://misc.s3.fr-par.scw.cloud/userlist.png)

This address book app uses the following main libraries:

* React
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Redux](https://redux.js.org/) with [Redux Thunk](https://github.com/reduxjs/redux-thunk) for state management.
* [Bootstrap](https://getbootstrap.com/) (only small parts of it, only necessary CSS parts are imported)
* [Axios](https://github.com/axios/axios) for HTTP requests.

## Implemented features

* User list (users are retrieved from the https://randomuser.me/ API).
* User details when clicking on a user.
* User search.
* Settings page.
* Filters.

A few items that could be implemented or improved:

* Better settings page (the UI of the selector is not very friendly).
* More unit tests.
* Customized Webpack configuration.

## Install project

Clone project and run:

    yarn install

## Start project (development)

Run:

    yarn start

## Build project

Run:

    yarn build

## Run linter

Check JS coding standards:

    yarn lint:scripts

Check Sass coding standards:

    yarn lint:styles

To check both:

    yarn lint

## Run tests

    yarn test
