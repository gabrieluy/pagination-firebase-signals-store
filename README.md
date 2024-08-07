# Pagination Firebase SignalsStore

This is a sample project that proposes a solution for firebase element paging using ngrx signals store. 

It is developed using emulators to facilitate its use.

## Instructions for use

Run `npm install` for installing dependencies.

### Emulators
#### Prerequisites

In case you don't have the firebase cli you need to install it using `npm i -g firebase-tools`

Also, you need to enable webframeworks using the following command `firebase experiments:enable webframeworks`

#### Start emulators

Run `firebase emulators:start --only firestore --import=testdata --project pagination-firebase-signals-store` to start the emulators with the test data.

*You can also use `firebase emulators:start --only firestore` to start the emulators without the test data.*

You can check the emulators ui at `http://127.0.0.1:4000/firestore`. Also you can add, delete or update documents in this ui.

### Dev server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` to see the app.
