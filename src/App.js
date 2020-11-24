import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import Router from 'Router';
import Login from 'Components/View/Login';

function App({
  user,
  signOut,
  signInWithGoogle,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'UPDATE_USER',
      payload: { user, signOut },
    });
  }, [user, signOut, dispatch]);

  if (user) {
    return (
      <Router />
    );
  }

  return (
    <Login
      login={signInWithGoogle}
    />
  );
}

export default App;
