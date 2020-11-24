import 'firebaseui/dist/firebaseui.css'
import "firebase/auth";
import "firebase/firestore";

import Router from 'Router';
import Login from 'Components/View/Login';

function App({
  user,
  signOut,
  signInWithGoogle,
}) {
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
