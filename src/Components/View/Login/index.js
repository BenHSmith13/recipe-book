import React from 'react'

export default function Login({ login }) {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please sign in.</p>
      <button onClick={login}>
        Sign in with Google
      </button>
    </div>
  )
}
