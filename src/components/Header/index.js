import React from 'react'
const Header = ({history}) => (
  <div>
    <button onClick={() => history.push("/")}>ToDo</button>
    <button onClick={() => history.push("/login")}>Login</button>
    <button onClick={() => history.push("/signup")}>SignUp</button>
  </div>
)

export default Header
