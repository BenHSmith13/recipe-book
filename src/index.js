import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Reducers';

const store = createStore(
  rootReducer,
  {},
);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const Application = withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
