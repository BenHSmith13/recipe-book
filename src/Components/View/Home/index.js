import React from 'react';
import firebase from 'firebase';

export default function Home() {
  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('sign out');
    }, error => console.error(error));
  }

  return (
    <div>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}
