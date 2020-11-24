import React from 'react';
// import photos from 'googlephotos';
import { useLogout } from 'Hooks/useUser';

export default function Home() {
  const logout = useLogout();
  console.log(logout);

  return (
    <div>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}
