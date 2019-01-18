import React from 'react';

const Login = ({loginWithGithub, signOut}) => (
  <div>
    <p>Login</p>
    <button onClick={() => loginWithGithub()}>Github Login</button>
    <button onClick={() => signOut()}>signout</button>
  </div>
)

export default Login
